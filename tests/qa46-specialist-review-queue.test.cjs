"use strict";
/* QA46: produce specialist review queue; this is NOT independent answer approval. */
const fs=require("node:fs"),path=require("node:path"),assert=require("node:assert/strict");
const root=process.env.AUTO_QUIZ_REPO||path.resolve(__dirname,".."),read=p=>JSON.parse(fs.readFileSync(path.join(root,p),"utf8"));
const subjects=["engine","chassis","electrical","eco"],items=[],seen=new Set();
const safety=/고전압|감전|수소|누출|레귤레이터|배터리|BMS|컨택터|충전|냉매|절연|인버터|연료|제동|브레이크|조향|SRS|에어백|휠속도|ABS|EPS|ESC|EPB|시동|화재|안전|경고|압력|퓨즈|회로/i;
const officialCriteria="https://www.q-net.or.kr/cst006.do?artlSeq=5213442&brdId=Q006&code=1202&gId=&gSite=Q&id=cst00602";
const gradeCount={},editedCount={},riskCount={},subjectCount={};
for(let round=1;round<=9;round++)for(const subject of subjects){
 const folder=round===1?"":"round"+String(round).padStart(2,"0")+"/";
 const qs=read("data/past/drafts/"+folder+subject+".json"),es=read("data/explanations/drafts/"+folder+subject+".json");
 const expMap=new Map(es.map(x=>[x.id,x]));
 assert.equal(qs.length,20);assert.equal(expMap.size,20);
 for(const q of qs){
  const e=expMap.get(q.id);assert.ok(e);assert.ok(!seen.has(q.id));seen.add(q.id);
  assert.equal(q.answer,e.correct_answer);assert.equal(e.correct_choice,q.choices[q.answer-1]);
  assert.equal(q.publishable,false);assert.equal(q.review_status,"editorial_draft");
  assert.equal(q.technical_answer_status,"pending_independent_review");
  assert.equal(e.technical_answer_status,"pending_independent_review");
  const stageKey=Object.keys(q).find(k=>/^technical_verification_qa\d+$/.test(k));
  assert.ok(stageKey);const historical=q[stageKey].status;
  assert.ok(["source_supported_first_pass","needs_additional_model_or_syllabus_review","needs_additional_model_or_quality_review"].includes(historical));
  gradeCount[historical]=(gradeCount[historical]||0)+1;
  const edited=["qa45_overlap_edit","qa44_scope_rewrite","qa43_scope_rewrite","qa42_editorial_replacement","qa41_editorial_replacement","qa40_editorial_replacement"].find(k=>q[k])||null;
  if(edited)editedCount[edited]=(editedCount[edited]||0)+1;
  const hasHold=q.subject_classification_review?.status==="hold_do_not_publish";
  const hasSafety=safety.test(q.question+" "+q.choices.join(" ")+" "+e.reason);
  const flags=[];
  if(hasSafety)flags.push("safety_or_OEM_concept_review");
  if(hasHold)flags.push("subject_hold_not_final");
  if(edited)flags.push("current_version_rewritten_after_historical_technical_qa");
  if(historical!=="source_supported_first_pass")flags.push("historical_firstpass_additional_review");
  const priority=hasSafety?"P0-safety":hasHold||historical!=="source_supported_first_pass"||edited?"P1-additional":"P2-independent-review";
  riskCount[priority]=(riskCount[priority]||0)+1;
  subjectCount[subject]=(subjectCount[subject]||0)+1;
  items.push({id:q.id,round,subject,number:q.question_number,question:q.question,answer:q.answer,
   historical_firstpass_grade:historical,historical_audit_stage:stageKey.replace("technical_verification_qa",""),
   current_editorial_rewrite:edited,subject_hold:hasHold,priority,flags,
   referenced_urls:q[stageKey].source_urls||q[stageKey].reference_urls||e.reference_urls||[],
   official_detailed_Qnet_HWP_checked:false,current_OEM_safety_technical_checked:false,
   source_url_relevance_checked:false,independent_technical_answer_approved:false,
   rights_cleared:false,publishable:false,
   review_required:["official detailed Qnet scope","independent expert uniqueness and all 4 options","source page relevance and link health","OEM/safety/vehicle-specific technical details as needed","copyright and publishing rights"]});
 }
}
assert.equal(items.length,720);assert.equal(seen.size,720);
assert.equal(gradeCount.source_supported_first_pass,351);
assert.equal((gradeCount.needs_additional_model_or_syllabus_review||0)+(gradeCount.needs_additional_model_or_quality_review||0),369);
assert.equal(items.filter(x=>x.subject_hold).length,55);
assert.equal(Object.values(editedCount).reduce((a,b)=>a+b,0),54);
const src=read("data/manifest.json");
assert.ok(src.banks.every(x=>!x.file.includes("/drafts/")));
assert.equal(src.banks.filter(x=>x.track==="expected").reduce((a,b)=>a+b.count,0),100);
items.sort((a,b)=>a.priority.localeCompare(b.priority)||a.round-b.round||a.subject.localeCompare(b.subject)||a.number-b.number);
const report={kind:"QA46_SPECIALIST_REVIEW_QUEUE_NOT_TECHNICAL_APPROVAL",date:"2026-11-24",
 official_criteria_page:officialCriteria,official_detailed_HWP_read:false,
 summary:{questions:items.length,options:items.length*4,historical_firstpass_grades:gradeCount,
 existing_subject_holds:55,current_study_question_rewrites:54,
 independent_final_technical_approvals:0,published_reconstructed_past:0,
 published_original_expected_practice:100,priority_counts:riskCount,subject_counts:subjectCount,
 new_post_editorial_specialist_review_needed:54},
 limitations:["Keyword safety priority is conservative, not expert risk classification.",
 "351 historical source-supported are NOT finally technically approved.",
 "54 freshly rewritten questions require another independent answer+source review.",
 "URL presence is not verified support. Rights to public release remain unresolved.",
 "Public Git history remains accessible even if files are removed from a branch."],
 queue:items};
const output=process.env.QA46_REVIEW_OUT;if(output)fs.writeFileSync(path.resolve(root,output),JSON.stringify(report,null,2)+"\n");
console.log("PASS QA46 specialist review queue "+JSON.stringify(report.summary)+" - NOT TECHNICALLY APPROVED.");
