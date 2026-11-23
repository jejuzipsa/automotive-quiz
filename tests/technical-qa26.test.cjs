"use strict";
const assert=require("node:assert/strict");
const fs=require("node:fs");
const path=require("node:path");
const root=process.env.AUTO_QUIZ_REPO||path.resolve(__dirname,"..");
const read=p=>JSON.parse(fs.readFileSync(path.join(root,p),"utf8"));
const qs=read("data/past/drafts/round07/engine.json"),es=read("data/explanations/drafts/round07/engine.json"),audit=read("data/qa/technical-qa26-r07-engine-option-audit.json");
assert.equal(qs.length,20);assert.equal(es.length,20);assert.equal(audit.length,20);
assert.equal(new Set(audit.map(x=>x.id)).size,20);
assert.equal(audit.filter(x=>x.evidence_grade==="source_supported_first_pass").length,12);
assert.equal(audit.filter(x=>x.evidence_grade==="needs_additional_model_or_syllabus_review").length,8);
assert.deepEqual(audit.filter(x=>x.evidence_grade==="needs_additional_model_or_syllabus_review").map(x=>x.question_number),[3,4,6,12,16,18,19,20]);
let n=0;
for(let i=0;i<20;i++){
 const q=qs[i],e=es[i],a=audit[i];
 assert.equal(q.id,e.id);assert.equal(q.id,a.id);
 assert.equal(q.round,7);assert.equal(q.subject,"engine");assert.equal(q.question_number,i+1);
 assert.equal(a.question_at_review,q.question);assert.equal(a.correct_number,q.answer);
 assert.equal(a.correct_choice,q.choices[q.answer-1]);
 assert.equal(e.correct_answer,q.answer);assert.equal(e.correct_choice,a.correct_choice);
 assert.equal(q.technical_verification_qa26.status,a.evidence_grade);
 assert.equal(e.technical_verification_qa26.status,a.evidence_grade);
 assert.deepEqual(e.option_analysis_qa26,a.options);
 assert.equal(a.options.length,4);assert.ok(a.source_urls.length>0);
 assert.equal(a.independent_final_technical_approval,false);assert.equal(a.web_publication,false);
 assert.equal(q.technical_verification_qa26.independent_final_technical_approval,false);
 assert.equal(e.technical_verification_qa26.independent_final_technical_approval,false);
 assert.equal(q.publishable,false);assert.equal(q.review_status,"editorial_draft");
 assert.equal(q.technical_answer_status,"pending_independent_review");
 assert.equal(e.technical_answer_status,"pending_independent_review");
 for(let j=0;j<4;j++){const o=a.options[j];assert.equal(o.number,j+1);assert.equal(o.text,q.choices[j]);assert.equal(o.verdict,j+1===q.answer?"correct":"incorrect");assert.ok(o.rationale.length>=16);n++;}
}
assert.equal(n,80);
const manifest=read("data/manifest.json");
assert.ok(manifest.banks.every(x=>!x.file.includes("/drafts/")));
console.log("PASS QA26: 7th-round engine 20/80 with 12 source-supported firstpass and 8 OEM/legal/safety holds, no independent approval/publication.");
