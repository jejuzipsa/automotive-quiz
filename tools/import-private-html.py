#!/usr/bin/env python3
"""Convert locally saved, lawfully held exam HTML to the private archive schema.
No web requests, login, answer guessing or automatic publication.
"""
import argparse
import hashlib
import json
import re
import shutil
import sys
from pathlib import Path
from urllib.parse import unquote, urlsplit
from collections import Counter
from bs4 import BeautifulSoup

ROOT = Path(__file__).resolve().parents[1]
MANIFEST = json.loads((ROOT / "data/past/archive-manifest.json").read_text(encoding="utf-8"))
SUBJECTS = {s["code"] for s in MANIFEST["subjects"]}

def fail(msg):
    raise ValueError(msg)

def read_html(file):
    return BeautifulSoup(file.read_bytes(), "html.parser")

def exactly_one(node, selector, label):
    found = node.select(selector)
    if len(found) != 1:
        fail(f"{label}: expected exactly one {selector!r}; got {len(found)}")
    return found[0]

def value(node, attr=None):
    return str(node.get(attr, "") if attr else node.get_text(" ", strip=True)).strip()

def parse_number(s, label, lo, hi):
    if not re.fullmatch(r"[0-9]+", s):
        fail(f"{label}: not an explicit number")
    n = int(s)
    if not lo <= n <= hi:
        fail(f"{label}: outside {lo}..{hi}")
    return n

def inspect(file):
    soup = read_html(file)
    counts = Counter()
    attrs = Counter()
    # Only structural metadata, not question or answer text.
    for e in soup.find_all(True):
        cls = e.get("class", [])
        if cls:
            counts[e.name + "." + ".".join(cls)] += 1
        for key in e.attrs:
            if key.startswith("data-") or key in ("value", "name", "checked", "id"):
                attrs[(e.name, key)] += 1
    return {"file": file.name, "repeated_elements": [{"selector": k, "count": n} for k,n in counts.most_common(100)], "attribute_names": [{"tag": k[0], "attribute": k[1], "count": n} for k,n in attrs.most_common(100)]}

def archive_assets(node, role, html, out, date, number):
    assets, missing = [], []
    for i, img in enumerate(node.select("img"), 1):
        src = img.get("src", "")
        # Retain the original HTML separately. Only copy actual local image bytes.
        u = urlsplit(src)
        if not src or u.scheme or u.netloc or u.path.startswith("/"):
            missing.append({"role":role,"image_index":i,"reason":"not_a_local_saved_image"})
            continue
        path = (html.parent / unquote(u.path)).resolve()
        if not path.is_relative_to(html.parent.resolve()) or not path.is_file():
            missing.append({"role":role,"image_index":i,"reason":"missing_local_image"})
            continue
        ext = path.suffix.lower()
        if ext not in {".png",".jpg",".jpeg",".webp",".gif",".svg",".bmp",".avif"}:
            missing.append({"role":role,"image_index":i,"reason":"unsupported_image_extension"})
            continue
        rel = Path("assets") / date / f"q{number:02d}-{role}-{i}{ext}"
        (out / rel).parent.mkdir(parents=True, exist_ok=True)
        shutil.copyfile(path, out / rel)
        assets.append({"path":rel.as_posix(),"role":role,"sha256":hashlib.sha256(path.read_bytes()).hexdigest()})
    return assets, missing

