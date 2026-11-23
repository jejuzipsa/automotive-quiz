"use strict";
const fs=require("node:fs"),path=require("node:path"),assert=require("node:assert/strict");
const root=process.env.AUTO_QUIZ_REPO||path.resolve(__dirname,"..");
const read=p=>JSON.parse(fs.readFileSync(path.join(root,p),"utf8"));
const qs=read("data/past/drafts/engine.json"),es=read("data/explanations/drafts/engine.json"),edits=read("data/qa/technical-qa39-editorial-edits.json");
assert.equal(edits.length,2);assert.deepEqual(edits.map(x=>x.question_number),[13,16]);
const src3=read("data/qa/technical-qa3-engine-r01-option-audit.json");
const qa1=read("data/qa/technical-qa1-changes.json"),qa3=read("data/qa/technical-qa3-engine-r01-changes.json");
const old5=read("data/qa/technical-qa5-changes.json");
for(const change of edits){
 const q=qs[change.question_number-1],e=es[change.question_number-1],old=src3[change.question_number-1];
 assert.equal(q.id,change.id);assert.equal(e.id,q.id);assert.equal(q.answer,change.before.answer);assert.equal(q.answer,change.after.answer);
 assert.equal(q.question,change.after.question);assert.deepEqual(q.choices,change.after.choices);assert.equal(e.reason,change.after.reason);
 assert.deepEqual(e.option_analysis,change.after.option_analysis);assert.equal(e.correct_choice,q.choices[q.answer-1]);
 assert.equal(q.technical_verification_qa3.status,"needs_additional_model_or_quality_review");
 assert.equal(e.technical_verification_qa3.status,old.evidence_grade);
 assert.equal(q.qa39_editorial_secondpass.editorially_improved,true);
 assert.equal(q.qa39_editorial_secondpass.independent_technical_approval,false);
 assert.equal(e.qa39_editorial_secondpass.rights_cleared,false);
 assert.equal(q.publishable,false);assert.equal(q.technical_answer_status,"pending_independent_review");
 assert.ok(change.reference_urls.length>0);
 for(let i=0;i<4;i++){const a=e.option_analysis[i];assert.equal(a.text,q.choices[i]);assert.equal(a.number,i+1);
  assert.equal(a.verdict,i+1===q.answer?"correct":"incorrect");assert.ok(a.rationale.length>=20);}
}
const q16=qa1.find(x=>x.id===edits[1].id);assert.ok(q16);assert.deepEqual(q16.after.choices,edits[1].before.choices);
const q13=qa3.find(x=>x.id===edits[0].id);assert.ok(q13);assert.deepEqual(q13.after.choices,edits[0].before.choices);
const prior=old5.find(x=>x.id==="auto-made-r01-s01-q20");assert.ok(prior);
const ox=qs[19],oxe=es[19];assert.deepEqual(ox.choices,prior.after.choices);
assert.deepEqual(oxe.option_analysis,prior.after.option_analysis);
assert.equal(ox.qa39_editorial_secondpass.already_rewritten_by,"QA5");
assert.equal(ox.publishable,false);
const m=read("data/manifest.json");assert.ok(m.banks.every(x=>!x.file.includes("/drafts/")));
console.log("PASS QA39 editorial: engine r01 q13/q16 plausible distractors, q20 QA5 correction preserved; 0 independent approvals, 0 publications.");
