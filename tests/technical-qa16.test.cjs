"use strict";
const assert=require("node:assert/strict");
const fs=require("node:fs");
const path=require("node:path");
const root=process.env.AUTO_QUIZ_REPO||path.resolve(__dirname,"..");
const read=p=>JSON.parse(fs.readFileSync(path.join(root,p),"utf8"));
const qs=read("data/past/drafts/round03/chassis.json");
const es=read("data/explanations/drafts/round03/chassis.json");
const a=read("data/qa/technical-qa16-chassis-r03-option-audit.json");
const newerById=new Map(read("data/qa/technical-qa43-remaining-scope-edits.json").map(x=>[x.id,x]));
assert.equal(a.length,20);assert.equal(qs.length,20);assert.equal(es.length,20);
assert.equal(new Set(a.map(x=>x.id)).size,20);
assert.equal(a.filter(x=>x.evidence_grade==="source_supported_first_pass").length,11);
assert.equal(a.filter(x=>x.evidence_grade==="needs_additional_model_or_syllabus_review").length,9);
assert.deepEqual(a.filter(x=>x.evidence_grade==="needs_additional_model_or_syllabus_review").map(x=>x.question_number),[2,3,6,7,8,12,14,16,20]);
let count=0;for(let i=0;i<20;i++){
 const q=qs[i],e=es[i],row=a[i],latest=newerById.get(q.id);
 assert.equal(q.id,e.id);assert.equal(q.id,row.id);
 assert.equal(q.subject,"chassis");assert.equal(q.round,3);
 assert.equal(row.question_at_review,latest?latest.before.question:q.question);
 assert.equal(row.correct_number,q.answer);
 assert.equal(row.correct_choice,latest?latest.before.correct_choice:q.choices[q.answer-1]);
 assert.equal(e.correct_answer,q.answer);assert.equal(e.correct_choice,q.choices[q.answer-1]);
 assert.equal(q.technical_verification_qa16.status,row.evidence_grade);
 assert.equal(e.technical_verification_qa16.status,row.evidence_grade);
 assert.deepEqual(e.option_analysis_qa16,latest?latest.after.option_analysis:row.options);
 assert.ok(row.source_urls.length>=1);assert.equal(row.options.length,4);
 assert.equal(row.final_technical_approval,false);assert.equal(row.web_publication,false);
 assert.equal(q.publishable,false);assert.equal(q.review_status,"editorial_draft");
 assert.equal(q.technical_answer_status,"pending_independent_review");
 for(let j=0;j<4;j++){
  const op=row.options[j];assert.equal(op.number,j+1);assert.equal(op.text,latest?latest.before.choices[j]:q.choices[j]);
  assert.equal(op.verdict,j+1===q.answer?"correct":"incorrect");
  assert.ok(op.rationale.length>=16);count++;
 }
}
assert.equal(count,80);
assert.equal(qs[1].subject_classification_review.status,"hold_do_not_publish");
const live=read("data/manifest.json");
assert.ok(live.banks.every(x=>!x.file.includes("/drafts/")));
console.log("PASS QA16: chassis round3 20 questions /80 option rationales; 11 source-supported first-pass, 9 held, 0 final approvals or reconstructed past publication.");
