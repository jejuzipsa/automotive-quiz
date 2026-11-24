"use strict";
const assert=require("node:assert/strict");
const fs=require("node:fs");
const path=require("node:path");
const vm=require("node:vm");
const root=path.resolve(__dirname,"..");
const html=fs.readFileSync(path.join(root,"index.html"),"utf8");
const src=fs.readFileSync(path.join(root,"app.js"),"utf8");
const utils=require("../quiz-utils.js");
new vm.Script(src);
for(let original=1;original<=4;original++){
  for(let i=0;i<500;i++){
    const order=utils.shuffleOrder(4);
    assert.deepEqual([...order].sort((a,b)=>a-b),[1,2,3,4]);
    const displayed=utils.correctDisplayIndex(order,original);
    assert.ok(utils.isCorrect(order,displayed,original));
    for(let chosen=1;chosen<=4;chosen++)
      assert.equal(utils.isCorrect(order,chosen,original),chosen===displayed);
  }
}
const htmlIds=[...html.matchAll(/\bid="([^"]+)"/g)].map(x=>x[1]);
class El {
  constructor(){
    this.children=[];this.listeners={};this.className="";this.dataset={};this.style={};
    this.disabled=false;this.value="";this.textContent="";this.attributes={};
    this.classList={
      add:(...xs)=>{for(const x of xs)if(!this.className.split(/\s+/).includes(x))this.className+=" "+x;},
      remove:(...xs)=>{this.className=this.className.split(/\s+/).filter(x=>!xs.includes(x)).join(" ");},
      toggle:(x,force)=>{
        const has=this.className.split(/\s+/).includes(x);
        const next=force===undefined?!has:!!force;
        this.classList.remove(x);if(next)this.classList.add(x);
        return next;
      }
    };
  }
  addEventListener(name,fn){(this.listeners[name]??=[]).push(fn)}
  async click(){for(const fn of this.listeners.click||[])await fn()}
  append(...children){this.children.push(...children)}
  appendChild(child){this.children.push(child);return child}
  replaceChildren(...children){this.children=[...children]}
  setAttribute(name,value){this.attributes[name]=value}
}
const els=Object.fromEntries(htmlIds.map(id=>[id,new El()]));
const sizes=["small","normal","large"].map(size=>{const e=new El();e.dataset.readingSize=size;return e;});
const document={
 readyState:"complete",body:new El(),documentElement:new El(),
 getElementById:id=>els[id]||null,
 createElement:()=>new El(),
 querySelectorAll:selector=>selector===".reading-size-btn"?sizes:[]
};
const memory={};
const localStorage={getItem:k=>memory[k]??null,setItem:(k,v)=>{memory[k]=v}};
const requestPaths=[];
async function fetch(url){
  requestPaths.push(url);
  const full=path.resolve(root,url);
  if(!full.startsWith(root+path.sep))return {ok:false,status:403};
  if(!fs.existsSync(full))return {ok:false,status:404};
  return {ok:true,json:async()=>JSON.parse(fs.readFileSync(full,"utf8"))};
}
const window={AutomotiveQuizUtils:utils,scrollTo(){},matchMedia:()=>({matches:false}),addEventListener(){},confirm:()=>true};
(async()=>{
  vm.runInNewContext(src,{window,document,localStorage,fetch,setInterval:()=>1,clearInterval(){}});
  await new Promise(resolve=>setImmediate(resolve));
  assert.equal(els.bankLoadStatus.textContent.includes("112문항"),true,"JSON auto-load status");
  assert.equal(els.subjectGrid.children.length,4);
  assert.equal(els.subjectGrid.children[0].children[0].children[1].textContent,"28문항");
  assert.equal(els.trackExpected.attributes["aria-selected"],"true");
  assert.deepEqual(requestPaths,[
    "data/manifest.json",
    "data/expected/engine.json",
    "data/expected/chassis.json",
    "data/expected/electrical.json",
    "data/expected/eco.json",
    "data/demo.json",
    "data/concept.json"
  ]);
  await els.subjectGrid.children[0].children[1].children[0].click();
  assert.equal(els.answerChoices.children.length,4);
  assert.equal(els.quizAuditInfo.textContent.includes("편집 검토 단계"),true);
  for(let i=0;i<10;i++){
    await els.answerChoices.children[0].click();
    await els.nextBtn.click();
  }
  assert.ok(els.resultScore.textContent.includes("/ 10문제"));
  assert.equal(els.resultGrid.children.length,10);
  await els.resultHomeBtn.click();
  await els.bankEntryBtn.click();
  assert.equal(els.browseList.children.length,10,"10 public JSON cards per page");
  assert.equal(els.browseMeta.textContent,"전체 112문항");
  await els.homeBtn.click();
  await els.examEntryBtn.click();
  assert.equal(els.expectedExamBtn.disabled,false,"expanded expected bank should be connected");
  assert.equal(els.approvedExamBtn.disabled,true,"unapproved past drafts must remain disabled");
  await els.expectedExamBtn.click();
  assert.equal(els.quizProgress.textContent,"1 / 80");
  assert.ok(els.quizSource.textContent.includes("120:00"),"full exam must be 120 minutes");
  const expected=['engine','chassis','electrical','eco'].flatMap(subject=>
    JSON.parse(fs.readFileSync(path.join(root,"data/expected",subject+".json"),"utf8")));
  const questionsByText=new Map(expected.map(q=>[q.question,q]));
  assert.equal(questionsByText.size,112);
  const seenSubjects={engine:0,chassis:0,electrical:0,eco:0};
  for(let i=0;i<80;i++){
    const q=questionsByText.get(els.questionText.textContent);
    assert.ok(q,"question selected from the 112-question expected bank");
    seenSubjects[q.subject]++;
    const correct=q.choices[q.answer-1];
    const node=els.answerChoices.children.find(el=>el.children[1].textContent===correct);
    assert.ok(node,"displayed choice was reshuffled but correct originalIndex retained");
    await node.click();
    if(i===0) {
      await els.nextBtn.click();
      assert.equal(els.quizProgress.textContent,"2 / 80");
      await els.previousBtn.click();
      assert.equal(els.quizProgress.textContent,"1 / 80");
    }
    await els.nextBtn.click();
  }
  assert.deepEqual(seenSubjects,{engine:20,chassis:20,electrical:20,eco:20});
  assert.ok(els.resultScore.textContent.includes("80 / 80문제"),"full exam score");
  assert.ok(els.resultStats.children.some(x=>x.textContent.includes("학습용 합격 기준 충족")),"pass rule");
  assert.equal(els.resultGrid.children.length,80);
  assert.equal(els.resultStats.children.filter(x=>x.className==="exam-subject-score").length,4);
  await els.retryAllBtn.click();
  assert.ok(els.quizSource.textContent.includes("120:00"),"retry keeps full exam duration");
  for(let i=0;i<80;i++) await els.nextBtn.click();
  assert.ok(els.resultScore.textContent.includes("0 / 80문제"),"unanswered counted incorrect");
  assert.ok(els.resultStats.children.some(x=>x.textContent.includes("학습용 합격 기준 미달")),"fail rule");
  assert.equal(els.resultGrid.children.length,80);
  await els.resultHomeBtn.click();
  await els.examEntryBtn.click();await els.expectedExamBtn.click();
  const first=els.questionText.textContent,firstChoices=els.answerChoices.children.map(x=>x.children[1].textContent);
  await els.answerChoices.children[2].click();
  assert.ok(els.quizSource.textContent.includes("남은 시간"));
  await els.nextBtn.click();
  const key="automotiveQuizActiveExamV1",snapshot=JSON.parse(memory[key]);
  assert.equal(snapshot.index,1);assert.equal(snapshot.choices[0],3);
  await els.homeBtn.click();assert.equal(els.resumeExamBtn.disabled,false);
  await els.resumeExamBtn.click();assert.equal(els.quizProgress.textContent,"2 / 80");
  await els.previousBtn.click();assert.equal(els.questionText.textContent,first);
  assert.deepEqual(els.answerChoices.children.map(x=>x.children[1].textContent),firstChoices);
  assert.ok(els.answerChoices.children[2].className.includes("selected"));
  assert.equal(JSON.parse(memory[key]).examDeadline,snapshot.examDeadline);
  await els.homeBtn.click();snapshot.examDeadline=Date.now()-1000;memory[key]=JSON.stringify(snapshot);
  await els.resumeExamBtn.click();assert.ok(els.resultScore.textContent.includes("/ 80문제"));
  assert.equal(JSON.parse(memory[key]),null,"expired exam is graded and cleared");
  const historyKey="automotiveQuizHistoryV1";
  const history=()=>JSON.parse(memory[historyKey]);
  const count=()=>history().records.reduce((n,x)=>n+x.correct+x.wrong+x.unanswered,0);
  assert.equal(count(),250,"10 practice + three submitted exams counted once");
  assert.equal(history().records.reduce((n,x)=>n+x.unanswered,0),159);
  await els.resultHomeBtn.click();await els.wrongEntryBtn.click();
  assert.ok(els.wrongSummary.textContent.includes("누적 250회"));
  const firstCard=els.wrongList.children[0];
  await firstCard.click();
  const target=questionsByText.get(els.questionText.textContent);
  assert.ok(target);
  const rowBefore=history().records.find(x=>x.id===target.id);
  await els.answerChoices.children.find(x=>x.children[1].textContent!==target.choices[target.answer-1]).click();
  await els.reviewBackBtn.click();
  assert.equal(history().records.find(x=>x.id===target.id).wrong,rowBefore.wrong+1);
  await els.wrongList.children.find(x=>x.children[1]?.textContent===target.question).click();
  const review=questionsByText.get(els.questionText.textContent);
  assert.equal(review.id,target.id);
  await els.answerChoices.children.find(x=>x.children[1].textContent===target.choices[target.answer-1]).click();
  await els.reviewBackBtn.click();
  assert.equal(history().records.find(x=>x.id===target.id).last,"correct");
  assert.ok(!els.wrongList.children.some(x=>x.children[1]?.textContent===target.question));
  await els.wrongScopes.children[1].click();
  assert.ok(els.wrongList.children.some(x=>x.children[1]?.textContent===target.question));
  assert.equal(count(),252);
  const clean=history(),bad={...clean.records[0],correct:-1,updatedAt:Date.now()+1000};
  memory[historyKey]=JSON.stringify({version:1,records:[...clean.records,bad,clean.records[0],null]});
  await els.wrongEntryBtn.click();assert.ok(els.wrongSummary.textContent.includes("누적 252회"),"invalid and duplicate rows excluded");
  memory[historyKey]=JSON.stringify(clean);
  // Existing releases retained only the last result. Import it exactly once.
  delete memory[historyKey];
  const oldResult=JSON.parse(memory.automotiveQuizLastSessionV1);
  vm.runInNewContext(src,{window,document,localStorage,fetch,setInterval:()=>1,clearInterval(){}});
  await new Promise(resolve=>setImmediate(resolve));
  assert.equal(count(),80);
  const imported=history();
  assert.equal(imported.records.reduce((n,x)=>n+x.unanswered,0),79);
  vm.runInNewContext(src,{window,document,localStorage,fetch,setInterval:()=>1,clearInterval(){}});
  await new Promise(resolve=>setImmediate(resolve));
  assert.deepEqual(history(),imported,"legacy import must not double count");
  assert.equal(oldResult.items.length,80);

  console.log("PASS: cumulative wrong history, submitted exam blanks, repeat errors, resolved filter");
  console.log("PASS: exam resume, order, answers, deadline, expiry");
  console.log("PASS: JSON auto-fetch, shuffle/remap, 80-question 4-subject exam, 120min timer, back navigation, per-subject pass/fail, unanswered.");

})().catch(error=>{console.error(error);process.exitCode=1;});
