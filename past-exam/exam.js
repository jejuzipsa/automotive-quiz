"use strict";
const $=id=>document.getElementById(id), names={legacy_mechanics:"일반기계공학",legacy_engine:"자동차엔진",legacy_chassis:"자동차섀시",legacy_electrical:"자동차전기"},dates=["2020-08-22","2020-06-06","2019-08-04","2019-04-27","2019-03-03","2018-08-19","2018-04-28","2018-03-04"],KEY="automotivePrivateExamProgressV1",RESULT="automotivePrivateExamLastResultV1";
let bank=null,active=null,tick=null,loading=false,retryAction=null,practice=null;
const HISTORY="automotiveLegacyWrongHistoryV1";
const held=q=>q.review?.status==="hold";
function validateMeta(b){
  if(b.format!=="automotive-private-exam-v1"||typeof b.version!=="string"||!b.images||typeof b.images!=="object"||!Array.isArray(b.variants))throw Error("지원하지 않는 기출 시험 자료");
  const ids=new Set(dates.flatMap(d=>Array.from({length:80},(_,i)=>"legacy-"+d+"-q"+String(i+1).padStart(2,"0"))));
  for(const v of b.variants)if(!ids.has(v.source_question_id)||!Array.isArray(v.choices)||v.choices.length!==4||!Number.isInteger(v.answer)||v.answer<1||v.answer>4)throw Error("수정 문항 오류");
  return {...b,rounds:[]};
}
function validateRound(r,d){
  if(!r||r.exam_date!==d||!Array.isArray(r.questions)||r.questions.length!==80)throw Error(d+" 문항 누락");
  r.questions.forEach((q,i)=>{
    if(q.id!=="legacy-"+d+"-q"+String(i+1).padStart(2,"0")||q.question_number!==i+1||q.original_subject!==Object.keys(names)[Math.floor(i/20)]||typeof q.question!=="string"||!Array.isArray(q.choices)||q.choices.length!==4||q.choices.some(x=>typeof x!=="string")||!Number.isInteger(q.answer)||q.answer<1||q.answer>4||!["hold","preliminary_supported","explanation_revised"].includes(q.review?.status))throw Error("문항 구조 오류 "+q.id);
    for(const a of q.assets||[])if(!/^data:image\/gif;base64,[A-Za-z0-9+/=]+$/.test(bank.images[a.path]||""))throw Error("그림 누락 "+q.id);
  });
  return r;
}
async function ensureRound(date){
  if(date==="variants")return;
  if(!dates.includes(date))throw Error("지원하지 않는 시험 회차");
  if(bank.rounds.some(r=>r.exam_date===date))return;
  bank.rounds.push(validateRound(await getJSON("data/"+date+".json"),date));
}
function busy(value){
  loading=value;
  for(const b of $("setup").querySelectorAll("button"))b.disabled=value;
}
async function withRound(date,action){
  if(loading)return;
  busy(true);$("retry").hidden=true;retryAction=null;
  $("status").textContent="선택한 시험 자료를 불러오는 중…";
  try{await ensureRound(date);action();}
  catch(e){$("status").textContent="선택한 시험을 불러오지 못했어. "+e.message;retryAction=()=>withRound(date,action);$("retry").hidden=false;}
  finally{busy(false);}
}
function el(tag,text,cls){const n=document.createElement(tag);if(text!==undefined)n.textContent=text;if(cls)n.className=cls;return n}
const allowed=new Set("b strong i em u br p div span sub sup ul ol li table tbody tr td th math mrow mi mn mo mfrac msup msub msubsup msqrt mroot mtext mtable mtr mtd mover munder munderover mfenced mstyle mspace semantics".split(" "));
function render(target,html,text){target.replaceChildren();if(!html){target.textContent=text||"";return}const t=document.createElement("template");t.innerHTML=html;function copy(src,dst){for(const n of src.childNodes){if(n.nodeType===3){dst.append(document.createTextNode(n.textContent));continue}if(n.nodeType!==1)continue;const k=n.localName;if(k==="img"){const uri=bank.images[n.getAttribute("src")];if(/^data:image\/gif;base64,[A-Za-z0-9+/=]+$/.test(uri||"")){const i=el("img");i.src=uri;i.alt="원본 그림";dst.append(i)}else dst.append(el("span","[그림 누락]"));continue}if(!allowed.has(k))continue;const e=n.namespaceURI==="http://www.w3.org/1998/Math/MathML"?document.createElementNS(n.namespaceURI,k):el(k);if(k==="math"&&n.getAttribute("display")==="block")e.setAttribute("display","block");dst.append(e);copy(n,e)}}copy(t.content,target)}
function saved(key=KEY){try{return JSON.parse(localStorage.getItem(key)||"null")}catch{return null}}function persist(){try{localStorage.setItem(KEY,JSON.stringify(active))}catch{}}
function view(id){for(const x of ["setup","exam","results","practice"])$(x).hidden=x!==id}
function list(){view("setup");$("historyPanel").hidden=true;$("rounds").replaceChildren();if(!bank)return;for(const d of dates){const b=el("button",d+" · 80문항");b.onclick=()=>start(d);$("rounds").append(b)}$("variants").hidden=!bank.variants.length;$("resume").hidden=!saved();$("lastResult").hidden=!saved(RESULT);$("retry").hidden=true;retryAction=null;$("status").textContent="8회차 · 640문항 · 선택한 회차만 불러와 · 진행 기록은 이 브라우저에 저장";}
function questions(){return active.date==="variants"?bank.variants:bank.rounds.find(r=>r.exam_date===active.date).questions}
function start(date){
  if(loading||!bank)return;
  if(saved()&&!confirm("이전 시험 기록을 새 시험으로 바꿀까?"))return;
  return withRound(date,()=>{active={version:bank.version,date,index:0,answers:{},deadline:Date.now()+(date==="variants"?20:120)*60000};persist();begin()});
}
function begin(){view("exam");draw();clearInterval(tick);tick=setInterval(update,500);update()}
function update(){const s=Math.max(0,Math.ceil((active.deadline-Date.now())/1000));$("timer").textContent=Math.floor(s/60)+":"+String(s%60).padStart(2,"0");if(!s)finish()}
function stillOpen(){if(!active||$("exam").hidden)return false;if(Date.now()>=active.deadline){finish();return false}return true}
function draw(){const qs=questions(),q=qs[active.index];$("position").textContent=(active.date==="variants"?"수정 학습문항":active.date+" · "+names[q.original_subject])+" · "+(active.index+1)+"/"+qs.length;$("warning").hidden=!held(q);$("warning").textContent="채점 주의 · 원문 보존, 검수 점수에서 제외";render($("stem"),q.question_html,q.question);$("choices").replaceChildren();q.choices.forEach((c,i)=>{const b=el("button",undefined,"choice"+(active.answers[q.id]===i+1?" selected":"")),s=el("span");b.append(el("span",String(i+1)+"."),s);render(s,q.choices_html?.[i],c);b.setAttribute("aria-pressed",String(active.answers[q.id]===i+1));b.onclick=()=>{if(!stillOpen())return;active.answers[q.id]=i+1;persist();draw()};$("choices").append(b)});$("prev").disabled=active.index===0;$("next").disabled=active.index===qs.length-1;$("numbers").replaceChildren();qs.forEach((x,i)=>{const b=el("button",String(i+1),(active.answers[x.id]?"answered ":"")+(i===active.index?"current":""));b.onclick=()=>go(i);$("numbers").append(b)})}
function go(i){if(!stillOpen())return;active.index=i;persist();draw();window.scrollTo(0,0)}
function score(qs,exclude){const arr=qs.filter(q=>!exclude||!held(q));return {n:arr.length,correct:arr.filter(q=>active.answers[q.id]===q.answer).length}}
function finish(fromHistory=false){clearInterval(tick);view("results");const qs=questions(),a=score(qs,false),b=score(qs,true);$("summary").replaceChildren(el("p","원본 표시 정답 기준 참고 점수: "+a.correct+"/"+a.n),el("p","보류 제외 검수 참고 점수: "+b.correct+"/"+b.n),el("p","보류 "+(a.n-b.n)+"문항 · 공식 성적이나 합격 판정이 아님."));if(active.date!=="variants")for(const [k,n] of Object.entries(names)){const sub=qs.filter(q=>q.original_subject===k),s=score(sub,true),t=score(sub,false);$("summary").append(el("p",n+" — 원문 "+t.correct+"/"+t.n+" · 보류 제외 "+s.correct+"/"+s.n))}if(!fromHistory)try{recordExamHistory(active,qs);localStorage.setItem(RESULT,JSON.stringify(active));localStorage.removeItem(KEY)}catch{}review(false)}
function review(only){$("review").replaceChildren();for(const q of questions()){const ans=active.answers[q.id],ok=ans===q.answer;if(only&&ok&&!held(q))continue;const d=el("article",undefined,"review-item"),h=el("h3",(q.question_number||"수정")+" · "+(held(q)?"채점 보류":ok?"정답":ans?"오답":"미응답"));d.append(h);const s=el("p");render(s,q.question_html,q.question);d.append(s);q.choices.forEach((c,i)=>{const p=el("div",undefined,i+1===q.answer?"correct":ans===i+1?"incorrect":"");p.append(el("span",String(i+1)+". "));const v=el("span");render(v,q.choices_html?.[i],c);p.append(v);d.append(p)});d.append(el("p","선택: "+(ans||"미응답")+(active.date==="variants"?" / 수정 문항 정답: ":" / 원본 표시 정답: ")+q.answer));if(q.review?.reported_accepted_answers)d.append(el("p","사이트 복수 정답 기록: "+q.review.reported_accepted_answers.join(", ")+" (공식 미확인)"));if(q.review?.review_note)d.append(el("p",q.review.review_note));if(q.review?.study_explanation)d.append(el("pre",q.review.study_explanation));else{const e=el("div");render(e,q.explanation_html,q.explanation);d.append(el("p",active.date==="variants"?"수정 학습 해설 (공식 원문 아님)":"원본 해설 (검증 미완료)"),e)}$("review").append(d)}}
// Keep legacy subjects and provisional answer keys separate from the modern bank.
function signature(q){return JSON.stringify([q.question,q.question_html,q.choices,q.choices_html,q.answer,q.review,q.explanation,q.explanation_html]);}
function historyState(){
  const raw=saved(HISTORY),rows={};
  if(raw?.version!==bank.version||!raw.rows||typeof raw.rows!=="object")return {version:bank.version,rows,recorded:{}};
  for(const [id,r] of Object.entries(raw.rows)){
    const m=id.match(/^legacy-(\d{4}-\d{2}-\d{2})-q(\d{2})$/);
    if(!m||!dates.includes(m[1])||+m[2]<1||+m[2]>80||!r||typeof r.signature!=="string"||!["correct","wrong","unanswered"].includes(r.last)||!["correct","wrong","unanswered"].every(k=>Number.isSafeInteger(r[k])&&r[k]>=0)||r[r.last]<1||!Number.isFinite(r.updatedAt))continue;
    rows[id]=r;
  }
  const recorded=Object.fromEntries(Object.entries(raw.recorded||{}).filter(([d,v])=>dates.includes(d)&&Number.isFinite(v)));
  return {version:bank.version,rows,recorded};
}
function saveHistory(h){try{localStorage.setItem(HISTORY,JSON.stringify(h));return true}catch{return false}}
function recordAttempt(h,q,outcome){
  if(held(q))return;
  const sig=signature(q);
  let r=h.rows[q.id];
  if(!r||r.signature!==sig)r=h.rows[q.id]={signature:sig,correct:0,wrong:0,unanswered:0,last:outcome,updatedAt:0};
  r[outcome]++;r.last=outcome;r.updatedAt=Date.now();
}
function recordExamHistory(session,qs){
  if(!dates.includes(session.date))return;
  const h=historyState();
  if((h.recorded[session.date]||0)>=session.deadline)return;
  for(const q of qs){const a=session.answers[q.id];recordAttempt(h,q,!a?"unanswered":a===q.answer?"correct":"wrong");}
  h.recorded[session.date]=session.deadline;
  saveHistory(h);
}
function historyRows(){
  return Object.entries(historyState().rows).map(([id,r])=>{
    const date=id.slice(7,17),number=Number(id.slice(-2)),subject=Object.keys(names)[Math.floor((number-1)/20)];
    return {id,date,number,subject,r};
  });
}
function renderHistory(){
  $("historyPanel").hidden=false;
  const rows=historyRows(),errors=rows.filter(x=>x.r.wrong+x.r.unanswered>0),pending=errors.filter(x=>x.r.last!=="correct");
  const total=rows.reduce((n,x)=>n+x.r.correct+x.r.wrong+x.r.unanswered,0),misses=rows.reduce((n,x)=>n+x.r.wrong+x.r.unanswered,0);
  $("legacySummary").textContent="누적 "+total+"회 풀이 · 오답률 "+(total?Math.round(100*misses/total):0)+"% · 복습 필요 "+pending.length+"문항 · 복습 완료 "+(errors.length-pending.length)+"문항";
  const scope=$("legacyScope").value,subject=$("legacySubject").value,date=$("legacyDate").value;
  const shown=errors.filter(x=>(subject==="all"||x.subject===subject)&&(date==="all"||x.date===date)&&(scope==="all"||(scope==="resolved"?x.r.last==="correct":x.r.last!=="correct"))).sort((a,b)=>b.r.updatedAt-a.r.updatedAt||a.id.localeCompare(b.id));
  const box=$("legacyList");box.replaceChildren();
  for(const x of shown){
    const b=el("button",x.date+" · "+names[x.subject]+" · "+x.number+"번 · 오답 "+x.r.wrong+"회 / 미응답 "+x.r.unanswered+"회 / 정답 "+x.r.correct+"회","legacy-item");
    b.dataset.questionId=x.id;b.onclick=()=>openPractice(x);box.append(b);
  }
  if(!shown.length)box.append(el("p","해당 조건의 오답이 없어."));
}
function showHistory(){
  if(loading||!bank)return;
  list();
  // Only the most recent result from older versions is recoverable.
  const old=saved(RESULT),raw=saved(HISTORY);
  if(!raw&&old?.version===bank.version&&dates.includes(old.date)&&Number.isFinite(old.deadline)&&old.answers&&typeof old.answers==="object"&&!Array.isArray(old.answers)){
    return withRound(old.date,()=>{
      const qs=bank.rounds.find(r=>r.exam_date===old.date).questions;
      if(Object.entries(old.answers).every(([id,a])=>qs.some(q=>q.id===id)&&Number.isInteger(a)&&a>=1&&a<=4))recordExamHistory(old,qs);
      renderHistory();$("historyPanel").scrollIntoView({block:"start"});
    });
  }
  renderHistory();$("historyPanel").scrollIntoView({block:"start"});
}
function openPractice(x){
  return withRound(x.date,()=>{
    const q=bank.rounds.find(r=>r.exam_date===x.date).questions[x.number-1];
    if(held(q)||q.id!==x.id||signature(q)!==x.r.signature){
      const h=historyState();delete h.rows[x.id];saveHistory(h);renderHistory();$("status").textContent="문제 변경 또는 검수 보류로 기존 기록을 제외했어.";return;
    }
    practice={q,date:x.date,answer:0};drawPractice();view("practice");window.scrollTo(0,0);
  });
}
function drawPractice(){
  const {q,date,answer}=practice;
  $("practiceTitle").textContent=date+" · "+names[q.original_subject]+" · "+q.question_number+"번";
  render($("practiceStem"),q.question_html,q.question);
  const box=$("practiceChoices");box.replaceChildren();
  q.choices.forEach((c,i)=>{
    const n=i+1,b=el("button",undefined,"choice"+(answer?(n===q.answer?" correct":n===answer?" incorrect":""):"")),s=el("span");
    b.append(el("span",n+"."),s);render(s,q.choices_html?.[i],c);b.disabled=!!answer;
    b.onclick=()=>{if(practice.answer)return;practice.answer=n;const h=historyState();recordAttempt(h,q,n===q.answer?"correct":"wrong");const ok=saveHistory(h);drawPractice();if(!ok)$("practiceFeedback").append(el("p","브라우저 저장 공간을 확인해 줘. 복습 기록을 저장하지 못했어."));};box.append(b);
  });
  const feedback=$("practiceFeedback");feedback.hidden=!answer;feedback.replaceChildren();
  if(answer){
    feedback.append(el("strong",answer===q.answer?"정답이야 (참고 정답 기준).":"오답이야. 참고 정답은 "+q.answer+"번이야.",answer===q.answer?"correct":"incorrect"));
    if(q.review?.study_explanation)feedback.append(el("pre",q.review.study_explanation));
    else{const e=el("div");render(e,q.explanation_html,q.explanation);feedback.append(el("p","원본 해설 (검증 미완료)"),e);}
  }
}
$("historyEntry").onclick=showHistory;
$("resultHistory").onclick=showHistory;
$("practiceBack").onclick=()=>{practice=null;list();renderHistory();$("historyPanel").scrollIntoView({block:"start"});};
for(const id of ["legacyScope","legacySubject","legacyDate"])$(id).onchange=renderHistory;
function restore(key){
  if(loading||!bank)return;
  const s=saved(key);
  if(!s||s.version!==bank.version||(!dates.includes(s.date)&&s.date!=="variants")||!Number.isFinite(s.deadline)||!Number.isInteger(s.index)||!s.answers||typeof s.answers!=="object"||Array.isArray(s.answers)){
    $("status").textContent="저장된 기록을 불러올 수 없어.";return;
  }
  return withRound(s.date,()=>{
    const qs=s.date==="variants"?bank.variants:bank.rounds.find(r=>r.exam_date===s.date).questions;
    if(s.index<0||s.index>=qs.length||Object.entries(s.answers).some(([id,a])=>!qs.some(q=>q.id===id)||!Number.isInteger(a)||a<1||a>4)){
      $("status").textContent="저장된 기록 오류";return;
    }
    active=s;if(key===RESULT)finish(true);else begin();
  });
}
$("resume").onclick=()=>restore(KEY);
$("lastResult").onclick=()=>restore(RESULT);
$("variants").onclick=()=>start("variants");$("prev").onclick=()=>go(active.index-1);$("next").onclick=()=>go(active.index+1);$("submit").onclick=()=>{if(stillOpen()&&confirm("시험을 종료하고 채점할까?")&&stillOpen())finish()};$("wrong").onclick=()=>review(true);$("all").onclick=()=>review(false);$("back").onclick=()=>{active=null;list()};
async function getJSON(path){const res=await fetch(path+"?v=review05-auto1",{credentials:"same-origin"});if(!res.ok)throw Error("기출 자료 HTTP "+res.status);return res.json()}
async function loadBank(){
  if(loading)return;
  busy(true);$("retry").hidden=true;$("status").textContent="공용 시험 자료를 불러오는 중…";
  try{bank=validateMeta(await getJSON("data/shared.json"));list();}
  catch(e){bank=null;$("rounds").replaceChildren();$("status").textContent="공용 시험 자료를 불러오지 못했어. "+e.message;retryAction=loadBank;$("retry").hidden=false;return;}
  finally{busy(false);}
  const params=new URLSearchParams(location.search),date=params.get("round");
  if(params.get("view")==="wrong"){history.replaceState(null,"",location.pathname);await showHistory();return;}
  if(dates.includes(date)){
    history.replaceState(null,"",location.pathname);
    const s=saved();if(s&&s.version===bank.version&&s.date===date)await restore(KEY);else await start(date);
  }
}
$("retry").onclick=()=>retryAction?.();
loadBank();
