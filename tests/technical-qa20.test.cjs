"use strict";
const assert=require("node:assert/strict");
const fs=require("node:fs");
const path=require("node:path");
const root=process.env.AUTO_QUIZ_REPO||path.resolve(__dirname,"..");
const read=p=>JSON.parse(fs.readFileSync(path.join(root,p),"utf8"));
const qs=read("data/past/drafts/round05/chassis.json");
const es=read("data/explanations/drafts/round05/chassis.json");
const audit=read("data/qa/technical-qa20-r05-chassis-option-audit.json");
assert.equal(qs.length,20);assert.equal(es.length,20);assert.equal(audit.length,20);
assert.equal(audit.filter(x=>x.evidence_grade==="source_supported_first_pass").length,8);
assert.equal(audit.filter(x=>x.evidence_grade==="needs_additional_model_or_syllabus_review").length,12);
assert.deepEqual(audit.filter(x=>x.evidence_grade!=="source_supported_first_pass").map(x=>x.question_number),[1,2,4,5,6,13,15,16,17,18,19,20]);
const ids=new Set();let options=0;
for(let i=0;i<20;i++){
 const q=qs[i],e=es[i],a=audit[i];
 assert.ok(!ids.has(q.id));ids.add(q.id);
 assert.equal(q.id,e.id);assert.equal(q.id,a.id);
 assert.equal(q.round,5);assert.equal(q.subject,"chassis");assert.equal(q.question_number,i+1);
 assert.equal(a.question_at_review,q.question);
 assert.equal(a.correct_number,q.answer);
 assert.equal(a.correct_choice,q.choices[q.answer-1]);
 assert.equal(e.correct_answer,q.answer);
 assert.equal(e.correct_choice,a.correct_choice);
 assert.equal(q.technical_verification_qa20.status,a.evidence_grade);
 assert.equal(e.technical_verification_qa20.status,a.evidence_grade);
 assert.deepEqual(e.option_analysis_qa20,a.options);
 assert.equal(a.options.length,4);
 assert.ok(a.source_urls.length>0);
 assert.equal(a.final_technical_approval,false);
 assert.equal(a.web_publication,false);
 assert.equal(q.technical_verification_qa20.final_technical_approval,false);
 assert.equal(e.technical_verification_qa20.final_technical_approval,false);
 assert.equal(q.publishable,false);
 assert.equal(q.technical_answer_status,"pending_independent_review");
 assert.equal(e.technical_answer_status,"pending_independent_review");
 for(let j=0;j<4;j++){
  const o=a.options[j];assert.equal(o.number,j+1);
  assert.equal(o.text,q.choices[j]);
  assert.equal(o.verdict,j+1===q.answer?"correct":"incorrect");
  assert.ok(o.rationale.length>=18);
  options++;
 }
}
assert.equal(options,80);
for(const n of [16,17,18,19,20]){
 assert.equal(qs[n-1].subject_classification_review.status,"hold_do_not_publish");
 assert.ok(audit[n-1].hold_reasons.includes("existing_subject_classification_hold"));
}
const manifest=read("data/manifest.json");
assert.ok(manifest.banks.every(b=>!b.file.includes("/drafts/")));
console.log("PASS QA20: 5th round chassis 20 questions, 80 choices, 8 general-reference first-pass, 12 held; original 5 subject holds, zero final approvals/release.");
