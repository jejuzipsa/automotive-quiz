"use strict";
const assert=require("node:assert/strict");
const fs=require("node:fs");
const path=require("node:path");
const root=path.resolve(__dirname,"..");
const read=p=>JSON.parse(fs.readFileSync(path.join(root,p),"utf8"));
const manifest=read("data/manifest.json");
const livePaths=manifest.banks.map(row=>row.file);
const subjects=["engine","chassis","electrical","eco"];
assert.equal(new Set(livePaths).size,livePaths.length);
for(const file of livePaths){
  assert.ok(!file.includes("/drafts/"),"draft listed publicly: "+file);
  assert.ok(!file.includes("source") && !file.includes("ocr"),"private OCR bank leaked: "+file);
}
let total=0;
const ids=new Set();
for(let round=1;round<=9;round++){
  const segment=round===1?"":`round${String(round).padStart(2,"0")}/`;
  for(const subject of subjects){
    const q=read(`data/past/drafts/${segment}${subject}.json`);
    const e=read(`data/explanations/drafts/${segment}${subject}.json`);
    assert.equal(q.length,20);assert.equal(e.length,20);
    const explanations=new Map(e.map(row=>[row.id,row]));
    assert.equal(explanations.size,20);
    for(const item of q){
      assert.ok(!ids.has(item.id),"duplicate draft id "+item.id);
      ids.add(item.id);total++;
      const note=explanations.get(item.id);
      assert.ok(note,"missing explanation "+item.id);
      assert.equal(item.explanation_id,note.id);
      assert.equal(note.correct_answer,item.answer);
      assert.equal(note.correct_choice,item.choices[item.answer-1]);
      assert.equal(item.publishable,false,"draft must not be published "+item.id);
      assert.equal(item.review_status,"editorial_draft");
      assert.equal(item.technical_answer_status,"pending_independent_review");
      assert.equal(note.review_status,"editorial_draft");
      assert.equal(note.technical_answer_status,"pending_independent_review");
      assert.equal(note.publishable??false,false);
      assert.ok(!livePaths.some(x=>x.endsWith("/"+segment+subject+".json")&&x.includes("/drafts/")));
    }
  }
}
assert.equal(total,720);
assert.equal(livePaths.some(x=>x.includes("data/past/approved/")),false,
  "no past bank has received final technical and rights approval");
const eligibleExpected=subjects.flatMap(subject=>read("data/expected/"+subject+".json"));
assert.equal(eligibleExpected.length,112);
for(const subject of subjects)assert.equal(eligibleExpected.filter(q=>q.subject===subject).length,28);
assert.ok(eligibleExpected.every(q=>q.origin==="original_practice"&&q.track==="expected"&&q.publishable===true));
console.log("PASS: original expected manifest and historical draft metadata preserved; learning rotation is a separate automatic track.");
