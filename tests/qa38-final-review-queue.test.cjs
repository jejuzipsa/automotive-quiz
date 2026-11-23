"use strict";
const fs=require("node:fs"),path=require("node:path"),assert=require("node:assert/strict");
const root=path.resolve(__dirname,".."),read=p=>JSON.parse(fs.readFileSync(path.join(root,p),"utf8"));
const subjects=["engine","chassis","electrical","eco"],all=[],issues=[],graded={},holds=[],ids=new Set();
const norm=x=>String(x||"").toLowerCase().replace(/[^a-z0-9가-힣]/g,"");
const trigrams=x=>{const n=norm(x),s=new Set();for(let i=0;i+2<n.length;i++)s.add(n.slice(i,i+3));return s};
const accepted=new Set(["source_supported_first_pass","needs_additional_model_or_syllabus_review","needs_additional_model_or_quality_review"]);
for(let round=1;round<=9;round++)for(const subject of subjects){
 const prefix=round===1?"":"round"+String(round).padStart(2,"0")+"/";
 const qs=read("data/past/drafts/"+prefix+subject+".json"),es=read("data/explanations/drafts/"+prefix+subject+".json");
 assert.equal(qs.length,20);assert.equal(es.length,20);
 const ex=new Map(es.map(x=>[x.id,x]));assert.equal(ex.size,20);
 for(let i=0;i<20;i++){
  const q=qs[i],e=ex.get(q.id),id=q.id;
  assert.ok(e,id+" missing explanation");assert.ok(!ids.has(id),"duplicate "+id);ids.add(id);
  assert.equal(q.answer,e.correct_answer);assert.equal(e.correct_choice,q.choices[q.answer-1]);
  assert.equal(q.round,round);assert.equal(q.subject,subject);assert.equal(q.question_number,i+1);
  assert.equal(q.publishable,false);assert.equal(q.review_status,"editorial_draft");
  assert.equal(q.technical_answer_status,"pending_independent_review");assert.equal(e.technical_answer_status,"pending_independent_review");
  const versions=Object.keys(q).filter(k=>/^technical_verification_qa\d+$/.test(k));
  if(versions.length!==1){issues.push({id,code:"technical_stage_count",count:versions.length});continue;}
  const key=versions[0],version=key.replace("technical_verification_qa",""),v=q[key],ev=e[key];
  if(!accepted.has(v.status))issues.push({id,code:"unknown_grade",grade:v.status});
  graded[v.status]=(graded[v.status]||0)+1;
  if(!ev||ev.status!==v.status)issues.push({id,code:"question_explanation_stage_mismatch"});
  const an=e["option_analysis_qa"+version]||e.option_analysis;
  if(!Array.isArray(an)||an.length!==4){issues.push({id,code:"missing_option_analysis",version});continue;}
  for(let j=0;j<4;j++){
   const x=an[j];
   if(x.number!==j+1||x.text!==q.choices[j]||x.verdict!==(j+1===q.answer?"correct":"incorrect")||typeof x.rationale!=="string"||x.rationale.trim().length<10)
    issues.push({id,code:"option_mapping_mismatch",number:j+1});
  }
  const urls=v.source_urls||v.reference_urls||e.reference_urls||[];
  if(!Array.isArray(urls)||urls.length===0)issues.push({id,code:"missing_reference_url"});
  else for(const url of urls)if(typeof url!=="string"||!/^https:\/\/[^ ]+\.[^ ]+/.test(url))issues.push({id,code:"bad_reference_url"});
  if(v.independent_final_technical_approval===true||v.final_technical_approval===true||v.web_publication===true||v.publishable===true)
    issues.push({id,code:"unapproved_draft_marked_approved"});
  if(q.subject_classification_review?.status==="hold_do_not_publish")
    holds.push({id,round,subject,number:q.question_number,suggested:q.subject_classification_review.suggested_subject||null,reason:q.subject_classification_review.reason||null});
  all.push({id,round,subject,number:q.question_number,question:q.question,choices:q.choices,answer:q.answer,source_urls:urls});
 }
}
assert.equal(all.length,720);assert.equal(ids.size,720);assert.equal(holds.length,55);
const grams=all.map(x=>trigrams(x.question)),normalized=all.map(x=>norm(x.question)),similar=[];
let exact=0;
for(let i=0;i<all.length;i++)for(let j=i+1;j<all.length;j++){
 const a=all[i],b=all[j],left=grams[i],right=grams[j];
 if(normalized[i]===normalized[j]){exact++;similar.push({a:a.id,b:b.id,score:1,type:"exact_question"});continue;}
 if(Math.abs(normalized[i].length-normalized[j].length)>Math.max(16,.7*Math.min(normalized[i].length,normalized[j].length)))continue;
 let common=0;for(const g of left.size<right.size?left:right)if((left.size<right.size?right:left).has(g))common++;
 const score=common/(left.size+right.size-common||1);
 if(score>=.53)similar.push({a:a.id,b:b.id,score:+score.toFixed(3),type:"near_wording_candidate"});
}
similar.sort((a,b)=>b.score-a.score||a.a.localeCompare(b.a));
const answerDistribution=Object.fromEntries(subjects.map(subject=>[subject,[1,2,3,4].map(n=>all.filter(x=>x.subject===subject&&x.answer===n).length)]));
const holdBy=Object.fromEntries(subjects.map(s=>[s,holds.filter(h=>h.subject===s).length]));
const weak=all.filter(q=>q.choices.some(c=>/(라디오|타이어|스마트키|연료탱크|브레이크|에어컨|냉매|워셔액|도어|블루투스)/.test(c))&&q.choices.some(c=>/(모터|인버터|크랭크|압축|변속기|EGR|BMS|연료전지)/.test(c))).map(q=>q.id);
const suspect=holds.filter(h=>h.id==="auto-made-r06-s04-q20");
const report={
 kind:"REVIEW_QUEUE_NOT_TECHNICAL_APPROVAL",date:"2026-11-23",source:"GitHub drafts rounds 1-9; QA3-QA37",
 official_criteria:"https://www.q-net.or.kr/cst006.do?artlSeq=5213442&brdId=Q006&code=1202&gId=&gSite=Q&id=cst00602",
 criteria_period:"2025-01-01 to 2027-12-31",qnet_hwp_detailed_sections_verified:false,
 totals:{questions:all.length,options:all.length*4,classification_holds:holds.length,
 firstpass_supported:graded.source_supported_first_pass||0,firstpass_additional_hold:all.length-(graded.source_supported_first_pass||0),
 public_reconstructed_past:0,independent_final_approvals:0},
 grade_counts:graded,hold_by_subject:holdBy,answer_distribution:answerDistribution,
 issues,near_duplicate_pair_count:similar.length,exact_duplicate_question_count:exact,near_duplicate_top:similar.slice(0,150),
 subject_holds:holds,false_positive_hold_candidates:suspect.map(x=>({...x,recheck:"EV inverter DC-to-3phase-AC concept appears eco; legacy out_of_scope label may be false positive. Do not release without detailed syllabus review."})),
 off_topic_distractor_heuristic_count:weak.length,off_topic_candidate_ids:weak.slice(0,100),
 limitations:["Word similarity is not a semantic duplicate verdict.","Stored answer consistency is not independent correctness.",
 "URLs are syntax checked, not fetched or checked for relevance.","Official Q-net period confirmed but detailed HWP not inspected.",
 "No OEM, technical, rights or legal final approval performed."]
};
const out=process.env.QA38_REPORT_OUT;if(out)fs.writeFileSync(path.resolve(root,out),JSON.stringify(report,null,2)+"\n");
console.log("QA38 review only: "+all.length+" questions, "+all.length*4+" options, "+holds.length+" subject holds, "+(graded.source_supported_first_pass||0)+" basic first-pass, "+similar.length+" near/exact wording pairs, "+issues.length+" integrity issues");
console.log("QA38 grades "+JSON.stringify(graded)+"; answer index "+JSON.stringify(answerDistribution));
console.log("QA38 top 12 similar "+JSON.stringify(similar.slice(0,12)));
console.log("QA38 legacy suspected hold "+JSON.stringify(suspect));
assert.equal(issues.length,0,"QA38 integrity issues: "+JSON.stringify(issues.slice(0,14)));
const manifest=read("data/manifest.json");assert.equal(manifest.banks.filter(b=>b.track==="expected").reduce((n,b)=>n+b.count,0),80);assert.ok(manifest.banks.every(b=>!b.file.includes("/drafts/")));
console.log("PASS QA38: structural audit and release guard; candidates require human review.");
