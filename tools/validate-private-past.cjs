"use strict";
const fs=require("node:fs"),path=require("node:path"),assert=require("node:assert/strict");
const manifest=require("../data/past/archive-manifest.json");
const dir=process.argv[2];
if(!dir){console.error("Usage: node tools/validate-private-past.cjs <local archive folder>");process.exit(2)}
let total=0,missing=0,incomplete=0;
for(const r of manifest.rounds){
 const file=path.join(dir,r.private_json_filename);
 if(!fs.existsSync(file)){console.log("MISSING",r.exam_date);missing++;continue}
 const b=JSON.parse(fs.readFileSync(file,"utf8"));
 assert.equal(b.exam_date,r.exam_date);assert.deepEqual(b.round_numbers,r.round_numbers);
 assert.ok(b.source?.filename&&/^[a-f0-9]{64}$/.test(b.source.sha256),"source fingerprint");
 assert.ok(["unverified","permission_confirmed"].includes(b.source.rights_status));
 assert.ok(Array.isArray(b.questions)&&b.questions.length<=80);
 const numbers=new Set();let unresolved=0;
 for(const q of b.questions){
  assert.ok(Number.isInteger(q.question_number)&&q.question_number>=1&&q.question_number<=80);
  assert.equal(q.id,r.id+"-q"+String(q.question_number).padStart(2,"0"));
  assert.ok(!numbers.has(q.question_number),"duplicate "+q.id);numbers.add(q.question_number);
  assert.ok(manifest.subjects.some(s=>s.code===q.original_subject),"unknown original subject");
  assert.ok(typeof q.question==="string"&&q.question.trim());
  assert.ok(Array.isArray(q.choices)&&q.choices.length===4&&q.choices.every(x=>typeof x==="string"));
  assert.ok(q.answer===null||(Number.isInteger(q.answer)&&q.answer>=1&&q.answer<=4));
  assert.ok(q.explanation===null||typeof q.explanation==="string");
  assert.ok(Array.isArray(q.assets));
  assert.ok(q.source_page===null||(Number.isInteger(q.source_page)&&q.source_page>=1));
  assert.ok(["pending","source_compared","needs_review"].includes(q.transcription_status));
  for(const a of q.assets){
   assert.ok(["question","choice1","choice2","choice3","choice4","explanation"].includes(a.role));
   assert.ok(typeof a.path==="string"&&a.path&&!path.isAbsolute(a.path)&&!a.path.split(/[\\/]/).includes("..")&&!/^[a-z]+:/i.test(a.path),"asset must be local");
   assert.ok(fs.existsSync(path.join(dir,a.path)),"missing asset "+a.path);
  }
  if(q.answer===null||!q.explanation?.trim()||q.transcription_status!=="source_compared")unresolved++;
 }
 total+=b.questions.length;
 if(b.questions.length!==80||unresolved)incomplete++;
 console.log(r.exam_date,b.questions.length+"/80","unresolved:",unresolved);
}
console.log("Archived:",total,"/640; missing rounds:",missing,"incomplete rounds:",incomplete);
if(missing||incomplete)process.exitCode=1;
