"use strict";
const assert=require("node:assert/strict");
const fs=require("node:fs");
const path=require("node:path");
const root=process.env.AUTO_QUIZ_REPO||path.resolve(__dirname,"..");
const read=p=>JSON.parse(fs.readFileSync(path.join(root,p),"utf8"));
const qs=read("data/past/drafts/round06/chassis.json");
const es=read("data/explanations/drafts/round06/chassis.json");
const audit=read("data/qa/technical-qa24-r06-chassis-option-audit.json");
const qa41ById=new Map(read("data/qa/technical-qa41-chassis-scope-replacements.json").map(x=>[x.id,x]));
assert.equal(qs.length,20);assert.equal(es.length,20);assert.equal(audit.length,20);
assert.equal(audit.filter(x=>x.evidence_grade==="source_supported_first_pass").length,6);
assert.equal(audit.filter(x=>x.evidence_grade==="needs_additional_model_or_syllabus_review").length,14);
assert.deepEqual(audit.filter(x=>x.evidence_grade==="source_supported_first_pass").map(x=>x.question_number),[5,7,9,11,14,15]);
let count=0;
for(let i=0;i<20;i++){
 const q=qs[i],e=es[i],a=audit[i],latest=qa41ById.get(q.id);
 assert.equal(q.id,e.id);assert.equal(q.id,a.id);
 assert.equal(q.round,6);assert.equal(q.subject,"chassis");assert.equal(q.question_number,i+1);
 assert.equal(a.question_at_review,latest?latest.before.question:q.question);
 assert.equal(a.correct_number,q.answer);assert.equal(a.correct_choice,latest?latest.before.correct_choice:q.choices[q.answer-1]);
 assert.equal(e.correct_answer,q.answer);assert.equal(e.correct_choice,q.choices[q.answer-1]);
 assert.equal(q.technical_verification_qa24.status,a.evidence_grade);
 assert.equal(e.technical_verification_qa24.status,a.evidence_grade);
 assert.deepEqual(e.option_analysis_qa24,latest?latest.after.option_analysis:a.options);
 assert.equal(a.options.length,4);assert.ok(a.source_urls.length>0);
 assert.equal(a.final_technical_approval,false);assert.equal(a.web_publication,false);
 assert.equal(q.technical_verification_qa24.final_technical_approval,false);
 assert.equal(e.technical_verification_qa24.final_technical_approval,false);
 assert.equal(q.publishable,false);assert.equal(q.technical_answer_status,"pending_independent_review");
 assert.equal(e.technical_answer_status,"pending_independent_review");
 for(let j=0;j<4;j++){const o=a.options[j];assert.equal(o.number,j+1);assert.equal(o.text,latest?latest.before.choices[j]:q.choices[j]);assert.equal(o.verdict,j+1===q.answer?"correct":"incorrect");assert.ok(o.rationale.length>=15);count++;}
}
assert.equal(count,80);
for(let n=16;n<=20;n++){
 assert.equal(qs[n-1].subject_classification_review.status,"hold_do_not_publish");
 assert.equal(es[n-1].subject_classification_review.status,"hold_do_not_publish");
 assert.ok(audit[n-1].hold_reasons.includes("existing_subject_classification_hold"));
}
const live=read("data/manifest.json");
assert.ok(live.banks.every(x=>!x.file.includes("/drafts/")));
console.log("PASS QA24: r06 chassis 20 questions 80 option rationales (6 source first-pass, 14 held); original five turbo/engine subject holds, no final approval or live publication.");
