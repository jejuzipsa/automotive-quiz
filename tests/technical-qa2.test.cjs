'use strict';
const assert=require('node:assert/strict');
const fs=require('node:fs');
const path=require('node:path');
const root=process.env.AUTO_QUIZ_REPO||path.resolve(__dirname,'..');
const read=p=>JSON.parse(fs.readFileSync(path.join(root,p),'utf8'));
const subjects=['engine','chassis','electrical','eco'];
const changes=read('data/qa/technical-qa2-changes.json');
const qa15ById=new Map(read('data/qa/technical-qa15-r03-engine-edits.json').edits.map(x=>[x.id,x]));
const qa18ById=new Map([...read('data/qa/technical-qa18-r04-chassis-edits.json').editorial_corrections,...read('data/qa/technical-qa18-r04-electrical-edits-and-holds.json').editorial_edits].map(x=>[x.id,x]));
const falsePositive=read('data/qa/technical-qa2-false-positive.json');
const classifications=read('data/qa/technical-qa2-classifications.json');
const firstPass=read('data/qa/technical-qa2-firstpass-evidence.json');
const summary=read('data/qa/technical-qa2-summary.json');
assert.equal(changes.length,129);assert.equal(new Set(changes.map(x=>x.id)).size,129);
assert.equal(falsePositive.length,1);assert.equal(falsePositive[0].id,'auto-made-r02-s03-q18');
assert.equal(classifications.length,47);assert.equal(firstPass.length,7);
assert.equal(summary.distractor_heuristic_candidates_editorially_rewritten,128);
assert.equal(summary.distractor_heuristic_false_positive_no_change,1);
assert.equal(summary.additional_out_of_domain_EV_inverter_rewrite,1);
assert.equal(summary.technical_final_approved,0);
assert.equal(summary.published_to_live_bank,0);
const qMap=new Map(),eMap=new Map();
for(let round=1;round<=9;round++) {
  const prefix=round===1?'':`round${String(round).padStart(2,'0')}/`;
  for(const subject of subjects) {
    const questions=read(`data/past/drafts/${prefix}${subject}.json`);
    const explanations=read(`data/explanations/drafts/${prefix}${subject}.json`);
    assert.equal(questions.length,20);assert.equal(explanations.length,20);
    for(const q of questions){assert.ok(!qMap.has(q.id));qMap.set(q.id,q);assert.equal(q.subject,subject);assert.equal(q.round,round);}
    for(const e of explanations){assert.ok(!eMap.has(e.id));eMap.set(e.id,e);}
  }
}
assert.equal(qMap.size,720);assert.equal(eMap.size,720);
const updated= new Set(changes.map(x=>x.id));
let revisions=0,holds=0,falsePositiveFound=0,firstPassed=0;
for(const q of qMap.values()){
  const e=eMap.get(q.id);assert.ok(e);
  assert.equal(q.publishable,false);assert.equal(q.technical_answer_status,'pending_independent_review');
  assert.equal(e.technical_answer_status,'pending_independent_review');
  assert.equal(q.choices.length,4);assert.equal(new Set(q.choices).size,4);
  assert.ok(q.answer>=1&&q.answer<=4);
  assert.equal(e.correct_choice,q.choices[q.answer-1]);assert.equal(e.correct_answer,q.answer);
  assert.equal(q.explanation_id,q.id);assert.equal(e.question_id,q.id);
  if(updated.has(q.id)){revisions++;assert.equal(q.distractor_review.review_status,'editorially_rewritten_not_technically_approved');}
  if(q.id===falsePositive[0].id){falsePositiveFound++;assert.equal(q.distractor_review.review_status,'editorial_false_positive_no_edit');}
  if(q.subject_classification_review){holds++;assert.equal(q.subject_classification_review.status,'hold_do_not_publish');}
  if(q.technical_reference_first_pass){firstPassed++;assert.equal(q.technical_reference_first_pass.status,'source_supported_needs_final_editor_signoff');}
}
assert.equal(revisions,129);assert.equal(falsePositiveFound,1);assert.equal(holds,52);assert.equal(firstPassed,7); // 47 historical + QA10 + QA12 + QA17 two + QA18 engine-idle hold
for(const change of changes){
 const q=qMap.get(change.id),e=eMap.get(change.id);
 assert.ok(q&&e,change.id);
 const later=qa15ById.get(change.id)||qa18ById.get(change.id);
 if(later){
  assert.equal(later.before.question,change.after.question,"Later QA15/18 must supersede exact QA2 question");
  assert.deepEqual(later.before.choices,change.after.choices);
  assert.equal(later.before.reason,change.after.reason);
  assert.equal(q.question,later.after.question);
  assert.deepEqual(q.choices,later.after.choices);
  assert.equal(e.reason,later.after.reason);
 }else{
  assert.equal(q.question,change.after.question);
  assert.deepEqual(q.choices,change.after.choices);
  assert.equal(e.reason,change.after.reason);
 }
 assert.equal(q.answer,change.answer);
}
for(const classification of classifications){
 const q=qMap.get(classification.id),e=eMap.get(classification.id);
 assert.ok(q&&e);
 assert.equal(q.subject_classification_review.status,'hold_do_not_publish');
 assert.equal(e.subject_classification_review.status,'hold_do_not_publish');
 assert.equal(q.subject_classification_review.qa2_manual_screening,classification.qa2_manual_screening);
}
for(const row of firstPass){
 const q=qMap.get(row.id);assert.ok(q);
 assert.equal(row.answer,q.answer);
 assert.equal(row.correct_choice,q.choices[q.answer-1]);
 assert.ok(row.reference_urls.length>0);
 assert.equal(row.approval,'NOT_FINAL_TECHNICAL_APPROVAL');
}
const live=read('data/manifest.json');
assert.ok(live.banks.every(b=>!b.file.includes('/drafts/')));
console.log('PASS QA2: 720 question+explanation links, 129 revised, 128 distractor candidates corrected, 1 false positive, 47 holds, 7 first-pass technical notes, 0 approvals or live releases.');