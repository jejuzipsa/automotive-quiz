"use strict";
const assert=require("node:assert/strict");
const fs=require("node:fs");
const path=require("node:path");
const root=process.env.AUTO_QUIZ_REPO||path.resolve(__dirname,"..");
const read=p=>JSON.parse(fs.readFileSync(path.join(root,p),"utf8"));
const qs=read("data/past/drafts/round05/eco.json");
const es=read("data/explanations/drafts/round05/eco.json");
const audit=read("data/qa/technical-qa22-r05-eco-option-audit.json");
const qa19=read("data/qa/technical-qa19-r05-edits-and-holds.json");
assert.equal(qs.length,20);assert.equal(es.length,20);assert.equal(audit.length,20);
assert.equal(audit.filter(x=>x.evidence_grade==="source_supported_first_pass").length,5);
assert.equal(audit.filter(x=>x.evidence_grade==="needs_additional_model_or_syllabus_review").length,15);
assert.deepEqual(audit.filter(x=>x.evidence_grade==="source_supported_first_pass").map(x=>x.question_number),[1,2,8,10,19]);
let n=0;
for(let i=0;i<20;i++){
 const q=qs[i],e=es[i],a=audit[i];
 assert.equal(q.id,e.id);assert.equal(q.id,a.id);
 assert.equal(q.round,5);assert.equal(q.subject,"eco");assert.equal(q.question_number,i+1);
 assert.equal(a.question_at_review,q.question);
 assert.equal(a.correct_number,q.answer);assert.equal(a.correct_choice,q.choices[q.answer-1]);
 assert.equal(e.correct_answer,q.answer);assert.equal(e.correct_choice,a.correct_choice);
 assert.equal(q.technical_verification_qa22.status,a.evidence_grade);
 assert.equal(e.technical_verification_qa22.status,a.evidence_grade);
 assert.deepEqual(e.option_analysis_qa22,a.options);
 assert.equal(a.options.length,4);assert.ok(a.source_urls.length>0);
 assert.equal(a.final_technical_approval,false);assert.equal(a.web_publication,false);
 assert.equal(q.technical_verification_qa22.final_technical_approval,false);
 assert.equal(e.technical_verification_qa22.final_technical_approval,false);
 assert.equal(q.publishable,false);
 assert.equal(q.technical_answer_status,"pending_independent_review");
 assert.equal(e.technical_answer_status,"pending_independent_review");
 for(let j=0;j<4;j++){
  const o=a.options[j];assert.equal(o.number,j+1);
  assert.equal(o.text,q.choices[j]);assert.equal(o.verdict,j+1===q.answer?"correct":"incorrect");
  assert.ok(o.rationale.length>=15);n++;
 }
}
assert.equal(n,80);
for(const num of [5,12,13,14,15]){
 assert.equal(qs[num-1].subject_classification_review.status,"hold_do_not_publish");
 assert.ok(audit[num-1].hold_reasons.includes("existing_subject_classification_hold"));
}
for(const num of [17,18]){
 const id=qs[num-1].id,edit=qa19.edits.find(x=>x.id===id);
 assert.ok(edit);
 assert.equal(qs[num-1].question,edit.after.question);
 assert.deepEqual(qs[num-1].choices,edit.after.choices);
 assert.equal(es[num-1].reason,edit.after.reason);
 assert.equal(audit[num-1].question_at_review,edit.after.question);
 assert.deepEqual(audit[num-1].options.map(x=>x.text),edit.after.choices);
}
const live=read("data/manifest.json");
assert.ok(live.banks.every(x=>!x.file.includes("/drafts/")));
console.log("PASS QA22: r05 eco 20/80 latest current versions including QA19 reauthored 17/18; 5 firstpass supported, 15 held, no independent final approvals or public release.");
