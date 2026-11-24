"use strict";
/* QA47 reviewer packet: exported evidence != technical, syllabus, or rights approval. */
const fs=require("node:fs");
const path=require("node:path");
const assert=require("node:assert/strict");
const root=process.env.AUTO_QUIZ_REPO||path.resolve(__dirname,"..");
const read=p=>JSON.parse(fs.readFileSync(path.join(root,p),"utf8"));
const ledger=read("data/qa/technical-qa47-first20-source-preflight.json");
const manifest=read("data/manifest.json");
const subjects=["engine","chassis","electrical","eco"];
const subjectData=new Map(subjects.map(subject=>[subject,{
  questions:new Map(read("data/past/drafts/"+subject+".json").map(q=>[q.id,q])),
  explanations:new Map(read("data/explanations/drafts/"+subject+".json").map(e=>[e.id,e]))
}]));
assert.equal(ledger.kind,"QA47_BALANCED_ROUND01_SOURCE_PREFLIGHT_NOT_EXPERT_APPROVAL");
assert.equal(ledger.official_qnet_detailed_hwp_read,false);
assert.equal(ledger.independent_expert_technical_approvals,0);
assert.equal(ledger.rights_cleared,0);
assert.equal(ledger.items.length,20);
const states=["not_checked","unavailable","partial","relevant_general","mismatch"];
const seen=new Set(),subjectCounts={},stateCounts={},packet=[];
for(const record of ledger.items){
  assert.ok(!seen.has(record.id),"duplicate QA47 id: "+record.id);seen.add(record.id);
  assert.ok(subjects.includes(record.subject));
  assert.equal(record.round,1);
  const bank=subjectData.get(record.subject);
  const q=bank.questions.get(record.id),e=bank.explanations.get(record.id);
  assert.ok(q&&e,"question/explanation missing: "+record.id);
  assert.equal(q.subject,record.subject);assert.equal(q.question_number,record.question_number);
  assert.equal(q.choices.length,4);assert.equal(new Set(q.choices).size,4);
  assert.ok(Number.isInteger(q.answer)&&q.answer>=1&&q.answer<=4);
  assert.equal(e.correct_answer,q.answer);assert.equal(e.correct_choice,q.choices[q.answer-1]);
  assert.equal(q.publishable,false);assert.equal(q.review_status,"editorial_draft");
  assert.equal(q.technical_answer_status,"pending_independent_review");
  assert.equal(e.technical_answer_status,"pending_independent_review");
  const stage=Object.keys(q).find(k=>/^technical_verification_qa\d+$/.test(k));
  assert.ok(stage,"missing first-pass stage "+record.id);
  const evidence=record.source_review;
  assert.ok(evidence&&states.includes(evidence.status));
  assert.ok(typeof evidence.finding==="string"&&evidence.finding.length>0);
  assert.ok(typeof evidence.action==="string"&&evidence.action.length>0);
  const references=q[stage].source_urls||q[stage].reference_urls||e.reference_urls||[];
  assert.ok(Array.isArray(references),"source link list must be an array");
  if(evidence.status!=="not_checked"){
    assert.ok(typeof evidence.reference==="string"&&evidence.reference.startsWith("https://"));
    assert.ok(references.includes(evidence.reference),"QA47 reviewed URL is not a historical reference: "+record.id);
  }
  if(evidence.status==="mismatch")assert.ok(evidence.supplemental_reference?.startsWith("https://"));
  const analysisKey=Object.keys(e).find(k=>/^option_analysis_qa\d+$/.test(k));
  const analysis=analysisKey?e[analysisKey]:[];
  subjectCounts[record.subject]=(subjectCounts[record.subject]||0)+1;
  stateCounts[evidence.status]=(stateCounts[evidence.status]||0)+1;
  const currentRewrite=["qa45_overlap_edit","qa44_scope_rewrite","qa43_scope_rewrite","qa42_editorial_replacement","qa41_editorial_replacement","qa40_editorial_replacement"].find(k=>q[k])||null;
  packet.push({
    id:q.id,round:record.round,subject:record.subject,question_number:q.question_number,
    question:q.question,original_answer_index:q.answer,
    options:q.choices.map((text,i)=>({
      option_number:i+1,text,recorded_correct:i+1===q.answer,
      previous_firstpass_rationale:Array.isArray(analysis)?(analysis.find(a=>a.number===i+1)?.rationale||null):null
    })),
    current_explanation:e.reason,previous_technical_audit:stage,
    previous_firstpass_status:q[stage].status,current_rewrite_since_firstpass:currentRewrite,
    subject_hold:q.subject_classification_review?.status==="hold_do_not_publish",
    historical_reference_urls:references,source_preflight:evidence,
    checked_categories:{url_topic_screened:evidence.status!=="not_checked"&&evidence.status!=="unavailable",
      all_four_options_independently_checked:false,unique_answer_expert_approved:false,
      qnet_detailed_syllabus_checked:false,vehicle_specific_OEM_safety_verified:false,
      copyright_clearance:false},
    status:"PENDING_SPECIALIST_REVIEW_DO_NOT_PUBLISH",publishable:false
  });
}
assert.equal(seen.size,20);
for(const subject of subjects)assert.equal(subjectCounts[subject],5);
assert.equal(Object.values(stateCounts).reduce((a,b)=>a+b,0),20);
assert.equal(stateCounts.mismatch,1);
assert.equal(stateCounts.unavailable,1);
assert.equal(stateCounts.not_checked,11);
assert.equal(packet.filter(x=>x.subject_hold).length,5);
assert.ok(manifest.banks.every(b=>!b.file.includes("/drafts/")));
assert.equal(manifest.banks.filter(b=>b.track==="expected").reduce((n,b)=>n+b.count,0),100);
const output={
 kind:"QA47_REVIEWER_PACKET_NOT_APPROVAL",date:ledger.date,
 description:"First round, balanced 5 questions per subject. Includes all options/explanations and source preflight; not reviewed or approved for public exam.",
 summary:{question_count:20,option_count:80,subject_counts:subjectCounts,
  source_preflight_counts:stateCounts,full_answer_technical_approvals:0,
  syllabus_verified:0,rights_cleared:0,public_past_added:0,public_expected_preserved:100},
 questions:packet
};
if(process.env.QA47_PACKET_OUT){
 const out=path.resolve(root,process.env.QA47_PACKET_OUT);
 fs.writeFileSync(out,JSON.stringify(output,null,2)+"\n","utf8");
}
console.log("PASS QA47 first-20 source preflight and reviewer packet: "+JSON.stringify(output.summary)+"; NO EXPERT APPROVAL");
