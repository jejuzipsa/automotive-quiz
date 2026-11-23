"use strict";
const assert=require("node:assert/strict");
const fs=require("node:fs");
const path=require("node:path");
const root=process.env.AUTO_QUIZ_REPO||path.resolve(__dirname,"..");
const read=p=>JSON.parse(fs.readFileSync(path.join(root,p),"utf8"));
const ledger=read("data/qa/technical-qa12-13-edits-and-holds.json");
const earlier=read("data/qa/technical-qa2-changes.json");
const earlierHolds=read("data/qa/technical-qa1-subject-holds-expanded.json");
assert.equal(ledger.edits.length,2);
assert.equal(ledger.new_classification_holds.length,1);
assert.equal(ledger.classification_holds_before,48);
assert.equal(ledger.classification_holds_after,49);
assert.equal(earlierHolds.length,47);
const correctedIds=["auto-made-r02-s03-q03","auto-made-r02-s04-q15"];
assert.deepEqual(ledger.edits.map(x=>x.id).sort(),correctedIds.sort());
assert.ok(ledger.edits.every(c=>c.before.answer===c.after.answer&&c.before.correct_choice===c.before.choices[c.before.answer-1]));
assert.ok(ledger.edits.every(c=>c.after.correct_choice===c.after.choices[c.after.answer-1]));
assert.ok(ledger.edits.every(c=>!earlier.some(x=>x.id===c.id)),"do not supersede QA2 edits without a linked historical snapshot");
let total=0,supported=0,held=0,classified=0;
for(const [subject,qa,expectedSupport,expectedHold,heldNumbers] of [
 ["electrical","qa12",12,8,[2,7,8,10,13,16,18,19]],
 ["eco","qa13",11,9,[1,2,3,6,9,12,13,16,20]]
]){
 const q=read("data/past/drafts/round02/"+subject+".json"),e=read("data/explanations/drafts/round02/"+subject+".json");
 const audit=read("data/qa/technical-"+qa+"-r02-"+subject+"-option-audit.json");
 assert.equal(q.length,20);assert.equal(e.length,20);assert.equal(audit.length,20);
 assert.equal(new Set(audit.map(x=>x.id)).size,20);
 assert.equal(audit.filter(x=>x.evidence_grade==="source_supported_first_pass").length,expectedSupport);
 assert.equal(audit.filter(x=>x.evidence_grade==="needs_additional_model_or_syllabus_review").length,expectedHold);
 assert.deepEqual(audit.filter(x=>x.evidence_grade!=="source_supported_first_pass").map(x=>x.question_number),heldNumbers);
 for(let i=0;i<20;i++){
  const x=q[i],y=e[i],row=audit[i];
  assert.equal(x.id,y.id);assert.equal(x.id,row.id);assert.equal(x.subject,subject);assert.equal(x.round,2);
  assert.equal(x.question_number,i+1);assert.equal(x.track,"past");
  assert.equal(y.correct_answer,x.answer);assert.equal(y.correct_choice,x.choices[x.answer-1]);
  assert.equal(row.correct_number,x.answer);assert.equal(row.correct_choice,x.choices[x.answer-1]);
  assert.equal(row.question_at_review,x.question);
  assert.equal(x["technical_verification_"+qa].status,row.evidence_grade);
  assert.equal(y["technical_verification_"+qa].status,row.evidence_grade);
  assert.deepEqual(y["option_analysis_"+qa],row.options);
  assert.ok(row.source_urls.length>=1);
  assert.equal(row.options.length,4);
  assert.equal(row.final_technical_approval,false);assert.equal(row.web_publication,false);
  assert.equal(x["technical_verification_"+qa].final_technical_approval,false);
  assert.equal(x.publishable,false);assert.equal(x.review_status,"editorial_draft");
  assert.equal(x.technical_answer_status,"pending_independent_review");
  assert.equal(y.technical_answer_status,"pending_independent_review");
  if(x.subject_classification_review?.status==="hold_do_not_publish")classified++;
  for(let j=0;j<4;j++){
   const op=row.options[j];
   assert.equal(op.number,j+1);assert.equal(op.text,x.choices[j]);
   assert.equal(op.verdict,j+1===x.answer?"correct":"incorrect");
   assert.ok(op.rationale.length>=15);
   total++;
  }
  if(row.evidence_grade==="source_supported_first_pass")supported++;else held++;
 }
}
assert.equal(total,160);assert.equal(supported,23);assert.equal(held,17);
const eQ=read("data/past/drafts/round02/electrical.json"),eE=read("data/explanations/drafts/round02/electrical.json");
const evQ=read("data/past/drafts/round02/eco.json"),evE=read("data/explanations/drafts/round02/eco.json");
assert.equal(eQ[7].subject_classification_review.status,"hold_do_not_publish");
assert.equal(eE[7].subject_classification_review.status,"hold_do_not_publish");
assert.equal(eQ[7].subject_classification_review.suggested_subject,"chassis");
assert.equal(ledger.new_classification_holds[0].id,eQ[7].id);
assert.match(eQ[2].question,/고속 CAN/);assert.match(evQ[14].question,/HVIL/);
for(const item of ledger.edits){
 const q=(item.subject==="electrical"?eQ:evQ)[item.question_number-1];
 const e=(item.subject==="electrical"?eE:evE)[item.question_number-1];
 assert.equal(q.question,item.after.question);assert.deepEqual(q.choices,item.after.choices);
 assert.equal(e.reason,item.after.reason);assert.equal(e.correct_choice,item.after.correct_choice);
}
const manifest=read("data/manifest.json");
assert.ok(manifest.banks.every(b=>!b.file.includes("/drafts/")));
console.log("PASS QA12/13: 40 r02 electrical+eco problems / 160 option rationales, 23 1st-pass supported, 17 held, 2 editorial edits, new subject hold (+1 => 49), 0 final technical approvals/published reconstructed questions.");
