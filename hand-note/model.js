(function(root,factory){
  const api=factory();
  if(typeof module==="object"&&module.exports)module.exports=api;
  else root.AutomotiveHandNote=api;
})(typeof window==="undefined"?globalThis:window,function(){
  "use strict";
  // Keep the question-linked card bank as the single source of study text.
  // A POINT is a short topic cluster; a PART is the existing subject category.
  function buildNotes(bank){
    if(!bank||!Array.isArray(bank.subjects)||!Array.isArray(bank.cards))throw Error("학습 자료 형식 오류");
    return bank.subjects.filter(s=>!s.disabled).map(s=>{
      const cards=bank.cards.filter(c=>c.subject===s.code).sort((a,b)=>a.order-b.order);
      const categories=[...new Set(cards.map(c=>c.category))],pages=[],parts=[];
      for(const [i,category] of categories.entries()){
        const part={id:s.code+"-part-"+(i+1),number:i+1,title:category,start:pages.length,count:0};
        let group=[],chars=0;
        const flush=()=>{
          if(!group.length)return;
          const points=group.map(c=>({id:c.id,title:c.title,lines:[...new Set(c.bullets)],formula:c.formula||"",refs:[...new Set(c.sourceQuestionIds||[])]}));
          pages.push({id:group[0].id,partId:part.id,partNumber:part.number,partTitle:category,pointNumber:++part.count,title:points.length===1?points[0].title:points[0].title+" 외 "+(points.length-1)+"개",points,refs:[...new Set(points.flatMap(p=>p.refs))]});
          group=[];chars=0;
        };
        for(const c of cards.filter(c=>c.category===category)){
          const len=c.title.length+c.bullets.join("").length+(c.formula||"").length;
          if(group.length&&(group.length>=4||chars+len>480))flush();
          group.push(c);chars+=len;
        }
        flush();parts.push(part);
      }
      return {code:s.code,name:s.name,parts,pages,conceptCount:cards.length};
    });
  }
  return {buildNotes};
});
