(() => {
  "use strict";
  const $ = id => document.getElementById(id);
  const SUBJECTS = ["", "자동차 엔진정비", "자동차 섀시정비", "자동차 전기·전자장치정비", "친환경 자동차정비"];
  const ZIP_MAX_BYTES = 220 * 1024 * 1024;
  const SCAN_PATH = /^(?:questions|explanations)\/auto-r(?:0[1-9])-s0[1-4]-q(?:0[1-9]|1[0-9]|20)\.png$/;
  let archive = null;
  let bank = [];
  let run = null;
  let previous = null;
  let activeUrls = [];
  let imageToken = 0;
  let version = "";
  let view = "import";

  function show(name) {
    view = name;
    for (const n of ["import", "setup", "privateQuiz", "privateResult", "privateWrong"]) {
      const id = n === "import" ? "importView" : n === "setup" ? "setupView" : n + "View";
      $(id).classList.toggle("hidden",n !== name);
    }
    window.scrollTo({top:0,behavior:"instant"});
  }
  function text(node, value) { node.textContent=String(value); }
  function safeCount(v) { return Number.isSafeInteger(v) ? v : 0; }
  function status(message) { text($("importStatus"),message); }
  function clearSourceImages() {
    ++imageToken;
    for(const url of activeUrls) URL.revokeObjectURL(url);
    activeUrls=[];
  }
  function validEntry(q) {
    return q && typeof q.id==="string" && /^auto-r0[1-9]-s0[1-4]-q(?:0[1-9]|1[0-9]|20)$/.test(q.id) &&
      Number.isInteger(q.round) && q.round>=1 && q.round<=9 &&
      Number.isInteger(q.subject_number) && q.subject_number>=1 && q.subject_number<=4 &&
      Number.isInteger(q.question_number) && q.question_number>=1 && q.question_number<=20 &&
      q.id===`auto-r${String(q.round).padStart(2,"0")}-s${String(q.subject_number).padStart(2,"0")}-q${String(q.question_number).padStart(2,"0")}` &&
      q.question_image===`questions/${q.id}.png` && q.explanation_image===`explanations/${q.id}.png` &&
      SCAN_PATH.test(q.question_image) && SCAN_PATH.test(q.explanation_image) &&
      Number.isInteger(q.answer_from_source_table) && q.answer_from_source_table>=1 && q.answer_from_source_table<=4;
  }
  async function importZip(file) {
    if(!file)return;
    archive=null;bank=[];run=null;previous=null;clearSourceImages();
    show("import");
    if(!file.name.toLowerCase().endsWith(".zip") || file.size>ZIP_MAX_BYTES || file.size<100) {
      status("QA6 또는 QA7 ZIP 파일을 선택해 줘. 최대 220MB까지 지원해.");
      return;
    }
    if(!window.JSZip) { status("ZIP 읽기 라이브러리를 불러오지 못했어. 페이지를 새로고침해 줘.");return;}
    status("ZIP 구조와 720문항을 검사하는 중이야. 파일 내용은 이 브라우저에서만 처리해.");
    try {
      const zip=await window.JSZip.loadAsync(file,{checkCRC32:false,createFolders:false});
      const dataFile=zip.file("bank.json");
      if(!dataFile)throw new Error("bank.json이 없어. QA6/QA7 원본 ZIP을 선택해 줘.");
      const raw=await dataFile.async("string");
      if(raw.length>12000000)throw new Error("문제은행 JSON이 허용 크기를 초과했어.");
      const values=JSON.parse(raw);
      if(!Array.isArray(values)||values.length!==720)throw new Error("정확히 720문항이 포함된 QA6/QA7 ZIP만 열 수 있어.");
      const ids=new Set();
      for(const q of values) {
        if(!validEntry(q)||ids.has(q.id)||!zip.file(q.question_image)||!zip.file(q.explanation_image))
          throw new Error(`문제 구조나 이미지 연결이 잘못됐어: ${q?.id || "알 수 없음"}`);
        ids.add(q.id);
      }
      const qa7=zip.file("qa7-summary.json");
      const qa6=zip.file("qa6-summary.json");
      let summary={};
      if(qa7) { summary=JSON.parse(await qa7.async("string"));version="QA7"; }
      else if(qa6) { summary=JSON.parse(await qa6.async("string"));version="QA6"; }
      else throw new Error("QA6/QA7 버전 정보를 찾을 수 없어.");
      if(summary.total && summary.total!==720 || summary.all_questions && summary.all_questions!==720)
        throw new Error("버전 요약의 문항 수와 실제 내용이 달라.");
      archive=zip;bank=values;
      const reviewed=bank.filter(q=>q.text_transcription==="manually_compared_to_source_images").length;
      const partial=bank.filter(q=>q.text_transcription==="question_and_choices_source_compared_only").length;
      text($("bankVersion"),version);
      text($("bankMeta"),`${version} · 9회 · 4과목 · 총 ${bank.length}문항 · 원본 문자 전체 대조 ${reviewed}문항 · 지문/보기만 대조 ${partial}문항 · 기술적 정답 승인 0문항`);
      $("privateSubject").value="all";$("privateRound").value="all";
      updateSelection();
      show("setup");
      status(`불러오기 완료: ${bank.length}문항`);
    } catch(error) {
      archive=null;bank=[];version="";
      status("불러오기 실패: "+(error?.message||"ZIP 파일을 읽을 수 없어."));
    }
  }
  function getFiltered() {
    const sub=$("privateSubject").value,round=$("privateRound").value;
    return bank.filter(q=>(sub==="all"||q.subject_number===Number(sub)) &&
      (round==="all"||q.round===Number(round)));
  }
  function updateSelection(){
    text($("privateSelectionMeta"),`선택 범위: ${getFiltered().length}문항`);
  }
  function shuffled(items){
    const a=[...items];
    for(let i=a.length-1;i>0;i--){
      const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]];
    }
    return a;
  }
  function startQuiz(items,options={}) {
    if(!archive||!items.length)return;
    clearSourceImages();
    run={items:[...items],answers:Array(items.length).fill(0),index:0,review:!!options.review};
    renderQuestion();show("privateQuiz");
  }
  function startSelection(){
    const all=getFiltered();if(!all.length)return;
    const ordered=$("privateOrder").value==="random"?shuffled(all):all;
    const count=$("privateCount").value==="all"?all.length:Number($("privateCount").value);
    startQuiz(ordered.slice(0,count));
  }
  async function renderImage(path,target,token) {
    target.replaceChildren();
    const loading=document.createElement("p");loading.textContent="원본 이미지를 읽는 중이야.";
    target.appendChild(loading);
    try {
      if(!archive||!SCAN_PATH.test(path))throw Error("이미지 경로가 올바르지 않아.");
      const entry=archive.file(path);
      if(!entry)throw Error("이미지가 ZIP에 없어.");
      const data=await entry.async("uint8array");
      if(data.length>3*1024*1024)throw Error("이미지 크기가 허용 범위를 초과했어.");
      if(token!==imageToken)return;
      // Allow only PNG magic, not HTML or SVG.
      if(data.length<8||data[0]!==137||data[1]!==80||data[2]!==78||data[3]!==71)
        throw Error("PNG가 아닌 이미지 파일이야.");
      const blob=new Blob([data],{type:"image/png"});
      const url=URL.createObjectURL(blob);activeUrls.push(url);
      if(token!==imageToken){URL.revokeObjectURL(url);return;}
      const img=document.createElement("img");
      img.alt=path.startsWith("questions/")?"원본 문제 및 네 개 선택지":"교재 원본 해설";
      img.loading="eager";img.decoding="async";img.src=url;
      target.replaceChildren(img);
    }catch(error){
      if(token===imageToken){target.replaceChildren();const p=document.createElement("p");p.textContent="이미지 표시 실패: "+(error?.message||"오류");target.append(p);}
    }
  }
  function renderQuestion(){
    if(!run)return;
    clearSourceImages();
    const q=run.items[run.index];
    const answered=run.answers[run.index]!==0;
    const selected=run.answers[run.index];
    text($("privateQuizMeta"),`${q.round}회 · ${SUBJECTS[q.subject_number]}`);
    text($("privateQuizProgress"),`${run.index+1} / ${run.items.length}`);
    text($("privateQuestionNumber"),`문제 ${q.question_number}`);
    text($("privateTextStatus"),
      q.text_transcription==="manually_compared_to_source_images"?"원본 문자 대조 완료 · 기술적 정답 미승인":
      q.text_transcription==="question_and_choices_source_compared_only"?"지문·보기 대조 완료 · 해설 미검수":
      "원본 이미지 제공 · OCR 문자 대조 미완료"
    );
    $("privateProgressFill").style.width=`${Math.round((run.index+1)*100/run.items.length)}%`;
    const token=imageToken;
    renderImage(q.question_image,$("privateQuestionImageBox"),token);
    const box=$("privateChoices");box.replaceChildren();
    for(let i=1;i<=4;i++){
      const button=document.createElement("button");
      button.type="button";
      button.className="private-choice";
      button.textContent=["","①","②","③","④"][i];
      button.disabled=answered;
      if(answered){
        if(i===q.answer_from_source_table)button.classList.add("correct");
        if(i===selected&&i!==q.answer_from_source_table)button.classList.add("incorrect");
      }
      button.addEventListener("click",()=>selectAnswer(i));
      box.appendChild(button);
    }
    const feedback=$("privateFeedback");
    feedback.classList.toggle("hidden",!answered);
    $("privateNextBtn").classList.toggle("hidden",!answered||run.review);
    $("privateReviewReturnBtn").classList.toggle("hidden",!answered||!run.review);
    if(answered) {
      text($("privateFeedbackTitle"),
        selected===q.answer_from_source_table?"교재 정답표와 일치해.":`교재 정답표는 ${q.answer_from_source_table}번이야.`);
      renderImage(q.explanation_image,$("privateExplanationImageBox"),token);
      text($("privateNextBtn"),run.index===run.items.length-1?"결과 확인":"다음 문제");
    } else $("privateExplanationImageBox").replaceChildren();
  }
  function selectAnswer(choice){
    if(!run||run.answers[run.index]!==0)return;
    run.answers[run.index]=choice;renderQuestion();
  }
  function next(){
    if(!run||!run.answers[run.index])return;
    if(run.review){returnToWrong();return;}
    if(run.index+1<run.items.length){run.index++;renderQuestion();}
    else finish();
  }
  function getWrong(s){
    return s.items.map((q,i)=>s.answers[i]!==q.answer_from_source_table?i:-1).filter(i=>i>=0);
  }
  function finish(){
    if(!run)return;
    previous={items:[...run.items],answers:[...run.answers]};
    renderResult();clearSourceImages();show("privateResult");
  }
  function renderResult(){
    if(!previous)return;
    const wrong=getWrong(previous).length,correct=previous.items.length-wrong;
    text($("privateScore"),`${correct} / ${previous.items.length} · 정답률 ${Math.round(correct*100/previous.items.length)}%`);
    const grid=$("privateResultGrid");grid.replaceChildren();
    previous.items.forEach((q,index)=>{
      const correct=previous.answers[index]===q.answer_from_source_table;
      const btn=document.createElement("button");btn.type="button";
      btn.className="private-result-index "+(correct?"correct":"wrong");
      btn.textContent=String(index+1);
      btn.title=correct?"교재 정답표 일치":"교재 정답표 불일치 · 다시 풀기";
      btn.addEventListener("click",()=>startReview(q));
      grid.append(btn);
    });
    $("privateRetryWrongBtn").disabled=wrong===0;
  }
  function startReview(q){startQuiz([q],{review:true});}
  function renderWrong(){
    const container=$("privateWrongList");container.replaceChildren();
    if(!previous){const p=document.createElement("p");p.textContent="현재 불러온 ZIP으로 완료한 풀이가 없어.";container.append(p);return;}
    const indices=getWrong(previous);
    if(!indices.length){const p=document.createElement("p");p.textContent="틀린 문제가 없어.";container.append(p);return;}
    for(const i of indices){
      const q=previous.items[i];
      const b=document.createElement("button");b.type="button";
      b.className="private-wrong-row";
      b.textContent=`${q.round}회 · ${SUBJECTS[q.subject_number]} · ${q.question_number}번 · 교재 정답 ${q.answer_from_source_table}번`;
      b.addEventListener("click",()=>startReview(q));
      container.append(b);
    }
  }
  function showWrong(){renderWrong();clearSourceImages();show("privateWrong");}
  function returnToWrong(){run=null;showWrong();}
  function endQuiz(){
    if(!run)return;
    if(run.review){returnToWrong();return;}
    if(run.answers.some(v=>v>0))finish();
    else {run=null;clearSourceImages();show("setup");}
  }
  function connect(){
    $("privateZipInput").addEventListener("change",event=>importZip(event.target.files?.[0]));
    ["privateSubject","privateRound"].forEach(id=>$(id).addEventListener("change",updateSelection));
    $("privateStartBtn").addEventListener("click",startSelection);
    $("privateExitBtn").addEventListener("click",endQuiz);
    $("privateNextBtn").addEventListener("click",next);
    $("privateReviewReturnBtn").addEventListener("click",returnToWrong);
    $("privateRetryWrongBtn").addEventListener("click",()=>previous&&startQuiz(getWrong(previous).map(i=>previous.items[i])));
    $("privateAllWrongBtn").addEventListener("click",showWrong);
    $("privateBackSetupBtn").addEventListener("click",()=>{clearSourceImages();show("setup");});
    $("privateWrongListBtn").addEventListener("click",showWrong);
    $("privateWrongBackBtn").addEventListener("click",()=>show("setup"));
    $("privateChangeBtn").addEventListener("click",()=>{clearSourceImages();show("import");$("privateZipInput").value="";});
    window.addEventListener("pagehide",clearSourceImages);
  }
  if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",connect);
  else connect();
})();
