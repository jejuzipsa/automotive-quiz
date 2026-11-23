"use strict";
const assert=require("node:assert/strict"),fs=require("node:fs"),path=require("node:path");
const root=process.env.AUTO_QUIZ_REPO||path.resolve(__dirname,"..");
const read=p=>JSON.parse(fs.readFileSync(path.join(root,p),"utf8"));
const q=read("data/past/drafts/round07/electrical.json"),e=read("data/explanations/drafts/round07/electrical.json"),a=read("data/qa/technical-qa28-r07-electrical-option-audit.json"),changes=read("data/qa/technical-qa28-r07-electrical-edits.json");
assert.equal(q.length,20);assert.equal(e.length,20);assert.equal(a.length,20);assert.equal(changes.length,3);assert.deepEqual(changes.map(x=>x.number),[4,10,20]);
const held=[4,6,7,8,15,16,17,18,20];
assert.deepEqual(a.filter(x=>x.evidence_grade==="needs_additional_model_or_syllabus_review").map(x=>x.question_number),held);
assert.equal(a.filter(x=>x.evidence_grade==="source_supported_first_pass").length,11);assert.equal(new Set(a.map(x=>x.id)).size,20);
for(let i=0;i<20;i++){const x=q[i],y=e[i],z=a[i];
 assert.equal(x.id,y.id);assert.equal(x.id,z.id);assert.equal(x.subject,"electrical");assert.equal(x.round,7);assert.equal(x.question_number,i+1);
 assert.equal(z.question_at_review,x.question);assert.equal(x.answer,z.correct_number);assert.equal(x.choices[x.answer-1],z.correct_choice);
 assert.equal(y.correct_answer,x.answer);assert.equal(y.correct_choice,z.correct_choice);
 assert.equal(x.technical_verification_qa28.status,z.evidence_grade);assert.equal(y.technical_verification_qa28.status,z.evidence_grade);assert.deepEqual(y.option_analysis_qa28,z.options);
 assert.equal(z.options.length,4);assert.ok(z.source_urls.length>=1);assert.equal(z.independent_final_technical_approval,false);assert.equal(z.web_publication,false);
 assert.equal(x.publishable,false);assert.equal(x.review_status,"editorial_draft");assert.equal(x.technical_answer_status,"pending_independent_review");assert.equal(y.technical_answer_status,"pending_independent_review");
 for(let j=0;j<4;j++){const o=z.options[j];assert.equal(o.number,j+1);assert.equal(o.text,x.choices[j]);assert.equal(o.verdict,j+1===x.answer?"correct":"incorrect");assert.ok(o.rationale.length>=24);}
}
const st=read("data/bank-status.json").technical_qa28;assert.equal(st.cumulative_historical_firstpass_questions,540);assert.equal(st.remaining_no_firstpass_questions,180);assert.equal(st.final_independent_technical_approvals,0);assert.equal(st.current_subject_holds,55);
assert.ok(read("data/manifest.json").banks.every(x=>!x.file.includes("/drafts/")));
console.log("PASS QA28: 7회 전기20/80 자료 1차부합11 보류9, 지문3 교정, 공개승격 없음");
