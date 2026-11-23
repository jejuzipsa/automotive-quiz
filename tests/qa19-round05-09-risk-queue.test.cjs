"use strict";
/**
 * QA19 REVIEW QUEUE, NOT A TECHNICAL ANSWER APPROVAL.
 * Read all 400 round05-09 draft question and explanation pairs; identify editorial
 * review candidates without pretending that keyword heuristics prove correctness.
 */
const fs=require("node:fs");
const path=require("node:path");
const assert=require("node:assert/strict");
const root=process.env.AUTO_QUIZ_REPO||path.resolve(__dirname,"..");
const read=p=>JSON.parse(fs.readFileSync(path.join(root,p),"utf8"));
const subjects=["engine","chassis","electrical","eco"];
const full=[],round05to09=[],errors=[];
const normalized=s=>String(s||"").toLowerCase().replace(/[^a-z0-9가-힣]/g,"");
const gram=s=>{const n=normalized(s),r=new Set();for(let i=0;i<=n.length-3;i++)r.add(n.slice(i,i+3));return r};
for(let r=1;r<=9;r++)for(const s of subjects){
 const mid=r===1?"":`round${String(r).padStart(2,"0")}/`;
 const qp=`data/past/drafts/${mid}${s}.json`,ep=`data/explanations/drafts/${mid}${s}.json`;
 const qs=read(qp),es=read(ep),em=new Map(es.map(e=>[e.id,e]));
 assert.equal(qs.length,20,`20 q in ${qp}`);
 assert.equal(es.length,20,`20 e in ${ep}`);
 for(let i=0;i<20;i++){
  const q=qs[i],e=em.get(q.id);
  assert.ok(e,`missing explanation ${q.id}`);
  assert.equal(q.round,r);assert.equal(q.subject,s);
  assert.equal(q.question_number,i+1);
  assert.equal(q.track,"past");
  assert.equal(q.publishable,false);assert.equal(q.review_status,"editorial_draft");
  assert.equal(q.technical_answer_status,"pending_independent_review");
  assert.equal(e.technical_answer_status,"pending_independent_review");
  assert.equal(e.correct_answer,q.answer);assert.equal(e.correct_choice,q.choices[q.answer-1]);
  assert.equal(q.explanation_id,e.id);
  assert.equal(q.choices.length,4);assert.equal(new Set(q.choices.map(normalized)).size,4);
  const item={id:q.id,round:r,subject:s,question_number:i+1,
    question:q.question,choices:q.choices,
    correct_answer:q.answer,correct_choice:q.choices[q.answer-1],
    reason:e.reason,source_hold:q.subject_classification_review?.status==="hold_do_not_publish",
    has_individual_option_firstpass:!!(q.technical_verification_qa3||q.technical_verification_qa6||q.technical_verification_qa7||q.technical_verification_qa8||q.technical_verification_qa10||q.technical_verification_qa11||q.technical_verification_qa12||q.technical_verification_qa13||q.technical_verification_qa14||q.technical_verification_qa15||q.technical_verification_qa16||q.technical_verification_qa17||q.technical_verification_qa18||q.technical_verification_qa19),
    reference_urls:e.reference_urls||[]};
  full.push(item);
  if(r>=5)round05to09.push(item);
 }
}
assert.equal(full.length,720);assert.equal(round05to09.length,400);
const hasSafety=/(고전압|절연장갑|감전|에어백|SRS|수소|누출|압력용기|연료레일|분사압|인젝터|잔압|에어빼기|유압|브레이크|냉매|폐유|화재|폭발)/i;
const hasLaw=/(법령|법률|규정|법정|허용기준|검사기준|검사주기|등록|형식승인|교통안전|배출기준|재활용|폐기물|정기검사)/i;
const hasNumeric=/(?:\d+(?:\.\d+)?\s*(?:mm|cm|kPa|MPa|Ω|ohm|V|A|℃|psi|bar|rpm|%|도|년|개월|km)\b|\d+(?:\.\d+)?\s*%)/i;
const hasAbsolute=/(반드시|항상|모든|무조건|절대|절대로|전혀|어떤 경우에도|예외 없이)/;
const domainWords=[
 ["타이어","휠"],["연료","인젝터","점화"],["냉매","공조"],["브레이크","ABS"],
 ["고전압","배터리","인버터"],["터보","흡기"],["현가","댐퍼"],["수소","연료전지"],
 ["도어","파워윈도","선루프"],["변속기","ATF"]
];
const domainFrom=t=>domainWords.flatMap((words,i)=>words.some(w=>String(t).includes(w))?[i]:[]);
const pending=round05to09.filter(x=>!x.has_individual_option_firstpass);
assert.equal(pending.length,380,"QA19 only engine round05 has individual 80-choice firstpass; 380 remain");
const fullGrams=full.map(x=>gram(x.question));
const questionMap=new Map(full.map((x,i)=>[x.id,i]));
const candidateDuplicates=new Map(full.map(x=>[x.id,[]]));
for(let i=0;i<full.length;i++){
 const a=full[i],aa=fullGrams[i],an=normalized(a.question);
 if(an.length<15)continue;
 for(let j=i+1;j<full.length;j++){
  const b=full[j];
  // Same 5-9 rounds or any prior round when one side is 5-9.
  if(a.round<5&&b.round<5)continue;
  if(a.subject!==b.subject&&a.round!==b.round)continue;
  const bb=fullGrams[j],bn=normalized(b.question);
  if(bn.length<15)continue;
  if(Math.abs(an.length-bn.length)>Math.max(16,Math.min(an.length,bn.length)*.8))continue;
  let intersection=0;
  for(const key of (aa.size<bb.size?aa:bb))if((aa.size<bb.size?bb:aa).has(key))intersection++;
  const score=intersection/(aa.size+bb.size-intersection||1);
  if(score>=.55){
   const item={other_id:b.id,jaccard:+score.toFixed(3),same_subject:a.subject===b.subject,same_round:a.round===b.round};
   candidateDuplicates.get(a.id).push(item);
   candidateDuplicates.get(b.id).push({other_id:a.id,...item});
  }
 }
}
const ranked=round05to09.map(row=>{
 const text=row.question+" "+row.choices.join(" ");
 const flags=[];
 if(row.source_hold)flags.push("subject_classification_hold");
 if(hasSafety.test(text))flags.push("safety_or_regulated_work_caution");
 if(hasLaw.test(text))flags.push("legal_or_regulatory_time_sensitive");
 if(hasNumeric.test(text))flags.push("numeric_unit_or_specification");
 if(hasAbsolute.test(text))flags.push("absolute_wording_candidate");
 if(row.reason.trim().length<80)flags.push("short_explanation_review");
 const overlaps=candidateDuplicates.get(row.id).filter(x=>x.other_id!==row.id);
 if(overlaps.length)flags.push("near_wording_duplicate_candidate");
 const qDomains=domainFrom(row.question);
 const crossChoices=row.choices.map((c,i)=>({index:i+1,text:c,domains:domainFrom(c)})).filter(x=>x.domains.some(d=>qDomains.length>0&&!qDomains.includes(d)));
 if(crossChoices.length>=2)flags.push("cross_domain_distractor_candidate");
 const weights={subject_classification_hold:5,safety_or_regulated_work_caution:4,legal_or_regulatory_time_sensitive:4,numeric_unit_or_specification:2,absolute_wording_candidate:1,short_explanation_review:2,near_wording_duplicate_candidate:3,cross_domain_distractor_candidate:1};
 const score=flags.reduce((a,f)=>a+weights[f],0);
 return {id:row.id,round:row.round,subject:row.subject,question_number:row.question_number,
  individual_choice_technical_firstpass:row.has_individual_option_firstpass,
  independently_final_approved:false,public_release_approved:false,
  priority_score:score,review_flags:flags,duplicate_candidates:overlaps.sort((a,b)=>b.jaccard-a.jaccard).slice(0,8),
  short_reason_length:row.reason.trim().length,
  cross_domain_choice_candidates:crossChoices.map(x=>({number:x.index,text:x.text})),
  correct_answer_index:row.correct_answer,
  question:row.question};
}).sort((a,b)=>b.priority_score-a.priority_score||a.round-b.round||subjects.indexOf(a.subject)-subjects.indexOf(b.subject)||a.question_number-b.question_number);
const tally=Object.fromEntries([...new Set(ranked.flatMap(x=>x.review_flags))].map(k=>[k,ranked.filter(x=>x.review_flags.includes(k)).length]));
const summary={date:"2026-11-23",task:"QA19 round05-09 all-400 mechanical editorial risk screening",
 scanned_question_count:400,scanned_explanation_count:400,question_technical_option_firstpassed:20,
 choice_technical_option_firstpassed:80,
 question_technical_choice_not_yet_firstpassed:pending.length,
 option_technical_choice_not_yet_firstpassed:pending.length*4,
 subjects:Object.fromEntries(subjects.map(s=>[s,{scanned:round05to09.filter(x=>x.subject===s).length,pending_firstpass:pending.filter(x=>x.subject===s).length}])),
 rounds:Object.fromEntries([5,6,7,8,9].map(r=>["round"+String(r).padStart(2,"0"),{scanned:round05to09.filter(x=>x.round===r).length,pending_firstpass:pending.filter(x=>x.round===r).length}])),
 flagged_counts:tally,current_subject_hold_count_across_720:full.filter(x=>x.source_hold).length,
 manual_technical_final_approvals_generated:0,public_new_reconstructed_past_questions:0};
assert.equal(summary.current_subject_hold_count_across_720,53,"QA19 adds 1 classification hold to prior 52");
const manifest=read("data/manifest.json");
assert.ok(manifest.banks.every(b=>!b.file.includes("/drafts/")));
const report={summary,method:"Rule-based editorial-risk triage only; no independent fact checking of correct answer or options. Similarity 3gram Jaccard >=0.55. Cross-domain terms are crude heuristics and produce false positives and negatives.",limitations:["This script cannot prove any answer true or false.","Lack of a flagged duplicate does not prove unique concept.","No OCR or purchased book publication, no draft manifest change."],ranked,remaining_pending_ids:pending.map(x=>x.id)};
const output=process.env.QA19_REPORT_OUT||path.join(root,"qa19-review-queue.json");
fs.writeFileSync(output,JSON.stringify(report,null,2)+"\n","utf8");
console.log("QA19_FULL_REVIEW_QUEUE_SUMMARY "+JSON.stringify(summary));
console.log("QA19_TOP_RISKS "+JSON.stringify(ranked.slice(0,20).map(x=>({id:x.id,score:x.priority_score,flags:x.review_flags}))));
console.log("QA19_REPORT "+output);