def convert(html, cfg, date, out):
    r = next((r for r in MANIFEST["rounds"] if r["exam_date"] == date), None)
    if r is None: fail("date not in archive manifest")
    soup = read_html(html)
    rows = soup.select(cfg["question_selector"])
    if len(rows) != r["expected_count"]:
        fail(f"question count: {len(rows)} != {r['expected_count']}; check selectors / page completeness")
    results = []
    seen = set()
    for block in rows:
        number_node = exactly_one(block, cfg["number_selector"], "question number") if cfg.get("number_selector") else block
        n = parse_number(value(number_node, cfg.get("number_attr")).rstrip(".").strip(), "question number", 1, 80)
        if n in seen: fail(f"duplicate question {n}")
        seen.add(n)
        stem = exactly_one(block,cfg["stem_selector"],f"q{n} stem")
        choices = block.select(cfg["choice_selector"])
        if len(choices) != 4: fail(f"q{n}: {len(choices)} choices, expected 4")
        # Require each displayed choice's original number; never assume current display order.
        by_number = {}
        for choice in choices:
            node = exactly_one(choice,cfg["choice_number_selector"],f"q{n} choice number") if cfg.get("choice_number_selector") else choice
            k = parse_number(value(node,cfg.get("choice_number_attr")).rstrip(".").strip(), f"q{n} choice number",1,4)
            if k in by_number: fail(f"q{n}: duplicate choice {k}")
            by_number[k] = choice
        choices = [by_number[k] for k in range(1,5)]
        choice_content = [exactly_one(c,cfg["choice_text_selector"],f"q{n} choice text") if cfg.get("choice_text_selector") else c for c in choices]
        # Require explicit evidence of the site's answer field. Do NOT infer from explanations.
        answer = None
        answer_evidence = None
        if cfg.get("answer_attr"):
            nodes = block.select(cfg["answer_selector"]) if cfg.get("answer_selector") else [block]
            if len(nodes) == 1:
                raw = value(nodes[0],cfg["answer_attr"])
                if re.fullmatch(r"[1-4]",raw):
                    answer = int(raw)
                    answer_evidence = {"method":"explicit_attribute","attribute":cfg["answer_attr"]}
        elif cfg.get("correct_choice_selector"):
            marked = block.select(cfg["correct_choice_selector"])
            # Selector must identify the choice container itself, not a clicked response.
            if len(marked) == 1:
                for k,c in by_number.items():
                    if marked[0] is c:
                        answer = k
                        answer_evidence = {"method":"explicit_correct_choice_marker"}
        exp = block.select(cfg["explanation_selector"]) if cfg.get("explanation_selector") else []
        subject_node = exactly_one(block,cfg["subject_selector"],f"q{n} subject") if cfg.get("subject_selector") else None
        if subject_node is None:
            # Explicit original subject blocks are permitted only after the user confirms the old paper layout.
            if not cfg.get("confirmed_20_question_subject_order"):
                fail("subject selector or confirmed original 20-question blocks required")
            subject = MANIFEST["subjects"][(n-1)//20]["code"]
        else:
            subject = cfg.get("subject_map",{}).get(value(subject_node,cfg.get("subject_attr")))
        if subject not in SUBJECTS: fail(f"q{n}: original subject unresolved")
        assets, missing = [], []
        for role, el in [("question",stem), *[(f"choice{k}",c) for k,c in enumerate(choice_content,1)], *[("explanation",e) for e in exp]]:
            a,b = archive_assets(el,role,html,out,date,n)
            # Multiple explanation blocks can have images with matching names; preserve only after separate review.
            if role=="explanation" and len(exp)>1 and a:
                fail(f"q{n}: multiple explanation image blocks need a dedicated mapping")
            assets.extend(a);missing.extend(b)
        stem_text = value(stem)
        if not stem_text and not assets: fail(f"q{n}: empty stem")
        explanation = "\n\n".join(value(e) for e in exp).strip() or None
        results.append({"id":r["id"]+f"-q{n:02d}","question_number":n,"original_subject":subject,
            "question":stem_text or "[그림 문제]","choices":[value(c) for c in choice_content],
            "answer":answer,"answer_evidence":answer_evidence,"explanation":explanation,
            "explanation_origin":"source" if explanation else "missing","explanation_status":"unreviewed",
            "assets":assets,"unresolved_assets":missing,"source_page":None,"transcription_status":"pending",
            "technical_review":"unreviewed","current_subject":None,"current_scope_status":"unreviewed"})
    results.sort(key=lambda q:q["question_number"])
    if seen != set(range(1,81)): fail("original numbering incomplete")
    out.mkdir(parents=True,exist_ok=True)
    raw = html.read_bytes()
    source_dir = out/"sources";source_dir.mkdir(exist_ok=True)
    source_name = date+".html";(source_dir/source_name).write_bytes(raw)
    obj={"exam_date":date,"round_numbers":r["round_numbers"],"source":{"filename":"sources/"+source_name,"sha256":hashlib.sha256(raw).hexdigest(),"rights_status":"unverified","url":r["source_urls"]["cbt"],"format":"local_saved_html"},"questions":results}
    target=out/r["private_json_filename"]
    target.write_text(json.dumps(obj,ensure_ascii=False,indent=2)+"\n",encoding="utf-8")
    return {"date":date,"questions":len(results),"explicit_answers":sum(q["answer"] is not None for q in results),"explanations":sum(q["explanation"] is not None for q in results),"missing_assets":sum(len(q["unresolved_assets"]) for q in results),"status":"pending_source_comparison","file":str(target)}

def main():
    p=argparse.ArgumentParser(description=__doc__)
    sub=p.add_subparsers(dest="action",required=True)
    i=sub.add_parser("inspect");i.add_argument("html",type=Path)
    c=sub.add_parser("convert");c.add_argument("html",type=Path);c.add_argument("--date",required=True);c.add_argument("--config",type=Path,required=True);c.add_argument("--out",type=Path,required=True)
    a=p.parse_args()
    if a.action=="inspect":
        result=inspect(a.html)
    else:
        if a.out.resolve().is_relative_to(ROOT.resolve()):fail("private output must be outside the repository")
        if a.out.exists() and (a.out / f"automotive-{a.date}.json").exists():fail("output already exists; use a new private folder to avoid overwriting")
        cfg=json.loads(a.config.read_text(encoding="utf-8"))
        result=convert(a.html.resolve(),cfg,a.date,a.out.resolve())
    print(json.dumps(result,ensure_ascii=False,indent=2))
if __name__=="__main__":
    try:main()
    except (ValueError,KeyError,OSError) as e:
        print("ERROR:",e,file=sys.stderr);sys.exit(1)
