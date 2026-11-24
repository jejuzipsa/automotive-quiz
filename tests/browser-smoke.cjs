"use strict";
// Actual Chromium rendering, not the existing mock DOM test.
const { chromium }=require("playwright");
const assert=require("node:assert/strict");
const fs=require("node:fs");
const path=require("node:path");
const root=path.resolve(__dirname,"..");
const base=new URL(process.env.QUIZ_URL||"http://127.0.0.1:8765/");
assert.ok(base.pathname.endsWith("/"),"QUIZ_URL needs trailing slash");
const read=p=>JSON.parse(fs.readFileSync(path.join(root,p),"utf8"));
const manifest=read("data/manifest.json");
const expected=manifest.banks.filter(b=>b.track==="expected").flatMap(b=>read(b.file));
const byText=new Map(expected.map(q=>[q.question,q]));
const out=path.resolve(process.env.SCREENSHOT_DIR||"browser-smoke");
fs.mkdirSync(out,{recursive:true});
const sleep=ms=>new Promise(r=>setTimeout(r,ms));

async function checkDeployedFiles(context){
  // Verify the deployed files match this commit; don't mistake a previous
  // successful deployment for this revision. Retry only for Pages propagation.
  const files=["index.html","app.js","styles.css","quiz-utils.js","data/manifest.json",...manifest.banks.map(b=>b.file)];
  const deadline=Date.now()+Number(process.env.PAGES_WAIT_MS||0);
  let problem;
  do{
    try{
      for(const file of files){
        const url=new URL(file,base);
        url.searchParams.set("qa68",process.env.GITHUB_SHA||"local");
        const response=await context.request.get(url.href,{timeout:15000,headers:{"Cache-Control":"no-cache"}});
        assert.ok(response.ok(),file+" HTTP "+response.status());
        const body=await response.body(), local=fs.readFileSync(path.join(root,file));
        if(file.endsWith(".json"))assert.deepEqual(JSON.parse(body.toString("utf8")),JSON.parse(local.toString("utf8")),file+" version mismatch");
        else assert.ok(body.equals(local),file+" version mismatch");
      }
      console.log("PASS exact served application/data revision: "+base.href);return;
    }catch(e){problem=e;if(Date.now()>=deadline)break;await sleep(10000);}
  }while(Date.now()<deadline);
  throw problem;
}
async function testDevice(browser,name,viewport,mobile){
  const context=await browser.newContext({viewport,isMobile:mobile,hasTouch:mobile,deviceScaleFactor:1,colorScheme:"light"});
  const page=await context.newPage();
  const errors=[],failed=[];
  page.on("pageerror",e=>errors.push(String(e)));
  page.on("requestfailed",r=>{if(r.url().startsWith(base.origin))failed.push(r.url()+" "+r.failure()?.errorText);});
  page.on("response",r=>{if(r.status()>=400&&r.url().startsWith(base.origin))failed.push(r.status()+" "+r.url());});
  const el=id=>page.locator("#"+id);
  const text=async id=>(await el(id).innerText()).trim();
  const visible=async id=>assert.ok(await el(id).isVisible(),id+" not visible");
  const layout=async()=>assert.ok(await page.evaluate(()=>document.documentElement.scrollWidth<=window.innerWidth+1),"horizontal page overflow");
  const currentQuestion=async()=>{const q=byText.get(await text("questionText"));assert.ok(q,"unexpected question");return q;};
  const choose=async(q,correct)=>{
    const answer=q.choices[q.answer-1];
    const target=correct?answer:q.choices.find(x=>x!==answer);
    await el("answerChoices").getByText(target,{exact:true}).click();
  };
  try{
    if(name==="desktop")await checkDeployedFiles(context);
    await page.goto(base.href,{waitUntil:"domcontentloaded"});
    await page.waitForFunction(n=>document.querySelector("#bankLoadStatus")?.textContent.includes(n+"문항"),expected.length);
    await visible("homeView");await layout();
    assert.equal(await el("subjectGrid").locator(".subject-card").count(),4);
    for(const b of manifest.banks.filter(b=>b.track==="expected")){
      const subjectCount=expected.filter(q=>q.subject===b.subject).length;
      assert.equal(subjectCount,b.count);
    }
    await page.screenshot({path:path.join(out,name+"-home.png"),fullPage:true});
    await el("themeToggleBtn").click();
    assert.equal(await page.locator("html").getAttribute("data-theme"),"dark");
    await page.locator('[data-reading-size="large"]').click();
    await page.reload();
    await page.waitForFunction(n=>document.querySelector("#bankLoadStatus")?.textContent.includes(n+"문항"),expected.length);
    assert.equal(await page.locator("html").getAttribute("data-theme"),"dark");
    assert.ok(await page.locator("body").evaluate(b=>b.classList.contains("reading-large")));
    await el("themeToggleBtn").click();
    await page.locator('[data-reading-size="normal"]').click();
    await el("subjectGrid").locator(".subject-card").first().getByRole("button",{name:"10문제",exact:true}).click();
    let firstWrong;
    for(let i=0;i<10;i++){
      await visible("quizView");await layout();
      assert.equal(await text("quizProgress"),(i+1)+" / 10");
      assert.equal(await el("answerChoices").locator(".choice").count(),4);
      const q=await currentQuestion();if(i===0)firstWrong=q.id;
      await choose(q,i!==0);
      await visible("feedback");
      assert.ok((await text("feedback")).includes(q.explanation));
      assert.equal(await el("answerChoices").locator(".choice.correct").count(),1);
      assert.equal(await el("answerChoices").locator(".choice.incorrect").count(),i===0?1:0);
      if(i===0){
        const blue=await el("answerChoices").locator(".choice.correct").evaluate(e=>getComputedStyle(e).backgroundColor);
        const red=await el("answerChoices").locator(".choice.incorrect").evaluate(e=>getComputedStyle(e).backgroundColor);
        assert.notEqual(blue,red);
        await page.screenshot({path:path.join(out,name+"-feedback.png"),fullPage:true});
      }
      await el("nextBtn").click();
    }
    await visible("resultView");assert.match(await text("resultScore"),/9 \/ 10문제/);
    assert.equal(await el("resultGrid").locator(".wrong").count(),1);
    await el("resultGrid").locator(".wrong").click();
    const review=await currentQuestion();assert.equal(review.id,firstWrong);
    await choose(review,true);await visible("reviewBackBtn");assert.ok(!(await el("nextBtn").isVisible()));
    await el("reviewBackBtn").click();await visible("resultView");
    await el("resultHomeBtn").click();await page.reload();
    await page.waitForFunction(n=>document.querySelector("#bankLoadStatus")?.textContent.includes(n+"문항"),expected.length);
    await el("wrongEntryBtn").click();
    assert.equal(await el("wrongList").locator(".bank-question-card").count(),1);
    await el("homeBtn").click();await el("bankEntryBtn").click();
    assert.equal(await text("browseMeta"),"전체 "+expected.length+"문항");
    await el("homeBtn").click();await el("examEntryBtn").click();
    assert.ok(await el("approvedExamBtn").isDisabled());
    await el("expectedExamBtn").click();assert.equal(await text("quizProgress"),"1 / 80");
    assert.match(await text("quizSource"),/남은 시간 (120:00|119:5[0-9])/);
    const counts={engine:0,chassis:0,electrical:0,eco:0},ids=new Set();
    for(let i=0;i<80;i++){
      const q=await currentQuestion();assert.ok(!ids.has(q.id),"duplicate exam question");ids.add(q.id);counts[q.subject]++;
      await choose(q,true);assert.ok(!(await el("feedback").isVisible()));
      if(i===0){
        await el("nextBtn").click();await el("previousBtn").click();
        assert.equal(await text("quizProgress"),"1 / 80");
        assert.equal(await el("answerChoices").locator(".selected").count(),1);
      }
      await el("nextBtn").click();
    }
    assert.deepEqual(counts,{engine:20,chassis:20,electrical:20,eco:20});
    await visible("resultView");assert.match(await text("resultScore"),/80 \/ 80문제/);
    assert.match(await text("resultStats"),/학습용 합격 기준 충족/);
    await layout();await page.screenshot({path:path.join(out,name+"-exam-result.png"),fullPage:true});
    assert.deepEqual(errors,[],"browser JS errors");assert.deepEqual(failed,[],"same-origin resource failures");
    console.log("PASS "+name+" "+viewport.width+"x"+viewport.height+" practice, wrong review, exam, theme, layout");
  }catch(e){await page.screenshot({path:path.join(out,name+"-failure.png"),fullPage:true}).catch(()=>{});throw e;}
  finally{await context.close();}
}
(async()=>{const browser=await chromium.launch({headless:true});try{await testDevice(browser,"desktop",{width:1440,height:900},false);await testDevice(browser,"mobile",{width:390,height:844},true);}finally{await browser.close();}})().catch(e=>{console.error(e);process.exitCode=1;});
