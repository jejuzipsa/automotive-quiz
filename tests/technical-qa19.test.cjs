"use strict";
const assert=require("node:assert/strict");
const fs=require("node:fs");
const path=require("node:path");
const root=process.env.AUTO_QUIZ_REPO||path.resolve(__dirname,"..");
const read=p=>JSON.parse(fs.readFileSync(path.join(root,p),"utf8"));
const ledger=read("data/qa/technical-qa19-r05-edits-and-holds.json");
assert.equal(ledger.edits.length,3);
assert.equal(ledger.added_subject_holds.length,1);
assert.equal(ledger.classification_holds_before,52);
assert.equal(ledger.classification_holds_after,53);
assert.deepEqual(ledger.edits.map(x=>x.id).sort(),["auto-made-r05-s03-q11","auto-made-r05-s04-q17","auto-made-r05-s04-q18"].sort());
const priorQa1=read("data/qa/technical-qa1-changes.json"),priorQa2=read("data/qa/technical-qa2-changes.json");
const r5q={},r5e={};
for(const s of ["engine","chassis","electrical","eco"]){
 r5q[s]=read("data/past/drafts/round05/"+s+".json");
 r5e[s]=read("data/explanations/drafts/round05/"+s+".json");
 assert.equal(r5q[s].length,20);assert.equal(r5e[s].length,20);
}
for(const edit of ledger.edits){
 const q=r5q[edit.subject][edit.question_number-1],e=r5e[edit.subject][edit.question_number-1];
 assert.equal(q.id,edit.id);assert.equal(e.id,edit.id);
 assert.equal(q.question,edit.after.question);
 assert.deepEqual(q.choices,edit.after.choices);
 assert.equal(q.answer,edit.before.answer);
 assert.equal(e.reason,edit.after.reason);
 assert.equal(e.correct_choice,edit.after.correct_choice);
 assert.equal(q.choices[q.answer-1],e.correct_choice);
 assert.equal(q.publishable,false);
 assert.equal(q.qa19_revision.final_approved,false);
 assert.equal(e.qa19_revision.final_approved,false);
 const old=priorQa2.find(x=>x.id===edit.id)||priorQa1.find(x=>x.id===edit.id);
 if(old){
  assert.equal(edit.before.question,old.after.question);
  assert.deepEqual(edit.before.choices,old.after.choices);
  assert.equal(edit.before.reason,old.after.reason);
 }
}
const h=ledger.added_subject_holds[0],heldQ=r5q.engine[8],heldE=r5e.engine[8];
assert.equal(h.id,"auto-made-r05-s01-q09");
assert.equal(h.id,heldQ.id);
assert.equal(heldQ.subject_classification_review.status,"hold_do_not_publish");
assert.equal(heldE.subject_classification_review.status,"hold_do_not_publish");
assert.equal(heldQ.subject_classification_review.suggested_subject,"chassis");
const audit=read("data/qa/technical-qa19-r05-engine-option-audit.json");
assert.equal(audit.length,20);
assert.equal(new Set(audit.map(x=>x.id)).size,20);
assert.equal(audit.filter(x=>x.evidence_grade==="source_supported_first_pass").length,10);
assert.equal(audit.filter(x=>x.evidence_grade==="needs_additional_model_or_syllabus_review").length,10);
let count=0;
for(let i=0;i<20;i++){
 const q=r5q.engine[i],e=r5e.engine[i],a=audit[i];
 assert.equal(q.id,e.id);assert.equal(q.id,a.id);
 assert.equal(q.round,5);assert.equal(q.subject,"engine");assert.equal(q.question_number,i+1);
 assert.equal(q.question,a.question_at_review);
 assert.equal(a.correct_number,q.answer);
 assert.equal(a.correct_choice,q.choices[q.answer-1]);
 assert.equal(e.correct_answer,q.answer);assert.equal(e.correct_choice,a.correct_choice);
 assert.equal(q.technical_verification_qa19.status,a.evidence_grade);
 assert.equal(e.technical_verification_qa19.status,a.evidence_grade);
 assert.deepEqual(e.option_analysis_qa19,a.options);
 assert.equal(a.options.length,4);
 assert.equal(a.independent_final_technical_approval,false);
 assert.equal(a.web_publication,false);
 assert.ok(a.source_urls.length>0);
 assert.equal(q.publishable,false);
 assert.equal(q.review_status,"editorial_draft");
 assert.equal(q.technical_answer_status,"pending_independent_review");
 for(let j=0;j<4;j++){
  const o=a.options[j];assert.equal(o.number,j+1);
  assert.equal(o.text,q.choices[j]);
  assert.equal(o.verdict,j+1===q.answer?"correct":"incorrect");
  assert.ok(o.rationale.length>=16);count++;
 }
}
assert.equal(count,80);
const manifest=read("data/manifest.json");
assert.ok(manifest.banks.every(b=>!b.file.includes("/drafts/")));
console.log("PASS QA19: 5th round engine 20/80 per-choice reasons (10 first-pass supported, 10 held), 3 concept quality edits, new hold #53, 0 public reconstructed-past questions or final approvals.");
