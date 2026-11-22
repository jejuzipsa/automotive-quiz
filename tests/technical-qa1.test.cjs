'use strict';
const assert=require('node:assert/strict');
const fs=require('node:fs');
const path=require('node:path');
const root=process.env.AUTO_QUIZ_REPO||path.resolve(__dirname,'..');
const read=p=>JSON.parse(fs.readFileSync(path.join(root,p),'utf8'));
const subjects=['engine','chassis','electrical','eco'];
const updated=read('data/qa/technical-qa1-summary.json');
const changes=read('data/qa/technical-qa1-changes.json');
const holds=read('data/qa/technical-qa1-subject-holds.json');
const triage=read('data/qa/technical-qa1-triage.json');
const expanded=read('data/qa/technical-qa1-subject-holds-expanded.json');
assert.equal(updated.manually_changed_questions,28);
assert.equal(changes.length,28);
assert.equal(new Set(changes.map(x=>x.id)).size,28);
assert.equal(holds.length,14);
assert.equal(expanded.length,47);
assert.equal(new Set(expanded.map(x=>x.id)).size,47);
assert.equal(triage.total_items_scanned_by_machine,720);
assert.equal(triage.items_independently_technically_approved,0);
const qmap=new Map(),emap=new Map();
for(let round=1;round<=9;round++){
 const suffix=round===1?'':`round${String(round).padStart(2,'0')}/`;
 for(const subject of subjects){
  const questions=read(`data/past/drafts/${suffix}${subject}.json`);
  const explanations=read(`data/explanations/drafts/${suffix}${subject}.json`);
  assert.equal(questions.length,20);assert.equal(explanations.length,20);
  for(const q of questions){assert.ok(!qmap.has(q.id));qmap.set(q.id,q);assert.equal(q.subject,subject);assert.equal(q.round,round);}
  for(const e of explanations){assert.ok(!emap.has(e.id));emap.set(e.id,e);}
 }
}
assert.equal(qmap.size,720);assert.equal(emap.size,720);
let edited=0,held=0;
for(const q of qmap.values()){
 assert.equal(q.publishable,false);
 assert.equal(q.technical_answer_status,'pending_independent_review');
 assert.equal(q.choices.length,4);
 assert.equal(new Set(q.choices).size,4);
 assert.ok(q.answer>=1&&q.answer<=4);
 const e=emap.get(q.id);
 assert.ok(e,'missing explanation '+q.id);
 assert.equal(e.correct_answer,q.answer);
 assert.equal(e.correct_choice,q.choices[q.answer-1]);
 assert.equal(e.source_question_id,q.source_question_id);
 if(q.editorial_revision==='technical_qa1_reviewed'){edited++;assert.equal(e.editorial_revision,'technical_qa1_reviewed');}
 if(q.subject_classification_review){held++;assert.equal(q.subject_classification_review.status,'hold_do_not_publish');}
}
assert.equal(edited,28);assert.equal(held,47);
for(const change of changes){
 const q=qmap.get(change.id),e=emap.get(change.id);
 assert.ok(q&&e);
 assert.equal(q.question,change.after.question);
 assert.deepEqual(q.choices,change.after.choices);
 assert.equal(e.reason,change.after.reason);
 assert.equal(q.answer,change.answer_unchanged);
}
for(const hold of expanded){
 const q=qmap.get(hold.id);
 assert.equal(q.subject_classification_review.suggested_subject,hold.suggested_subject);
}
const manifest=read('data/manifest.json');
assert.ok(manifest.banks.every(b=>!b.file.includes('/drafts/')),'drafts may not appear in live bank');
console.log('PASS: 720/720 draft schema and separate explanations; 28 editorial edits; 47 classification holds; 0 publication approvals.');