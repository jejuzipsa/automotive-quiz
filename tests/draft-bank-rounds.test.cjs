'use strict';
const assert=require('node:assert/strict');
const fs=require('node:fs');
const path=require('node:path');
const root=process.env.AUTO_QUIZ_REPO || path.resolve(__dirname,'local_repo_test');
const read=x=>JSON.parse(fs.readFileSync(path.join(root,x),'utf8'));
const subjects=['engine','chassis','electrical','eco'];
const ids=new Set(),sources=new Set();
let seen=0;
for(let round=1;round<=3;round++){
  const segment=round===1?'':`round${String(round).padStart(2,'0')}/`;
  for(const subject of subjects){
    const questions=read(`data/past/drafts/${segment}${subject}.json`);
    const explanations=read(`data/explanations/drafts/${segment}${subject}.json`);
    assert.equal(questions.length,20);
    assert.equal(explanations.length,20);
    const eById=new Map(explanations.map(x=>[x.id,x]));
    assert.equal(eById.size,20);
    for(let i=0;i<questions.length;i++){
      const q=questions[i];
      assert.equal(q.subject,subject);
      assert.equal(q.round,round);
      assert.equal(q.question_number,i+1);
      assert.equal(q.track,'past');
      assert.equal(q.origin,'independently_reconstructed_from_exam_concepts');
      assert.equal(q.review_status,'editorial_draft');
      assert.equal(q.technical_answer_status,'pending_independent_review');
      assert.equal(q.publishable,false);
      assert.ok(q.question?.endsWith('?'));
      assert.ok(q.question.length>=25);
      assert.equal(q.choices?.length,4);
      assert.equal(new Set(q.choices).size,4);
      assert.ok(q.answer>=1 && q.answer<=4);
      assert.ok(!ids.has(q.id),`duplicate question ${q.id}`);ids.add(q.id);
      assert.ok(!sources.has(q.source_question_id),`duplicate source ${q.source_question_id}`);sources.add(q.source_question_id);
      assert.equal(q.explanation_id,q.id);
      assert.ok(!Object.hasOwn(q,'explanation'));
      const e=eById.get(q.id);
      assert.ok(e,`Missing explanation for ${q.id}`);
      assert.equal(e.question_id,q.id);
      assert.equal(e.source_question_id,q.source_question_id);
      assert.equal(e.subject,subject);
      assert.equal(e.correct_answer,q.answer);
      assert.equal(e.correct_choice,q.choices[q.answer-1]);
      assert.ok(e.reason.length>45);
      assert.ok(e.key_point.length>12);
      assert.equal(e.review_status,'editorial_draft');
      assert.equal(e.technical_answer_status,'pending_independent_review');
      seen++;
    }
  }
}
assert.equal(seen,240);
const progress=read('data/past/drafts/progress.json');
assert.equal(progress.draft_questions_created,240);
assert.equal(progress.separate_explanations_created,240);
assert.equal(progress.pending_question_rewrites,480);
assert.equal(progress.technical_answer_verified,0);
assert.equal(progress.site_connected,0);
const live=read('data/manifest.json');
assert.ok(live.banks.every(b=>!b.file.includes('/drafts/')), 'drafts must stay off live quiz');
console.log('PASS: 240 authored draft questions, 240 separate explanations, 240 1:1 ID/answer mappings; no live publication; 480 pending.');