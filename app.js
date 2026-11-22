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
  const ITEMS = (Array.isArray(window.AUTO_QUIZ_DATA) ? window.AUTO_QUIZ_DATA : []).filter(q =>
    q && typeof q.id === "string" && SUBJECTS.some(s=>s.id===q.subject) &&
    Array.isArray(q.choices) && q.choices.length===4 &&
    q.choices.every(x=>typeof x==="string"&&x.trim()) && [1,2,3,4].includes(q.answer) &&
    typeof q.question==="string" && typeof q.explanation==="string" &&
    (q.track==="demo" || q.track==="concept")
  );
  // Publisher scans and unreviewed OCR are intentionally not loaded into the public site.
  const VIEWS = ["home","browse","quiz","result","exam","concept","wrong"];
  let activeTrack = "past";
  let current = null;
  let recentResult = null;
  let lastSaved = null;
  let timerId = null;
  let returnSession = null;
  let returnView = "result";
  let browseState = {items:[],page:1,title:"",track:"demo",subject:null};
  let view = "home";

  function readStorage(key, fallback) {
    try { const value=localStorage.getItem(key); return value===null ? fallback:JSON.parse(value); }
    catch { return fallback; }
  }
  function saveStorage(key,value) { try { localStorage.setItem(key,JSON.stringify(value)); } catch {} }
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
    $("trackSummary").textContent=`${TRACKS[activeTrack]} · 총 ${total}문항 — 현재는 사이트 기능을 시험하는 단계로, 출처 확인·검수가 끝난 문제만 이 메뉴에 추가할 예정이야.`;
    for (const subject of SUBJECTS) {
      const count=poolFor(activeTrack,subject.id).length;
      const card=make("div","subject-card"+(count===0?" is-empty":""));
      const detail=make("div","subject-btn");
      detail.append(make("strong","",subject.name),make("span","",`${count}문항`));
      const action=make("div","subject-action-stack");
      action.style.cssText="display:flex;flex-direction:column;gap:7px;min-width:91px";
      appendButton(action,"10문제","subject-browse-btn",()=>startTrack(activeTrack,subject.id,10));
      appendButton(action,"전체 보기","subject-browse-btn",()=>openBrowse(activeTrack,subject.id));
      card.append(detail,action);box.appendChild(card);
    }
  }
  function showHome() {
    current=null;returnSession=null;renderSubjects();showView("home");
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
    startSession(shuffled(poolFor("demo")),{mode:"exam",title:"시연용 실전 시험",track:"demo",subject:null});
  }
  function startSession(items,options) {
    if(!items.length){showHome();return;}
    const mode=options.mode||"practice";
    current={items:[...items],choices:Array(items.length).fill(0),index:0,
      mode,title:options.title||"문제풀이",track:options.track||"demo",
      subject:options.subject||null,
      examDeadline:mode==="exam"?Date.now()+10*60*1000:null};
    renderQuestion();showView("quiz");
    if(mode==="exam") beginTimer();
  }

  function stopTimer() {
    if(timerId!==null){clearInterval(timerId);timerId=null;}
  }
  function beginTimer() {
    stopTimer();
    const tick=()=>{
      if(!current||current.mode!=="exam"){stopTimer();return;}
      const remaining=Math.max(0,Math.ceil((current.examDeadline-Date.now())/1000));
      $("quizSource").textContent=`남은 시간 ${String(Math.floor(remaining/60)).padStart(2,"0")}:${String(remaining%60).padStart(2,"0")}`;
      if(remaining===0){stopTimer();finishSession();}
    };
    tick();timerId=setInterval(tick,1000);
  }
  function renderQuestion() {
    if(!current)return;
    const {items,index,choices,mode}=current;
    const q=items[index],chosen=choices[index],locked=mode!=="exam" && chosen!==0;
    $("quizSubject").textContent=current.title;
    $("quizProgress").textContent=`${index+1} / ${items.length}`;
    $("quizSource").textContent=mode==="exam"?"시험 진행 중":currentSubjectLabel(q.subject);
    $("progressFill").style.width=`${(index+1)*100/items.length}%`;
    $("questionNumber").textContent=`문제 ${index+1}`;
    $("questionText").textContent=q.question;
    $("questionCard").classList.remove("correct","wrong");
    const box=$("answerChoices");box.replaceChildren();
    q.choices.forEach((choice,i)=>{
      const number=i+1;
      const cls="choice"+(mode==="exam" && chosen===number?" selected":
        locked && number===q.answer?" correct":
        locked && chosen===number && chosen!==q.answer?" incorrect":"");
      const button=make("button",cls);button.type="button";
      button.disabled=locked;
      button.append(make("span","choice-index",String(number)),make("span","choice-text",choice));
      button.addEventListener("click",()=>selectAnswer(number));
      box.appendChild(button);
    });
    $("feedback").classList.add("hidden");
    $("nextBtn").classList.toggle("hidden",locked===false && mode!=="exam");
    $("reviewBackBtn").classList.add("hidden");
    if(mode==="exam") {
      $("nextBtn").classList.remove("hidden");
      $("nextBtn").textContent=index===items.length-1?"시험 제출":"다음 문제";
    } else if(locked) {
      const feedback=$("feedback");
      feedback.classList.remove("hidden");
      feedback.classList.toggle("good",chosen===q.answer);
      feedback.classList.toggle("bad",chosen!==q.answer);
      feedback.replaceChildren(
        make("strong","",chosen===q.answer?"정답이야.":"오답이야. 정답은 "+q.answer+"번이야."),
        make("span","",q.explanation)
      );
      $("questionCard").classList.add(chosen===q.answer?"correct":"wrong");
      if(mode==="review") $("reviewBackBtn").classList.remove("hidden");
      else {
        $("nextBtn").classList.remove("hidden");
        $("nextBtn").textContent=index===items.length-1?"결과 보기":"다음 문제";
      }
    }
    if(mode!=="exam" && mode==="review") $("nextBtn").classList.add("hidden");
  }
  function selectAnswer(number) {
    if(!current)return;
    if(current.mode!=="exam" && current.choices[current.index]!==0)return;
    current.choices[current.index]=number;
    renderQuestion();
    if(current.mode==="exam") $("quizSource").textContent="답안 저장됨 · 변경 가능";
  }
  function nextQuestion() {
    if(!current)return;
    if(current.mode!=="exam" && !current.choices[current.index])return;
    if(current.index===current.items.length-1) {finishSession();return;}
    current.index++;renderQuestion();
  }
  function finishSession() {
    if(!current)return;
    stopTimer();
    if(current.mode==="review"){backFromReview();return;}
    recentResult={
      items:current.items,choices:[...current.choices],title:current.title,
      track:current.track,subject:current.subject,mode:current.mode
    };
    lastSaved=recentResult;
    saveStorage("automotiveQuizLastSessionV1",recentResult);
    renderResults();showView("result");
  }
  function wrongIndices(s) {
    return s.items.map((q,i)=>s.choices[i]!==q.answer?i:-1).filter(i=>i>=0);
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
    $("resultHint").textContent="빨간 문제 번호를 누르면 해당 문제를 다시 풀 수 있어.";
    const grid=$("resultGrid");grid.replaceChildren();
    s.items.forEach((q,i)=>{
      const correct=s.choices[i]===q.answer;
      const btn=appendButton(grid,String(i+1),"result-number "+(correct?"correct":"wrong"),()=>openReview(s,i,"result"),correct);
      btn.title=correct?"정답":s.choices[i]===0?"미응답 · 다시 풀기":"오답 · 다시 풀기";
    });
    $("retryWrongBtn").disabled=wrong===0;
  }
  function openReview(s,index,goBack){
    returnSession=recentResult;
    returnView=goBack;
    current={items:[s.items[index]],choices:[0],index:0,mode:"review",
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
      track:recentResult.track,subject:recentResult.subject});
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
    $("examEntryBtn").addEventListener("click",()=>showView("exam"));
    $("conceptEntryBtn").addEventListener("click",()=>{renderConcepts();showView("concept");});
    $("wrongEntryBtn").addEventListener("click",()=>{renderWrong();showView("wrong");});
    $("sampleExamBtn").addEventListener("click",startSampleExam);
    $("browseStartBtn").addEventListener("click",()=>startSession(shuffled(browseState.items),
      {mode:"practice",title:browseState.title,track:browseState.track,subject:browseState.subject}));
    $("nextBtn").addEventListener("click",nextQuestion);
    $("reviewBackBtn").addEventListener("click",backFromReview);
    $("retryWrongBtn").addEventListener("click",retryWrong);
    $("retryAllBtn").addEventListener("click",retryAll);
    $("resultHomeBtn").addEventListener("click",showHome);
    window.addEventListener("pagehide",stopTimer);
    initTheme();
    setReadingSize(readStorage("automotiveQuizReadingSizeV1","normal"));
    setTrack("past");showView("home");
  }
  if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",connect);
  else connect();
})();
