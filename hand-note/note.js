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
    current=null;$("noteReader").hidden=true;$("noteHome").hidden=false;
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
    $("noteProgressFill").style.width=(100*(index+1)/current.pages.length)+"%";$("notePrev").disabled=index===0;$("noteNext").disabled=index===current.pages.length-1;
    positions[current.code]=p.id;save(posKey,positions);
    if(scroll)window.scrollTo(0,0);
  }
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
