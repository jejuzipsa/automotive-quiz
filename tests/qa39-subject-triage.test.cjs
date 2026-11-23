"use strict";
/** QA39 classification SECOND-PASS QUEUE: no unilateral cross-subject reassignment, no expert sign-off. */
const fs=require("node:fs"),path=require("node:path"),assert=require("node:assert/strict");
const root=process.env.AUTO_QUIZ_REPO||path.resolve(__dirname,".."),read=p=>JSON.parse(fs.readFileSync(path.join(root,p),"utf8"));
const subjects=["engine","chassis","electrical","eco"],holds=[];
const overrides={
 "auto-made-r06-s04-q20":{category:"legacy_false_positive_candidate",priority:"P1",target_subject:"eco",note:"현행 문항은 전기차 구동 인버터를 물음. 예전 태양광 가정용 인버터 사유가 더는 현행 문항에 맞지 않음. 보류는 해제하지 않음."},
 "auto-made-r05-s01-q09":{category:"in_scope_reauthored_but_held",priority:"P1",target_subject:"engine",note:"렌터카 분류 문제를 디젤 EGR 진단으로 교정. 보류 및 전문가 확인은 유지"},
 "auto-made-r06-s01-q14":{category:"in_scope_reauthored_but_held",priority:"P1",target_subject:"engine",note:"시설 배전반 화재 문제를 가솔린 연료 누출 초기대응으로 교정. 보류 및 전문가 확인은 유지"},
 "auto-made-r02-s01-q01":{category:"in_scope_reauthored_but_held",priority:"P1",target_subject:"engine",note:"타이어 공기압 문제를 엔진 과급제어 진단으로 교정. 보류 및 전문가 확인은 유지"},
 "auto-made-r09-s03-q06":{category:"cross_subject_overlap_candidate",priority:"P2",target_subject:"chassis",note:"TCS 구동륜 제동제어는 전자제어제동(섀시)과 주행안전장치(전기) 경계이므로 오분류를 기계적으로 확정하지 않음."},
 "auto-made-r09-s03-q19":{category:"cross_subject_overlap_candidate",priority:"P2",target_subject:"chassis",note:"EPB는 전자제어 제동장치와 주행안전 전장의 과목 경계로 출제기준 세세항목 확인 필요."},
 "auto-made-r03-s03-q08":{category:"cross_subject_overlap_candidate",priority:"P2",target_subject:"chassis",note:"ABS 유압회로 개방·에어빼기는 섀시 정비에 가깝지만 주행안전장치 전장 범위와의 겹침 여부 확인 필요."},
 "auto-made-r04-s02-q20":{category:"cross_subject_overlap_candidate",priority:"P2",target_subject:"engine",note:"엔진 데이터 스캔은 엔진전자제어 과목에 가깝지만 진단 네트워크와 겹칠 수 있어 일괄 이동 금지."},
 "auto-made-r05-s02-q19":{category:"cross_subject_overlap_candidate",priority:"P2",target_subject:"engine",note:"스캐너 연결안전은 엔진 진단과 전기/네트워크 기초에 걸칠 수 있어 세부항목 확인 필요."},
 "auto-made-r05-s04-q14":{category:"cross_subject_overlap_candidate",priority:"P2",target_subject:"electrical",note:"TPMS의 타이어압 자체는 섀시, 신호·경고등·통신은 주행안전 전장. 과목에 따라 지문 초점 조정 필요."}
};
// QA41 rewrote ten former engine-topic prompts as current chassis study topics.
// Historical subject flags remain held until detailed syllabus and independent review.
for(const id of ["auto-made-r04-s02-q16","auto-made-r04-s02-q17","auto-made-r04-s02-q18","auto-made-r04-s02-q19","auto-made-r04-s02-q20",
 "auto-made-r05-s02-q16","auto-made-r05-s02-q17","auto-made-r05-s02-q18","auto-made-r05-s02-q19","auto-made-r05-s02-q20"])
 overrides[id]={category:"in_scope_reauthored_but_held",priority:"P1",target_subject:"chassis",note:"QA41에서 섀시 관련 자체 학습문제로 교체됨. 출제 범위·차량별 안전·권리 검증 전 기존 보류 유지."};
