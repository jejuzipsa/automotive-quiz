"use strict";
const assert=require("node:assert/strict");
const fs=require("node:fs");
const path=require("node:path");
const root=process.env.AUTO_QUIZ_REPO||path.resolve(__dirname,"..");
const read=p=>JSON.parse(fs.readFileSync(path.join(root,p),"utf8"));
const expected={electrical:{supported:6,held:14,legacyHolds:[13],supportedNumbers:[1,2,9,10,14,15]},eco:{supported:4,held:16,legacyHolds:[5,12,13,14,15,20],supportedNumbers:[1,7,10,19]}};
let total=0,choices=0;
for(const [subject,plan] of Object.entries(expected)){
 const qs=read("data/past/drafts/round06/"+subject+".json");
 const es=read("data/explanations/drafts/round06/"+subject+".json");
 const audit=read("data/qa/technical-qa25-r06-"+subject+"-option-audit.json");
 assert.equal(qs.length,20);assert.equal(es.length,20);assert.equal(audit.length,20);
 assert.equal(new Set(audit.map(x=>x.id)).size,20);
 assert.equal(audit.filter(x=>x.evidence_grade==="source_supported_first_pass").length,plan.supported);
 assert.equal(audit.filter(x=>x.evidence_grade==="needs_additional_model_or_syllabus_review").length,plan.held);
 assert.deepEqual(audit.filter(x=>x.evidence_grade==="source_supported_first_pass").map(x=>x.question_number),plan.supportedNumbers);
 for(let i=0;i<20;i++){
  const q=qs[i],e=es[i],a=audit[i];
  assert.equal(q.id,e.id);assert.equal(q.id,a.id);
  assert.equal(q.round,6);assert.equal(q.subject,subject);assert.equal(q.question_number,i+1);
  assert.equal(a.question_at_review,q.question);
  assert.equal(a.correct_number,q.answer);assert.equal(a.correct_choice,q.choices[q.answer-1]);
  assert.equal(e.correct_answer,q.answer);assert.equal(e.correct_choice,a.correct_choice);
  assert.equal(q.technical_verification_qa25.status,a.evidence_grade);
  assert.equal(e.technical_verification_qa25.status,a.evidence_grade);
  assert.deepEqual(e.option_analysis_qa25,a.options);
  assert.equal(a.options.length,4);assert.ok(a.source_urls.length>0);
  assert.equal(a.independent_final_technical_approval,false);
  assert.equal(a.web_publication,false);
  assert.equal(q.technical_verification_qa25.independent_final_technical_approval,false);
  assert.equal(e.technical_verification_qa25.independent_final_technical_approval,false);
  assert.equal(q.publishable,false);assert.equal(q.review_status,"editorial_draft");
  assert.equal(q.technical_answer_status,"pending_independent_review");
  assert.equal(e.technical_answer_status,"pending_independent_review");
  for(let j=0;j<4;j++){
   const o=a.options[j];assert.equal(o.number,j+1);
   assert.equal(o.text,q.choices[j]);assert.equal(o.verdict,j+1===q.answer?"correct":"incorrect");
   assert.ok(o.rationale.length>=20);
   choices++;
  }
  total++;
 }
 for(const n of plan.legacyHolds){
  assert.equal(qs[n-1].subject_classification_review.status,"hold_do_not_publish");
  assert.equal(es[n-1].subject_classification_review.status,"hold_do_not_publish");
  assert.ok(audit[n-1].hold_reasons.includes("existing_subject_classification_hold"));
 }
}
assert.equal(total,40);assert.equal(choices,160);
const manifest=read("data/manifest.json");
assert.ok(manifest.banks.every(b=>!b.file.includes("/drafts/")));
const activeHolds=["engine","chassis","electrical","eco"].flatMap(s=>{
 const questions=[];
 for(let r=1;r<=9;r++){
  const folder=r===1?"":("round"+String(r).padStart(2,"0")+"/");
  questions.push(...read("data/past/drafts/"+folder+s+".json"));
 }
 return questions;
}).filter(x=>x.subject_classification_review?.status==="hold_do_not_publish");
assert.equal(activeHolds.length,55,"preserve all current subject holds");
console.log("PASS QA25: round06 electrical/eco 40 questions 160 option rationales (6+4 first-pass /14+16 held), seven inherited subject holds, 55 total subject holds, zero independent approvals/release.");
