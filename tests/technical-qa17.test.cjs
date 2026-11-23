"use strict";
const assert=require("node:assert/strict");
const fs=require("node:fs");
const path=require("node:path");
const root=process.env.AUTO_QUIZ_REPO||path.resolve(__dirname,"..");
const read=p=>JSON.parse(fs.readFileSync(path.join(root,p),"utf8"));
const ledger=read("data/qa/technical-qa17-edits-and-holds.json");
assert.equal(ledger.modifications.length,2);
assert.equal(ledger.new_classification_holds.length,2);
assert.equal(ledger.historical_subject_holds_before,49);
assert.equal(ledger.current_subject_holds_after,51);
assert.deepEqual(ledger.modifications.map(x=>x.id).sort(),["auto-made-r03-s04-q16","auto-made-r03-s04-q17"].sort());
const priorQA2=read("data/qa/technical-qa2-changes.json");
assert.ok(ledger.modifications.every(x=>!priorQA2.some(z=>z.id===x.id)),"QA2 history never overwritten");
let total=0,supported=0,held=0;
for(const [subject,expectedS,expectedH] of [["electrical",8,12],["eco",5,15]]){
 const qs=read("data/past/drafts/round03/"+subject+".json");
 const es=read("data/explanations/drafts/round03/"+subject+".json");
 const audit=read("data/qa/technical-qa17-r03-"+subject+"-option-audit.json");
 assert.equal(qs.length,20);assert.equal(es.length,20);assert.equal(audit.length,20);
 assert.equal(new Set(audit.map(x=>x.id)).size,20);
 assert.equal(audit.filter(x=>x.evidence_grade==="source_supported_first_pass").length,expectedS);
 assert.equal(audit.filter(x=>x.evidence_grade==="needs_additional_model_or_syllabus_review").length,expectedH);
 for(let i=0;i<20;i++){
  const q=qs[i],e=es[i],row=audit[i];
  assert.equal(q.id,e.id);assert.equal(q.id,row.id);
  assert.equal(q.subject,subject);assert.equal(q.round,3);assert.equal(q.question_number,i+1);
  assert.equal(q.track,"past");assert.equal(q.question,row.question_at_review);
  assert.equal(row.correct_number,q.answer);assert.equal(row.correct_choice,q.choices[q.answer-1]);
  assert.equal(e.correct_answer,q.answer);assert.equal(e.correct_choice,row.correct_choice);
  assert.equal(q.technical_verification_qa17.status,row.evidence_grade);
  assert.equal(e.technical_verification_qa17.status,row.evidence_grade);
  assert.deepEqual(e.option_analysis_qa17,row.options);
  assert.ok(row.source_urls.length>=1);
  assert.equal(row.options.length,4);assert.equal(row.final_technical_approval,false);
  assert.equal(row.web_publication,false);assert.equal(q.publishable,false);
  assert.equal(q.review_status,"editorial_draft");assert.equal(q.technical_answer_status,"pending_independent_review");
  for(let j=0;j<4;j++){
   const o=row.options[j];assert.equal(o.number,j+1);assert.equal(o.text,q.choices[j]);
   assert.equal(o.verdict,j+1===q.answer?"correct":"incorrect");assert.ok(o.rationale.length>=14);total++;
  }
  if(row.evidence_grade==="source_supported_first_pass")supported++;else held++;
 }
}
assert.equal(total,160);assert.equal(supported,13);assert.equal(held,27);
for(const hold of ledger.new_classification_holds){
 const q=read("data/past/drafts/round03/"+hold.subject+".json")[hold.id.endsWith("q08")?7:14];
 const e=read("data/explanations/drafts/round03/"+hold.subject+".json")[hold.id.endsWith("q08")?7:14];
 assert.equal(q.id,hold.id);assert.equal(e.id,hold.id);
 assert.equal(q.subject_classification_review.status,"hold_do_not_publish");
 assert.equal(e.subject_classification_review.status,"hold_do_not_publish");
 assert.equal(q.subject_classification_review.suggested_subject,hold.suggested_subject);
}
for(const edit of ledger.modifications){
 const n=edit.question_number-1;
 const q=read("data/past/drafts/round03/"+edit.subject+".json")[n];
 const e=read("data/explanations/drafts/round03/"+edit.subject+".json")[n];
 assert.equal(q.id,edit.id);assert.equal(q.question,edit.after.question);
 assert.deepEqual(q.choices,edit.after.choices);
 assert.equal(q.answer,edit.before.answer);
 assert.equal(e.correct_choice,edit.after.correct_choice);assert.equal(e.reason,edit.after.reason);
 assert.equal(q.qa17_revision.final_technical_approval,false);
}
assert.match(read("data/past/drafts/round03/eco.json")[15].question,/절연 이상/);
assert.match(read("data/past/drafts/round03/eco.json")[16].question,/회생제동력/);
assert.ok(read("data/manifest.json").banks.every(x=>!x.file.includes("/drafts/")));
console.log("PASS QA17: round03 electrical+eco 40 questions 160 rationales, 13 firstpass source supported, 27 held; 2 edits, 2 new subject holds, 0 independent approvals/publication.");
