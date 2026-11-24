(() => {
  "use strict";
  const $ = id => document.getElementById(id);
  const SUBJECTS = [
    {id:"engine",name:"자동차 엔진정비"},
    {id:"chassis",name:"자동차 섀시정비"},
    {id:"electrical",name:"자동차 전기·전자장치정비"},
    {id:"eco",name:"친환경 자동차정비"}
  ];
  const TRACKS = {past:"기존 기출문제",expected:"예상문제",demo:"시연용 문제",concept:"핵심 개념 퀴즈"};
  // The public site reads six same-origin JSON files automatically; no ZIP/file picker.
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
      ITEMS=result;
      bankLoadState="ready";
      const expected=result.filter(q=>q.track==="expected").length;
      status.textContent=`과목별 JSON 자동 연결 완료 · 자체제작 예상문제 ${expected}문항 · 파일 선택 필요 없음`;
    }catch(error){
      ITEMS=[];
      bankLoadState="error";
      status.textContent="문제은행을 읽지 못했어. 새로고침하거나 잠시 후 다시 확인해 줘. ("+
        (error?.message||"원인 미상")+")";
    }
    renderSubjects();
    updateExamAvailability();
    if(view==="concept")renderConcepts();
    renderResumeExam();
  }
  const VIEWS = ["home","browse","quiz","result","exam","concept","wrong"];
  let activeTrack = "past";
  let current = null;
  let recentResult = null;
  let lastSaved = null;
  let timerId = null;
  const ACTIVE_EXAM_KEY="automotiveQuizActiveExamV1";
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

  function setTrack(track) {
    activeTrack=track==="expected"?"expected":"past";
    $("trackPast").classList.toggle("active",activeTrack==="past");
    $("trackExpected").classList.toggle("active",activeTrack==="expected");
    $("trackPast").setAttribute("aria-selected",String(activeTrack==="past"));
    $("trackExpected").setAttribute("aria-selected",String(activeTrack==="expected"));
    renderSubjects();
  }
  function renderSubjects() {
    const box=$("subjectGrid");box.replaceChildren();
    const total=poolFor(activeTrack).length;
    $("trackSummary").textContent=bankLoadState==="loading"?"문제은행을 불러오는 중이야.":
      `${TRACKS[activeTrack]} · 총 ${total}문항${activeTrack==="expected"?" · 자체 제작 연습문제(편집 검토 중)":" · 이용이 허가된 기출문제 등록 전"}`;
    for(const subject of SUBJECTS){
      const count=poolFor(activeTrack,subject.id).length;
      const card=make("div","subject-card"+(count===0?" is-empty":""));
      const detail=make("div","subject-btn");
      detail.append(make("strong","",subject.name),make("span","",`${count}문항`));
      const action=make("div","subject-action-stack");
      action.style.cssText="display:flex;flex-direction:column;gap:7px;min-width:95px";
      appendButton(action,"10문제","subject-browse-btn",()=>startTrack(activeTrack,subject.id,10),count===0);
      appendButton(action,"20문제","subject-browse-btn",()=>startTrack(activeTrack,subject.id,20),count===0);
      appendButton(action,"전체 보기","subject-browse-btn",()=>openBrowse(activeTrack,subject.id));
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
    const container=$("browseList");container.replaceChildren();
    const pages=$("browsePagination");pages.replaceChildren();
    if(!state.items.length) {
      displayEmpty(container,"이 분류에는 아직 검수된 문제가 없어. 구매한 교재의 스캔본은 공개 데이터로 등록하지 않았어.");
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
    startSession(shuffled(pool).slice(0,Math.min(count,pool.length)),{
      mode:"practice",title:`${TRACKS[track]} · ${currentSubjectLabel(subject)}`,
      track,subject
    });
  }
  function startDemo() {
    startSession(shuffled(poolFor("demo")),{mode:"practice",title:"샘플 문제 풀이",track:"demo",subject:null});
  }
  function startConcept(subject) {
    const pool=poolFor("concept",subject);
    startSession(shuffled(pool),{mode:"concept",title:currentSubjectLabel(subject)+" · 괄호문제",track:"concept",subject});
  }
  function startSampleExam(){
    startSession(shuffled(poolFor("demo")),{mode:"exam",title:"시연용 실전 시험",track:"demo",subject:null,examMinutes:10});
  }
  function examPool(track) {
    const groups=SUBJECTS.map(subject=>poolFor(track,subject.id));
    if(groups.some(group=>group.length<20))return null;
    return shuffled(groups.flatMap(group=>shuffled(group).slice(0,20)));
  }
  function updateExamAvailability() {
    $("expectedExamBtn").disabled=!examPool("expected");
    $("approvedExamBtn").disabled=!examPool("past");
    $("examStatus").textContent=bankLoadState==="error"
      ?"문제은행을 불러오지 못했어. 새로고침해 줘."
      :bankLoadState==="loading"
        ?"문제은행을 불러오는 중이야."
        :`자체제작 예상문제 ${poolFor("expected").length}문항 중 과목별 20개, 총 80문항 학습용 모의고사 · 최종 기술검수 전인 복원문제 720개는 출제 제외`;
  }
  function startFullExam(track) {
    const items=examPool(track);
    if(!items){updateExamAvailability();return;}
    startSession(items,{
      mode:"exam",title:track==="past"?"승인된 기출 복원 모의고사":"자체제작 예상문제 모의고사 (학습용)",
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
    if(q.review_status==="editorial_draft") {
      audit.classList.remove("hidden");
      audit.textContent="자체제작 연습문제 · 편집 검토 단계";
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
      if(mode==="review") $("reviewBackBtn").classList.remove("hidden");
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
      title:`오답 다시 풀기 · 원래 ${index+1}번`,
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
    const s=readStorage("automotiveQuizLastSessionV1",null);
    if(!s||!Array.isArray(s.items)||!Array.isArray(s.choices)){
      container.append(make("p","helper","아직 저장된 풀이 결과가 없어. 먼저 샘플 문제를 풀어봐."));
      appendButton(container,"샘플 문제 풀기","primary-btn",startDemo);
      return;
    }
    const wrong=wrongIndices(s);
    if(!wrong.length){container.append(make("p","helper","마지막 풀이에서는 틀린 문제가 없어."));return;}
    wrong.forEach(i=>{
      const button=make("button","bank-question-card");
      button.type="button";button.style.textAlign="left";
      button.append(make("p","bank-question-meta",`${i+1}번 · ${currentSubjectLabel(s.items[i].subject)}`),
        make("h3","bank-question-title",s.items[i].question),
        make("p","helper","눌러서 다시 풀기"));
      button.addEventListener("click",()=>openReview(s,i,"wrong"));
      container.appendChild(button);
    });
  }
  function renderConcepts(){
    const grid=$("conceptGrid");grid.replaceChildren();
    SUBJECTS.forEach(s=>{
      const count=poolFor("concept",s.id).length;
      const card=make("button","concept-card");
      card.type="button";
      card.append(make("strong","",s.name),make("span","",`시연용 괄호문제 ${count}개`));
      card.addEventListener("click",()=>startConcept(s.id));
      grid.append(card);
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
    for(const btn of document.querySelectorAll(".reading-size-btn"))
      btn.setAttribute("aria-pressed",String(btn.dataset.readingSize===size));
    saveStorage("automotiveQuizReadingSizeV1",size);
  }
  function connect(){
    $("trackPast").addEventListener("click",()=>setTrack("past"));
    $("trackExpected").addEventListener("click",()=>setTrack("expected"));
    $("themeToggleBtn").addEventListener("click",toggleTheme);
    for(const b of document.querySelectorAll(".reading-size-btn"))b.addEventListener("click",()=>setReadingSize(b.dataset.readingSize));
    $("homeBtn").addEventListener("click",showHome);
    $("demoEntryBtn").addEventListener("click",startDemo);
    $("demoBrowseBtn").addEventListener("click",()=>openBrowse("demo"));
    $("bankEntryBtn").addEventListener("click",()=>openBrowse("expected"));
    $("examEntryBtn").addEventListener("click",()=>showView("exam"));
    $("conceptEntryBtn").addEventListener("click",()=>{renderConcepts();showView("concept");});
    $("wrongEntryBtn").addEventListener("click",()=>{renderWrong();showView("wrong");});
    $("sampleExamBtn").addEventListener("click",startSampleExam);
    $("expectedExamBtn").addEventListener("click",()=>startFullExam("expected"));
    $("approvedExamBtn").addEventListener("click",()=>startFullExam("past"));
    $("browseStartBtn").addEventListener("click",()=>startSession(shuffled(browseState.items),
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
    setTrack("expected");showView("home");
    loadPublicBank();
  }
  if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",connect);
  else connect();
})();
