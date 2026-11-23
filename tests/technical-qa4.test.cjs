"use strict";
const assert=require("node:assert/strict");
const fs=require("node:fs");
const path=require("node:path");
const root=path.resolve(__dirname,"..");
const read=p=>JSON.parse(fs.readFileSync(path.join(root,p),"utf8"));
const audit=read("data/qa/technical-qa4-chassis-r01-editorial-audit.json");
const q=read("data/past/drafts/chassis.json");
const explanations=read("data/explanations/drafts/chassis.json");
const ids=new Set(), exp=new Map(explanations.map(x=>[x.id,x]));
assert.equal(audit.records.length,20);
assert.equal(q.length,20);
assert.equal(exp.size,20);
assert.equal(audit.first_pass_option_by_option_verified_in_this_batch,0);
assert.equal(audit.technical_answer_final_approvals,0);
assert.equal(audit.published_reconstructed_questions,0);
assert.equal(audit.question_edits_in_this_batch,0);
assert.equal(audit.explanation_edits_in_this_batch,0);
for(let i=0;i<20;i++){
  const item=q[i],auditItem=audit.records[i],e=exp.get(item.id);
  assert.ok(e);
  assert.equal(auditItem.id,item.id);
  assert.equal(auditItem.question_number,i+1);
  assert.equal(auditItem.question_at_review,item.question);
  assert.equal(auditItem.recorded_answer_number,item.answer);
  assert.ok(!ids.has(item.id));ids.add(item.id);
  assert.equal(item.explanation_id,e.id);
  assert.equal(e.correct_answer,item.answer);
  assert.equal(e.correct_choice,item.choices[item.answer-1]);
  assert.equal(item.publishable,false);
  assert.equal(item.technical_answer_status,"pending_independent_review");
  assert.equal(auditItem.technical_answer_final_approval,false);
  assert.equal(auditItem.publishable,false);
}
for(const n of [2,4]){
  assert.equal(q[n-1].subject_classification_review?.status,"hold_do_not_publish");
  assert.ok(audit.records[n-1].risk_flags.includes("existing_subject_hold"));
}
for(const n of [13,19])assert.ok(audit.records[n-1].risk_flags.includes("near_duplicate"));
assert.ok(audit.records[9].risk_flags.includes("explanation_alignment"));
const manifest=read("data/manifest.json");
assert.ok(manifest.banks.every(x=>!x.file.includes("/drafts/")));
console.log("PASS QA4: 20 chassis editorial records, existing holds and duplicate pairs flagged; zero technical final approvals or public past releases.");
