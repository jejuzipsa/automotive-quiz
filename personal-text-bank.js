/* Local, text-only QA8 bank. Nothing is uploaded to GitHub or a remote server. */
(function (root) {
  "use strict";
  const DB_NAME = "automotive-quiz-personal-qa8-text-v1";
  const STORE = "banks";
  const KEY = "personal-text-bank";
  const MAX_IMPORT_BYTES = 15 * 1024 * 1024;
  const ALLOWED_SUBJECTS = new Set(["engine","chassis","electrical","eco"]);
  const ALLOWED_STATUS = new Set(["source_compared","ocr_unverified","question_choices_only_compared"]);
  const ID_PATTERN = /^auto-r(0[1-9])-s(0[1-4])-q(0[1-9]|1[0-9]|20)$/;
  let fallbackCache = null;

  function validate(payload) {
    if (!payload || typeof payload !== "object" || !Array.isArray(payload.questions))
      throw new Error("QA8 문제은행 형식이 아니야.");
    if (payload.questions.length !== 720 || !payload.manifest || payload.manifest.version !== "QA8-TEXT-DRAFT")
      throw new Error("현재는 720문항 QA8-TEXT-DRAFT만 불러올 수 있어.");
    const ids = new Set();
    const counts = Object.create(null);
    const entries = [];
    for (const q of payload.questions) {
      const match = typeof q?.id === "string" ? q.id.match(ID_PATTERN) : null;
      if (!match || ids.has(q.id) || q.track !== "expected" ||
          !ALLOWED_SUBJECTS.has(q.subject) ||
          !Number.isInteger(q.round) || q.round !== Number(match[1]) ||
          !Number.isInteger(q.question_number) || q.question_number !== Number(match[3]) ||
          !Array.isArray(q.choices) || q.choices.length !== 4 ||
          !q.choices.every(x => typeof x === "string" && x.trim().length > 0) ||
          typeof q.question !== "string" || !q.question.trim() ||
          typeof q.explanation !== "string" || !q.explanation.trim() ||
          !Number.isInteger(q.answer) || q.answer < 1 || q.answer > 4 ||
          !ALLOWED_STATUS.has(q.transcription_status) ||
          q.publishable !== false) {
        throw new Error("문항 형식 또는 검수 상태 오류: " + (q?.id || "알 수 없음"));
      }
      const subjectIndex = ["engine","chassis","electrical","eco"].indexOf(q.subject) + 1;
      if (Number(match[2]) !== subjectIndex)
        throw new Error("문항 ID와 과목이 일치하지 않아: " + q.id);
      ids.add(q.id);
      counts[q.subject] = (counts[q.subject] || 0) + 1;
      entries.push({
        id:q.id,track:"expected",subject:q.subject,round:q.round,
        question_number:q.question_number,
        question:q.question,choices:[...q.choices],answer:q.answer,
        explanation:q.explanation,
        transcription_status:q.transcription_status,
        technical_answer_status:"unreviewed",
        review_status:"needs_review",publishable:false,
        flags:Array.isArray(q.flags)?q.flags.filter(x=>typeof x==="string").slice(0,30):[]
      });
    }
    for (const name of ALLOWED_SUBJECTS) if(counts[name]!==180)
      throw new Error(name+" 과목은 180문항이어야 해.");
    return {
      version:"QA8-TEXT-DRAFT",
      imported_at:new Date().toISOString(),
      total:entries.length,
      counts,
      reviewed:entries.filter(q=>q.transcription_status==="source_compared").length,
      unreviewed:entries.filter(q=>q.transcription_status!=="source_compared").length,
      questions:entries
    };
  }

  function openDb() {
    return new Promise((resolve,reject)=>{
      if (!root.indexedDB) return reject(new Error("이 브라우저의 개인 저장소(IndexedDB)를 사용할 수 없어."));
      const request=root.indexedDB.open(DB_NAME,1);
      request.onupgradeneeded=()=>{
        const db=request.result;
        if(!db.objectStoreNames.contains(STORE))db.createObjectStore(STORE);
      };
      request.onsuccess=()=>resolve(request.result);
      request.onerror=()=>reject(request.error||new Error("개인 저장소를 열지 못했어."));
      request.onblocked=()=>reject(new Error("다른 탭에서 저장소를 사용 중이야."));
    });
  }
  async function load() {
    try {
      const db=await openDb();
      return await new Promise((resolve,reject)=>{
        const tr=db.transaction(STORE,"readonly");
        const req=tr.objectStore(STORE).get(KEY);
        req.onsuccess=()=>resolve(req.result||null);
        req.onerror=()=>reject(req.error||new Error("저장된 문제은행을 읽을 수 없어."));
        tr.oncomplete=()=>db.close();
        tr.onerror=()=>db.close();
      });
    } catch (error) {
      if (fallbackCache) return fallbackCache;
      throw error;
    }
  }
  async function save(bank) {
    try {
      const db=await openDb();
      await new Promise((resolve,reject)=>{
        const tr=db.transaction(STORE,"readwrite");
        tr.objectStore(STORE).put(bank,KEY);
        tr.oncomplete=()=>{db.close();resolve();};
        tr.onerror=()=>{db.close();reject(tr.error||new Error("문제은행 저장 실패"));};
        tr.onabort=()=>{db.close();reject(tr.error||new Error("저장 작업이 취소됐어."));};
      });
      fallbackCache=null;
      return {persistent:true};
    } catch(error) {
      fallbackCache=bank;
      return {persistent:false,reason:error?.message||"브라우저 저장 실패"};
    }
  }
  async function clear() {
    fallbackCache=null;
    const db=await openDb();
    return new Promise((resolve,reject)=>{
      const tr=db.transaction(STORE,"readwrite");
      tr.objectStore(STORE).delete(KEY);
      tr.oncomplete=()=>{db.close();resolve();};
      tr.onerror=()=>{db.close();reject(tr.error||new Error("삭제 실패"));};
    });
  }
  async function parseFile(file) {
    if (!file || typeof file.name !== "string" || file.size > MAX_IMPORT_BYTES || file.size < 100)
      throw new Error("15MB 이하의 QA8 ZIP 또는 JSON 파일을 선택해 줘.");
    let content;
    if (file.name.toLowerCase().endsWith(".json")) {
      content=await file.text();
    } else if (file.name.toLowerCase().endsWith(".zip")) {
      if (!root.JSZip) throw new Error("ZIP 읽기 모듈이 로드되지 않았어.");
      const zip=await root.JSZip.loadAsync(file,{checkCRC32:true});
      const entry=zip.file("bank.json");
      if (!entry) throw new Error("QA8 ZIP 안에 bank.json이 없어.");
      if (entry._data?.uncompressedSize > 9 * 1024 * 1024)
        throw new Error("문제은행 JSON이 너무 커.");
      content=await entry.async("string");
    } else throw new Error("QA8 .json 또는 .zip 파일만 지원해.");
    if (content.length > 10 * 1024 * 1024) throw new Error("문제은행 파일이 너무 커.");
    const parsed=JSON.parse(content);
    return validate(parsed);
  }
  root.AutomotivePersonalBank=Object.freeze({validate,load,save,clear,parseFile});
  if (typeof module === "object" && module.exports)
    module.exports={validate,load,save,clear,parseFile};
})(typeof globalThis!=="undefined"?globalThis:window);
