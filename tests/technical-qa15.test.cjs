"use strict";
const assert=require("node:assert/strict");
const fs=require("node:fs");
const path=require("node:path");
const root=process.env.AUTO_QUIZ_REPO||path.resolve(__dirname,"..");
const read=p=>JSON.parse(fs.readFileSync(path.join(root,p),"utf8"));
const questions=read("data/past/drafts/round03/engine.json");
const explanations=read("data/explanations/drafts/round03/engine.json");
const ledger=read("data/qa/technical-qa15-r03-engine-edits.json");
const audit=read("data/qa/technical-qa15-engine-r03-option-audit.json");
const qa1=read("data/qa/technical-qa1-changes.json");
const qa2=read("data/qa/technical-qa2-changes.json");
assert.equal(questions.length,20);assert.equal(explanations.length,20);assert.equal(audit.length,20);
assert.equal(new Set(audit.map(x=>x.id)).size,20);
assert.equal(ledger.edits.length,2);
assert.deepEqual(ledger.edits.map(x=>x.id).sort(),["auto-made-r03-s01-q03","auto-made-r03-s01-q14"].sort());
assert.ok(ledger.edits.every(x=>x.before.answer===x.after.answer));
assert.ok(ledger.edits.every(x=>x.after.correct_choice===x.after.choices[x.after.answer-1]));
assert.ok(ledger.edits.every(x=>!qa1.some(y=>y.id===x.id)),"no QA1 edit may be silently overwritten");
for(const edit of ledger.edits){
 const old=qa2.find(x=>x.id===edit.id);
 if(old){
  assert.equal(edit.before.question,old.after.question,"QA2->QA15 question chain");
  assert.deepEqual(edit.before.choices,old.after.choices,"QA2->QA15 option chain");
  assert.equal(edit.before.reason,old.after.reason,"QA2->QA15 rationale chain");
 }
}
assert.equal(audit.filter(x=>x.evidence_grade==="source_supported_first_pass").length,12);
assert.equal(audit.filter(x=>x.evidence_grade==="needs_additional_model_or_syllabus_review").length,8);
assert.deepEqual(audit.filter(x=>x.evidence_grade==="needs_additional_model_or_syllabus_review").map(x=>x.question_number),[4,5,6,12,13,14,15,18]);
let count=0;
for(let i=0;i<20;i++){
 const q=questions[i],e=explanations[i],row=audit[i];
 assert.equal(q.id,e.id);assert.equal(q.id,row.id);
 assert.equal(q.round,3);assert.equal(q.subject,"engine");assert.equal(q.track,"past");
 assert.equal(q.question_number,i+1);assert.equal(row.question_number,i+1);
 assert.equal(e.correct_answer,q.answer);assert.equal(e.correct_choice,q.choices[q.answer-1]);
 assert.equal(row.question_at_review,q.question);assert.equal(row.correct_choice,q.choices[q.answer-1]);
 assert.equal(q.technical_verification_qa15.status,row.evidence_grade);
 assert.equal(e.technical_verification_qa15.status,row.evidence_grade);
 assert.deepEqual(e.option_analysis_qa15,row.options);
 assert.ok(row.source_urls.length>=1);assert.equal(row.options.length,4);
 assert.equal(q.technical_verification_qa15.independent_final_technical_approval,false);
 assert.equal(e.technical_verification_qa15.independent_final_technical_approval,false);
 assert.equal(row.final_technical_approval,false);assert.equal(row.web_publication,false);
 assert.equal(q.publishable,false);assert.equal(q.review_status,"editorial_draft");
 assert.equal(q.technical_answer_status,"pending_independent_review");
 for(let j=0;j<4;j++){
  const choice=row.options[j];assert.equal(choice.number,j+1);
  assert.equal(choice.text,q.choices[j]);assert.equal(choice.verdict,j+1===q.answer?"correct":"incorrect");
  assert.ok(choice.rationale.length>=17);count++;
 }
}
assert.equal(count,80);
for(const n of [3,14]){
 const q=questions[n-1],e=explanations[n-1],edit=ledger.edits.find(x=>x.id===q.id);
 assert.ok(edit);assert.equal(q.question,edit.after.question);
 assert.deepEqual(q.choices,edit.after.choices);
 assert.equal(e.reason,edit.after.reason);
 assert.equal(q.editorial_revision,"qa15_r03_engine_edit");
 assert.equal(q.qa15_revision.pending_independent_final_technical_approval,true);
}
assert.match(questions[2].question,/인터쿨러/);
assert.match(questions[13].question,/크랭크케이스 압력/);
const live=read("data/manifest.json");
assert.ok(live.banks.every(b=>!b.file.includes("/drafts/")));
console.log("PASS QA15: r03 engine 20 questions / 80 technical first-pass options, 12 source-supported, 8 held, 2 near-duplicate concept edits, zero approvals/publication.");
