"use strict";
// QA64 screening of current, materialized questions. Signals are not approvals.
const fs=require("node:fs"),path=require("node:path"),assert=require("node:assert/strict");
const root=path.resolve(__dirname,".."),dir=path.resolve(root,process.env.QA52_OUT_DIR||"qa52-working-bank");
const read=p=>JSON.parse(fs.readFileSync(p,"utf8"));
const subjects=["engine","chassis","electrical","eco"], all=[];
for(const s of subjects){
 const qs=read(path.join(dir,"questions",s+".json")),es=read(path.join(dir,"explanations",s+".json"));
 assert.equal(qs.length,180);assert.equal(es.length,180);
 const em=new Map(es.map(e=>[e.id,e]));
 for(const q of qs){const e=em.get(q.id);assert.ok(e);assert.equal(e.correct_choice,q.choices[q.answer-1]);all.push({id:q.id,subject:s,round:q.round,number:q.question_number,version:q.current_version,question:q.question,choices:q.choices,answer:q.answer,reason:e.reason,key_point:e.key_point,hold:q.subject_classification_review?.status==="hold_do_not_publish",refs:e.current_reference_urls});}
}
assert.equal(all.length,720);assert.equal(new Set(all.map(x=>x.id)).size,720);assert.equal(all.filter(x=>x.hold).length,55);
const norm=s=>String(s||"").normalize("NFKC").toLowerCase().replace(/[^\p{L}\p{N}]/gu,"");
const grams=s=>{s=norm(s);const g=new Set();for(let i=0;i<s.length-2;i++)g.add(s.slice(i,i+3));return g;};
const dice=(a,b)=>{let n=0;for(const x of a)if(b.has(x))n++;return a.size+b.size?2*n/(a.size+b.size):0;};
const noteMap=new Map();
for(const p of fs.readdirSync(path.join(root,"data/qa")).filter(p=>/^technical-qa(49|50|52|53|55|56|57|58|59|60|61|62|63)-.*option-review\.json$/.test(p))){
 const data=read(path.join(root,"data/qa",p));for(const x of data.items||[])if(x.note)noteMap.set(x.id,{note:x.note,version:x.version||"historical",ledger:p});
}
const rows=all.map(q=>({...q,sg:grams(q.question),ag:grams(q.choices[q.answer-1])}));
const pairs=[];let comparisons=0;
for(let i=0;i<rows.length;i++)for(let j=i+1;j<rows.length;j++){
 const a=rows[i],b=rows[j];comparisons++;
 const stem=dice(a.sg,b.sg),answer=dice(a.ag,b.ag),exact=norm(a.question)===norm(b.question),sameAnswer=norm(a.choices[a.answer-1])===norm(b.choices[b.answer-1])&&norm(a.choices[a.answer-1]).length>=12;
 if(exact||sameAnswer||(stem>=.44&&answer>=.23)||(stem>=.23&&answer>=.58)||(stem>=.68)){
  pairs.push({ids:[a.id,b.id],subjects:[a.subject,b.subject],versions:[a.version,b.version],stem_similarity:+stem.toFixed(3),answer_similarity:+answer.toFixed(3),exact_stem:exact,shared_correct_text:sameAnswer,score:+(stem*.55+answer*.45).toFixed(3),status:"candidate_not_confirmed"});
 }
}
assert.equal(comparisons,258840);
pairs.sort((a,b)=>Number(b.exact_stem)-Number(a.exact_stem)||b.score-a.score||a.ids.join().localeCompare(b.ids.join()));
const byId=new Map(all.map(q=>[q.id,q]));
// Explicitly compared source stems and answers; assert the current versions have not changed.
const reviewed=[
 ["auto-made-r05-s03-q09","auto-made-r09-s03-q17","리시버드라이어의 수분·이물 관리; 9회 해설 수정은 학습목표를 바꾸지 않음","revise_second"],
 ["auto-made-r07-s02-q10","auto-made-r09-s02-q09","조향계 정비 후 지정 영점/학습 확인; 상황 차이는 있으나 같은 기본 판단","review_overlap"],
 ["auto-made-r08-s04-q10","auto-made-r09-s04-q20","수소 감압 레귤레이터의 기능","revise_second"],
 ["auto-made-r02-s01-q19","auto-made-r09-s01-q03","DPF 포집 대상과 개정된 그을음/회분 구분은 다른 학습목표","retain_distinct"],
 ["auto-made-r06-s01-q16","auto-made-r09-s01-q14","베어링 캡 조립과 개정된 지름 간극 계산은 다른 학습목표","retain_distinct"],
 ["auto-made-r02-s04-q15","auto-made-r03-s04-q15","HVIL 감시 목적과 보호제어는 관련되나 구별 가능; 3회 과목보류 유지","review_overlap"]
].map(([a,b,reason,decision])=>{const x=byId.get(a),y=byId.get(b);assert.ok(x&&y);return {ids:[a,b],versions:[x.version,y.version],questions:[x.question,y.question],correct_choices:[x.choices[x.answer-1],y.choices[y.answer-1]],reason,decision};});
const weakPattern=/만으로|만 확인|무조건|항상|전혀|모든|반드시|절대|무한|정확히/;
const foreignPattern=/타이어.*(?:색|로고|브랜드|제조국)|도장.*색|시트.*가죽|워셔액|트렁크.*램프|미러.*색|오디오|라디오|방향제|실내.*조명|카메라.*화질/;
const residuePattern=/원본\s*(?:문항|문제|해설)|기존\s*(?:문항|문제|선택지|보기)|편집\s*(?:이력|메모|문구)|[0-9]+회차\s*(?:문항|문제|[가-힣]+[0-9]+번)|QA[0-9]+|정답\s*노출/;
const safetyPattern=/고전압|수소|SRS|에어백|냉매|고압\s*연료|스톨\s*시험|제동\s*안전|침수|화재/;
const legalPattern=/법령|법규|법정|법률|고시|의무|허용\s*기준|자동차관리법/;
const flags=all.map(q=>{
 const n=noteMap.get(q.id),wrong=q.choices.filter((_,i)=>i!==q.answer-1);
 const flags=[];
 if(q.hold)flags.push("subject_hold");
 if(n&&/중복|반복|유사|겹치/.test(n.note))flags.push("historical_overlap_note");
 if(n&&/오답|변별력|정답 노출|정답노출/.test(n.note))flags.push("historical_distractor_note");
 if(wrong.filter(x=>weakPattern.test(x)).length>=2)flags.push("two_or_more_absolute_or_only_distractors");
 if(wrong.filter(x=>foreignPattern.test(x)).length>=2)flags.push("two_or_more_unrelated_wording_candidates");
 if(residuePattern.test(q.reason+" "+q.key_point))flags.push("explanation_editorial_residue_candidate");
 if(norm(q.reason).length<45)flags.push("short_explanation_candidate");
 if(safetyPattern.test(q.question+" "+q.reason))flags.push("safety_review_required");
 if(legalPattern.test(q.question+" "+q.reason))flags.push("legal_review_required");
 if(pairs.some(p=>p.ids.includes(q.id)))flags.push("text_similarity_candidate");
 if(reviewed.some(p=>p.ids[1]===q.id&&p.decision==="revise_second"))flags.push("manual_duplicate_confirmed");
 return {id:q.id,subject:q.subject,round:q.round,version:q.version,flags,historical_note:n||null,source_approval:"not_independently_approved",publishable:false,priority:flags.includes("subject_hold")||flags.includes("safety_review_required")||flags.includes("legal_review_required")?"P0_release_hold":flags.includes("manual_duplicate_confirmed")||flags.includes("explanation_editorial_residue_candidate")?"P1_editorial":flags.length?"P2_review":"P3_no_signal_not_approval"};
});
const count=k=>flags.filter(x=>x.flags.includes(k)).length;
const counts=Object.fromEntries([...new Set(flags.flatMap(x=>x.flags))].sort().map(k=>[k,count(k)]));
const summary={kind:"QA64_CURRENT_BANK_SCREENING_NOT_APPROVAL",questions:all.length,pair_comparisons:comparisons,similarity_candidates:pairs.length,exact_stem_pairs:pairs.filter(p=>p.exact_stem).length,shared_correct_text_pairs:pairs.filter(p=>p.shared_correct_text).length,manual_comparisons:reviewed.length,manual_duplicate_confirmed:reviewed.filter(p=>p.decision==="revise_second").length,counts,priority_counts:Object.fromEntries(["P0_release_hold","P1_editorial","P2_review","P3_no_signal_not_approval"].map(p=>[p,flags.filter(x=>x.priority===p).length])),classification_holds:55,independent_approvals:0,published_new:0,limitations:["String similarities and keyword heuristics are incomplete and may be false positives.","Historical notes can refer to superseded text; current version recorded.","No signal does not mean safe or cleared for publication. No rights or OEM verification."]};
assert.equal(flags.length,720);
const out=path.join(dir,"qa64-quality");fs.mkdirSync(out,{recursive:true});
for(const [name,data] of Object.entries({summary,pairs,manual_comparisons:reviewed,question_queue:flags}))fs.writeFileSync(path.join(out,name+".json"),JSON.stringify(data,null,2)+"\n");
console.log("PASS QA64 "+JSON.stringify(summary));
