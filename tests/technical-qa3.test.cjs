'use strict';
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const root = process.env.AUTO_QUIZ_REPO || path.resolve(__dirname,'..');
const read = p => JSON.parse(fs.readFileSync(path.join(root,p),'utf8'));
const reviews = read('data/qa/technical-qa3-engine-r01-option-audit.json');
const changes = read('data/qa/technical-qa3-engine-r01-changes.json');
const summary = read('data/qa/technical-qa3-summary.json');
const qa5ById = new Map(read('data/qa/technical-qa5-changes.json').map(x=>[x.id,x]));
const qa39ById = new Map(read('data/qa/technical-qa39-editorial-edits.json').map(x=>[x.id,x]));
const q = read('data/past/drafts/engine.json');
const e = read('data/explanations/drafts/engine.json');
const qmap = new Map(q.map(x=>[x.id,x]));
const emap = new Map(e.map(x=>[x.id,x]));
assert.equal(qmap.size,20);assert.equal(emap.size,20);
assert.equal(reviews.length,20);assert.equal(changes.length,10);
assert.equal(new Set(reviews.map(x=>x.id)).size,20);
assert.equal(new Set(changes.map(x=>x.id)).size,10);
assert.equal(reviews.filter(x=>x.evidence_grade==='source_supported_first_pass').length,17);
assert.equal(reviews.filter(x=>x.evidence_grade==='needs_additional_model_or_quality_review').length,3);
assert.equal(summary.question_explanation_links_checked_all,720);
assert.equal(summary.independent_final_technical_approvals,0);
assert.equal(summary.published_to_site,0);
const history1 = new Set(read('data/qa/technical-qa1-changes.json').map(x=>x.id));
const history2 = new Set(read('data/qa/technical-qa2-changes.json').map(x=>x.id));
for (const change of changes) {
  assert.ok(!history1.has(change.id),`QA1 historical draft overwritten ${change.id}`);
  assert.ok(!history2.has(change.id),`QA2 historical draft overwritten ${change.id}`);
  const item=qmap.get(change.id),exp=emap.get(change.id);
  assert.ok(item&&exp);
  const newer=qa39ById.get(change.id);
  if(newer){
    assert.equal(newer.before.question,change.after.question);
    assert.deepEqual(newer.before.choices,change.after.choices);
    assert.equal(newer.before.reason,change.after.reason);
    assert.equal(item.question,newer.after.question);
    assert.deepEqual(item.choices,newer.after.choices);
  }else{
    assert.equal(item.question,change.after.question);
    assert.deepEqual(item.choices,change.after.choices);
    assert.equal(exp.reason,change.after.reason);
  }
  assert.equal(item.answer,change.answer_number_unchanged);
}
for (const x of reviews) {
  const item=qmap.get(x.id), exp=emap.get(x.id);
  assert.ok(item&&exp,`missing ${x.id}`);
  const later=qa5ById.get(x.id), newer=qa39ById.get(x.id);
  if(newer){
    assert.equal(newer.before.question,x.question_after);
    assert.deepEqual(newer.before.choices,x.options.map(o=>o.text));
    assert.equal(item.question,newer.after.question);
    assert.deepEqual(item.choices,newer.after.choices);
  }else if(later){
    assert.equal(later.before.question,x.question_after,'QA3 historical question snapshot');
    assert.equal(later.before.choices[later.before.answer-1],x.correct_choice_after);
    assert.deepEqual(later.before.choices,x.options.map(o=>o.text));
    assert.equal(item.question,later.after.question);
    assert.deepEqual(item.choices,later.after.choices);
  }else{
    assert.equal(item.question,x.question_after);
    assert.equal(item.choices[item.answer-1],x.correct_choice_after);
  }
  assert.equal(item.answer,x.correct_number);
  assert.equal(exp.correct_choice,item.choices[item.answer-1]);
  assert.equal(item.explanation_id,exp.id);
  assert.equal(item.technical_verification_qa3.status,x.evidence_grade);
  assert.equal(exp.technical_verification_qa3.status,x.evidence_grade);
  assert.equal(item.technical_answer_status,'pending_independent_review');
  assert.equal(exp.technical_answer_status,'pending_independent_review');
  assert.equal(item.publishable,false);
  assert.equal(x.final_approval,false);
  assert.equal(x.web_publication,false);
  assert.equal(x.options.length,4);
  assert.equal(exp.option_analysis.length,4);
  assert.ok(x.references.length>0);
  for(let i=0;i<4;i++){
    const o=x.options[i],a=exp.option_analysis[i];
    assert.equal(o.number,i+1);
    assert.equal(o.text,later?later.before.choices[i]:newer?newer.before.choices[i]:item.choices[i]);
    assert.equal(o.verdict,i+1===item.answer?'correct':'incorrect');
    if(!later){assert.equal(a.verdict,o.verdict);}
    else{
      assert.equal(a.text,item.choices[i]);
      assert.equal(a.verdict,i+1===item.answer?'correct':'incorrect');
    }
    assert.ok(o.rationale.length>=12);
  }
  assert.equal(item.technical_verification_qa3.final_technical_approval,false);
}
const manifest=read('data/manifest.json');
assert.ok(manifest.banks.every(x=>!x.file.includes('/drafts/')));
console.log('PASS QA3: engine r01 20 questions/80 options source-checked, 17 first-pass supported, 3 pending; 10 editorial fixes; no final approval or live publication.');