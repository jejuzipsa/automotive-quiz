"use strict";
const assert=require("node:assert/strict"),fs=require("node:fs"),path=require("node:path"),vm=require("node:vm");
const root=path.resolve(__dirname,".."),read=p=>JSON.parse(fs.readFileSync(path.join(root,p),"utf8"));
const ctx={window:{}};vm.runInNewContext(fs.readFileSync(path.join(root,"core-cards/data.js"),"utf8"),ctx);
new vm.Script(fs.readFileSync(path.join(root,"core-cards/cards.js"),"utf8"));
const bank=ctx.window.CORE_WORD_CARD_BANK,counts={"engine":105,"chassis":88,"electrical":97,"eco":96};
const sources=new Map([...read("data/concept.json"),...Object.keys(counts).flatMap(s=>read("data/expected/"+s+".json"))].map(q=>[q.id,q]));
assert.equal(bank.cards.length,386);assert.equal(new Set(bank.cards.map(c=>c.id)).size,bank.cards.length);
assert.equal(bank.cards.filter(c=>c.formula).length,49);
assert.equal(new Set(bank.cards.flatMap(c=>c.sourceQuestionIds)).size,618);
for(const [s,n] of Object.entries(counts)){
 const rows=bank.cards.filter(c=>c.subject===s);assert.equal(rows.length,n);assert.equal(new Set(rows.map(c=>c.title)).size,n);
 rows.forEach((c,i)=>{assert.equal(c.order,i+1);assert.ok(c.title&&c.category&&c.bullets.length&&c.sourceQuestionIds.length);assert.ok(c.sourceQuestionIds.every(id=>sources.get(id)?.subject===s));
 for(const id of c.sourceQuestionIds)assert.ok(c.bullets.includes(sources.get(id).explanation.trim()),"source explanation missing "+id);
 if(c.type==="formula")assert.ok(c.formula);
 });
}
console.log("PASS automotive core cards "+bank.cards.length+" source-linked cards");
