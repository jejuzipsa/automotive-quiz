"use strict";
// QA51-52 versioned working view. Historical source snapshots remain unchanged.
// This is a structural check and review queue, NOT expert or publication approval.
const assert=require("node:assert/strict"),fs=require("node:fs"),path=require("node:path");
const root=process.env.AUTO_QUIZ_REPO||path.resolve(__dirname,"..");
const read=p=>JSON.parse(fs.readFileSync(path.join(root,p),"utf8"));
const subjects=["engine","chassis","electrical","eco"];
const qa47=read("data/qa/technical-qa47-first20-source-preflight.json");
const qa49=read("data/qa/technical-qa49-nine-current-option-review.json");
const qa50=read("data/qa/technical-qa50-next20-option-review.json");
const qa51=read("data/qa/technical-qa51-editorial-revisions.json");
const qa52=read("data/qa/technical-qa52-round01-remaining40-option-review.json");
const qa53=read("data/qa/technical-qa53-round02-first40-option-review.json");
assert.equal(qa53.items.length,40);
assert.equal(qa53.items.filter(x=>x.editorial_hold).length,2);
assert.equal(qa51.items.length,15);
const coverage=new Map(),newReviews=new Map();
for(const [stage,ledger,count] of [["QA47-49",qa47,20],["QA50",qa50,20],["QA52",qa52,40],["QA53",qa53,40]]){
 assert.equal(ledger.items.length,count);
 for(const item of ledger.items){assert.ok(!coverage.has(item.id),"duplicate coverage "+item.id);coverage.set(item.id,stage);}
}
for(const item of qa49.items){assert.equal(coverage.get(item.id),"QA47-49");newReviews.set(item.id,item);}
for(const ledger of [qa50,qa52,qa53])for(const item of ledger.items)newReviews.set(item.id,item);
assert.equal(coverage.size,120);
const edits=new Map(qa51.items.map(item=>[item.id,item]));
assert.equal(edits.size,15);assert.ok([...edits.keys()].every(id=>coverage.has(id)));
const seen=new Set(),applied=new Set(),all=[],bySubject=Object.fromEntries(subjects.map(s=>[s,[]])),holds=[],batchQueue=[];
const norm=s=>String(s||"").toLowerCase().replace(/[^a-z0-9가-힣]/g,"");
const exactStems=new Map(),answerTextGroups=new Map();
for(let round=1;round<=9;round++)for(const subject of subjects){
 const prefix=round===1?"":"round"+String(round).padStart(2,"0")+"/";
 const qs=read("data/past/drafts/"+prefix+subject+".json");
 const es=read("data/explanations/drafts/"+prefix+subject+".json");
 assert.equal(qs.length,20);assert.equal(es.length,20);
 const emap=new Map(es.map(e=>[e.id,e]));assert.equal(emap.size,20);
 for(let i=0;i<20;i++){
  const q={...qs[i]},e={...emap.get(q.id)},id=q.id;
  assert.ok(e.id,id+" missing explanation");assert.ok(!seen.has(id),id+" duplicate");seen.add(id);
  assert.equal(q.subject,subject);assert.equal(q.round,round);assert.equal(q.question_number,i+1);
  assert.equal(q.explanation_id,e.id);assert.equal(q.answer,e.correct_answer);
  assert.equal(e.correct_choice,q.choices[q.answer-1]);
  assert.equal(q.publishable,false);assert.equal(q.review_status,"editorial_draft");
  assert.equal(q.technical_answer_status,"pending_independent_review");
  assert.equal(e.technical_answer_status,"pending_independent_review");
  const technicalKeys=Object.keys(q).filter(k=>/^technical_verification_qa\d+$/.test(k));
  assert.equal(technicalKeys.length,1,id+" historical grade count");
  const stage=technicalKeys[0],version=stage.replace("technical_verification_qa","");
  const baseAnalysis=e["option_analysis_qa"+version]||e.option_analysis;
  assert.equal(baseAnalysis.length,4,id+" historical rationales");
  for(let j=0;j<4;j++){
   assert.equal(baseAnalysis[j].number,j+1);assert.equal(baseAnalysis[j].text,q.choices[j]);
   assert.equal(baseAnalysis[j].verdict,j+1===q.answer?"correct":"incorrect");
  }
  const refs=q[stage].source_urls||q[stage].reference_urls||e.reference_urls||[];
  assert.ok(Array.isArray(refs)&&refs.length>0,id+" no historical references");
  assert.ok(refs.every(u=>typeof u==="string"&&u.startsWith("https://")),id+" bad source URL");
  const patch=edits.get(id);
  let currentAnalysis=baseAnalysis;
  if(patch){
   assert.deepEqual(patch.before,{question:q.question,choices:q.choices,answer:q.answer,reason:e.reason,key_point:e.key_point,option_analysis:baseAnalysis},id+" stale revision base");
   assert.equal(patch.after.answer,q.answer,id+" answer index changed");
   assert.equal(patch.publishable,false);assert.equal(patch.approval,"pending_independent_review");
   q.question=patch.after.question;q.choices=patch.after.choices;
   e.correct_choice=q.choices[q.answer-1];e.reason=patch.after.reason;e.key_point=patch.after.key_point;
   currentAnalysis=patch.after.option_analysis;applied.add(id);
   q.qa51_revision={kind:patch.kind,previous_evidence_is_historical:true,expert_approved:false};
   e.qa51_revision=q.qa51_revision;
  }
  assert.ok(typeof q.question==="string"&&q.question.trim().length>5,id);
  assert.equal(q.choices.length,4,id);assert.equal(new Set(q.choices.map(norm)).size,4,id+" duplicate options");
  assert.ok(q.choices.every(c=>typeof c==="string"&&c.trim().length>0),id+" empty option");
  assert.ok(Number.isInteger(q.answer)&&q.answer>=1&&q.answer<=4,id);
  assert.equal(e.correct_answer,q.answer);assert.equal(e.correct_choice,q.choices[q.answer-1]);
  assert.ok(typeof e.reason==="string"&&e.reason.trim().length>10,id+" empty explanation");
  assert.equal(currentAnalysis.length,4,id);
  for(let j=0;j<4;j++){
   const x=currentAnalysis[j];
   assert.equal(x.number,j+1,id);assert.equal(x.text,q.choices[j],id);
   assert.equal(x.verdict,j+1===q.answer?"correct":"incorrect",id);
   assert.ok(typeof x.rationale==="string"&&x.rationale.trim().length>5,id+" missing rationale");
  }
  const review=newReviews.get(id);
  if(review){
   assert.equal(review.answer,q.answer,id+" new model review answer mismatch");
   assert.equal(review.options.length,4,id);
   assert.equal(review.expert_approved,false);
   for(let j=0;j<4;j++){
    assert.equal(review.options[j].number,j+1,id);
    assert.equal(review.options[j].verdict,j+1===q.answer?"correct_under_stated_conditions":"incorrect",id);
    assert.ok(review.options[j].reason.trim().length>5,id);
   }
   if(coverage.get(id)==="QA52")assert.equal(review.version,patch?"qa51_revised":"baseline_current",id);
  }
  assert.equal(coverage.has(id),round===1||(round===2&&i<10),id+" coverage mismatch");
  const hold=q.subject_classification_review?.status==="hold_do_not_publish";
  if(hold)holds.push(id);
  const extra=patch?.additional_reference?.url;
  const currentRefs=[...new Set([...refs,...(extra?[extra]:[])])];
  const currentVersion=patch?"qa51_revised":"baseline_at_qa50";
  q.current_version=currentVersion;e.current_version=currentVersion;
  q.current_review={model_logic_stage:coverage.get(id)||null,revision_stage:patch?"QA51":null,editorial_hold:review?.editorial_hold===true,independent_expert_approved:false,qnet_detail_verified:false,rights_cleared:false};
  e.current_review=q.current_review;
  e.current_option_analysis=currentAnalysis;e.current_reference_urls=currentRefs;
  e.current_reference_status="Historical links and any QA51 supplemental reference; not fully source-verified";
  const record={id,round,subject,number:i+1,question:q.question,choices:q.choices,answer:q.answer,explanation:e.reason,option_analysis:currentAnalysis,reference_urls:currentRefs,classification_hold:hold,firstpass_historical_grade:q[stage].status,current_version:currentVersion,model_logic_stage:coverage.get(id)||null,editorial_hold:review?.editorial_hold===true,independent_expert_approved:false,publishable:false};
  if(patch)record.additional_reference=patch.additional_reference;
  all.push(record);bySubject[subject].push({question:q,explanation:e});
  const stem=norm(q.question),ans=norm(q.choices[q.answer-1]);
  if(!exactStems.has(stem))exactStems.set(stem,[]);exactStems.get(stem).push(id);
  if(ans.length>=12){const key=subject+":"+ans;if(!answerTextGroups.has(key))answerTextGroups.set(key,[]);answerTextGroups.get(key).push(id);}
 }
}
assert.equal(all.length,720);assert.equal(seen.size,720);assert.equal(applied.size,15);
assert.equal(holds.length,55);assert.equal(all.filter(x=>x.model_logic_stage).length,120);
assert.equal(all.filter(x=>x.editorial_hold).length,2);
const remaining=all.filter(x=>!x.model_logic_stage);assert.equal(remaining.length,600);
for(let round=2;round<=9;round++)for(let offset=0;offset<20;offset+=5){
 const items=subjects.flatMap(subject=>remaining.filter(x=>x.round===round&&x.subject===subject&&x.number>offset&&x.number<=offset+5));
 if(items.length===0)continue;
 assert.equal(items.length,20);
 batchQueue.push({batch:batchQueue.length+1,round,question_range:[offset+1,offset+5],status:"pending_model_logic_review",items});
}
assert.equal(batchQueue.length,30);
assert.equal(new Set(batchQueue.flatMap(b=>b.items.map(x=>x.id))).size,600);
const exactCandidates=[...exactStems.entries()].filter(([,ids])=>ids.length>1).map(([stem,ids])=>({stem,ids}));
const sharedAnswerCandidates=[...answerTextGroups.entries()].filter(([,ids])=>ids.length>1).map(([key,ids])=>({key,ids}));
const manifest=read("data/manifest.json");
assert.ok(manifest.banks.every(b=>!b.file.includes("/drafts/")&&!b.file.includes("qa51")&&!b.file.includes("qa52")));
assert.equal(manifest.banks.filter(b=>b.track==="expected").reduce((n,b)=>n+b.count,0),80);
const summary={kind:"QA52_WORKING_BANK_AND_REMAINING_REVIEW_QUEUE_NOT_APPROVAL",questions:720,options:2880,editorial_revisions_applied:15,model_logic_reviewed_questions:120,model_logic_reviewed_options:480,pending_model_questions:600,pending_model_options:2400,pending_batches:30,editorial_holds:2,classification_holds:55,independent_expert_approved:0,published_reconstructed_past:0,public_expected:80,structural_check:"passed",exact_stem_group_count:exactCandidates.length,shared_correct_text_group_count:sharedAnswerCandidates.length,limitations:["Exact normalized stem and shared correct text are screening candidates, not semantic duplicate verdicts.","The 120 model-reviewed questions are not independently approved.","The QA51/52 working view supersedes old draft text for the 15 changes; old raw banks and first-pass audits remain historical.","No full revalidation of external URLs, Q-net detailed syllabus, OEM procedures or publication rights is claimed."]};
if(process.env.QA52_OUT_DIR){
 const out=path.resolve(root,process.env.QA52_OUT_DIR);
 const write=(p,x)=>{const dest=path.join(out,p);fs.mkdirSync(path.dirname(dest),{recursive:true});fs.writeFileSync(dest,JSON.stringify(x,null,2)+"\n");};
 for(const s of subjects){
  assert.equal(bySubject[s].length,180);
  write("questions/"+s+".json",bySubject[s].map(x=>x.question));
  write("explanations/"+s+".json",bySubject[s].map(x=>x.explanation));
 }
 write("summary.json",summary);write("editorial-holds.json",all.filter(x=>x.editorial_hold));write("duplicate-candidates.json",{exact_stem_groups:exactCandidates,shared_correct_text_groups:sharedAnswerCandidates});
 write("remaining-batches.json",batchQueue.map(({items,...b})=>({...b,ids:items.map(x=>x.id)})));
 for(const b of batchQueue)write("batches/batch-"+String(b.batch).padStart(2,"0")+".json",b);
}
console.log("PASS QA51-52 working bank: "+JSON.stringify(summary)+"; NOT EXPERT APPROVAL");
