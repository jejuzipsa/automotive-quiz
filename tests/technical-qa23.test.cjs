"use strict";
const assert=require("node:assert/strict");
const fs=require("node:fs");
const path=require("node:path");
const root=process.env.AUTO_QUIZ_REPO||path.resolve(__dirname,"..");
const read=p=>JSON.parse(fs.readFileSync(path.join(root,p),"utf8"));
const qs=read("data/past/drafts/round06/engine.json");
const es=read("data/explanations/drafts/round06/engine.json");
const audit=read("data/qa/technical-qa23-r06-engine-option-audit.json");
const ledger=read("data/qa/technical-qa23-r06-engine-edits-and-holds.json");
const qa40ById=new Map(read("data/qa/technical-qa40-out-of-scope-replacements.json").map(x=>[x.id,x]));
assert.equal(qs.length,20);assert.equal(es.length,20);assert.equal(audit.length,20);
assert.equal(audit.filter(x=>x.evidence_grade==="source_supported_first_pass").length,8);
assert.equal(audit.filter(x=>x.evidence_grade==="needs_additional_model_or_syllabus_review").length,12);
assert.deepEqual(audit.filter(x=>x.evidence_grade==="source_supported_first_pass").map(x=>x.question_number),[5,7,8,13,15,18,19,20]);
assert.equal(ledger.previous_current_subject_holds,53);
assert.equal(ledger.current_subject_holds_after,55);
assert.equal(ledger.new_subject_holds.length,2);
assert.deepEqual(ledger.new_subject_holds.map(x=>x.question_number),[4,14]);
assert.equal(ledger.editorial_revisions.length,1);
const edit=ledger.editorial_revisions[0];
assert.equal(edit.question_number,3);
assert.equal(edit.id,qs[2].id);
assert.equal(edit.before.answer,edit.after.answer);
assert.match(edit.before.question,/축 유격/);
assert.match(edit.after.question,/반경방향 유격/);
assert.equal(edit.after.correct_choice,edit.after.choices[edit.after.answer-1]);
let n=0;
for(let i=0;i<20;i++){
 const q=qs[i],e=es[i],a=audit[i],later=qa40ById.get(q.id);
 assert.equal(q.id,e.id);assert.equal(q.id,a.id);
 assert.equal(q.round,6);assert.equal(q.subject,"engine");assert.equal(q.question_number,i+1);
 assert.equal(a.question_at_review,later?later.before.question:q.question);assert.equal(a.correct_number,q.answer);
 assert.equal(a.correct_choice,later?later.before.correct_choice:q.choices[q.answer-1]);assert.equal(e.correct_answer,q.answer);assert.equal(e.correct_choice,q.choices[q.answer-1]);
 assert.equal(q.technical_verification_qa23.status,a.evidence_grade);
 assert.equal(e.technical_verification_qa23.status,a.evidence_grade);
 assert.deepEqual(e.option_analysis_qa23,later?later.after.option_analysis:a.options);
 assert.equal(a.options.length,4);assert.ok(a.source_urls.length>0);
 assert.equal(a.final_technical_approval,false);assert.equal(a.web_publication,false);
 assert.equal(q.technical_verification_qa23.final_technical_approval,false);
 assert.equal(e.technical_verification_qa23.final_technical_approval,false);
 assert.equal(q.publishable,false);assert.equal(q.technical_answer_status,"pending_independent_review");
 assert.equal(e.technical_answer_status,"pending_independent_review");
 for(let j=0;j<4;j++){
  const o=a.options[j];assert.equal(o.number,j+1);assert.equal(o.text,later?later.before.choices[j]:q.choices[j]);
  assert.equal(o.verdict,j+1===q.answer?"correct":"incorrect");
  assert.ok(o.rationale.length>=13);n++;
 }
}
assert.equal(n,80);
for(const n of [4,14]){
 assert.equal(qs[n-1].subject_classification_review.status,"hold_do_not_publish");
 assert.equal(qs[n-1].subject_classification_review.suggested_subject,"electrical");
 assert.equal(es[n-1].subject_classification_review.status,"hold_do_not_publish");
 assert.ok(audit[n-1].hold_reasons.includes("subject_classification_hold"));
}
assert.equal(qs[2].question,edit.after.question);
assert.deepEqual(qs[2].choices,edit.after.choices);
assert.equal(es[2].reason,edit.after.reason);
const oldHolds=read("data/qa/technical-qa1-subject-holds-expanded.json");
assert.equal(oldHolds.length,47);
assert.ok(!oldHolds.some(x=>x.id===qs[3].id||x.id===qs[13].id));
const live=read("data/manifest.json");
assert.ok(live.banks.every(x=>!x.file.includes("/drafts/")));
console.log("PASS QA23: round-six engine 20 questions 80 rationales (8 firstpass supported / 12 hold), 1 radial-bearing duplicate fix, +2 classification holds (55 current); zero independent approvals or release.");
