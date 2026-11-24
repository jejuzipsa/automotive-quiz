"use strict";
const assert=require("node:assert/strict"),fs=require("node:fs"),path=require("node:path");
const dir=process.env.AUTO_QUIZ_REPO||path.resolve(__dirname,"..");
const read=p=>JSON.parse(fs.readFileSync(path.join(dir,p),"utf8"));
const newerById=new Map([...read("data/qa/technical-qa44-later-scope-edits.json"),...read("data/qa/technical-qa45-overlap-edits.json")].map(x=>[x.id,x]));
const specs=[{qa:30,s:"engine",ok:9,edit:20},{qa:31,s:"chassis",ok:11,edit:15},{qa:32,s:"electrical",ok:14,edit:12},{qa:33,s:"eco",ok:10,edit:7}];
let total=0,opts=0;const ids=new Set();
for(const t of specs){
 const qs=read(`data/past/drafts/round08/${t.s}.json`),es=read(`data/explanations/drafts/round08/${t.s}.json`),a=read(`data/qa/technical-qa${t.qa}-r08-${t.s}-option-audit.json`);
 assert.equal(qs.length,20);assert.equal(es.length,20);assert.equal(a.length,20);
 assert.equal(a.filter(x=>x.evidence_grade==="source_supported_first_pass").length,t.ok);
 for(let i=0;i<20;i++){const q=qs[i],e=es[i],z=a[i],newer=newerById.get(q.id),stage=`technical_verification_qa${t.qa}`,opt=`option_analysis_qa${t.qa}`;
  assert.equal(q.id,e.id);assert.equal(q.id,z.id);assert.equal(q.round,8);assert.equal(q.subject,t.s);assert.equal(q.question_number,i+1);
  assert.equal(q.answer,e.correct_answer);assert.equal(q.answer,z.correct_number);assert.equal(newer?newer.before.question:q.question,z.question_at_review);assert.equal(q.choices[q.answer-1],e.correct_choice);assert.equal(z.correct_choice,newer?newer.before.correct_choice:e.correct_choice);
  assert.deepEqual(e[opt],newer?newer.after.option_analysis:z.options);assert.equal(q[stage].status,z.evidence_grade);assert.equal(e[stage].status,z.evidence_grade);
  assert.equal(q.publishable,false);assert.equal(q.review_status,"editorial_draft");assert.equal(q.technical_answer_status,"pending_independent_review");assert.equal(e.technical_answer_status,"pending_independent_review");
  assert.equal(z.web_publication,false);assert.equal(z.independent_final_technical_approval,false);assert.ok(z.source_urls.length>=1);assert.equal(z.options.length,4);
  assert.ok(!ids.has(q.id));ids.add(q.id);
  z.options.forEach((c,j)=>{assert.equal(c.number,j+1);assert.equal(c.text,newer?newer.before.choices[j]:q.choices[j]);assert.equal(c.verdict,j+1===q.answer?"correct":"incorrect");assert.ok(c.rationale.length>=12);opts++;});total++;
 }
}
assert.equal(total,80);assert.equal(opts,320);
assert.ok(read("data/past/drafts/round08/engine.json")[19].question.includes("단자"));
assert.ok(read("data/past/drafts/round08/chassis.json")[14].question.includes("전류"));
assert.ok(read("data/past/drafts/round08/electrical.json")[11].question.includes("릴레이"));
assert.ok(read("data/past/drafts/round08/eco.json")[6].question.includes("HVIL"));
const edit1=read("data/qa/technical-qa30-31-r08-edits.json"),edit2=read("data/qa/technical-qa32-33-r08-edits.json");assert.equal(edit1.length+edit2.length,4);
const st=read("data/bank-status.json").technical_qa33;assert.equal(st.cumulative_historical_firstpass_questions,640);assert.equal(st.remaining_no_firstpass_questions,80);assert.equal(st.final_independent_technical_approvals,0);
const m=read("data/manifest.json");assert.ok(m.banks.every(b=>!b.file.includes("/drafts/")));assert.equal(m.banks.filter(x=>x.track==="expected").reduce((n,x)=>n+x.count,0),80);
console.log("PASS QA30-QA33: round08 80 questions / 320 options, 44 basic-source firstpass and 36 holds, 4 duplicate repairs, no publication");
