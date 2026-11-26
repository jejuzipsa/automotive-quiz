(() => {
  "use strict";
  const $ = id => document.getElementById(id);
  const SUBJECTS = [
    {id:"engine",name:"자동차 엔진정비"},
    {id:"chassis",name:"자동차 섀시정비"},
    {id:"electrical",name:"자동차 전기·전자장치정비"},
    {id:"eco",name:"친환경 자동차정비"}
  ];
  const TRACKS = {past:"기출 기반 로테이션",expected:"예상문제",demo:"시연용 문제",concept:"핵심 개념 퀴즈"};
  // Both study variants and the separate expected/concept banks load automatically.
  let ITEMS = [];
  let bankLoadState = "loading";
    const lastOrdersById = new Map();
  const QUIZ_UTILS = window.AutomotiveQuizUtils;
  function buildOrder(q) {
    const order = QUIZ_UTILS.shuffleOrder(q.choices.length);
    const previous = lastOrdersById.get(q.id);
    const reference = previous || Array.from({length:q.choices.length},(_,i)=>i+1);
    if (order.every((value,i)=>value===reference[i])) {
      [order[0],order[1]]=[order[1],order[0]];
    }
    lastOrdersById.set(q.id,[...order]);
    return order;
  }
  function isAnswerCorrect(session,index) {
    const q=session.items[index];
    const displayNumber=session.choices[index];
    return QUIZ_UTILS.isCorrect(session.orders?.[index],displayNumber,q.answer);
  }
  const PUBLIC_BANK_PATHS = new Set([
    "data/expected/engine.json","data/expected/chassis.json",
    "data/expected/electrical.json","data/expected/eco.json",
    "data/demo.json","data/concept.json"
  ]);
  // Only explicitly approved, rights-cleared records may be added later.
  const APPROVED_PAST_PATH = /^data\/past\/approved\/(engine|chassis|electrical|eco)\.json$/;
  const isManifestPath = path => PUBLIC_BANK_PATHS.has(path) || APPROVED_PAST_PATH.test(path);
  function validPublicQuestion(q) {
    return q && typeof q.id === "string" && SUBJECTS.some(s=>s.id===q.subject) &&
      Array.isArray(q.choices) && q.choices.length === 4 &&
      q.choices.every(x=>typeof x==="string" && x.trim()) &&
      [1,2,3,4].includes(q.answer) &&
      typeof q.question==="string" && !!q.question.trim() &&
      typeof q.explanation==="string" && !!q.explanation.trim() &&
      (q.track==="demo" || q.track==="concept" ||
        (q.track==="expected" && q.origin==="original_practice" &&
          q.publishable===true && q.review_status==="editorial_draft") ||
        (q.track==="past" && q.publishable===true &&
          q.review_status==="approved" &&
          q.technical_answer_status==="independently_approved" &&
          q.rights_cleared===true &&
          q.subject_classification_review?.status!=="hold_do_not_publish"));
  }
  async function loadPublicBank() {
    const status=$("bankLoadStatus");
    try {
      const manifestResponse=await fetch("data/manifest.json",{cache:"no-cache"});
      if(!manifestResponse.ok)throw new Error("목록 HTTP "+manifestResponse.status);
      const manifest=await manifestResponse.json();
      if(manifest?.version!==1 || !Array.isArray(manifest.banks) ||
          manifest.banks.length<PUBLIC_BANK_PATHS.size ||
          manifest.banks.length>PUBLIC_BANK_PATHS.size+SUBJECTS.length ||
          new Set(manifest.banks.map(x=>x.file)).size!==manifest.banks.length ||
          ![...PUBLIC_BANK_PATHS].every(path=>manifest.banks.some(x=>x.file===path)) ||
          !manifest.banks.every(x=>isManifestPath(x.file) &&
            (!APPROVED_PAST_PATH.test(x.file) ||
              (x.track==="past" && x.subject===x.file.match(APPROVED_PAST_PATH)[1]))))
        throw new Error("과목별 목록 형식 오류");
      const groups=await Promise.all(manifest.banks.map(async def=>{
        const response=await fetch(def.file,{cache:"no-cache"});
        if(!response.ok)throw new Error(def.file+" HTTP "+response.status);
        const records=await response.json();
        if(!Array.isArray(records) || records.length!==def.count ||
          !records.every(q=>validPublicQuestion(q) && q.track===def.track &&
            (!def.subject || q.subject===def.subject)))
          throw new Error(def.file+" 데이터 형식 또는 문항 수 오류");
        return records;
      }));
      const result=groups.flat();
      if(new Set(result.map(q=>q.id)).size!==result.length)
        throw new Error("문제 ID 중복");
      status.textContent="1,440문항 로테이션을 불러오는 중이야.";
      const [lightGroups,rebuilt]=await Promise.all([
        Promise.all(SUBJECTS.map(async ({id:subject})=>{
          const rows=await fetchStudyJson("data/rotation/light/"+subject+".json");
          if(!Array.isArray(rows)||rows.length!==180||!rows.every(q=>q.subject===subject))throw Error("로테이션 과목별 문항 수 오류");
          return rows;
        })),loadRebuilt()
      ]);
      const light=normalizeLight({format:"automotive-personal-rotation-v1",questions:lightGroups.flat()});
      ITEMS=result.concat(rebuilt,light);
      if(new Set(ITEMS.map(q=>q.id)).size!==ITEMS.length)throw Error("문제 ID 중복");
      if(SUBJECTS.some(s=>ITEMS.filter(q=>q.track==="past"&&q.subject===s.id).length!==360))
        throw Error("로테이션 과목별 360문항 구성 오류");
      bankLoadState="ready";
      const expected=result.filter(q=>q.track==="expected").length;
      status.textContent=`1,440문항 자동 연결 완료 · 과목당 360문항 · 별도 예상문제 ${expected}문항`;
    }catch(error){
      ITEMS=[];
      bankLoadState="error";
      status.textContent="문제은행을 읽지 못했어. 새로고침하거나 잠시 후 다시 확인해 줘. ("+
        (error?.message||"원인 미상")+")";
    }
    status.classList.toggle("bank-ready",bankLoadState==="ready");
    renderSubjects();
    updateExamAvailability();
    renderConcepts();
    renderResumeExam();
    if(bankLoadState==="ready")loadHistory();
    if(view==="wrong")renderWrong();
  }
  const ROTATION_KEY="automotiveRotationQueueV1";
  const SUBJECT_CODES={engine:"01",chassis:"02",electrical:"03",eco:"04"};
  const sourceId=(subject,round,n)=>"auto-r"+String(round).padStart(2,"0")+"-s"+SUBJECT_CODES[subject]+"-q"+String(n).padStart(2,"0");
  const validStudy=q=>q && typeof q.id==="string" && typeof q.question==="string" && q.question.trim() &&
    Array.isArray(q.choices)&&q.choices.length===4&&q.choices.every(x=>typeof x==="string"&&x.trim())&&
    Number.isInteger(q.answer)&&q.answer>=1&&q.answer<=4&&typeof q.explanation==="string"&&q.explanation.trim();
  function normalizeLight(data){
    if(data?.format!=="automotive-personal-rotation-v1"||!Array.isArray(data.questions)||data.questions.length!==720)
      throw Error("로테이션 720문항 데이터 형식 오류");
    const seen=new Set();
    return data.questions.map(q=>{
      if(!validStudy(q)||!SUBJECT_CODES[q.subject]||!Number.isInteger(q.round)||q.round<1||q.round>9||
        !Number.isInteger(q.question_number)||q.question_number<1||q.question_number>20||
        q.source_question_id!==sourceId(q.subject,q.round,q.question_number)||
        q.id!==q.source_question_id.replace("auto-","auto-light-")||seen.has(q.source_question_id))
        throw Error("문항 형식 또는 회차·과목·번호 오류");
      seen.add(q.source_question_id);
      return {id:q.id,source_question_id:q.source_question_id,subject:q.subject,round:q.round,question_number:q.question_number,
        question:q.question,choices:[...q.choices],answer:q.answer,explanation:q.explanation,track:"past",variant:"light",personal:true};
    });
  }
  async function fetchStudyJson(path){
    const res=await fetch(path,{cache:"no-cache"});if(!res.ok)throw Error(path+" HTTP "+res.status);return res.json();
  }
  let rebuiltPromise=null;
  async function loadRebuilt(){
    if(!rebuiltPromise)rebuiltPromise=(async()=>{
      const ledgers=["51-editorial-revisions","54-technical-corrections","55-editorial-corrections","57-editorial-corrections",
        "58-editorial-corrections","59-editorial-corrections","60-editorial-corrections","61-editorial-corrections",
        "62-editorial-corrections","63-editorial-corrections","65-editorial-corrections"];
      const patches=new Map();
      for(const ledger of await Promise.all(ledgers.map(x=>fetchStudyJson("data/qa/technical-qa"+x+".json")))){
        for(const p of ledger.items){if(patches.has(p.id))throw Error("중복 수정 ID");patches.set(p.id,p);}
      }
      if(patches.size!==82)throw Error("재작성본 수정 수 불일치");
      const applied=new Set(),rows=[];
      for(let round=1;round<=9;round++){
        const prefix=round===1?"":"round"+String(round).padStart(2,"0")+"/";
        const groups=await Promise.all(SUBJECTS.map(async({id:subject})=>{
          const [qs,es]=await Promise.all([fetchStudyJson("data/past/drafts/"+prefix+subject+".json"),
            fetchStudyJson("data/explanations/drafts/"+prefix+subject+".json")]);
          if(qs.length!==20||es.length!==20)throw Error("회차별 문항 수 불일치");
          const em=new Map(es.map(e=>[e.id,e]));
          return qs.map((q,i)=>{
            const key=sourceId(subject,round,i+1),e=em.get(q.id),p=patches.get(q.id);
            if(!e||q.source_question_id!==key||q.id!==key.replace("auto-","auto-made-")||q.answer!==e.correct_answer||
              q.choices[q.answer-1]!==e.correct_choice)throw Error("기존 재작성본 연결 오류");
            if(p){
              if(p.before.question!==q.question||JSON.stringify(p.before.choices)!==JSON.stringify(q.choices)||
                p.before.answer!==q.answer||p.before.reason!==e.reason||p.after.answer!==q.answer)throw Error("수정본 불일치");
              applied.add(q.id);
            }
            const row={id:q.id,source_question_id:key,subject,round,question_number:i+1,question:p?.after.question??q.question,
              choices:p?.after.choices??q.choices,answer:q.answer,explanation:p?.after.reason??e.reason,track:"past",
              variant:"rebuilt",personal:true};
            if(!validStudy(row))throw Error("재작성본 문항 오류");return row;
          });
        }));
        rows.push(...groups.flat());
      }
      if(rows.length!==720||new Set(rows.map(q=>q.id)).size!==720||applied.size!==82)throw Error("재작성본 통합 오류");
      return rows;
    })().catch(e=>{rebuiltPromise=null;throw e;});
    return rebuiltPromise;
  }
  function personalRotation(pool,count){
    if(!pool.length||!pool.every(q=>q.personal))return shuffled(pool).slice(0,count);
    const subject=pool[0].subject;
    if(!pool.every(q=>q.subject===subject)||pool.length!==360)throw Error("과목별 로테이션 구성 오류");
    const map=new Map(pool.map(q=>[q.id,q])),raw=readStorage(ROTATION_KEY,{}),state=raw&&typeof raw==="object"&&!Array.isArray(raw)?raw:{};
    const old=state[subject],queue=Array.isArray(old?.remaining)&&new Set(old.remaining).size===old.remaining.length&&
      old.remaining.every(id=>map.has(id))?[...old.remaining]:[];
    let last=old?.lastSource||null,lastVariant=old?.lastVariant||null;
    const out=[],seen=new Set();
    function refill(){
      const a=shuffled(pool.filter(q=>q.variant==="rebuilt")),b=new Map(pool.filter(q=>q.variant==="light").map(q=>[q.source_question_id,q]));
      for(let i=0;i<a.length;i++)queue.push(a[i].id,b.get(a[(i+90)%a.length].source_question_id).id);
    }
    for(let i=0;i<Math.min(count,pool.length);i++){
      if(!queue.length)refill();
      let j=queue.findIndex(id=>!seen.has(id)&&map.get(id).source_question_id!==last&&map.get(id).variant!==lastVariant);
      if(j<0)j=queue.findIndex(id=>!seen.has(id)&&map.get(id).source_question_id!==last);
      if(j<0)j=queue.findIndex(id=>!seen.has(id));
      if(j<0){refill(); // Keep any deferred current-cycle IDs before the fresh cycle, removing duplicates.
        const unique=[...new Set(queue)];queue.splice(0,queue.length,...unique);
        j=queue.findIndex(id=>!seen.has(id)&&map.get(id).source_question_id!==last);
        if(j<0)j=queue.findIndex(id=>!seen.has(id));
      }
      const [id]=queue.splice(j,1),q=map.get(id);out.push(q);seen.add(id);last=q.source_question_id;lastVariant=q.variant;
    }
    state[subject]={remaining:queue,lastSource:last,lastVariant};saveStorage(ROTATION_KEY,state);return out;
  }
  const VIEWS = ["home","handNote","browse","quiz","result","exam","wrong"];
  let current = null;
  let recentResult = null;
  let lastSaved = null;
  let timerId = null;
  const ACTIVE_EXAM_KEY="automotiveQuizActiveExamV1";
  const HISTORY_KEY="automotiveQuizHistoryV1";
  let wrongSubject="all",wrongScope="pending";
  let returnSession = null;
  let returnView = "result";
  let browseState = {items:[],page:1,title:"",track:"demo",subject:null};
  let view = "home";

  function readStorage(key, fallback) {
    try { const value=localStorage.getItem(key); return value===null ? fallback:JSON.parse(value); }
    catch { return fallback; }
  }
  function saveStorage(key,value) { try { localStorage.setItem(key,JSON.stringify(value)); } catch {} }
  // Restore only unchanged, currently public questions with their original order.
  function questionSignature(q) {return JSON.stringify([q.question,q.choices,q.answer,q.explanation]);}
  // Per-question history stores counters and an exact serialized content signature; old questions are not rendered.
  // A content change starts a new learning record; never review withdrawn material.
  function loadHistory() {
    const raw=readStorage(HISTORY_KEY,null);
    if(raw?.version===1&&Array.isArray(raw.records)){
      // Keep only valid counters and newest valid row per question ID.
      const rows=new Map();
      for(const row of raw.records){
        if(!row||typeof row.id!=="string"||typeof row.signature!=="string"||
          !["correct","wrong","unanswered"].includes(row.last)||
          ![row.correct,row.wrong,row.unanswered].every(n=>Number.isSafeInteger(n)&&n>=0&&n<Number.MAX_SAFE_INTEGER)||
          !Number.isFinite(row.updatedAt)||row[row.last]<1)continue;
        const previous=rows.get(row.id);
        if(!previous||row.updatedAt>previous.updatedAt)rows.set(row.id,row);
      }
      return {version:1,records:[...rows.values()]};
    }
    const history={version:1,records:[]};
    if(bankLoadState!=="ready")return history;
    // Import only the last session, which is all that older releases stored.
    const s=readStorage("automotiveQuizLastSessionV1",null);
    if(Array.isArray(s?.items)&&Array.isArray(s.choices)&&Array.isArray(s.orders)){
      const map=new Map(ITEMS.map(q=>[q.id,q])),seen=new Set();
      s.items.forEach((old,i)=>{
        const q=map.get(old?.id),o=s.orders[i],a=s.choices[i];
        if(!q||seen.has(q.id)||questionSignature(old)!==questionSignature(q)||
          !Array.isArray(o)||o.length!==4||new Set(o).size!==4||!o.every(x=>[1,2,3,4].includes(x))||
          !Number.isInteger(a)||a<0||a>4||(!a&&s.mode!=="exam"))return;
        seen.add(q.id);applyHistory(history,q,a===0?"unanswered":QUIZ_UTILS.isCorrect(o,a,q.answer)?"correct":"wrong");
      });
    }
    saveStorage(HISTORY_KEY,history);return history;
  }
  function applyHistory(history,q,outcome) {
    const sig=questionSignature(q);
    let row=history.records.find(x=>x?.id===q.id&&x.signature===sig);
    if(!row){
      history.records=history.records.filter(x=>x?.id!==q.id);
      row={id:q.id,signature:sig,correct:0,wrong:0,unanswered:0,last:"",updatedAt:0};
      history.records.push(row);
    }
    row[outcome]++;row.last=outcome;row.updatedAt=Date.now();
  }
  function recordAttempts(session,indices) {
    if(bankLoadState!=="ready")return;
    const history=loadHistory(),map=new Map(ITEMS.map(q=>[q.id,q]));
    for(const i of indices){
      const old=session.items[i],q=map.get(old.id);
      if(!q||questionSignature(old)!==questionSignature(q))continue;
      const a=session.choices[i];
      if(!a&&session.mode!=="exam")continue;
      applyHistory(history,q,!a?"unanswered":isAnswerCorrect(session,i)?"correct":"wrong");
    }
    saveStorage(HISTORY_KEY,history);
  }
  function persistExam() {
    if(current?.mode!=="exam"||view!=="quiz")return;
    saveStorage(ACTIVE_EXAM_KEY,{version:1,ids:current.items.map(q=>q.id),signatures:current.items.map(questionSignature),
      choices:[...current.choices],orders:current.orders.map(o=>[...o]),index:current.index,track:current.track,
      title:current.title,examMinutes:current.examMinutes,examDeadline:current.examDeadline});
  }
  function savedExam() {
    const s=readStorage(ACTIVE_EXAM_KEY,null);
    if(!s||s.version!==1||bankLoadState!=="ready")return null;
    const n=s.track==="demo"?8:["expected","past"].includes(s.track)?80:0;
    if(!n||!Array.isArray(s.ids)||s.ids.length!==n||new Set(s.ids).size!==n||
      !Array.isArray(s.signatures)||s.signatures.length!==n||
      !Array.isArray(s.choices)||s.choices.length!==n||!s.choices.every(a=>Number.isInteger(a)&&a>=0&&a<=4)||
      !Array.isArray(s.orders)||s.orders.length!==n||
      !s.orders.every(o=>Array.isArray(o)&&o.length===4&&new Set(o).size===4&&o.every(a=>[1,2,3,4].includes(a)))||
      !Number.isInteger(s.index)||s.index<0||s.index>=n||
      s.examMinutes!==(n===80?120:10)||!Number.isFinite(s.examDeadline)||
      s.examDeadline>Date.now()+s.examMinutes*60000||typeof s.title!=="string")return null;
    const map=new Map(ITEMS.map(q=>[q.id,q])),items=s.ids.map(id=>map.get(id));
    if(items.some((q,i)=>!q||q.track!==s.track||questionSignature(q)!==s.signatures[i]))return null;
    if(n===80&&!SUBJECTS.every(x=>items.filter(q=>q.subject===x.id).length===20))return null;
    return {items,choices:[...s.choices],orders:s.orders.map(o=>[...o]),index:s.index,mode:"exam",title:s.title,
      track:s.track,subject:null,examMinutes:s.examMinutes,examDeadline:s.examDeadline};
  }
  function renderResumeExam() {
    const raw=readStorage(ACTIVE_EXAM_KEY,null),s=savedExam();
    $("resumeExamPanel").classList.toggle("hidden",!raw);
    $("resumeExamBtn").disabled=!s;
    $("resumeExamInfo").textContent=bankLoadState!=="ready"?"문제은행을 불러온 뒤 이어 풀 수 있어.":
      !s?"문제은행 변경 또는 저장 오류로 이어 풀 수 없어. 저장된 시험을 삭제해 줘.":
      s.examDeadline<=Date.now()?"제한 시간이 끝났어. 저장된 답안을 채점할 수 있어.":
      (s.index+1)+" / "+s.items.length+"문제 · 응답 "+s.choices.filter(Boolean).length+"개 · 시험 시간은 계속 진행돼.";
  }
  function resumeExam() {
    const s=savedExam();if(!s){renderResumeExam();return;}
    current=s;renderQuestion();showView("quiz");beginTimer();
  }
  function discardExam() {
    if(!window.confirm("저장된 시험을 삭제할까?"))return;
    saveStorage(ACTIVE_EXAM_KEY,null);renderResumeExam();
  }
  function make(tag,cls,text) {
    const node=document.createElement(tag);
    if(cls) node.className=cls;
    if(text!==undefined) node.textContent=String(text);
    return node;
  }
  function appendButton(parent,label,cls,fn,disabled=false) {
    const btn=make("button",cls,label);
    btn.type="button";btn.disabled=disabled;
    btn.addEventListener("click",fn);parent.appendChild(btn);
    return btn;
  }
  function currentSubjectLabel(subject) {
    return SUBJECTS.find(s=>s.id===subject)?.name || "전체 과목";
  }
  function poolFor(track,subject=null) {
    return ITEMS.filter(q=>q.track===track && (!subject||q.subject===subject));
  }
  function shuffled(items) {
    const a=[...items];
    for(let i=a.length-1;i>0;i--){
      const j=Math.floor(Math.random()*(i+1));
      [a[i],a[j]]=[a[j],a[i]];
    }
    return a;
  }
  function showView(name) {
    view=name;stopTimer();
    for(const n of VIEWS) {
      const el=$(n+"View");if(el) el.classList.toggle("hidden",n!==name);
    }
    $("homeBtn").classList.toggle("hidden",name==="home");
    window.scrollTo({top:0,behavior:"instant"});
  }
  function displayEmpty(parent,message) {
    parent.replaceChildren();
    const box=make("div","empty-state");
    box.append(make("h3","","문제은행 준비 중"),make("p","",message));
    appendButton(box,"시연 문제 풀기","primary-btn",()=>startDemo());
    parent.append(box);
  }

  function renderSubjects() {
    renderSubjectCards($("subjectGrid"),"past");
  }
  function renderSubjectCards(box,track){
    box.replaceChildren();
    for(const subject of SUBJECTS){
      const count=poolFor(track,subject.id).length;
      const card=make("div","subject-card"+(count===0?" is-empty":""));
      const detail=make("div","subject-info");
      detail.append(make("strong","",subject.name),make("span","",`${count}문항`));
      const action=make("div","subject-actions");
      const quick=make("div","subject-quick-actions");
      appendButton(quick,"10문제","subject-quiz-count-btn",()=>startTrack(track,subject.id,10),count===0);
      appendButton(quick,"20문제","subject-quiz-count-btn",()=>startTrack(track,subject.id,20),count===0);
      action.append(quick);
      appendButton(action,"전체 문제 보기","subject-browse-btn",()=>openBrowse(track,subject.id),count===0);
      card.append(detail,action);box.appendChild(card);
    }
  }
  function showHome() {
    persistExam();current=null;returnSession=null;renderSubjects();showView("home");renderResumeExam();
  }
  function openBrowse(track,subject=null) {
    browseState={items:poolFor(track,subject),page:1,track,subject,title:`${TRACKS[track]} · ${currentSubjectLabel(subject)}`};
    renderBrowse();showView("browse");
  }
  function renderBrowse() {
    const state=browseState;
    $("browseTitle").textContent=state.title;
    $("browseMeta").textContent=`전체 ${state.items.length}문항`;
    $("browseStartBtn").disabled=state.items.length===0;
    const selectable=!!state.subject&&["past","expected"].includes(state.track);
    $("browseTrackControls").classList.toggle("hidden",!selectable);
    for(const [id,track] of [["trackPast","past"],["trackExpected","expected"]]){
      const btn=$(id),active=state.track===track;
      btn.classList.toggle("active",active);btn.setAttribute("aria-pressed",String(active));
      btn.disabled=!selectable||!poolFor(track,state.subject).length;
    }
    $("browse10Btn").disabled=state.items.length<10;
    $("browse20Btn").disabled=state.items.length<20;
    const container=$("browseList");container.replaceChildren();
    const pages=$("browsePagination");pages.replaceChildren();
    if(!state.items.length) {
      displayEmpty(container,"문제은행을 불러오는 중이거나 연결에 실패했어. 홈에서 다시 확인해 줘.");
      return;
    }
    const pageSize=10;
    const pageCount=Math.ceil(state.items.length/pageSize);
    state.page=Math.max(1,Math.min(state.page,pageCount));
    for(const q of state.items.slice((state.page-1)*pageSize,state.page*pageSize)) {
      const card=make("article","bank-question-card");
      card.append(make("p","bank-question-meta",currentSubjectLabel(q.subject)+" · "+TRACKS[q.track]));
      card.append(make("h3","bank-question-title",q.question));
      const list=make("div","bank-choice-list");
      q.choices.forEach((choice,i)=>{
        const row=make("div","bank-choice-row"+(i+1===q.answer?" correct":""));
        row.append(make("strong","bank-choice-label",String(i+1)+"."),
          make("span","",choice));list.append(row);
      });
      card.append(list,make("p","answer-display","해설: "+q.explanation));
      container.append(card);
    }
    if(pageCount>1) {
      appendButton(pages,"이전","page-btn",()=>{state.page--;renderBrowse();},state.page<=1);
      for(let n=1;n<=pageCount;n++) appendButton(pages,String(n),"page-btn"+(n===state.page?" active":""),()=>{state.page=n;renderBrowse();});
      appendButton(pages,"다음","page-btn",()=>{state.page++;renderBrowse();},state.page>=pageCount);
    }
  }

  function startTrack(track,subject,count) {
    const pool=poolFor(track,subject);
    if(!pool.length) {openBrowse(track,subject);return;}
    startSession(personalRotation(pool,count),{
      mode:"practice",title:`${TRACKS[track]} · ${currentSubjectLabel(subject)}`,
      track,subject
    });
  }
  function startDemo() {
    startSession(shuffled(poolFor("demo")),{mode:"practice",title:"샘플 문제 풀이",track:"demo",subject:null});
  }
  const CONCEPT_ROTATION_KEY="automotiveConceptRotationV1";
  function conceptRotation(pool,count) {
    if(!pool.length)return [];
    const subject=pool[0].subject,map=new Map(pool.map(q=>[q.id,q]));
    const bankIds=[...map.keys()].sort(),raw=readStorage(CONCEPT_ROTATION_KEY,{});
    const state=raw&&typeof raw==="object"&&!Array.isArray(raw)?raw:{};
    const old=state[subject];
    let queue=Array.isArray(old?.remaining)&&JSON.stringify(old.bankIds)===JSON.stringify(bankIds)&&
      new Set(old.remaining).size===old.remaining.length&&old.remaining.every(id=>map.has(id))?[...old.remaining]:[];
    const out=[],seen=new Set();
    for(let i=0;i<Math.min(count,pool.length);i++){
      if(!queue.length){
        const ids=shuffled(bankIds);
        queue=ids.filter(id=>!seen.has(id)).concat(ids.filter(id=>seen.has(id)));
      }
      const id=queue.shift();
      if(seen.has(id))throw Error("괄호문제 로테이션 중복");
      out.push(map.get(id));seen.add(id);
    }
    state[subject]={bankIds,remaining:queue};saveStorage(CONCEPT_ROTATION_KEY,state);
    return out;
  }
  function startConcept(subject,count) {
    const pool=poolFor("concept",subject);
    if(!pool.length)return;
    startSession(conceptRotation(pool,count??pool.length),{mode:"concept",title:currentSubjectLabel(subject)+" · 괄호문제",track:"concept",subject});
  }
  function startSampleExam(){
    startSession(shuffled(poolFor("demo")),{mode:"exam",title:"시연용 실전 시험",track:"demo",subject:null,examMinutes:10});
  }
  function examPool(track,consume=false) {
    const groups=SUBJECTS.map(subject=>poolFor(track,subject.id));
    if(groups.some(group=>group.length<20))return null;
    if(consume&&track==="past"&&groups.every(g=>g.every(q=>q.personal))){
      const chosen=shuffled(groups.map(g=>personalRotation(g,20)));
      return Array.from({length:20},(_,i)=>chosen.map(g=>g[i])).flat();
    }
    return shuffled(groups.flatMap(group=>shuffled(group).slice(0,20)));
  }
  function updateExamAvailability() {
    $("expectedExamBtn").disabled=!examPool("expected");
    $("approvedExamBtn").disabled=!examPool("past");
    $("examStatus").textContent=bankLoadState==="error"
      ?"문제은행을 불러오지 못했어. 새로고침해 줘."
      :bankLoadState==="loading"
        ?"문제은행을 불러오는 중이야."
        :`자체제작 예상문제 ${poolFor("expected").length}문항 중 과목별 20개, 총 80문항 학습용 모의고사 · 기출 기반 로테이션 ${poolFor("past").length}문항`;
  }
  function startFullExam(track) {
    const items=examPool(track,true);
    if(!items){updateExamAvailability();return;}
    startSession(items,{
      mode:"exam",title:track==="past"?"기출 기반 로테이션 모의고사":"자체제작 예상문제 모의고사 (학습용)",
      track,subject:null,examMinutes:120
    });
  }
  function startSession(items,options) {
    if(!items.length){showHome();return;}
    const mode=options.mode||"practice";
    if(mode==="exam"&&readStorage(ACTIVE_EXAM_KEY,null)&&!window.confirm("저장된 시험을 새 시험으로 바꿀까?"))return;
    const examMinutes=mode==="exam" && Number.isInteger(options.examMinutes) && options.examMinutes>0
      ?options.examMinutes:10;
    current={items:[...items],choices:Array(items.length).fill(0),
      orders:items.map(buildOrder),index:0,
      mode,title:options.title||"문제풀이",track:options.track||"demo",
      subject:options.subject||null,examMinutes,
      examDeadline:mode==="exam"?Date.now()+examMinutes*60*1000:null};
    renderQuestion();showView("quiz");
    if(mode==="exam"){persistExam();beginTimer();}
  }

  function stopTimer() {
    if(timerId!==null){clearInterval(timerId);timerId=null;}
  }
  function beginTimer() {
    stopTimer();
    if(refreshTimer())timerId=setInterval(refreshTimer,1000);
  }
  function refreshTimer() {
    if(view!=="quiz"||current?.mode!=="exam"){stopTimer();return false;}
    const remaining=Math.max(0,Math.ceil((current.examDeadline-Date.now())/1000));
    $("quizSource").textContent=`남은 시간 ${String(Math.floor(remaining/60)).padStart(2,"0")}:${String(remaining%60).padStart(2,"0")}`;
    if(remaining===0){finishSession();return false;}
    return true;
  }
  function examStillOpen() {return current?.mode!=="exam"||refreshTimer();}
  function renderQuestion() {
    if(!current)return;
    const {items,index,choices,mode}=current;
    const q=items[index],chosen=choices[index],locked=mode!=="exam" && chosen!==0;
    const order=current.orders[index];
    const isCorrect=isAnswerCorrect(current,index);
    const correctNumber=QUIZ_UTILS.correctDisplayIndex(order,q.answer);
    $("quizSubject").textContent=current.title;
    $("quizProgress").textContent=`${index+1} / ${items.length}`;
    $("quizSource").textContent=mode==="exam"?"시험 진행 중":`${currentSubjectLabel(q.subject)}${q.round?" · "+q.round+"회":""}`;
    $("progressFill").style.width=`${(index+1)*100/items.length}%`;
    $("questionNumber").textContent=`문제 ${index+1}`;
    $("questionText").textContent=q.question;
    const audit=$("quizAuditInfo");
    if(q.personal){audit.classList.remove("hidden");audit.textContent=q.variant==="light"?"학습용 · 원본 기반 표현 수정":"학습용 · 기존 재작성본";}
    else if(q.review_status==="editorial_draft") {
      audit.classList.remove("hidden");
      audit.textContent=q.track==="concept"?"자체제작 개념문제 · 편집 검토 단계":"자체제작 연습문제 · 편집 검토 단계";
    } else audit.classList.add("hidden");
    $("questionCard").classList.remove("correct","wrong");
    const box=$("answerChoices");box.replaceChildren();
    order.forEach((originalIndex,i)=>{
      const number=i+1;
      const choice=q.choices[originalIndex-1];
      const cls="choice"+(mode==="exam" && chosen===number?" selected":
        locked && originalIndex===q.answer?" correct":
        locked && chosen===number && !isCorrect?" incorrect":"");
      const button=make("button",cls);button.type="button";
      button.disabled=locked;
      button.append(make("span","choice-index",String(number)),make("span","choice-text",choice));
      button.addEventListener("click",()=>selectAnswer(number));
      box.appendChild(button);
    });
    $("feedback").classList.add("hidden");
    $("previousBtn").classList.toggle("hidden",mode!=="exam" || index===0);
    $("nextBtn").classList.toggle("hidden",!locked && mode!=="exam");
    $("reviewBackBtn").classList.add("hidden");
    if(mode==="exam") {
      $("nextBtn").classList.remove("hidden");
      $("nextBtn").textContent=index===items.length-1?"시험 제출":"다음 문제";
    } else if(locked) {
      const feedback=$("feedback");
      feedback.classList.remove("hidden");
      feedback.classList.toggle("good",isCorrect);
      feedback.classList.toggle("bad",!isCorrect);
      feedback.replaceChildren(
        make("strong","",isCorrect?"정답이야.":"오답이야. 정답은 "+correctNumber+"번이야."),
        make("span","",q.explanation)
      );
      $("questionCard").classList.add(isCorrect?"correct":"wrong");
      if(mode==="review"){
        $("reviewBackBtn").textContent=returnView==="wrong"?"오답 목록으로 돌아가기":"결과로 돌아가기";
        $("reviewBackBtn").classList.remove("hidden");
      }
      else {
        $("nextBtn").classList.remove("hidden");
        $("nextBtn").textContent=index===items.length-1?"결과 보기":"다음 문제";
      }
    }
    if(mode==="review") $("nextBtn").classList.add("hidden");
  }
  function selectAnswer(number) {
    if(!current||!examStillOpen())return;
    if(current.mode!=="exam" && current.choices[current.index]!==0)return;
    current.choices[current.index]=number;
    if(current.mode!=="exam")recordAttempts(current,[current.index]);
    renderQuestion();
    if(current.mode==="exam"){persistExam();refreshTimer();}
  }
  function previousQuestion() {
    if(!current || current.mode!=="exam" || !examStillOpen() || current.index<=0)return;
    current.index--;renderQuestion();persistExam();refreshTimer();
  }
  function nextQuestion() {
    if(!current||!examStillOpen())return;
    if(current.mode!=="exam" && !current.choices[current.index])return;
    if(current.index===current.items.length-1) {finishSession();return;}
    current.index++;renderQuestion();if(current.mode==="exam"){persistExam();refreshTimer();}
  }
  function finishSession() {
    if(!current)return;
    stopTimer();
    if(current.mode==="review"){backFromReview();return;}
    recentResult={
      items:current.items,choices:[...current.choices],
      orders:current.orders.map(o=>[...o]),title:current.title,
      track:current.track,subject:current.subject,mode:current.mode,
      examMinutes:current.examMinutes
    };
    if(current.mode==="exam")recordAttempts(current,current.items.map((_,i)=>i));
    lastSaved=recentResult;
    saveStorage("automotiveQuizLastSessionV1",recentResult);
    if(current.mode==="exam")saveStorage(ACTIVE_EXAM_KEY,null);
    renderResults();showView("result");
  }
  function wrongIndices(s) {
    return s.items.map((q,i)=>!isAnswerCorrect(s,i)?i:-1).filter(i=>i>=0);
  }
  function renderResults(){
    const s=recentResult;if(!s)return;
    const total=s.items.length,wrong=wrongIndices(s).length,score=total-wrong;
    $("resultSubject").textContent=s.title;
    $("resultScore").textContent=`${score} / ${total}문제 정답 · ${Math.round(score*100/total)}점`;
    $("resultStats").replaceChildren(
      make("span","","맞힌 문제 "+score+"개"),
      make("span","","틀리거나 건너뛴 문제 "+wrong+"개")
    );
    if(s.mode==="exam" && s.items.length===80 && ["past","expected"].includes(s.track)){
      const perSubject=SUBJECTS.map(subject=>{
        const indices=s.items.map((q,i)=>q.subject===subject.id?i:-1).filter(i=>i!==-1);
        const correct=indices.filter(i=>isAnswerCorrect(s,i)).length;
        return {name:subject.name,total:indices.length,correct,points:indices.length?Math.round(correct*100/indices.length):0};
      });
      const valid=perSubject.every(row=>row.total===20);
      const passed=valid && score>=48 && perSubject.every(row=>row.correct>=8);
      $("resultStats").append(make("strong","exam-judgement",!valid
        ?"과목 배분을 확인할 수 없어 합격 여부를 표시하지 않아."
        :passed?"학습용 합격 기준 충족":"학습용 합격 기준 미달"));
      for(const row of perSubject){
        $("resultStats").append(make("span","exam-subject-score",
          row.name+" · "+row.correct+"/"+row.total+" ("+row.points+"점)"+(row.correct<8?" · 과락":"")));
      }
      $("resultStats").append(make("span","exam-criterion",
        "기준: 과목별 40점 이상, 전체 평균 60점 이상 · 공식 시험 결과가 아닌 학습용 판정"));
    }
    $("resultHint").textContent="빨간 문제 번호를 누르면 해당 문제를 다시 풀 수 있어.";
    const grid=$("resultGrid");grid.replaceChildren();
    s.items.forEach((q,i)=>{
      const correct=isAnswerCorrect(s,i);
      const btn=appendButton(grid,String(i+1),"result-number "+(correct?"correct":"wrong"),()=>openReview(s,i,"result"),correct);
      btn.title=correct?"정답":s.choices[i]===0?"미응답 · 다시 풀기":"오답 · 다시 풀기";
    });
    $("retryWrongBtn").disabled=wrong===0;
  }
  function openReview(s,index,goBack){
    returnSession=recentResult;
    returnView=goBack;
    current={items:[s.items[index]],choices:[0],orders:[buildOrder(s.items[index])],index:0,mode:"review",
      title:goBack==="wrong"?"누적 오답 다시 풀기":`오답 다시 풀기 · 원래 ${index+1}번`,
      track:s.items[index].track,subject:s.items[index].subject};
    renderQuestion();showView("quiz");
  }
  function backFromReview() {
    current=null;
    if(returnView==="wrong"){renderWrong();showView("wrong");}
    else {recentResult=returnSession;renderResults();showView("result");}
    returnSession=null;
  }
  function retryWrong(){
    if(!recentResult)return;
    const wrong=wrongIndices(recentResult).map(i=>recentResult.items[i]);
    if(wrong.length)startSession(wrong,{mode:"practice",title:"틀린 문제 다시 풀기",
      track:recentResult.track,subject:recentResult.subject});
  }
  function retryAll(){
    if(!recentResult)return;
    startSession(shuffled(recentResult.items),{mode:recentResult.mode,title:recentResult.title,
      track:recentResult.track,subject:recentResult.subject,examMinutes:recentResult.examMinutes});
  }
  function renderWrong(){
    const container=$("wrongList");container.replaceChildren();
    if(bankLoadState!=="ready"){
      $("wrongSummary").textContent="문제은행을 불러온 뒤 오답을 확인할 수 있어.";return;
    }
    const map=new Map(ITEMS.map(q=>[q.id,q]));
    const rows=loadHistory().records.flatMap(row=>{
      const q=map.get(row?.id);
      if(!q||row.signature!==questionSignature(q)||
        !["correct","wrong","unanswered"].includes(row.last)||
        ![row.correct,row.wrong,row.unanswered].every(x=>Number.isSafeInteger(x)&&x>=0))return [];
      return [{q,row}];
    });
    const errors=rows.filter(({row})=>row.wrong+row.unanswered>0);
    const pending=errors.filter(({row})=>row.last!=="correct");
    const total=rows.reduce((sum,{row})=>sum+row.correct+row.wrong+row.unanswered,0);
    const misses=rows.reduce((sum,{row})=>sum+row.wrong+row.unanswered,0);
    $("wrongSummary").textContent="누적 "+total+"회 풀이 · 오답률 "+(total?Math.round(misses*100/total):0)+"% · 복습 필요 "+pending.length+"문항 · 복습 완료 "+(errors.length-pending.length)+"문항";
    const filters=$("wrongFilters");filters.replaceChildren();
    for(const [id,label] of [["all","전체 과목"],...SUBJECTS.map(s=>[s.id,s.name])]){
      const button=appendButton(filters,label,"secondary-btn",()=>{wrongSubject=id;renderWrong();});
      button.setAttribute("aria-pressed",String(wrongSubject===id));button.disabled=wrongSubject===id;
    }
    const scopes=$("wrongScopes");scopes.replaceChildren();
    for(const [id,label] of [["pending","복습 필요"],["resolved","복습 완료"],["all","전체 오답 이력"]]){
      const button=appendButton(scopes,label,"secondary-btn",()=>{wrongScope=id;renderWrong();});
      button.setAttribute("aria-pressed",String(wrongScope===id));button.disabled=wrongScope===id;
    }
    const shown=errors.filter(({q,row})=>(wrongSubject==="all"||q.subject===wrongSubject)&&
      (wrongScope==="all"||(wrongScope==="resolved"?row.last==="correct":row.last!=="correct")))
      .sort((a,b)=>b.row.updatedAt-a.row.updatedAt||a.q.id.localeCompare(b.q.id));
    if(!shown.length){container.append(make("p","helper","해당 조건의 오답이 없어."));return;}
    shown.forEach(({q,row})=>{
      const button=make("button","bank-question-card");
      button.type="button";button.style.textAlign="left";
      button.append(make("p","bank-question-meta",currentSubjectLabel(q.subject)+" · "+TRACKS[q.track]),
        make("h3","bank-question-title",q.question),
        make("p","helper","오답 "+row.wrong+"회 · 미응답 "+row.unanswered+"회 · 정답 "+row.correct+"회 · "+(row.last==="correct"?"복습 완료":"복습 필요")));
      button.addEventListener("click",()=>openReview({items:[q]},0,"wrong"));
      container.appendChild(button);
    });
  }
  function renderConcepts(){
    const grid=$("conceptGrid");grid.replaceChildren();
    SUBJECTS.forEach(s=>{
      const count=poolFor("concept",s.id).length;
      const card=make("div","concept-card word-quiz-subject-btn word-quiz-subject-card");
      const info=make("div","word-quiz-subject-info");
      info.append(make("strong","",s.name),make("span","",`괄호문제 ${count}개`));
      const actions=make("div","word-quiz-action-stack");
      const quick=make("div","word-quiz-count-actions");
      appendButton(quick,"10문제","word-quiz-count-btn",()=>startConcept(s.id,10),!count);
      appendButton(quick,"20문제","word-quiz-count-btn",()=>startConcept(s.id,20),!count);
      actions.append(quick);
      appendButton(actions,`괄호문제 · ${count}`,"word-quiz-blank-action concept-blank-btn",()=>startConcept(s.id,count),!count);
      card.append(info,actions);grid.append(card);
    });
  }
  function initTheme(){
    const dark=readStorage("automotiveQuizThemeV1",null);
    document.documentElement.dataset.theme=dark==="dark"||dark==="light"?dark:
      (window.matchMedia?.("(prefers-color-scheme: dark)")?.matches?"dark":"light");
    $("themeToggleBtn").textContent=document.documentElement.dataset.theme==="dark"?"☀":"☾";
  }
  function toggleTheme(){
    const t=document.documentElement.dataset.theme==="dark"?"light":"dark";
    document.documentElement.dataset.theme=t;
    $("themeToggleBtn").textContent=t==="dark"?"☀":"☾";
    saveStorage("automotiveQuizThemeV1",t);
  }
  function setReadingSize(size) {
    if(!["small","normal","large"].includes(size))size="normal";
    document.body.classList.remove("reading-small","reading-normal","reading-large");
    document.body.classList.add("reading-"+size);
    document.body.dataset.readingSize=size;
    for(const btn of document.querySelectorAll(".reading-size-btn"))
      btn.setAttribute("aria-pressed",String(btn.dataset.readingSize===size));
    saveStorage("automotiveQuizReadingSizeV1",size);
  }
  function connect(){
    $("trackPast").addEventListener("click",()=>{if(browseState?.subject)openBrowse("past",browseState.subject);});
    $("trackExpected").addEventListener("click",()=>{if(browseState?.subject)openBrowse("expected",browseState.subject);});
    $("browse10Btn").addEventListener("click",()=>{if(browseState?.subject)startTrack(browseState.track,browseState.subject,10);});
    $("browse20Btn").addEventListener("click",()=>{if(browseState?.subject)startTrack(browseState.track,browseState.subject,20);});
    $("themeToggleBtn").addEventListener("click",toggleTheme);
    for(const b of document.querySelectorAll(".reading-size-btn"))b.addEventListener("click",()=>setReadingSize(b.dataset.readingSize));
    $("homeBtn").addEventListener("click",showHome);
    $("handNoteEntryBtn").addEventListener("click",()=>showView("handNote"));
    $("examEntryBtn").addEventListener("click",()=>showView("exam"));
    $("wrongEntryBtn").addEventListener("click",()=>{wrongSubject="all";wrongScope="pending";renderWrong();showView("wrong");});
    $("sampleExamBtn").addEventListener("click",startSampleExam);
    $("expectedExamBtn").addEventListener("click",()=>startFullExam("expected"));
    $("approvedExamBtn").addEventListener("click",()=>startFullExam("past"));
    $("browseStartBtn").addEventListener("click",()=>startSession(browseState.track==="past"?browseState.subject?personalRotation(browseState.items,browseState.items.length):SUBJECTS.flatMap(s=>personalRotation(poolFor("past",s.id),360)):shuffled(browseState.items),
      {mode:"practice",title:browseState.title,track:browseState.track,subject:browseState.subject}));
    $("previousBtn").addEventListener("click",previousQuestion);
    $("nextBtn").addEventListener("click",nextQuestion);
    $("reviewBackBtn").addEventListener("click",backFromReview);
    $("retryWrongBtn").addEventListener("click",retryWrong);
    $("retryAllBtn").addEventListener("click",retryAll);
    $("resultHomeBtn").addEventListener("click",showHome);
    $("resumeExamBtn").addEventListener("click",resumeExam);
    $("discardExamBtn").addEventListener("click",discardExam);
    window.addEventListener("pagehide",()=>{persistExam();stopTimer();});
    window.addEventListener("pageshow",()=>{if(view==="quiz"&&current?.mode==="exam")beginTimer();});
    initTheme();
    setReadingSize(readStorage("automotiveQuizReadingSizeV1","normal"));
    renderSubjects();renderConcepts();showView("home");
    loadPublicBank();
  }
  if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",connect);
  else connect();
})();
