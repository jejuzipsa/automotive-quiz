"use strict";
const assert=require("node:assert/strict");
const fs=require("node:fs");
const path=require("node:path");
const root=process.env.AUTO_QUIZ_REPO||path.resolve(__dirname,"..");
const read=p=>JSON.parse(fs.readFileSync(path.join(root,p),"utf8"));
const subjects=["engine","chassis","electrical","eco"];
const counts={engine:[8,12],chassis:[10,10],electrical:[12,8],eco:[5,15]};
const knownEdits=[
 ...read("data/qa/technical-qa18-r04-chassis-edits.json").editorial_corrections,
 ...read("data/qa/technical-qa18-r04-electrical-edits-and-holds.json").editorial_edits
];
assert.equal(knownEdits.length,3);
assert.deepEqual(knownEdits.map(x=>x.id).sort(),["auto-made-r04-s02-q08","auto-made-r04-s02-q12","auto-made-r04-s03-q10"].sort());
const qa2=read("data/qa/technical-qa2-changes.json");
const qa41ById=new Map(read("data/qa/technical-qa41-chassis-scope-replacements.json").map(x=>[x.id,x]));
const qa42ById=new Map(read("data/qa/technical-qa42-eco-scope-replacements.json").map(x=>[x.id,x]));
const qa44ById=new Map(read("data/qa/technical-qa44-later-scope-edits.json").map(x=>[x.id,x]));
let totalQuestions=0,totalOptions=0,sourceSupported=0,held=0;
for(const subject of subjects){
 const qs=read("data/past/drafts/round04/"+subject+".json");
 const es=read("data/explanations/drafts/round04/"+subject+".json");
 const audit=read("data/qa/technical-qa18-r04-"+subject+"-option-audit.json");
 assert.equal(qs.length,20);assert.equal(es.length,20);assert.equal(audit.length,20);
 assert.equal(new Set(audit.map(x=>x.id)).size,20);
 const s=audit.filter(x=>x.evidence_grade==="source_supported_first_pass").length;
 const h=audit.filter(x=>x.evidence_grade==="needs_additional_model_or_syllabus_review").length;
 assert.equal(s,counts[subject][0]);assert.equal(h,counts[subject][1]);
 sourceSupported+=s;held+=h;
 for(let i=0;i<20;i++){
  const q=qs[i],e=es[i],a=audit[i],latest=qa44ById.get(q.id)||qa42ById.get(q.id)||qa41ById.get(q.id);
  assert.equal(q.id,e.id);assert.equal(q.id,a.id);
  assert.equal(q.round,4);assert.equal(q.subject,subject);assert.equal(q.question_number,i+1);
  assert.equal(a.question_at_review,latest?latest.before.question:q.question);
  assert.equal(a.correct_number,q.answer);
  assert.equal(a.correct_choice,latest?latest.before.correct_choice:q.choices[q.answer-1]);
  assert.equal(e.correct_answer,q.answer);
  assert.equal(e.correct_choice,q.choices[q.answer-1]);
  assert.equal(q.technical_verification_qa18.status,a.evidence_grade);
  assert.equal(e.technical_verification_qa18.status,a.evidence_grade);
  assert.deepEqual(e.option_analysis_qa18,latest?latest.after.option_analysis:a.options);
  assert.equal(a.independent_final_technical_approval,false);
  assert.equal(a.web_publication,false);
  assert.equal(q.publishable,false);
  assert.equal(q.review_status,"editorial_draft");
  assert.equal(q.technical_answer_status,"pending_independent_review");
  assert.equal(e.technical_answer_status,"pending_independent_review");
  assert.ok(a.source_urls.length>=1);
  assert.equal(a.options.length,4);
  for(let j=0;j<4;j++){
   const o=a.options[j];assert.equal(o.number,j+1);
   assert.equal(o.text,latest?latest.before.choices[j]:q.choices[j]);
   assert.equal(o.verdict,j+1===q.answer?"correct":"incorrect");
   assert.ok(o.rationale.length>=16);totalOptions++;
  }
  totalQuestions++;
 }
}
assert.equal(totalQuestions,80);assert.equal(totalOptions,320);
assert.equal(sourceSupported,35);assert.equal(held,45);
for(const edit of knownEdits){
 const q=read("data/past/drafts/round04/"+edit.subject+".json")[edit.question_number-1];
 const e=read("data/explanations/drafts/round04/"+edit.subject+".json")[edit.question_number-1];
 assert.equal(q.id,edit.id);assert.equal(q.question,edit.after.question);
 assert.deepEqual(q.choices,edit.after.choices);
 assert.equal(q.answer,edit.before.answer);
 assert.equal(e.correct_choice,edit.after.correct_choice);
 assert.equal(e.reason,edit.after.reason);
 assert.equal(q.qa18_revision.publishable,false);
 const old=qa2.find(x=>x.id===edit.id);
 if(old){
  assert.equal(edit.before.question,old.after.question,"QA18 vs QA2 previous snapshot");
  assert.deepEqual(edit.before.choices,old.after.choices);
  assert.equal(edit.before.reason,old.after.reason);
 }
}
const add=read("data/qa/technical-qa18-r04-electrical-edits-and-holds.json").new_subject_holds;
assert.equal(add.length,1);assert.equal(add[0].id,"auto-made-r04-s03-q13");
const q13=read("data/past/drafts/round04/electrical.json")[12];
const e13=read("data/explanations/drafts/round04/electrical.json")[12];
assert.equal(q13.subject_classification_review.status,"hold_do_not_publish");
assert.equal(e13.subject_classification_review.status,"hold_do_not_publish");
assert.equal(q13.subject_classification_review.suggested_subject,"engine");
assert.equal(read("data/qa/technical-qa1-subject-holds-expanded.json").length,47,"QA1 original 47 holds remain historical");
assert.ok(read("data/manifest.json").banks.every(x=>!x.file.includes("/drafts/")));
console.log("PASS QA18: r04 80 questions, 320 current option reasons (35 first-pass source supported, 45 held), 3 editorial edits with QA2 history, 1 new classification hold (52 total), 0 final approvals/published past.");
