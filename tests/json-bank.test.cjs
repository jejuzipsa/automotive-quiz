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
const window={AutomotiveQuizUtils:utils,scrollTo(){},matchMedia:()=>({matches:false}),addEventListener(){}};
(async()=>{
  vm.runInNewContext(src,{window,document,localStorage,fetch,setInterval:()=>1,clearInterval(){}});
  await new Promise(resolve=>setImmediate(resolve));
  assert.equal(els.bankLoadStatus.textContent.includes("80문항"),true,"JSON auto-load status");
  assert.equal(els.subjectGrid.children.length,4);
  assert.equal(els.subjectGrid.children[0].children[0].children[1].textContent,"20문항");
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
  assert.equal(els.browseMeta.textContent,"전체 80문항");
  console.log("PASS: auto-fetch six subject JSON banks, shuffle/answer mapping, 10-item quiz, result and bank browsing.");
})().catch(error=>{console.error(error);process.exitCode=1;});
