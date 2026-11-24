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
for(const forbidden of ['type="file"',"personalTextBankInput","vendor/jszip.min.js","personal-text-bank.js"]){
  assert(!html.includes(forbidden),"ZIP/file picker must not be public: "+forbidden);
}
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
assert.equal(counts.expected,100);
assert.equal(counts.demo,8);
assert.equal(counts.concept,4);
assert.ok(!counts.past || counts.past<=720);
for(const asset of ["styles.css","quiz-utils.js","app.js","data/manifest.json"])
  assert(fs.existsSync(path.join(root,asset)),"missing "+asset);
console.log("PASS: approved-only public manifest, base 112 records, no ZIP picker, DOM references.");
