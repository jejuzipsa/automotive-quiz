'use strict';
const assert=require('node:assert/strict');
const fs=require('node:fs');
const path=require('node:path');
const root=process.env.AUTO_QUIZ_REPO || path.resolve(__dirname,'..');
const read=x=>JSON.parse(fs.readFileSync(path.join(root,x),'utf8'));
const subjects=['engine','chassis','electrical','eco'];
const ids=new Set(),sources=new Set();
let seen=0;
for(let round=1;round<=9;round++){
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
assert.equal(seen,720);
const progress=read('data/past/drafts/progress.json');
assert.equal(progress.draft_questions_created,720);
assert.equal(progress.separate_explanations_created,720);
assert.equal(progress.pending_question_rewrites,0);
assert.equal(progress.technical_answer_verified,0);
assert.equal(progress.site_connected,0);

// Known incorrect reference answers were reconstructed using explicitly checked principles.
const sourceShim=read('data/past/drafts/round04/engine.json')[1];
const shimExplanation=read('data/explanations/drafts/round04/engine.json')[1];
assert.match(sourceShim.choices[sourceShim.answer-1], /두꺼운/);
assert.match(shimExplanation.reason, /0\\.10 mm|두껍/);
const planet=read('data/past/drafts/round05/eco.json')[11];
const planetExplanation=read('data/explanations/drafts/round05/eco.json')[11];
// The prior planetary-gear interpretation remains in the QA22 time-stamped audit,
 // but QA42 independently replaced the off-scope item with a hybrid power-split question.
const historicalPlanet=read('data/qa/technical-qa22-r05-eco-option-audit.json')[11];
const qa42Ledger=read('data/qa/technical-qa42-eco-scope-replacements.json').find(x=>x.id===planet.id);
assert.ok(qa42Ledger);
assert.match(historicalPlanet.correct_choice, /같은 정방향/);
assert.equal(historicalPlanet.question_at_review,qa42Ledger.before.question);
assert.match(planet.question, /파워스플릿/);
assert.match(planet.choices[planet.answer-1], /주행과 발전을 배분/);
assert.match(planetExplanation.reason, /동력분기/);
assert.equal(planet.answer,qa42Ledger.before.answer);
const live=read('data/manifest.json');
assert.ok(live.banks.every(b=>!b.file.includes('/drafts/')), 'drafts must stay off live quiz');
console.log('PASS: 720 authored draft questions, 720 separate explanations, 720 1:1 ID/answer mappings; no live publication; 0 pending.');