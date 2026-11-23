'use strict';
/**
 * QA5: all 720 reconstructed draft question/explanation pairs.
 * Machine QA only. Never treats matching stored answer keys as technical approval.
 * Writes a review-only report for GitHub Actions artifact attachment.
 */
const assert=require('node:assert/strict');
const fs=require('node:fs');
const path=require('node:path');
const root=path.resolve(__dirname,'..');
const read=p=>JSON.parse(fs.readFileSync(path.join(root,p),'utf8'));
const subjects=['engine','chassis','electrical','eco'];
const countBySubject=Object.fromEntries(subjects.map(x=>[x,0]));
const issues=[],all=[],explanations=[];
const seenIds=new Set(),seenSources=new Set();
for(let round=1;round<=9;round++){
  const seg=round===1?'':`round${String(round).padStart(2,'0')}/`;
  for(const subject of subjects){
    const qp=`data/past/drafts/${seg}${subject}.json`;
    const ep=`data/explanations/drafts/${seg}${subject}.json`;
    const qs=read(qp),es=read(ep),expMap=new Map(es.map(x=>[x.id,x]));
    assert.equal(qs.length,20,`${qp}: expected 20`);
    assert.equal(es.length,20,`${ep}: expected 20`);
    assert.equal(expMap.size,20,`${ep}: duplicate explanation IDs`);
    for(let i=0;i<qs.length;i++){
      const q=qs[i],e=expMap.get(q.id);
      const fail=(type,detail='')=>issues.push({id:q.id,type,detail});
      if(!q.id||seenIds.has(q.id))fail('duplicate_or_missing_id');
      seenIds.add(q.id);
      if(!q.source_question_id||seenSources.has(q.source_question_id))fail('duplicate_or_missing_source_id');
      seenSources.add(q.source_question_id);
      if(q.subject!==subject||q.round!==round||q.question_number!==i+1)fail('round_subject_number_mismatch');
      if(q.track!=='past'||q.origin!=='independently_reconstructed_from_exam_concepts')fail('source_track_mismatch');
      if(typeof q.question!=='string'||q.question.length<25)fail('question_missing_or_too_short');
      if(!Array.isArray(q.choices)||q.choices.length!==4||q.choices.some(x=>typeof x!=='string'||!x.trim())||new Set(q.choices).size!==4)fail('nonunique_or_invalid_four_choices');
      if(!Number.isInteger(q.answer)||q.answer<1||q.answer>4)fail('answer_out_of_range');
      if(q.publishable!==false||q.technical_answer_status!=='pending_independent_review'||q.review_status!=='editorial_draft')fail('unapproved_draft_flag_mismatch');
      if(!e)fail('missing_explanation');
      else{
        if(e.id!==q.explanation_id||e.question_id!==q.id||e.subject!==q.subject||e.source_question_id!==q.source_question_id)fail('explanation_identity_mismatch');
        if(e.correct_answer!==q.answer||e.correct_choice!==q.choices[q.answer-1])fail('explanation_answer_mismatch');
        if(typeof e.reason!=='string'||e.reason.length<46||typeof e.key_point!=='string'||e.key_point.length<13)fail('explanation_quality_minimum');
        if(e.technical_answer_status!=='pending_independent_review'||e.review_status!=='editorial_draft')fail('explanation_unapproved_status_mismatch');
        explanations.push(e);
      }
      countBySubject[subject]++;
      all.push(q);
    }
  }
}
assert.equal(all.length,720);
assert.equal(explanations.length,720);
assert.equal(seenIds.size,720);
assert.equal(seenSources.size,720);
assert.equal(issues.length,0,'Hard schema and answer-link failures: '+JSON.stringify(issues.slice(0,12)));
const norm=s=>String(s||'').toLowerCase().replace(/[^0-9a-z가-힣]/g,'');
function grams(s){
  const x=norm(s),z=new Set();
  for(let i=0;i+2<x.length;i++)z.add(x.slice(i,i+3));
  return z;
}
const questionGram=all.map(q=>grams(q.question));
const sameQuestionPairs=[],nearQuestionPairs=[];
for(let i=0;i<all.length;i++){
  const a=all[i],aa=questionGram[i],an=norm(a.question);
  for(let j=i+1;j<all.length;j++){
    const b=all[j],bn=norm(b.question);
    if(an===bn){sameQuestionPairs.push({a:a.id,b:b.id});continue;}
    if(Math.abs(an.length-bn.length)>Math.max(14,Math.min(an.length,bn.length)*.75))continue;
    const bb=questionGram[j];let intersection=0;
    for(const gram of (aa.size<bb.size?aa:bb))if((aa.size<bb.size?bb:aa).has(gram))intersection++;
    const similarity=intersection/(aa.size+bb.size-intersection||1);
    if(similarity>=.55)nearQuestionPairs.push({
      a:a.id,b:b.id,jaccard:+similarity.toFixed(3),
      same_subject:a.subject===b.subject,
      same_correct_choice:norm(a.choices[a.answer-1])===norm(b.choices[b.answer-1])
    });
  }
}
nearQuestionPairs.sort((a,b)=>b.jaccard-a.jaccard);
const answerGrouping=new Map();
for(const q of all){
 const key=norm(q.choices[q.answer-1]);
 if(key.length<10)continue;
 if(!answerGrouping.has(key))answerGrouping.set(key,[]);
 answerGrouping.get(key).push(q.id);
}
const repeatedCorrectTexts=[...answerGrouping.values()].filter(x=>x.length>1)
  .sort((a,b)=>b.length-a.length).map(ids=>({ids,count:ids.length}));
