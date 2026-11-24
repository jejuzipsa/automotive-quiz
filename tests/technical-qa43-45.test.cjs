"use strict";
const assert=require("node:assert/strict"),fs=require("node:fs"),path=require("node:path");
const root=process.env.AUTO_QUIZ_REPO||path.resolve(__dirname,".."),read=p=>JSON.parse(fs.readFileSync(path.join(root,p),"utf8"));
const ledgers=["data/qa/technical-qa43-remaining-scope-edits.json","data/qa/technical-qa44-later-scope-edits.json","data/qa/technical-qa45-overlap-edits.json"].map(read);
assert.deepEqual(ledgers.map(x=>x.length),[12,6,3]);
const changes=ledgers.flat(),unique=new Set(changes.map(x=>x.id));assert.equal(unique.size,21);
const versions={qa43:0,qa44:0,qa45:0};
for(const change of changes){
 const folder=change.round===1?"":"round"+String(change.round).padStart(2,"0")+"/";
 const q=read("data/past/drafts/"+folder+change.subject+".json")[change.number-1];
 const e=read("data/explanations/drafts/"+folder+change.subject+".json")[change.number-1];
 const qa=Number(change.stage),key="option_analysis_qa"+qa;
 assert.equal(q.id,change.id);assert.equal(e.id,q.id);assert.equal(q.subject,change.subject);
 assert.equal(q.question,change.after.question);assert.notEqual(q.question,change.before.question);
 assert.deepEqual(q.choices,change.after.choices);assert.equal(q.answer,change.before.answer);
 assert.equal(q.answer,change.after.answer);assert.equal(e.correct_answer,q.answer);
 assert.equal(e.correct_choice,q.choices[q.answer-1]);assert.equal(e.reason,change.after.reason);
 assert.equal(e.key_point,change.after.key_point);assert.deepEqual(e[key],change.after.option_analysis);
 assert.deepEqual(q["technical_verification_qa"+qa].source_urls,change.after.reference_urls);
 assert.deepEqual(e["technical_verification_qa"+qa].source_urls,change.after.reference_urls);
 assert.ok(change.after.reference_urls.length>0);
 const auditPaths=[
  "data/qa/technical-qa"+qa+"-r"+String(change.round).padStart(2,"0")+"-"+change.subject+"-option-audit.json",
  "data/qa/technical-qa"+qa+"-"+change.subject+"-r"+String(change.round).padStart(2,"0")+"-option-audit.json"
 ];
 const prev=auditPaths.find(p=>fs.existsSync(path.join(root,p)));
 assert.ok(prev,"missing time-stamped audit "+change.id);
 const row=read(prev)[change.number-1];assert.equal(row.id,q.id);assert.equal(row.correct_number,q.answer);
 assert.equal(q.subject_classification_review.status,"hold_do_not_publish");
 assert.equal(e.subject_classification_review.status,"hold_do_not_publish");
 assert.equal(q.publishable,false);assert.equal(q.review_status,"editorial_draft");
 assert.equal(q.technical_answer_status,"pending_independent_review");
 assert.equal(e.technical_answer_status,"pending_independent_review");
 for(let i=0;i<4;i++){const opt=e[key][i];assert.equal(opt.text,q.choices[i]);assert.equal(opt.number,i+1);
  assert.equal(opt.verdict,i+1===q.answer?"correct":"incorrect");assert.ok(opt.rationale.length>=15);}
 const v=ledgers[0].some(x=>x.id===q.id)?"qa43":ledgers[1].some(x=>x.id===q.id)?"qa44":"qa45";
 const suffix=v==="qa43"?"scope_rewrite":v==="qa44"?"scope_rewrite":"overlap_edit";
 assert.ok(q[v+"_"+suffix]);assert.ok(e[v+"_"+suffix]);versions[v]++;
}
assert.deepEqual(versions,{qa43:12,qa44:6,qa45:3});
const stale=read("data/qa/technical-qa45-stale-hold-review.json");
const inv=read("data/past/drafts/round06/eco.json")[19],inve=read("data/explanations/drafts/round06/eco.json")[19];
assert.equal(stale.id,"auto-made-r06-s04-q20");assert.equal(inv.id,stale.id);
assert.equal(inv.answer,3);assert.equal(inv.subject_classification_review.status,"hold_do_not_publish");
assert.equal(inve.subject_classification_review.status,"hold_do_not_publish");
assert.equal(inv.qa45_stale_hold_assessment.independent_final_technical_approval,false);
let hold=0,total=0;for(let round=1;round<=9;round++)for(const sub of ["engine","chassis","electrical","eco"]){
 const prefix=round===1?"":"round"+String(round).padStart(2,"0")+"/";
 const qs=read("data/past/drafts/"+prefix+sub+".json");assert.equal(qs.length,20);
 for(const q of qs){total++;if(q.subject_classification_review?.status==="hold_do_not_publish")hold++;}
}
assert.equal(total,720);assert.equal(hold,55);
const bank=read("data/bank-status.json").technical_qa45;
assert.equal(bank.remaining_provisional_misplacements,0);assert.equal(bank.legacy_holds_retained,55);
const manifest=read("data/manifest.json");
assert.equal(manifest.banks.filter(x=>x.track==="expected").reduce((n,x)=>n+x.count,0),100);
assert.ok(manifest.banks.every(x=>!x.file.includes("/drafts/")));
console.log("PASS QA43-45: 18 off-subject+3 overlap rewritten, 84 choice rationales matched, 1 legacy inverter recheck, 55 held; no expert approvals/publication.");
