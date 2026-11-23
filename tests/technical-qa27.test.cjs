"use strict";
const assert=require("node:assert/strict"),fs=require("node:fs"),path=require("node:path");
const dir=process.env.AUTO_QUIZ_REPO||path.resolve(__dirname,"..");
const load=p=>JSON.parse(fs.readFileSync(path.join(dir,p),"utf8"));
const q=load("data/past/drafts/round07/chassis.json"),e=load("data/explanations/drafts/round07/chassis.json"),a=load("data/qa/technical-qa27-r07-chassis-option-audit.json"),edits=load("data/qa/technical-qa27-r07-chassis-edits.json");
assert.equal(q.length,20);assert.equal(e.length,20);assert.equal(a.length,20);assert.equal(edits.length,4);
assert.deepEqual(edits.map(x=>x.number),[5,6,9,12]);
assert.deepEqual(a.filter(x=>x.evidence_grade!=="source_supported_first_pass").map(x=>x.question_number),[2,3,5,6,7,9,12,16,17,18,19]);
assert.equal(a.filter(x=>x.evidence_grade==="source_supported_first_pass").length,9);
assert.equal(new Set(a.map(x=>x.id)).size,20);
for(let i=0;i<20;i++){const x=q[i],y=e[i],z=a[i];
 assert.equal(x.id,y.id);assert.equal(x.id,z.id);assert.equal(x.question_number,i+1);assert.equal(x.subject,"chassis");assert.equal(x.round,7);
 assert.equal(x.question,z.question_at_review);assert.equal(x.answer,z.correct_number);assert.equal(x.choices[x.answer-1],z.correct_choice);
 assert.equal(y.correct_answer,x.answer);assert.equal(y.correct_choice,z.correct_choice);
 assert.equal(x.technical_verification_qa27.status,z.evidence_grade);assert.equal(y.technical_verification_qa27.status,z.evidence_grade);assert.deepEqual(y.option_analysis_qa27,z.options);
 assert.equal(z.options.length,4);assert.ok(z.source_urls.length>0);assert.equal(z.web_publication,false);assert.equal(z.independent_final_technical_approval,false);
 assert.equal(x.publishable,false);assert.equal(x.review_status,"editorial_draft");assert.equal(x.technical_answer_status,"pending_independent_review");assert.equal(y.technical_answer_status,"pending_independent_review");
 for(let j=0;j<4;j++){const o=z.options[j];assert.equal(o.number,j+1);assert.equal(o.text,x.choices[j]);assert.equal(o.verdict,j+1===x.answer?"correct":"incorrect");assert.ok(o.rationale.length>=16);}
}
assert.equal(load("data/bank-status.json").technical_qa27.cumulative_historical_firstpass_questions,520);
assert.ok(load("data/manifest.json").banks.every(x=>!x.file.includes("/drafts/")));
console.log("PASS QA27: 7회 섀시 20/80, 자료부합9/보류11, 지문교정4, 최종공개0");
