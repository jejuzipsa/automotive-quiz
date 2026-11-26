(()=>{
  "use strict";
  const $=id=>document.getElementById(id),make=(tag,cls,text)=>{const e=document.createElement(tag);if(cls)e.className=cls;if(text!==undefined)e.textContent=text;return e};
  const read=(k,d)=>{try{return JSON.parse(localStorage.getItem(k)||"null")??d}catch{return d}};
  const save=(k,v)=>{try{localStorage.setItem(k,JSON.stringify(v))}catch{}};
  const posKey="automotiveHandNoteProgressV1",themeKey="automotiveQuizThemeV1",sizeKey="automotiveQuizReadingSizeV1";
  const saved=read(posKey,{});let positions=saved&&typeof saved==="object"&&!Array.isArray(saved)?saved:{};
  let notes;
  try{notes=window.AutomotiveHandNote.buildNotes(window.CORE_WORD_CARD_BANK)}catch(e){$("noteTotal").textContent="학습 자료를 불러오지 못했어. 새로고침해 줘.";return}
  let current=null,index=0;
  function setTheme(theme,persist=false){document.documentElement.dataset.theme=theme;$("noteTheme").textContent=theme==="dark"?"☀":"☾";$("noteTheme").setAttribute("aria-label",theme==="dark"?"라이트모드 켜기":"다크모드 켜기");document.querySelector('meta[name="theme-color"]').content=theme==="dark"?"#101b19":"#f4f8f7";if(persist)save(themeKey,theme)}
  setTheme(document.documentElement.dataset.theme==="dark"?"dark":"light");$("noteTheme").onclick=()=>setTheme(document.documentElement.dataset.theme==="dark"?"light":"dark",true);
  function size(value,persist=false){if(!["small","normal","large"].includes(value))value="normal";document.body.dataset.readingSize=value;document.querySelectorAll("[data-size]").forEach(b=>b.setAttribute("aria-pressed",String(b.dataset.size===value)));if(persist)save(sizeKey,value)}
  size(read(sizeKey,"normal"));document.querySelectorAll("[data-size]").forEach(b=>b.onclick=()=>size(b.dataset.size,true));
  const lastIndex=s=>Math.max(0,s.pages.findIndex(p=>p.id===positions[s.code]));
  function home(){
    hideSeekPreview();current=null;$("noteReader").hidden=true;$("noteHome").hidden=false;
    const list=$("noteSubjects");list.replaceChildren();
    for(const s of notes){
      const btn=make("button","entry study-note-entry");btn.type="button";btn.dataset.subject=s.code;
      const img=make("img");img.src="../assets/hand-note-icon.png";img.alt="";img.setAttribute("aria-hidden","true");
      const label=make("div");const desc=s.parts.length+"개 PART · "+s.pages.length+"개 POINT"+(positions[s.code]?" · 이어 읽기 "+(lastIndex(s)+1)+"/"+s.pages.length:"");
      label.append(make("strong","",s.name),make("p","",desc));btn.append(img,label,make("span","arrow","›"));btn.onclick=()=>open(s);list.append(btn);
    }
    $("noteTotal").textContent="총 "+notes.reduce((n,s)=>n+s.parts.length,0)+"개 PART · "+notes.reduce((n,s)=>n+s.pages.length,0)+"페이지 · "+notes.reduce((n,s)=>n+s.conceptCount,0)+"개 핵심 개념";
  }
  function open(s){current=s;index=lastIndex(s);$("noteHome").hidden=true;$("noteReader").hidden=false;$("readerTitle").textContent=s.name;$("notePart").replaceChildren(...s.parts.map(p=>{const o=make("option","",String(p.number).padStart(2,"0")+" · "+p.title);o.value=p.id;return o}));render(true)}
  function render(scroll=false){
    if(!current)return;
    index=Math.max(0,Math.min(current.pages.length-1,index));const p=current.pages[index],part=current.parts.find(t=>t.id===p.partId);
    $("notePart").value=part.id;
    $("notePoint").replaceChildren(...current.pages.slice(part.start,part.start+part.count).map((q,i)=>{const o=make("option","",String(q.pointNumber).padStart(2,"0")+" · "+q.title);o.value=String(part.start+i);return o}));$("notePoint").value=String(index);
    $("partLabel").textContent="PART "+String(p.partNumber).padStart(2,"0")+" · "+p.partTitle+" / POINT "+String(p.pointNumber).padStart(2,"0");
    $("pointTitle").textContent=p.points.map(t=>t.title).join(" · ");
    const points=$("notePoints");points.replaceChildren();
    for(const t of p.points){
      const block=make("section","point-block");block.dataset.cardId=t.id;block.append(make("h3","",t.title));
      const ul=make("ul");for(const line of t.lines)ul.append(make("li","",line));block.append(ul);
      if(t.formula){const f=make("div","formula");f.append(make("b","","핵심 공식"),document.createTextNode(t.formula));block.append(f)}
      const diagram=window.AutomotiveNoteDiagrams?.byId[t.id];
      if(diagram){
        const figure=make("figure","note-diagram");
        figure.dataset.diagramId=diagram.id;
        const caption=make("figcaption","",diagram.title);
        const graphic=make("div","diagram-graphic");
        graphic.setAttribute("role","img");graphic.setAttribute("aria-label",diagram.description);
        graphic.innerHTML=diagram.markup; // authored, static local SVG only
        figure.append(caption,graphic,make("p","diagram-description",diagram.description));
        const credit=make("p","diagram-credit","시험 학습용 개념도 · 실제 차량 정비 도면 아님");
        if(diagram.source){const a=make("a","","참고 자료");a.href=diagram.source;a.target="_blank";a.rel="noopener noreferrer";credit.append(document.createTextNode(" · "),a)}
        figure.append(credit);block.append(figure);
      }
      points.append(block);
    }
    $("noteSourceIds").textContent=p.refs.join(" · ");$("noteSources").open=false;
    $("noteProgress").textContent=(index+1)+" / "+current.pages.length+" 페이지";$("noteRange").textContent=(index+1)+" / "+current.pages.length;
    syncSeek();$("notePrev").disabled=index===0;$("noteNext").disabled=index===current.pages.length-1;
    positions[current.code]=p.id;save(posKey,positions);
    if(scroll)window.scrollTo(0,0);
  }
  const seek=$("noteSeek"),seekWrap=$("noteSeekWrap"),preview=$("noteSeekPreview");
  let seekPointer=null;
  const clamp=(n,min,max)=>Math.min(max,Math.max(min,n));
  const pageLabel=n=>{const p=current.pages[n-1];return n+" / "+current.pages.length+" · PART "+String(p.partNumber).padStart(2,"0")+" "+p.partTitle+" · POINT "+String(p.pointNumber).padStart(2,"0")};
  const pageTitle=n=>current.pages[n-1].points.map(t=>t.title).join(" · ");
  function paintSeek(n){
    const total=current.pages.length,ratio=total>1?(n-1)/(total-1):0;
    seek.style.setProperty("--seek-fill",(ratio*100)+"%");
    seek.setAttribute("aria-valuetext",pageLabel(n)+" · "+pageTitle(n));
  }
  function syncSeek(){
    seek.max=String(current.pages.length);seek.value=String(index+1);seek.disabled=current.pages.length<=1;paintSeek(index+1);
  }
  function hideSeekPreview(){preview.hidden=true;seekPointer=null}
  function positionForPage(n){
    const rect=seek.getBoundingClientRect(),thumb=20;
    return rect.left+thumb/2+(rect.width-thumb)*(current.pages.length>1?(n-1)/(current.pages.length-1):0);
  }
  function pageAtX(x){
    const r=seek.getBoundingClientRect();
    return 1+Math.round(clamp((x-r.left-10)/Math.max(1,r.width-20),0,1)*(current.pages.length-1));
  }
  function showSeekPreview(n,x){
    if(!current)return;
    n=clamp(n,1,current.pages.length);
    $("noteSeekPreviewPart").textContent=pageLabel(n);$("noteSeekPreviewTitle").textContent=pageTitle(n);
    preview.hidden=false;
    const r=seekWrap.getBoundingClientRect(),w=preview.offsetWidth;
    preview.style.left=clamp(x-r.left-w/2,0,Math.max(0,r.width-w))+"px";
  }
  seek.addEventListener("pointerdown",e=>{
    if(!current||seek.disabled||e.button!==0||!e.isPrimary)return;
    seekPointer=e.pointerId;seek.focus({preventScroll:true});
    seek.setPointerCapture(e.pointerId);e.preventDefault();
    const n=pageAtX(e.clientX);seek.value=String(n);paintSeek(n);showSeekPreview(n,e.clientX);
  });
  seek.addEventListener("pointermove",e=>{
    if(!current||seek.disabled)return;
    if(seekPointer===e.pointerId){const n=pageAtX(e.clientX);seek.value=String(n);paintSeek(n);showSeekPreview(n,e.clientX);}
    else if(seekPointer===null&&e.pointerType==="mouse"){showSeekPreview(pageAtX(e.clientX),e.clientX);}
  });
  seek.addEventListener("pointerup",e=>{
    if(seekPointer!==e.pointerId||!current)return;
    const n=pageAtX(e.clientX);seekPointer=null;
    if(seek.hasPointerCapture(e.pointerId))seek.releasePointerCapture(e.pointerId);
    index=n-1;render(false);
    if(e.pointerType==="mouse")showSeekPreview(n,e.clientX);else hideSeekPreview();
  });
  seek.addEventListener("pointercancel",()=>{if(current)syncSeek();hideSeekPreview()});
  seek.addEventListener("lostpointercapture",()=>{if(seekPointer!==null){if(current)syncSeek();hideSeekPreview()}});
  seek.addEventListener("pointerleave",()=>{if(seekPointer===null)preview.hidden=true});
  seek.addEventListener("input",()=>{if(!current)return;const n=Number(seek.value);paintSeek(n);showSeekPreview(n,positionForPage(n));});
  seek.addEventListener("change",()=>{if(!current||seekPointer!==null)return;index=Number(seek.value)-1;render(false);showSeekPreview(index+1,positionForPage(index+1));});
  seek.addEventListener("blur",()=>{if(seekPointer===null)preview.hidden=true});
  window.addEventListener("resize",()=>{if(seekPointer===null)preview.hidden=true},{passive:true});
  function move(n){if(!current)return;const next=index+n;if(next<0||next>=current.pages.length)return;index=next;render(true)}
  $("noteBack").onclick=()=>{home();window.scrollTo(0,0)};
  $("notePrev").onclick=()=>move(-1);$("noteNext").onclick=()=>move(1);
  $("notePart").onchange=()=>{if(!current)return;const p=current.parts.find(p=>p.id===$("notePart").value);if(p){index=p.start;render(true)}};
  $("notePoint").onchange=()=>{if(current){index=Number($("notePoint").value);render(true)}};
  document.addEventListener("keydown",e=>{if(!current||e.altKey||e.ctrlKey||e.metaKey||e.shiftKey||["INPUT","SELECT","BUTTON","TEXTAREA","SUMMARY"].includes(e.target.tagName))return;if(e.key==="ArrowLeft"||e.key==="ArrowRight"){e.preventDefault();move(e.key==="ArrowLeft"?-1:1)}});
  let start=null;const article=$("notePage");article.addEventListener("touchstart",e=>{if(e.touches.length===1){const t=e.touches[0];start={x:t.clientX,y:t.clientY}}else start=null},{passive:true});
  article.addEventListener("touchcancel",()=>{start=null},{passive:true});
  article.addEventListener("touchend",e=>{if(!start||!e.changedTouches.length)return;const t=e.changedTouches[0],dx=t.clientX-start.x,dy=t.clientY-start.y;start=null;if(Math.abs(dx)>65&&Math.abs(dx)>Math.abs(dy)*1.5&&!(window.getSelection()?.toString()))move(dx<0?1:-1)},{passive:true});
  home();
})();
