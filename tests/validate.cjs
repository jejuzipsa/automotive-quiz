"use strict";
const assert=require("node:assert/strict");
const fs=require("node:fs");
const path=require("node:path");
const vm=require("node:vm");
const root=path.resolve(__dirname,"..");
const read=p=>fs.readFileSync(path.join(root,p),"utf8");
const html=read("index.html"),app=read("app.js");
new vm.Script(app,{filename:"app.js"});
const ids=[...html.matchAll(/\bid="([^"]+)"/g)].map(x=>x[1]);
assert.equal(new Set(ids).size,ids.length,"duplicate element IDs");
for(const match of app.matchAll(/\$\("([^"]+)"\)/g))
  assert(ids.includes(match[1]),"missing HTML id "+match[1]);
for(const forbidden of ["personalTextBankInput","vendor/jszip.min.js","personal-text-bank.js"]){
  assert(!html.includes(forbidden),"legacy ZIP/public import must not return: "+forbidden);
}
assert.ok(!html.includes('type="file"'),"no file picker required");
const rotationSubjects=["engine","chassis","electrical","eco"],rotationIds=new Set();
for(const subject of rotationSubjects){
  const bank=JSON.parse(read("data/rotation/light/"+subject+".json"));
  assert.equal(bank.length,180);
  for(const q of bank){
    assert.equal(q.subject,subject);assert.ok(!rotationIds.has(q.id));rotationIds.add(q.id);
    assert.ok(q.question.trim()&&q.explanation.trim());
    assert.equal(q.choices.length,4);assert.ok(q.choices.every(x=>x.trim()));
    assert.ok([1,2,3,4].includes(q.answer));
  }
}
assert.equal(rotationIds.size,720);
const manifest=JSON.parse(read("data/manifest.json"));
assert.equal(manifest.version,1);
const baseFiles=new Set(["data/expected/engine.json","data/expected/chassis.json",
  "data/expected/electrical.json","data/expected/eco.json","data/demo.json","data/concept.json"]);
assert.ok(manifest.banks.length>=6 && manifest.banks.length<=10);
assert.equal(new Set(manifest.banks.map(entry=>entry.file)).size,manifest.banks.length,"duplicate manifest files");
for(const file of baseFiles)assert.ok(manifest.banks.some(entry=>entry.file===file),"missing base "+file);
const idsSeen=new Set(),counts={};
for(const entry of manifest.banks){
  const approvedMatch=entry.file.match(/^data\/past\/approved\/(engine|chassis|electrical|eco)\.json$/);
  assert.ok(baseFiles.has(entry.file)||approvedMatch,"unapproved bank path: "+entry.file);
  if(approvedMatch){assert.equal(entry.track,"past");assert.equal(entry.subject,approvedMatch[1]);}
  const arr=JSON.parse(read(entry.file));
  assert.equal(arr.length,entry.count);
  for(const q of arr){
    assert.ok(q.id&&!idsSeen.has(q.id),"duplicate/missing id: "+q.id);
    idsSeen.add(q.id);
    assert.equal(q.track,entry.track);
    if(entry.subject)assert.equal(q.subject,entry.subject);
    assert.ok(["engine","chassis","electrical","eco"].includes(q.subject));
    assert.ok(q.question&&q.explanation);
    assert.ok(Array.isArray(q.choices)&&q.choices.length===4&&q.choices.every(Boolean));
    assert.ok(Number.isInteger(q.answer)&&q.answer>=1&&q.answer<=4);
    if(q.track==="expected"){
      assert.equal(q.origin,"original_practice");
      assert.equal(q.publishable,true);
      assert.equal(q.review_status,"editorial_draft");
    }
    if(q.track==="past"){
      assert.equal(q.publishable,true,"only approved past releases");
      assert.equal(q.review_status,"approved");
      assert.equal(q.technical_answer_status,"independently_approved");
      assert.equal(q.rights_cleared,true);
      assert.notEqual(q.subject_classification_review?.status,"hold_do_not_publish");
    }
    counts[q.track]=(counts[q.track]||0)+1;
  }
}
assert.equal(counts.expected,112);
assert.equal(counts.demo,8);
assert.equal(counts.concept,48);
assert.ok(!counts.past || counts.past<=720);
for(const asset of ["styles.css","quiz-utils.js","app.js","data/manifest.json"])
  assert(fs.existsSync(path.join(root,asset)),"missing "+asset);
console.log("PASS: separate expected/concept manifest, 720 additional rotation records, no file picker, DOM references.");

// QA67 public bank editorial-review ledger consistency (not expert certification).
{
  const audit=JSON.parse(read("data/qa/technical-qa67-public-practice-review.json"));
  const publicExpected=["engine","chassis","electrical","eco"].flatMap(s=>JSON.parse(read("data/expected/"+s+".json")));
  const map=new Map(publicExpected.map(q=>[q.id,q]));
  assert.equal(audit.reviewed.length,112);assert.equal(new Set(audit.reviewed.map(q=>q.id)).size,112);
  assert.equal(audit.changed.length,8);
  for(const row of audit.reviewed){const q=map.get(row.id);assert.ok(q);assert.equal(q.answer,row.answer);assert.equal(q.choices[q.answer-1],row.correct_choice);assert.equal(row.independent_expert_approved,false);}
  for(const row of audit.changed){const q=map.get(row.id);for(const k of ["question","choices","answer","explanation"])assert.deepEqual(q[k],row.after[k]);assert.equal(row.before.answer,row.after.answer);}
}

// QA72: source links, unique blank prompts, choice uniqueness and per-subject distribution.
{
 const qs=JSON.parse(read("data/concept.json")),a=JSON.parse(read("data/qa/qa72-concept-expansion.json"));
 const expected=new Map(["engine","chassis","electrical","eco"].flatMap(s=>JSON.parse(read("data/expected/"+s+".json"))).map(q=>[q.id,q]));
 assert.equal(a.added.length,44);assert.equal(new Set(a.added.map(x=>x.id)).size,44);
 assert.equal(new Set(qs.map(q=>q.question)).size,48);
 for(const subject of ["engine","chassis","electrical","eco"])assert.equal(qs.filter(q=>q.subject===subject).length,12);
 for(const q of qs){assert.equal((q.question.match(/\(    \)/g)||[]).length,1);assert.equal(new Set(q.choices).size,4);}
 for(const row of a.added){const q=qs.find(q=>q.id===row.id),source=expected.get(row.source_expected_id);assert.ok(q&&source);assert.equal(q.subject,source.subject);assert.equal(q.source_expected_id,source.id);assert.equal(row.source_correct_choice,source.choices[source.answer-1]);assert.equal(q.choices[q.answer-1],row.correct_choice);assert.equal(q.review_status,"editorial_draft");assert.equal(row.independent_expert_approved,false);}
 console.log("PASS: 48 concept blanks, 44 traceable editorial items, 12 per subject");
}

// QA73: current 48-record review ledger and unchanged correct answers.
{
 const qs=JSON.parse(read("data/concept.json")),a=JSON.parse(read("data/qa/qa73-concept-quality-review.json")),map=new Map(qs.map(q=>[q.id,q]));
 assert.equal(a.reviewed.length,48);assert.equal(new Set(a.reviewed.map(q=>q.id)).size,48);assert.equal(a.changed.length,18);
 for(const row of a.reviewed){const q=map.get(row.id);assert.ok(q);assert.equal(q.answer,row.answer);assert.equal(q.choices[q.answer-1],row.correct_choice);assert.equal(row.independent_expert_approved,false);}
 for(const row of a.changed){const q=map.get(row.id);for(const k of ["question","choices","answer","explanation"])assert.deepEqual(q[k],row.after[k]);assert.equal(row.before.answer,row.after.answer);assert.equal(row.before.choices[row.before.answer-1],row.after.choices[row.after.answer-1]);}
}
