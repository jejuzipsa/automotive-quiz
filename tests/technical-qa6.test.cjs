"use strict";
const assert=require("node:assert/strict");
const fs=require("node:fs");
const path=require("node:path");
const root=path.resolve(__dirname,"..");
const read=p=>JSON.parse(fs.readFileSync(path.join(root,p),"utf8"));
const audit=read("data/qa/technical-qa6-chassis-r01-option-audit.json");
const qs=read("data/past/drafts/chassis.json");
const es=read("data/explanations/drafts/chassis.json");
const qa4=read("data/qa/technical-qa4-chassis-r01-editorial-audit.json");
const qa5=new Map(read("data/qa/technical-qa5-changes.json").map(c=>[c.id,c]));
const qa43ById=new Map(read("data/qa/technical-qa43-remaining-scope-edits.json").map(x=>[x.id,x]));
assert.equal(audit.length,20);
assert.equal(qs.length,20);assert.equal(es.length,20);
assert.equal(new Set(audit.map(x=>x.id)).size,20);
assert.equal(audit.filter(x=>x.evidence_grade==="source_supported_first_pass").length,10);
assert.equal(audit.filter(x=>x.evidence_grade==="needs_additional_model_or_syllabus_review").length,10);
let options=0;
for(let i=0;i<20;i++){
 const item=qs[i],exp=es[i],row=audit[i],legacy=qa4.records[i],later=qa5.get(item.id),rewrite=qa43ById.get(item.id);
 assert.equal(row.id,item.id);
 assert.equal(item.id,exp.id);
 assert.equal(row.question_number,i+1);
 assert.equal(row.question_at_review,rewrite?rewrite.before.question:item.question);
 assert.equal(row.correct_number,item.answer);
 assert.equal(row.correct_choice,rewrite?rewrite.before.correct_choice:item.choices[item.answer-1]);
 assert.equal(exp.correct_answer,item.answer);
 assert.equal(exp.correct_choice,item.choices[item.answer-1]);
 assert.equal(row.options.length,4);
 assert.ok(row.source_urls.length>0);
 assert.equal(item.technical_verification_qa6.status,row.evidence_grade);
 assert.equal(exp.technical_verification_qa6.status,row.evidence_grade);
 assert.deepEqual(exp.option_analysis_qa6,rewrite?rewrite.after.option_analysis:row.options);
 assert.equal(item.technical_verification_qa6.final_technical_approval,false);
 assert.equal(exp.technical_verification_qa6.final_technical_approval,false);
 assert.equal(item.publishable,false);
 assert.equal(item.technical_answer_status,"pending_independent_review");
 assert.equal(item.review_status,"editorial_draft");
 assert.equal(row.final_technical_approval,false);
 assert.equal(row.web_publication,false);
 if(!rewrite)assert.equal(legacy.question_at_review,later?later.before.question:item.question);
 else assert.equal(row.question_at_review,rewrite.before.question);
 if(item.subject_classification_review?.status==="hold_do_not_publish")
   assert.ok(row.hold_reasons.includes("subject_classification_existing_hold"));
 for(let j=0;j<4;j++){
   const opt=row.options[j];
   assert.equal(opt.number,j+1);
   assert.equal(opt.text,rewrite?rewrite.before.choices[j]:item.choices[j]);
   assert.equal(opt.verdict,j+1===item.answer?"correct":"incorrect");
   assert.ok(opt.rationale.length>=16);
   options++;
 }
}
assert.equal(options,80);
for(const n of [2,4])assert.equal(qs[n-1].subject_classification_review.status,"hold_do_not_publish");
const live=read("data/manifest.json");
assert.ok(live.banks.every(x=>!x.file.includes("/drafts/")));
console.log("PASS QA6: chassis round01 20 questions and 80 option rationales, 10 reference-consistent first pass, 10 held; no technical final approval or live publication.");
