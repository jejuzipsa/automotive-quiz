"use strict";
const fs=require("node:fs");
const vm=require("node:vm");
const path=require("node:path");
const assert=require("node:assert/strict");
const JSZip=require("../vendor/jszip.min.js");
const quiz=require("../quiz-utils.js");
globalThis.JSZip=JSZip;
const bankApi=require("../personal-text-bank.js");

const demo=["engine","chassis","electrical","eco"].flatMap((subject,s)=>
  Array.from({length:9},(_,r)=>Array.from({length:20},(_,i)=>({
    id:`auto-r${String(r+1).padStart(2,"0")}-s${String(s+1).padStart(2,"0")}-q${String(i+1).padStart(2,"0")}`,
    track:"expected",subject,round:r+1,question_number:i+1,
    question:"독립 시험용 문제",choices:["A 정답 후보","B 보기","C 보기","D 보기"],
    answer:(i%4)+1,explanation:"독립적으로 만든 테스트 해설.",
    transcription_status:(r===0&&s===0&&i<20)?"source_compared":"ocr_unverified",
    technical_answer_status:"unreviewed",review_status:"needs_review",publishable:false,flags:[]
  })).flat()
);
const payload={manifest:{version:"QA8-TEXT-DRAFT",total:720},questions:demo};
const normalized=bankApi.validate(payload);
assert.equal(normalized.total,720);
assert.equal(normalized.counts.engine,180);
assert.equal(normalized.counts.chassis,180);
assert.equal(normalized.counts.electrical,180);
assert.equal(normalized.counts.eco,180);
assert.equal(normalized.reviewed,20);
assert.equal(normalized.unreviewed,700);
assert.equal(normalized.questions.filter(q=>q.publishable).length,0);
for(let answer=1;answer<=4;answer++){
  for(let i=0;i<300;i++){
    const order=quiz.shuffleOrder(4);
    assert.deepEqual([...order].sort((a,b)=>a-b),[1,2,3,4]);
    const newNumber=quiz.correctDisplayIndex(order,answer);
    assert(newNumber>=1&&newNumber<=4);
    assert.equal(quiz.originalIndex(order,newNumber),answer);
    assert(quiz.isCorrect(order,newNumber,answer));
    for(let chosen=1;chosen<=4;chosen++)
      assert.equal(quiz.isCorrect(order,chosen,answer),chosen===newNumber);
  }
}
{
 const invalid=structuredClone(payload);
 invalid.questions[0].answer=5;
 assert.throws(()=>bankApi.validate(invalid));
}
{
 const invalid=structuredClone(payload);
 invalid.questions[0].id=invalid.questions[1].id;
 assert.throws(()=>bankApi.validate(invalid));
}
(async ()=>{
 const archive=new JSZip();
 archive.file("bank.json",JSON.stringify(payload));
 const data=await archive.generateAsync({type:"nodebuffer",compression:"DEFLATE"});
 data.name="QA8.zip"; data.size=data.length;
 const imported=await bankApi.parseFile(data);
 assert.equal(imported.total,720);
 assert.equal(imported.questions[0].choices.length,4);
 const root=path.resolve(__dirname,"..");
 const html=fs.readFileSync(path.join(root,"index.html"),"utf8");
 const src=fs.readFileSync(path.join(root,"app.js"),"utf8");
 new vm.Script(src);
 const ids=new Set([...html.matchAll(/\bid="([^"]+)"/g)].map(x=>x[1]));
 for(const match of src.matchAll(/\$\("([^"]+)"\)/g))
   assert(ids.has(match[1]),"missing homepage DOM ID: "+match[1]);
 assert(html.includes('src="personal-text-bank.js?v='));
 assert(html.includes('src="quiz-utils.js?v='));

 class El {
   constructor(){
     this.children=[];this.listeners={};this.className="";this.dataset={};this.style={};
     this.disabled=false;this.value="";this.textContent="";this.attributes={};
     this.classList={
       add:(...xs)=>{for(const x of xs) if(!this.className.split(/\s+/).includes(x))this.className+=" "+x;},
       remove:(...xs)=>{this.className=this.className.split(/\s+/).filter(x=>!xs.includes(x)).join(" ");},
       toggle:(x,forced)=>{
         const has=this.className.split(/\s+/).includes(x);
         const next=forced===undefined?!has:forced;
         this.classList.remove(x);if(next)this.classList.add(x);return next;
       }
     };
   }
   addEventListener(type,fn){(this.listeners[type]??=[]).push(fn)}
   async click(){for(const fn of this.listeners.click||[])await fn()}
   append(...x){this.children.push(...x)}
   appendChild(x){this.children.push(x);return x}
   replaceChildren(...x){this.children=[...x]}
   setAttribute(x,v){this.attributes[x]=v}
 }
 const els={};for(const id of ids)els[id]=new El();
 const sizes=["small","normal","large"].map(x=>{const e=new El();e.dataset.readingSize=x;return e});
 const document={
   readyState:"complete",
   body:new El(),documentElement:new El(),
   getElementById:id=>els[id],
   createElement:tag=>new El(),
   querySelectorAll:selector=>selector===".reading-size-btn"?sizes:[]
 };
 const mem={};
 const localStorage={getItem:k=>mem[k]??null,setItem:(k,v)=>{mem[k]=v}};
 let localContents=imported;
 const helper={
   load:async()=>localContents,
   parseFile:async()=>imported,
   save:async bank=>{localContents=bank;return {persistent:true}},
   clear:async()=>{localContents=null}
 };
 const win={AutomotiveQuizUtils:quiz,AutomotivePersonalBank:helper,scrollTo(){},
   matchMedia:()=>({matches:false}),addEventListener(){}};
 const seed=fs.readFileSync(path.join(root,"data/questions.js"),"utf8");
 vm.runInNewContext(seed,{window:win});
 vm.runInNewContext(src,{window:win,document,localStorage,setInterval:()=>1,clearInterval(){}});
 await new Promise(resolve=>setImmediate(resolve));
 assert.equal(els.subjectGrid.children.length,4);
 assert(els.trackSummary.textContent.includes("720문항"),"expected bank counts should load");
 assert(els.subjectGrid.children[0].children[0].children[1].textContent.includes("180문항"));
 await els.subjectGrid.children[0].children[1].children[0].click();
 assert(els.quizSubject.textContent.includes("예상문제"));
 assert.equal(els.answerChoices.children.length,4);
 assert(els.quizAuditInfo.textContent.includes("QA8"));
 const firstCorrect=els.answerChoices.children.findIndex(btn=>btn.children[1].textContent==="A 정답 후보")+1;
 // Original answer varies per selected question, test comparison with recorded order via shuffled tags.
 for(let i=0;i<10;i++) {
   await els.answerChoices.children[0].click();
   await els.nextBtn.click();
 }
 assert(els.resultScore.textContent.includes("/ 10문제"));
 assert.equal(els.resultGrid.children.length,10);
 console.log("PASS: 720 QA8 ZIP import, 4x180 counts, shuffled text choices, answer mapping and result flow.");
})().catch(error=>{console.error(error);process.exitCode=1;});
