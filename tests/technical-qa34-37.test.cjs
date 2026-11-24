"use strict";
const assert=require("node:assert/strict"),fs=require("node:fs"),path=require("node:path");
const root=process.env.AUTO_QUIZ_REPO||path.resolve(__dirname,"..");
const read=p=>JSON.parse(fs.readFileSync(path.join(root,p),"utf8"));
const newerById=new Map([...read("data/qa/technical-qa44-later-scope-edits.json"),...read("data/qa/technical-qa45-overlap-edits.json")].map(x=>[x.id,x]));
const cases=[{qa:34,s:"engine",ok:12,edit:[7]},{qa:35,s:"chassis",ok:14,edit:[8]},{qa:36,s:"electrical",ok:12,edit:[5]},{qa:37,s:"eco",ok:10,edit:[4,15,19]}];
const ids=new Set();let count=0,options=0;
for(const c of cases){
 const q=read(`data/past/drafts/round09/${c.s}.json`),e=read(`data/explanations/drafts/round09/${c.s}.json`),a=read(`data/qa/technical-qa${c.qa}-r09-${c.s}-option-audit.json`);
 assert.equal(q.length,20);assert.equal(e.length,20);assert.equal(a.length,20);
 assert.equal(a.filter(x=>x.evidence_grade==="source_supported_first_pass").length,c.ok);
 for(let i=0;i<20;i++){const x=q[i],y=e[i],z=a[i],newer=newerById.get(x.id),k=`technical_verification_qa${c.qa}`,opt=`option_analysis_qa${c.qa}`;
  assert.equal(x.id,y.id);assert.equal(x.id,z.id);assert.equal(x.subject,c.s);assert.equal(x.round,9);assert.equal(x.question_number,i+1);
  assert.equal(newer?newer.before.question:x.question,z.question_at_review);assert.equal(x.answer,y.correct_answer);assert.equal(x.answer,z.correct_number);assert.equal(x.choices[x.answer-1],y.correct_choice);assert.equal(newer?newer.before.correct_choice:z.correct_choice,z.correct_choice);
  assert.equal(x[k].status,z.evidence_grade);assert.equal(y[k].status,z.evidence_grade);assert.deepEqual(y[opt],newer?newer.after.option_analysis:z.options);
  assert.equal(x.publishable,false);assert.equal(x.review_status,"editorial_draft");assert.equal(x.technical_answer_status,"pending_independent_review");assert.equal(y.technical_answer_status,"pending_independent_review");
  assert.equal(z.independent_final_technical_approval,false);assert.equal(z.web_publication,false);assert.ok(z.source_urls.length>=1);assert.equal(z.options.length,4);
  assert.ok(!ids.has(x.id));ids.add(x.id);
  z.options.forEach((o,j)=>{assert.equal(o.number,j+1);assert.equal(o.text,newer?newer.before.choices[j]:x.choices[j]);assert.equal(o.verdict,j+1===x.answer?"correct":"incorrect");assert.ok(o.rationale.length>=12);options++;});count++;
 }
}
assert.equal(count,80);assert.equal(options,320);
assert.match(read("data/past/drafts/round09/engine.json")[6].question,/정차/);
assert.match(read("data/past/drafts/round09/chassis.json")[7].question,/정차/);
assert.match(read("data/past/drafts/round09/electrical.json")[4].question,/전장 배터리/);
assert.match(read("data/past/drafts/round09/eco.json")[3].question,/회생제동/);
assert.match(read("data/past/drafts/round09/eco.json")[14].question,/상한/);
assert.match(read("data/past/drafts/round09/eco.json")[18].question,/침수/);
const edits=[...read("data/qa/technical-qa34-35-r09-edits.json"),...read("data/qa/technical-qa36-37-r09-edits.json")];assert.equal(edits.length,6);
for(const entry of edits){const c=cases.find(x=>x.qa===entry.qa);const q=read(`data/past/drafts/round09/${c.s}.json`)[entry.number-1];assert.equal(q.id,entry.id);assert.equal(q.question,entry.after.question);}
const st=read("data/bank-status.json").technical_qa37;assert.equal(st.cumulative_historical_firstpass_questions,720);assert.equal(st.cumulative_historical_firstpass_options,2880);
assert.equal(st.remaining_no_firstpass_questions,0);assert.equal(st.remaining_no_firstpass_options,0);assert.equal(st.final_independent_technical_approvals,0);assert.equal(st.current_subject_holds,55);
assert.deepEqual(st.summary_round08_round09,{questions:160,options:640,firstpass_source_supported:92,additional_review_held:68,editorial_edits:10,round08_edits:4,round09_edits:6,independent_final_approvals:0,publications:0});
const m=read("data/manifest.json");assert.equal(m.banks.filter(x=>x.track==="expected").reduce((s,x)=>s+x.count,0),100);assert.ok(m.banks.every(x=>!x.file.includes("/drafts/")));
console.log("PASS QA34-37: round09 80/320, 48 firstpass general supported,32 safety/OEM/subject holds, six edits; 720/2880 logged, no final approval/publication");