const shortExplanations=explanations.filter(x=>x.reason.trim().length<80)
  .map(x=>({id:x.id,length:x.reason.trim().length})).sort((a,b)=>a.length-b.length);
const subjectHolds=all.filter(x=>x.subject_classification_review?.status==='hold_do_not_publish')
  .map(x=>({id:x.id,suggested:x.subject_classification_review.suggested_subject}));
const unitOrNumber=all.filter(q=>/\d+\s*(?:v|a|Ω|℃|mm|bar|kpa|mpa|psi|rpm|%)/i.test(q.question+' '+q.choices.join(' '))).map(x=>x.id);
const absoluteWords=all.filter(q=>/(항상|무조건|반드시|절대|전혀|모든 차종|어떤 경우에도)/.test(q.question+' '+q.choices.join(' '))).map(x=>x.id);
const manifest=read('data/manifest.json');
assert.ok(manifest.banks.every(x=>!x.file.includes('/drafts/')));
const summary={
  source:'QA5-automated-fullbank-scan',date:'2026-11-23',
  question_count:all.length,explanation_count:explanations.length,
  unique_question_ids:seenIds.size,unique_source_ids:seenSources.size,
  subjects:countBySubject,critical_schema_or_link_errors:issues.length,
  currently_published_reconstructed_drafts:all.filter(q=>q.publishable===true).length,
  short_explanation_candidates:shortExplanations.length,
  subject_hold_count:subjectHolds.length,
  exact_normalized_duplicate_question_pairs:sameQuestionPairs.length,
  near_question_candidate_pairs_ge_055:nearQuestionPairs.length,
  repeat_correct_choice_text_groups:repeatedCorrectTexts.length,
  numeric_or_unit_candidate_questions:unitOrNumber.length,
  absolute_word_candidate_questions:absoluteWords.length,
  final_technical_approvals_generated:0
};
const report={summary,method:{
  exact_duplicate:'lowercase question with whitespace/punctuation removed',
  near_duplicate:'question character trigram Jaccard >=0.55; both false positives and false negatives expected',
  repeated_answer:'identical normalized correct choice text across different questions; not itself erroneous',
  short_explanation:'reason length less than 80 characters; editing candidate only',
  unit_and_absolute:'heuristic risk signals only'
},limitations:['Automated consistency does not establish unique technically correct options.','Cannot assess textbook publication rights or final technical approval.','Existing QA3 and QA4 human reviews are separate.'],critical_issues:issues,
  exact_question_pairs:sameQuestionPairs,near_question_pairs:nearQuestionPairs,
  repeated_correct_answer_text:repeatedCorrectTexts,
  short_explanation_ids:shortExplanations,
  subject_hold_ids:subjectHolds,
  numeric_or_unit_ids:unitOrNumber,absolute_word_ids:absoluteWords};
const output=process.env.QA5_REPORT_OUT||path.join(root,'qa5-report.json');
fs.writeFileSync(output,JSON.stringify(report,null,2)+'\n','utf8');
assert.equal(Object.values(countBySubject).reduce((a,b)=>a+b,0),720);
assert.equal(subjectHolds.length,51,'47 legacy + 1 QA10 tire + 1 QA12 alignment + 2 QA17 new subject holds must remain');
console.log('QA5_BANK_SUMMARY '+JSON.stringify(summary));
console.log('QA5_TOP_SIMILAR '+JSON.stringify(nearQuestionPairs.slice(0,18)));
console.log('QA5_REPORT '+output);
