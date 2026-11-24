"use strict";
const fs=require("node:fs"),path=require("node:path"),assert=require("node:assert/strict");
const root=path.resolve(__dirname,".."),read=p=>JSON.parse(fs.readFileSync(path.join(root,p),"utf8"));
const qa=read("data/qa/technical-qa66-practice-selection.json");
const subjects=["engine","chassis","electrical","eco"];
const pub=subjects.flatMap(s=>read("data/expected/"+s+".json"));
assert.equal(pub.length,112);assert.equal(qa.items.length,12);
assert.equal(new Set(qa.items.map(q=>q.source_draft_id)).size,12);
assert.equal(qa.items.filter(q=>q.verification==="direct_web_text_checked").length,7);
assert.equal(qa.items.filter(q=>q.verification==="explicit_definition_and_arithmetic").length,5);
for(const s of subjects){assert.equal(pub.filter(q=>q.subject===s).length,28);assert.equal(pub.filter(q=>q.subject===s&&q.authoring_batch==="QA66_current_revision_based_original_practice").length,3);}
for(const x of qa.items){const p=pub.find(q=>q.id===x.id);assert.ok(p);for(const key of ["question","choices","answer","explanation"])assert.deepEqual(p[key],x[key]);assert.equal(p.origin,"original_practice");assert.equal(p.technical_answer_status,"model_checked_not_independently_approved");assert.equal(x.source_draft_promoted,false);assert.equal(x.independent_expert_approved,false);assert.equal(read(x.revision_ledger).items.find(y=>y.id===x.source_draft_id).publishable,false);const [,r,s,n]=x.source_draft_id.match(/^auto-made-r(\d+)-s(\d+)-q(\d+)$/);const raw=read("data/past/drafts/round"+r+"/"+subjects[Number(s)-1]+".json")[Number(n)-1];assert.equal(raw.id,x.source_draft_id);assert.equal(raw.publishable,false);assert.notEqual(raw.subject_classification_review?.status,"hold_do_not_publish");}
assert.equal(qa.qnet.hwp_body_opened,false);
console.log("PASS QA66: 12 traceable original practice variants, 7 direct source checks, 5 defined calculations; all draft gates preserved.");
