"use strict";
const fs=require("node:fs");
const path=require("node:path");
const assert=require("node:assert/strict");
const vm=require("node:vm");
const JSZip=require("../vendor/jszip.min.js");
const root=path.resolve(__dirname,"..");
const html=fs.readFileSync(path.join(root,"private.html"),"utf8");
const js=fs.readFileSync(path.join(root,"private-bank.js"),"utf8");
new vm.Script(js,{filename:"private-bank.js"});

const ids=new Set([...html.matchAll(/\bid="([^"]+)"/g)].map(m=>m[1]));
for(const m of js.matchAll(/\$\("([^"]+)"\)/g))assert(ids.has(m[1]),"missing private.html ID: "+m[1]);
for(const asset of ["private-bank.css","vendor/jszip.min.js","private-bank.js"])assert(fs.existsSync(path.join(root,asset)),asset+" missing");
assert(!html.includes("https://cdn."),"Private importer must use local, not CDN ZIP reader");

class Element {
  constructor(){
    this.children=[];this.listeners={};this.style={};this.textContent="";
    this.value="";this.disabled=false;this.className="";this.src="";
    this.classList={
      toggle:(key,on)=>{
        const old=this.className.split(/\s+/).includes(key);
        const now=on===undefined?!old:!!on;
        this.className=this.className.split(/\s+/).filter(x=>x!==key).join(" ")+(now?" "+key:"");
        return now;
      },
      add:key=>this.classList.toggle(key,true)
    };
  }
  addEventListener(type,fn){(this.listeners[type]??=[]).push(fn)}
  async click(){for(const fn of this.listeners.click??[])await fn()}
  replaceChildren(...els){this.children=[...els]}
  append(...els){this.children.push(...els)}
  appendChild(el){this.children.push(el)}
}
const el={};for(const id of ids)el[id]=new Element();
const document={
  readyState:"complete",
  getElementById:id=>el[id]||null,
  createElement:tag=>new Element()
};
const rows=[];
for(let round=1;round<=9;round++)
for(let subject=1;subject<=4;subject++)
for(let num=1;num<=20;num++){
  const id=`auto-r${String(round).padStart(2,"0")}-s${String(subject).padStart(2,"0")}-q${String(num).padStart(2,"0")}`;
  rows.push({
    id,round,subject_number:subject,question_number:num,
    question_image:`questions/${id}.png`,
    explanation_image:`explanations/${id}.png`,
    answer_from_source_table:1,
    text_transcription:round===1&&subject===1?"manually_compared_to_source_images":"not_started"
  });
}

(async()=>{
  const zip=new JSZip();
  zip.file("bank.json",JSON.stringify(rows));
  zip.file("qa7-summary.json",JSON.stringify({all_questions:720}));
  const png=Uint8Array.from([137,80,78,71,13,10,26,10,1,2,3]);
  for(const q of rows){
    zip.file(q.question_image,png);
    zip.file(q.explanation_image,png);
  }
  const file=await zip.generateAsync({type:"nodebuffer",compression:"DEFLATE"});
  file.name="qa7-test.zip";
  file.size=file.length;
  const context={
    window:{JSZip,scrollTo(){},addEventListener(){}},
    document,Buffer,Blob,
    URL:{createObjectURL:()=>"blob:mock",revokeObjectURL:()=>{}},
    console
  };
  vm.runInNewContext(js,context,{filename:"private-bank.js"});
  await el.privateZipInput.listeners.change[0]({target:{files:[file]}});
  assert(!el.setupView.className.includes("hidden"),"QA7 ZIP should open setup");
  assert(el.bankMeta.textContent.includes("720문항"));
  el.privateSubject.value="1";
  el.privateRound.value="1";
  el.privateCount.value="20";
  el.privateOrder.value="sequential";
  await el.privateStartBtn.click();
  assert.equal(el.privateChoices.children.length,4,"four answer choices");
  for(let i=0;i<20;i++){
    await el.privateChoices.children[1].click();
    if(i!==19)await el.privateNextBtn.click();
  }
  await el.privateNextBtn.click();
  assert(el.privateScore.textContent.includes("0 / 20"),"answer-key grading");
  assert.equal(el.privateResultGrid.children.length,20);
  await el.privateRetryWrongBtn.click();
  assert.equal(el.privateChoices.children.length,4,"wrong-answer retry ready");
  console.log("PASS: real JSZip 720 entry import, 20 questions, answer-key grading and wrong retry.");
})().catch(err=>{console.error(err);process.exitCode=1;});
