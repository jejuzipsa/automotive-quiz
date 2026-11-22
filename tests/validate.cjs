const fs=require("node:fs");
const path=require("node:path");
const vm=require("node:vm");
const assert=require("node:assert/strict");
const root=path.resolve(__dirname,"..");
const html=fs.readFileSync(path.join(root,"index.html"),"utf8");
const app=fs.readFileSync(path.join(root,"app.js"),"utf8");
const seed=fs.readFileSync(path.join(root,"data/questions.js"),"utf8");
new vm.Script(app,{filename:"app.js"});
const sandbox={window:{}};vm.runInNewContext(seed,sandbox,{filename:"data/questions.js"});
const items=Array.from(sandbox.window.AUTO_QUIZ_DATA||[]);
assert.equal(items.length,12,"8 demo + 4 concept samples expected");
assert.equal(items.filter(q=>q.track==="demo").length,8);
assert.equal(items.filter(q=>q.track==="concept").length,4);
const ids=new Set();
for(const q of items){
 assert.ok(q.id&&!ids.has(q.id),`duplicate/missing id: ${q.id}`);
 ids.add(q.id);
 assert.ok(["engine","chassis","electrical","eco"].includes(q.subject));
 assert.ok(Array.isArray(q.choices)&&q.choices.length===4&&q.choices.every(Boolean));
 assert.ok(q.question&&q.explanation);
 assert.ok(Number.isInteger(q.answer)&&q.answer>=1&&q.answer<=4);
}
const htmlIds=new Set([...html.matchAll(/\bid="([^"]+)"/g)].map(x=>x[1]));
const requested=[...app.matchAll(/\$\("([^"]+)"\)/g)].map(x=>x[1]);
for(const id of requested)assert.ok(htmlIds.has(id),`missing element id: ${id}`);
for(const asset of ["styles.css","app.js","data/questions.js"])assert.ok(fs.existsSync(path.join(root,asset)),`missing asset: ${asset}`);
assert.ok(!/출판사.{0,20}문제 본문/.test(seed));
console.log("PASS: JS syntax, 12 sample records, all required DOM IDs and asset paths.");
