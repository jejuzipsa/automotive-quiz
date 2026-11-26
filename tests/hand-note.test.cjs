"use strict";
const assert=require("node:assert/strict"),fs=require("node:fs"),path=require("node:path"),vm=require("node:vm");
const root=path.resolve(__dirname,".."),ctx={window:{}};
vm.runInNewContext(fs.readFileSync(path.join(root,"core-cards/data.js"),"utf8"),ctx);
const {buildNotes}=require("../hand-note/model.js");
const sourceBank=JSON.parse(JSON.stringify(ctx.window.CORE_WORD_CARD_BANK));
const notes=buildNotes(sourceBank);
const bank=sourceBank.cards;
assert.deepEqual(notes.map(s=>[s.code,s.parts.length,s.pages.length,s.conceptCount]),[["engine",6,29,105],["chassis",5,23,88],["electrical",6,28,97],["eco",6,28,96]]);
const points=notes.flatMap(s=>s.pages.flatMap(p=>p.points));
assert.equal(points.length,386);assert.equal(new Set(points.map(p=>p.id)).size,386);
const byId=new Map(points.map(p=>[p.id,p]));
for(const c of bank){const p=byId.get(c.id);assert.ok(p,c.id);assert.equal(p.title,c.title);assert.equal(JSON.stringify(p.lines),JSON.stringify([...new Set(c.bullets)]));assert.equal(p.formula,c.formula||"");assert.equal(JSON.stringify(p.refs),JSON.stringify([...new Set(c.sourceQuestionIds)]));}
for(const s of notes){for(const p of s.parts){assert.ok(p.count>0);assert.ok(s.pages.slice(p.start,p.start+p.count).every(q=>q.partId===p.id));}assert.equal(new Set(s.pages.map(p=>p.id)).size,s.pages.length);}
new vm.Script(fs.readFileSync(path.join(root,"hand-note/note.js"),"utf8"));
console.log("PASS hand note: 4 subjects, 23 PARTs, 108 pages, 386 source-linked concepts");