const majors={
 engine:["과급장치","가솔린 전자제어장치","디젤 전자제어장치","엔진 본체","배출가스장치"],
 chassis:["자동변속기","유압식 현가장치","전자제어 현가장치","전자제어 조향장치","전자제어 제동장치"],
 electrical:["네트워크통신장치","전기·전자회로 분석","주행안전장치","냉·난방장치","편의장치"],
 eco:["하이브리드 고전압장치","전기자동차","수소연료전지차 및 그 밖의 친환경자동차"]
};
for(let round=1;round<=9;round++)for(const subject of subjects){
 const prefix=round===1?"":"round"+String(round).padStart(2,"0")+"/";
 const qs=read("data/past/drafts/"+prefix+subject+".json"),es=read("data/explanations/drafts/"+prefix+subject+".json");
 for(const q of qs){
  if(q.subject_classification_review?.status!=="hold_do_not_publish")continue;
  const ex=es.find(x=>x.id===q.id);assert.ok(ex,"missing explanation "+q.id);
  assert.equal(ex.subject_classification_review.status,"hold_do_not_publish");
  const h=q.subject_classification_review,extra=overrides[q.id]||{};
  const target=Object.hasOwn(extra,"target_subject")?extra.target_subject:(subjects.includes(h.suggested_subject)?h.suggested_subject:null);
  const category=extra.category||(target&&target!==subject?"probable_cross_subject_rewrite_candidate":"needs_curriculum_scope_review");
  holds.push({id:q.id,round,question_number:q.question_number,current_subject:subject,current_question:q.question,
   inherited_suggested_subject:h.suggested_subject||null,provisional_target_subject:target,category,
   priority:extra.priority||"P2",current_legacy_reason:h.reason||null,review_note:extra.note||"기존 과목 보류 후보를 재검토한 뒤 원래 과목 정원을 유지하며 해당 과목 개념으로 재작성하거나 출제범위 확인 후 재분류해야 함.",
   applicable_candidate_major_headings:target?majors[target]:[],source_basis:"legacy hold + secondary syllabus summary; detailed official Q-net HWP NOT inspected",
   release_status:"held_pending_official_detailed_syllabus_and_independent_technical_rights_check"});
 }
}
assert.equal(holds.length,55);assert.equal(new Set(holds.map(x=>x.id)).size,55);
for(const id of Object.keys(overrides))assert.ok(holds.some(x=>x.id===id),"unmatched override "+id);
assert.equal(holds.filter(x=>x.category==="legacy_false_positive_candidate").length,1);
const counts={};for(const h of holds)counts[h.category]=(counts[h.category]||0)+1;
const out={kind:"PROVISIONAL_55_HOLD_TOPIC_TRIAGE_NOT_TECHNICAL_APPROVAL",date:"2026-11-23",
 subject_majors_provisionally_summarized: majors,
 official_source:"https://www.q-net.or.kr/cst006.do?artlSeq=5213442&brdId=Q006&code=1202&gId=&gSite=Q&id=cst00602",
 secondary_major_group_summary:"https://shcomms12.com/2026/10/24/auto-mechanic-industrial-engineer-written-exam/",
 official_detailed_hwp_separately_inspected:false,counts,holds,total:holds.length,
 notes:["18 major headings are drawn from a third-party summary and require detailed official HWP confirmation.",
 "55 existing hold flags remain unchanged. No scope assignment is official.","No independent expert correctness, safety or publishing-rights approval."]};
const dest=process.env.QA39_SUBJECT_REPORT_OUT;if(dest)fs.writeFileSync(path.resolve(root,dest),JSON.stringify(out,null,2)+"\n");
const m=read("data/manifest.json");assert.ok(m.banks.every(x=>!x.file.includes("/drafts/")));
console.log("PASS QA39 classification: "+holds.length+" existing holds sorted into "+JSON.stringify(counts)+"; no automatic reclassification/release.");
