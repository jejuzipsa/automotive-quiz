"use strict";
const assert=require("node:assert/strict");
const fs=require("node:fs");
const path=require("node:path");
const root=path.resolve(__dirname,"..");
const read=p=>JSON.parse(fs.readFileSync(path.join(root,p),"utf8"));
const audit=read("data/qa/technical-qa8-eco-r01-option-audit.json");
const qa9ById=new Map(read("data/qa/technical-qa9-changes.json").map(x=>[x.id,x]));
const qa43ById=new Map(read("data/qa/technical-qa43-remaining-scope-edits.json").map(x=>[x.id,x]));
const qs=read("data/past/drafts/eco.json");
const es=read("data/explanations/drafts/eco.json");
assert.equal(audit.length,20);assert.equal(qs.length,20);assert.equal(es.length,20);
assert.equal(new Set(audit.map(x=>x.id)).size,20);
assert.equal(audit.filter(x=>x.evidence_grade==="source_supported_first_pass").length,7);
assert.equal(audit.filter(x=>x.evidence_grade==="needs_additional_model_or_syllabus_review").length,13);
let optionCount=0;
for(let i=0;i<20;i++){
 const q=qs[i],e=es[i],row=audit[i];
 assert.equal(row.id,q.id);assert.equal(e.id,q.id);
 assert.equal(row.question_number,i+1);
 const later=qa9ById.get(q.id),rewrite=qa43ById.get(q.id);
 if(later){
   assert.equal(row.question_at_review,later.before.question);
   assert.equal(q.question,later.after.question);
   assert.deepEqual(q.choices,later.after.choices);
   assert.equal(q.qa9_revision.status,"editorial_revised_pending_new_option_review");
   assert.equal(q.technical_verification_qa8,undefined);
   assert.equal(e.technical_verification_qa8,undefined);
   assert.equal(e.option_analysis_qa8,undefined);
 }else assert.equal(row.question_at_review,rewrite?rewrite.before.question:q.question);
 assert.equal(row.correct_number,q.answer);
 assert.equal(row.correct_choice,later?later.before.choices[later.before.answer-1]:rewrite?rewrite.before.correct_choice:q.choices[q.answer-1]);
 assert.equal(e.correct_answer,q.answer);
 assert.equal(e.correct_choice,q.choices[q.answer-1]);
 if(!later){
   assert.equal(q.technical_verification_qa8.status,row.evidence_grade);
   assert.equal(e.technical_verification_qa8.status,row.evidence_grade);
   assert.deepEqual(e.option_analysis_qa8,rewrite?rewrite.after.option_analysis:row.options);
 }
 assert.equal(row.options.length,4);
 assert.ok(row.source_urls.length>0);
 if(!later){
   assert.equal(q.technical_verification_qa8.final_technical_approval,false);
   assert.equal(e.technical_verification_qa8.final_technical_approval,false);
 }
 assert.equal(row.final_technical_approval,false);
 assert.equal(row.web_publication,false);
 assert.equal(q.publishable,false);
 assert.equal(q.review_status,"editorial_draft");
 assert.equal(q.technical_answer_status,"pending_independent_review");
 for(let j=0;j<4;j++){
   const o=row.options[j];
   assert.equal(o.number,j+1);
   assert.equal(o.text,later?later.before.choices[j]:rewrite?rewrite.before.choices[j]:q.choices[j]);
   assert.equal(o.verdict,j+1===q.answer?"correct":"incorrect");
   assert.ok(o.rationale.length>=18);
   optionCount++;
 }
}
assert.equal(optionCount,80);
for(const i of [17,18]){
 assert.equal(qs[i].subject_classification_review.status,"hold_do_not_publish");
 assert.ok(audit[i].hold_reasons.includes("subject_classification_existing_hold"));
}
assert.ok(audit[16].hold_reasons.some(x=>x.includes("중복")));
const live=read("data/manifest.json");
assert.ok(live.banks.every(x=>!x.file.includes("/drafts/")));
console.log("PASS QA8: eco round01 20 questions, 80 option rationales, 7 first-pass sources, 13 held, 0 final approvals or live reconstructed past questions.");
