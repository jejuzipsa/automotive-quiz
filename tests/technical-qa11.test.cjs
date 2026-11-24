"use strict";
const assert=require("node:assert/strict");
const fs=require("node:fs");
const path=require("node:path");
const root=process.env.AUTO_QUIZ_REPO||path.resolve(__dirname,"..");
const read=p=>JSON.parse(fs.readFileSync(path.join(root,p),"utf8"));
const qs=read("data/past/drafts/round02/chassis.json");
const es=read("data/explanations/drafts/round02/chassis.json");
const audit=read("data/qa/technical-qa11-chassis-r02-option-audit.json");
const newerById=new Map(read("data/qa/technical-qa43-remaining-scope-edits.json").map(x=>[x.id,x]));
assert.equal(qs.length,20);assert.equal(es.length,20);assert.equal(audit.length,20);
assert.equal(new Set(audit.map(x=>x.id)).size,20);
assert.equal(audit.filter(x=>x.evidence_grade==="source_supported_first_pass").length,11);
assert.equal(audit.filter(x=>x.evidence_grade==="needs_additional_model_or_syllabus_review").length,9);
assert.deepEqual(audit.filter(x=>x.evidence_grade==="needs_additional_model_or_syllabus_review").map(x=>x.question_number),[2,4,6,7,9,12,14,15,16]);
let choices=0;
for(let i=0;i<20;i++){
 const q=qs[i],e=es[i],a=audit[i],latest=newerById.get(q.id);
 assert.equal(q.id,e.id);assert.equal(q.id,a.id);
 assert.equal(q.subject,"chassis");assert.equal(q.round,2);assert.equal(q.question_number,i+1);
 assert.equal(q.track,"past");
 assert.equal(e.question_id,q.id);
 assert.equal(a.question_at_review,latest?latest.before.question:q.question);
 assert.equal(a.correct_number,q.answer);
 assert.equal(a.correct_choice,latest?latest.before.correct_choice:q.choices[q.answer-1]);
 assert.equal(e.correct_answer,q.answer);assert.equal(e.correct_choice,q.choices[q.answer-1]);
 assert.equal(q.technical_verification_qa11.status,a.evidence_grade);
 assert.equal(e.technical_verification_qa11.status,a.evidence_grade);
 assert.deepEqual(e.option_analysis_qa11,latest?latest.after.option_analysis:a.options);
 assert.equal(a.options.length,4);
 assert.ok(a.source_urls.length>=1);
 assert.equal(a.final_technical_approval,false);
 assert.equal(a.web_publication,false);
 assert.equal(q.technical_verification_qa11.independent_final_technical_approval,false);
 assert.equal(e.technical_verification_qa11.independent_final_technical_approval,false);
 assert.equal(q.publishable,false);
 assert.equal(q.review_status,"editorial_draft");
 assert.equal(q.technical_answer_status,"pending_independent_review");
 for(let j=0;j<4;j++){
  const opt=a.options[j];
  assert.equal(opt.number,j+1);assert.equal(opt.text,latest?latest.before.choices[j]:q.choices[j]);
  assert.equal(opt.verdict,j+1===q.answer?"correct":"incorrect");
  assert.ok(opt.rationale.length>=12);
  choices++;
 }
}
assert.equal(choices,80);
for(const n of [2,4]){
 assert.equal(qs[n-1].subject_classification_review.status,"hold_do_not_publish");
 assert.equal(es[n-1].subject_classification_review.status,"hold_do_not_publish");
 assert.ok(audit[n-1].hold_reasons.includes("existing_subject_classification_hold"));
}
assert.ok(audit[12].concept_overlap_candidate.includes("r01 chassis q19"));
const q1r02engine=read("data/past/drafts/round02/engine.json")[0];
assert.equal(q1r02engine.subject_classification_review.status,"hold_do_not_publish");
const manifest=read("data/manifest.json");
assert.ok(manifest.banks.every(x=>!x.file.includes("/drafts/")));
console.log("PASS QA11: round-two chassis 20 questions 80 option rationales; 11 firstpass supported, 9 held, existing subject holds maintained, no final approvals/publication.");
