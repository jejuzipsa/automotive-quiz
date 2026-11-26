(() => {
  const bank=window.CORE_WORD_CARD_BANK;
  if(!bank || !Array.isArray(bank.cards)) return;

  const THEME_KEY='automotiveQuizThemeV1';
  const IMPORTANT_KEY='automotiveCoreWordImportantV1';
  const MEMORIZED_KEY='automotiveCoreWordMemorizedV1';
  const $=id=>document.getElementById(id);

  const els={
    subjectPicker:$('subjectPicker'), subjectButton:$('subjectButton'), subjectText:$('subjectButtonText'), subjectMenu:$('subjectMenu'),
    search:$('cardSearch'), searchField:$('searchField'), searchPanel:$('searchPanel'),
    searchCategorySection:$('searchCategorySection'), searchSuggestSection:$('searchSuggestSection'),
    searchCategoryList:$('searchCategoryList'), searchSuggestions:$('searchSuggestions'),
    grid:$('cardGrid'), prev:$('prevBtn'), next:$('nextBtn'), range:$('rangeText'), fill:$('progressFill'),
    seek:$('progressSlider'), seekPreview:$('progressPreview'),
    dots:$('mobileDots'), heroCount:$('heroCount'), importantCount:$('importantCount'), memorizedCount:$('memorizedCount'),
    importantStatBtn:$('importantStatBtn'), memorizedStatBtn:$('memorizedStatBtn'), registeredStatBtn:$('registeredStatBtn'),
    randomOrderBtn:$('randomOrderBtn'), easyOrderBtn:$('easyOrderBtn'), hardOrderBtn:$('hardOrderBtn'),
    statusText:$('statusText'), theme:$('themeToggleBtn')
  };

  const state={
    subject:'engine', category:'all', query:'', status:'all', orderMode:'easy', offset:0, suggestionIndex:-1,
    important:new Set(), memorized:new Set(), randomRanks:new Map()
  };

  function loadSet(key){
    try{
      const value=JSON.parse(localStorage.getItem(key)||'[]');
      return new Set(Array.isArray(value)?value:[]);
    }catch{return new Set()}
  }
  function saveSet(key,set){
    try{localStorage.setItem(key,JSON.stringify([...set]))}catch{}
  }
  state.important=loadSet(IMPORTANT_KEY);
  state.memorized=loadSet(MEMORIZED_KEY);

  function systemTheme(){
    return matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light';
  }
  function loadTheme(){
    try{
      const t=JSON.parse(localStorage.getItem(THEME_KEY)||'null');
      return t==='dark'||t==='light'?t:systemTheme();
    }catch{return systemTheme()}
  }
  function applyTheme(theme,persist=false){
    const next=theme==='dark'?'dark':'light';
    document.documentElement.dataset.theme=next;
    document.documentElement.style.colorScheme=next;
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content',next==='dark'?'#101b19':'#f4f8f7');
    const dark=next==='dark';
    els.theme?.setAttribute('aria-pressed',dark?'true':'false');
    els.theme?.setAttribute('aria-label',dark?'라이트모드 켜기':'다크모드 켜기');
    if(els.theme) els.theme.title=dark?'라이트모드 켜기':'다크모드 켜기';
    if(persist){
      try{localStorage.setItem(THEME_KEY,JSON.stringify(next))}catch{}
    }
  }
  els.theme?.addEventListener('click',()=>{
    applyTheme(document.documentElement.dataset.theme==='dark'?'light':'dark',true);
  });
  applyTheme(loadTheme());
  try{
    matchMedia('(prefers-color-scheme: dark)').addEventListener('change',e=>{
      if(!localStorage.getItem(THEME_KEY)) applyTheme(e.matches?'dark':'light');
    });
  }catch{}

  function reshuffleRandom(){
    const cards=bank.cards.filter(card=>card.subject===state.subject);
    const shuffled=[...cards];
    for(let i=shuffled.length-1;i>0;i--){
      const j=Math.floor(Math.random()*(i+1));
      [shuffled[i],shuffled[j]]=[shuffled[j],shuffled[i]];
    }
    state.randomRanks=new Map(shuffled.map((card,index)=>[card.id,index]));
  }

  function setOrderMode(mode,{reshuffle=false}={}){
    if(!['random','easy','hard'].includes(mode)) return;
    state.orderMode=mode;
    if(mode==='random'&&(reshuffle||state.randomRanks.size===0)) reshuffleRandom();
    state.offset=0;
    updateOrderButtons();
    render();
  }

  function updateOrderButtons(){
    const pairs=[
      [els.randomOrderBtn,'random'],
      [els.easyOrderBtn,'easy'],
      [els.hardOrderBtn,'hard']
    ];
    pairs.forEach(([btn,mode])=>{
      if(!btn) return;
      const active=state.orderMode===mode;
      btn.classList.toggle('active',active);
      btn.setAttribute('aria-pressed',active?'true':'false');
    });
  }

  function visibleCount(){
    const w=window.innerWidth;
    if(w>=1280) return 3;
    if(w>=980) return 2;
    return 1;
  }

  // Navigate in whole visible pages (1 mobile, 2 tablet/PC, 3 wide PC).
  // Keep the exact last full page reachable even when its index is not page-aligned.
  function snapSeekOffset(rawOffset,total,count){
    const maxOffset=Math.max(0,total-count);
    const position=Math.max(0,Math.min(maxOffset,Math.round(Number(rawOffset)||0)));
    if(position===maxOffset) return maxOffset;
    return Math.min(maxOffset,Math.round(position/count)*count);
  }

  function seekRangeLabel(offset,total,count){
    if(!total) return '0 / 0';
    const start=offset+1;
    const end=Math.min(offset+count,total);
    return start===end ? start+' / '+total : start+'–'+end+' / '+total;
  }

  function paintSeekPosition(offset,maxOffset){
    const percent=maxOffset>0?Math.max(0,Math.min(100,offset/maxOffset*100)):0;
    els.fill.style.width=percent+'%';
    els.seekPreview.style.setProperty('--seek-percent',percent+'%');
  }

  function showSeekPreview(){
    const list=filtered();
    const count=visibleCount();
    const maxOffset=Math.max(0,list.length-count);
    const raw=Math.max(0,Number(els.seek.value)-1);
    const snapped=snapSeekOffset(raw,list.length,count);
    els.seekPreview.textContent=seekRangeLabel(snapped,list.length,count);
    els.seekPreview.hidden=false;
    els.seek.setAttribute('aria-valuetext',seekRangeLabel(snapped,list.length,count));
    // The native thumb moves smoothly; only the displayed card page snaps.
    paintSeekPosition(raw,maxOffset);
  }


  function filtered(){
    const q=state.query.trim().toLocaleLowerCase('ko');
    const list=bank.cards.filter(card=>{
      if(card.subject!==state.subject) return false;
      if(state.category!=='all' && card.category!==state.category) return false;
      if(state.status==='important' && !state.important.has(card.id)) return false;
      if(state.status==='memorized' && !state.memorized.has(card.id)) return false;
      if(!q) return true;
      const hay=[card.title,card.subtitle,card.category,card.formula].concat(card.aliases||[],card.bullets||[]).join(' ').toLocaleLowerCase('ko');
      return hay.includes(q);
    });

    if(state.orderMode==='hard') return list.sort((a,b)=>b.order-a.order);
    if(state.orderMode==='random'){
      if(state.randomRanks.size===0) reshuffleRandom();
      return list.sort((a,b)=>(state.randomRanks.get(a.id)??Number.MAX_SAFE_INTEGER)-(state.randomRanks.get(b.id)??Number.MAX_SAFE_INTEGER));
    }
    return list.sort((a,b)=>a.order-b.order);
  }

  function currentSubject(){
    return bank.subjects.find(item=>item.code===state.subject)||bank.subjects.find(item=>!item.disabled)||bank.subjects[0];
  }

  function closeSubjectMenu({restoreFocus=false}={}){
    if(!els.subjectMenu || !els.subjectButton) return;
    els.subjectMenu.hidden=true;
    els.subjectButton.setAttribute('aria-expanded','false');
    els.subjectPicker?.classList.remove('open');
    if(restoreFocus) els.subjectButton.focus();
  }

  function openSubjectMenu({focusSelected=false}={}){
    if(!els.subjectMenu || !els.subjectButton) return;
    els.subjectMenu.hidden=false;
    els.subjectButton.setAttribute('aria-expanded','true');
    els.subjectPicker?.classList.add('open');
    if(focusSelected){
      const enabled=[...els.subjectMenu.querySelectorAll('.subject-option:not(.disabled)')];
      const selected=Math.max(0,enabled.findIndex(btn=>btn.dataset.code===state.subject));
      enabled[selected]?.focus();
    }
  }

  function setSubject(code){
    const item=bank.subjects.find(subject=>subject.code===code);
    if(!item || item.disabled || code===state.subject){
      closeSubjectMenu({restoreFocus:true});
      return;
    }
    state.subject=code;
    state.category='all';
    state.query='';
    state.offset=0;
    els.search.value='';
    if(state.orderMode==='random') reshuffleRandom();
    renderSubjects();
    renderSearchPicker();
    render();
    closeSubjectMenu({restoreFocus:true});
  }

  function subjectStatsFor(code){
    const allSubjectCards=bank.cards.filter(card=>card.subject===code);
    return {
      total:allSubjectCards.length,
      important:allSubjectCards.filter(card=>state.important.has(card.id)).length,
      memorized:allSubjectCards.filter(card=>state.memorized.has(card.id)).length
    };
  }

  function makeSubjectCountsLabel(stats){
    const summary=document.createElement('span');
    summary.className='subject-option-counts';
    summary.setAttribute('aria-label','중요 '+stats.important+'장, 외움 '+stats.memorized+'장, 전체 '+stats.total+'장');
    const add=(className,content)=>{
      const span=document.createElement('span');
      span.className=className;
      span.textContent=content;
      summary.appendChild(span);
    };
    add('subject-option-count-important','☆ '+stats.important+'장');
    add('subject-option-count-separator',' | ');
    add('subject-option-count-memorized','✓ '+stats.memorized+'장');
    add('subject-option-count-separator',' | ');
    add('subject-option-count-total','총 '+stats.total+'장');
    return summary;
  }

  function refreshSubjectMenuCounts(){
    if(!els.subjectMenu) return;
    els.subjectMenu.querySelectorAll('.subject-option').forEach(btn=>{
      const current=btn.querySelector('.subject-option-counts');
      if(!current) return;
      current.replaceWith(makeSubjectCountsLabel(subjectStatsFor(btn.dataset.code)));
    });
  }

  function renderSubjects(){
    els.subjectMenu.innerHTML='';
    bank.subjects.forEach(item=>{
      const btn=document.createElement('button');
      btn.type='button';
      btn.className='subject-option'+(item.code===state.subject?' active':'')+(item.disabled?' disabled':'');
      btn.dataset.code=item.code;
      btn.setAttribute('role','option');
      btn.setAttribute('aria-selected',item.code===state.subject?'true':'false');
      btn.setAttribute('aria-disabled',item.disabled?'true':'false');

      const name=document.createElement('span');
      name.className='subject-option-name';
      name.textContent=item.name;
      btn.append(name,makeSubjectCountsLabel(subjectStatsFor(item.code)));

      if(item.disabled){
        const status=document.createElement('span');
        status.className='subject-option-status';
        status.textContent='준비 중';
        btn.appendChild(status);
      }

      btn.addEventListener('click',()=>{
        if(item.disabled) return;
        setSubject(item.code);
      });
      els.subjectMenu.appendChild(btn);
    });
    const item=currentSubject();
    els.subjectText.textContent=item?.name||'과목 선택';
  }

  function subjectCards(){
    return bank.cards.filter(card=>card.subject===state.subject);
  }

  function categoryNames(){
    return ['all'].concat([...new Set(subjectCards().map(card=>card.category))]);
  }

  function openSearchPanel(){
    els.searchPanel.hidden=false;
    els.search.setAttribute('aria-expanded','true');
    state.suggestionIndex=-1;
    renderSearchPicker();
  }

  function closeSearchPanel(){
    els.searchPanel.hidden=true;
    els.search.setAttribute('aria-expanded','false');
    state.suggestionIndex=-1;
  }

  function renderSearchCategories(){
    els.searchCategoryList.innerHTML='';
    categoryNames().forEach(category=>{
      const btn=document.createElement('button');
      btn.type='button';
      btn.className='search-category-chip'+(category===state.category?' active':'');
      btn.textContent=category==='all'?'전체':category;
      btn.setAttribute('aria-pressed',category===state.category?'true':'false');
      btn.addEventListener('click',()=>{
        state.category=category;
        state.query='';
        state.offset=0;
        els.search.value='';
        renderSearchCategories();
        renderSearchSuggestions();
        render();
        closeSearchPanel();
      });
      els.searchCategoryList.appendChild(btn);
    });
  }

  function suggestionCards(){
    const q=state.query.trim().toLocaleLowerCase('ko');
    const cards=subjectCards();
    if(!q) return cards.slice(0,12);
    return cards
      .map(card=>{
        const title=card.title.toLocaleLowerCase('ko');
        const category=card.category.toLocaleLowerCase('ko');
        const subtitle=(card.subtitle||'').toLocaleLowerCase('ko');
        const aliases=(card.aliases||[]).join(' ').toLocaleLowerCase('ko');
        const body=(card.bullets||[]).join(' ').toLocaleLowerCase('ko');
        let score=99;
        if(title===q) score=0;
        else if(title.startsWith(q)) score=1;
        else if(title.includes(q)) score=2;
        else if(aliases.includes(q)) score=3;
        else if(category.includes(q)) score=4;
        else if(subtitle.includes(q)) score=5;
        else if(body.includes(q)) score=6;
        return {card,score};
      })
      .filter(item=>item.score<99)
      .sort((a,b)=>a.score-b.score||a.card.order-b.card.order)
      .slice(0,12)
      .map(item=>item.card);
  }

  function activateSuggestion(index){
    const buttons=[...els.searchSuggestions.querySelectorAll('.search-suggestion')];
    if(!buttons.length){state.suggestionIndex=-1;return}
    state.suggestionIndex=Math.max(0,Math.min(index,buttons.length-1));
    buttons.forEach((btn,i)=>{
      const active=i===state.suggestionIndex;
      btn.classList.toggle('active',active);
      btn.setAttribute('aria-selected',active?'true':'false');
    });
    buttons[state.suggestionIndex]?.scrollIntoView({block:'nearest'});
  }

  function chooseSuggestion(card){
    state.category='all';
    state.query=card.title;
    state.offset=0;
    els.search.value=card.title;
    renderSearchCategories();
    render();
    closeSearchPanel();
  }

  function renderSearchSuggestions(){
    const cards=suggestionCards();
    els.searchSuggestions.innerHTML='';
    state.suggestionIndex=-1;

    if(!cards.length){
      const empty=document.createElement('p');
      empty.className='search-suggestion-empty';
      empty.textContent='일치하는 카드가 없어.';
      els.searchSuggestions.appendChild(empty);
      return;
    }

    cards.forEach(card=>{
      const btn=document.createElement('button');
      btn.type='button';
      btn.className='search-suggestion';
      btn.setAttribute('role','option');
      btn.setAttribute('aria-selected','false');

      const icon=document.createElement('span');
      icon.className='search-suggestion-icon';
      icon.textContent='⌕';

      const text=document.createElement('span');
      text.className='search-suggestion-text';
      const title=document.createElement('strong');
      title.textContent=card.title;
      const meta=document.createElement('small');
      meta.textContent=card.category+' · '+(TYPE_LABELS[card.type]||'카드');
      text.append(title,meta);

      btn.append(icon,text);
      btn.addEventListener('pointerdown',event=>event.preventDefault());
      btn.addEventListener('click',()=>chooseSuggestion(card));
      els.searchSuggestions.appendChild(btn);
    });
  }

  function renderSearchPicker(){
    const searching=!!state.query.trim();
    els.searchCategorySection.hidden=searching;
    els.searchSuggestSection.classList.toggle('searching',searching);
    renderSearchCategories();
    renderSearchSuggestions();
    if(searching) els.searchPanel.scrollTop=0;
  }

  function addBulletList(article,card){
    const list=document.createElement('ul');
    list.className='card-bullets';
    (card.bullets||[]).forEach(text=>{
      const li=document.createElement('li');
      const span=document.createElement('span');
      span.textContent=text;
      li.appendChild(span);
      list.appendChild(li);
    });
    article.appendChild(list);
  }

  const TYPE_LABELS={term:'단어',concept:'개념',theory:'이론',graph:'그래프',formula:'수식'};

  function addFormula(article,card){
    if(!card.formula) return;
    const box=document.createElement('div');
    box.className='card-formula';
    const label=document.createElement('span');
    label.textContent='수식';
    const value=document.createElement('strong');
    value.textContent=card.formula;
    box.append(label,value);
    article.appendChild(box);
  }

  function makeAction(label,className,active,onClick){
    const btn=document.createElement('button');
    btn.type='button';
    btn.className='card-action '+className+(active?' active':'');
    btn.textContent=label;
    btn.addEventListener('click',onClick);
    return btn;
  }

  function makeImportanceRating(card){
    const rating=document.createElement('div');
    rating.className='card-importance';
    rating.setAttribute('role','img');
    const importance=Number.isInteger(card.importance)?Math.max(0,Math.min(5,card.importance)):0;
    const description='학습 참고도 '+importance+'/5 (기존 학습문제·보기의 용어 검색 횟수 기준; 공식 출제빈도 아님)';
    rating.setAttribute('aria-label',description);
    rating.title=description;
    for(let level=1;level<=5;level++){
      const svg=document.createElementNS('http://www.w3.org/2000/svg','svg');
      svg.setAttribute('viewBox','0 0 24 24');
      svg.setAttribute('aria-hidden','true');
      svg.classList.add('importance-star');
      svg.classList.add(level<=importance?'is-active':'is-inactive');
      const star=document.createElementNS('http://www.w3.org/2000/svg','path');
      star.setAttribute('d','m12 2 3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2Z');
      svg.appendChild(star);
      rating.appendChild(svg);
    }
    return rating;
  }

  function cardElement(card,globalIndex,total){
    const article=document.createElement('article');
    article.className='core-card';

    const top=document.createElement('div');
    top.className='card-topline';
    const tag=document.createElement('span');
    tag.className='card-tag';
    tag.textContent=TYPE_LABELS[card.type]||'핵심카드';
    const index=document.createElement('span');
    index.className='card-index';
    index.textContent=(globalIndex+1)+' / '+total;
    top.append(tag,index);
    article.appendChild(top);

    const title=document.createElement('h2');
    title.textContent=card.title;
    article.appendChild(title);

    const aliases=document.createElement('p');
    aliases.className='card-aliases';
    aliases.textContent=card.subtitle||'';
    article.appendChild(aliases);

    addBulletList(article,card);
    addFormula(article,card);

    if(card.image){
      const wrap=document.createElement('div');
      wrap.className='card-illustration';
      const img=document.createElement('img');
      img.src=card.image;
      img.alt=card.imageAlt||'개념 그림';
      wrap.appendChild(img);
      article.appendChild(wrap);
    }

    const spacer=document.createElement('div');
    spacer.className='card-spacer';
    article.appendChild(spacer);

    const metaRow=document.createElement('div');
    metaRow.className='card-meta-row';
    const source=document.createElement('p');
    source.className='card-source';
    source.textContent=card.sourceLabel||'';
    source.title=(card.sourceQuestionIds||[]).join(', ');
    metaRow.append(source,makeImportanceRating(card));
    article.appendChild(metaRow);

    const actions=document.createElement('div');
    actions.className='card-actions';
    actions.append(
      makeAction('☆ 중요','important',state.important.has(card.id),()=>{
        state.important.has(card.id)?state.important.delete(card.id):state.important.add(card.id);
        saveSet(IMPORTANT_KEY,state.important);
        render();
      }),
      makeAction('✓ 외움','memorized',state.memorized.has(card.id),()=>{
        state.memorized.has(card.id)?state.memorized.delete(card.id):state.memorized.add(card.id);
        saveSet(MEMORIZED_KEY,state.memorized);
        render();
      })
    );
    article.appendChild(actions);
    return article;
  }

  function renderDots(total){
    els.dots.innerHTML='';
    if(visibleCount()!==1 || total<=1) return;
    const cap=Math.min(total,9);
    const start=Math.max(0,Math.min(state.offset-4,total-cap));
    for(let i=start;i<start+cap;i++){
      const dot=document.createElement('span');
      if(i===state.offset) dot.classList.add('active');
      els.dots.appendChild(dot);
    }
  }

  function setStatusFilter(status){
    state.status=status;
    state.offset=0;
    render();
  }

  function updateHeroStats(subjectStats){
    els.heroCount.textContent=subjectStats.total;
    els.importantCount.textContent=subjectStats.important;
    els.memorizedCount.textContent=subjectStats.memorized;

    const map=[
      [els.importantStatBtn,'important'],
      [els.memorizedStatBtn,'memorized'],
      [els.registeredStatBtn,'all']
    ];
    map.forEach(([btn,status])=>{
      if(!btn) return;
      const active=state.status===status;
      btn.classList.toggle('active',active);
      btn.setAttribute('aria-pressed',active?'true':'false');
    });
  }

  function render(){
    const list=filtered();
    const count=visibleCount();
    const maxOffset=Math.max(0,list.length-count);
    state.offset=Math.max(0,Math.min(state.offset,maxOffset));
    const page=list.slice(state.offset,state.offset+count);
    // Search/category/status filters must not affect the selected-subject counters.
    const subjectStats=subjectStatsFor(state.subject);
    refreshSubjectMenuCounts();

    els.grid.innerHTML='';
    if(!page.length){
      const empty=document.createElement('div');
      empty.className='empty-state';
      const box=document.createElement('div');
      const strong=document.createElement('strong');
      strong.textContent='표시할 카드가 없어.';
      const line=document.createElement('div');
      line.textContent='검색어 또는 필터를 바꿔봐.';
      box.append(strong,line);
      empty.appendChild(box);
      els.grid.appendChild(empty);
    }else{
      page.forEach(card=>{
        els.grid.appendChild(cardElement(card,list.indexOf(card),list.length));
      });
    }

    els.prev.disabled=state.offset<=0;
    els.next.disabled=state.offset+count>=list.length;

    const rangeLabel=seekRangeLabel(state.offset,list.length,count);
    els.range.textContent=rangeLabel;
    els.seek.min='1';
    els.seek.max=String(Math.max(1,maxOffset+1));
    els.seek.step='1'; // The snapping rule depends on the responsive visible count.
    els.seek.value=String(state.offset+1);
    els.seek.disabled=maxOffset===0;
    els.seek.setAttribute('aria-valuetext',rangeLabel);
    els.seekPreview.hidden=true;
    paintSeekPosition(state.offset,maxOffset);

    updateHeroStats(subjectStats);
    const subject=bank.subjects.find(s=>s.code===state.subject)?.name||'과목';
    els.statusText.textContent=subject+' · '+(state.category==='all'?'전체 단원':state.category);
    renderDots(list.length);
  }

  els.subjectButton?.addEventListener('click',()=>{
    els.subjectMenu.hidden ? openSubjectMenu() : closeSubjectMenu();
  });
  els.subjectButton?.addEventListener('keydown',event=>{
    if(event.key==='ArrowDown'||event.key==='ArrowUp'){
      event.preventDefault();
      openSubjectMenu({focusSelected:true});
    }else if(event.key==='Escape'){
      closeSubjectMenu();
    }
  });
  els.subjectMenu?.addEventListener('keydown',event=>{
    const enabled=[...els.subjectMenu.querySelectorAll('.subject-option:not(.disabled)')];
    if(!enabled.length) return;
    const current=enabled.indexOf(document.activeElement);
    if(event.key==='ArrowDown'){
      event.preventDefault();
      enabled[(current+1+enabled.length)%enabled.length].focus();
    }else if(event.key==='ArrowUp'){
      event.preventDefault();
      enabled[(current-1+enabled.length)%enabled.length].focus();
    }else if(event.key==='Home'){
      event.preventDefault();
      enabled[0].focus();
    }else if(event.key==='End'){
      event.preventDefault();
      enabled[enabled.length-1].focus();
    }else if(event.key==='Escape'){
      event.preventDefault();
      closeSubjectMenu({restoreFocus:true});
    }
  });

  els.search.addEventListener('focus',openSearchPanel);
  els.search.addEventListener('click',openSearchPanel);
  els.search.addEventListener('input',()=>{
    state.query=els.search.value;
    state.category='all';
    state.offset=0;
    renderSearchPicker();
    render();
  });
  els.search.addEventListener('keydown',event=>{
    const buttons=[...els.searchSuggestions.querySelectorAll('.search-suggestion')];
    if(event.key==='ArrowDown'){
      event.preventDefault();
      if(els.searchPanel.hidden) openSearchPanel();
      activateSuggestion(state.suggestionIndex<0?0:state.suggestionIndex+1);
    }else if(event.key==='ArrowUp'){
      event.preventDefault();
      if(els.searchPanel.hidden) openSearchPanel();
      activateSuggestion(state.suggestionIndex<0?buttons.length-1:state.suggestionIndex-1);
    }else if(event.key==='Enter'&&state.suggestionIndex>=0&&buttons[state.suggestionIndex]){
      event.preventDefault();
      buttons[state.suggestionIndex].click();
    }else if(event.key==='Escape'){
      event.preventDefault();
      closeSearchPanel();
      els.search.blur();
    }
  });
  document.addEventListener('pointerdown',event=>{
    if(!els.searchField.contains(event.target)) closeSearchPanel();
    if(els.subjectPicker && !els.subjectPicker.contains(event.target)) closeSubjectMenu();
  });
  els.importantStatBtn?.addEventListener('click',()=>setStatusFilter('important'));
  els.memorizedStatBtn?.addEventListener('click',()=>setStatusFilter('memorized'));
  els.registeredStatBtn?.addEventListener('click',()=>setStatusFilter('all'));
  els.randomOrderBtn?.addEventListener('click',()=>setOrderMode('random',{reshuffle:true}));
  els.easyOrderBtn?.addEventListener('click',()=>setOrderMode('easy'));
  els.hardOrderBtn?.addEventListener('click',()=>setOrderMode('hard'));

  // Input previews the destination without re-rendering every card on pointermove.
  // Change commits one snapped page after the user releases the thumb or clicks the track.
  els.seek.addEventListener('pointerdown',showSeekPreview);
  els.seek.addEventListener('input',showSeekPreview);
  els.seek.addEventListener('change',()=>{
    const list=filtered();
    state.offset=snapSeekOffset(Number(els.seek.value)-1,list.length,visibleCount());
    render();
  });
  els.seek.addEventListener('pointercancel',render);
  els.seek.addEventListener('blur',()=>{
    els.seekPreview.hidden=true;
  });
  els.seek.addEventListener('keydown',event=>{
    const count=visibleCount();
    const total=filtered().length;
    const maxOffset=Math.max(0,total-count);
    let next=state.offset;
    if(event.key==='ArrowLeft'||event.key==='ArrowDown') next-=count;
    else if(event.key==='ArrowRight'||event.key==='ArrowUp') next+=count;
    else if(event.key==='PageDown') next+=count*5;
    else if(event.key==='PageUp') next-=count*5;
    else if(event.key==='Home') next=0;
    else if(event.key==='End') next=maxOffset;
    else return;
    event.preventDefault();
    state.offset=Math.max(0,Math.min(next,maxOffset));
    render();
  });

  els.prev.addEventListener('click',()=>{
    state.offset=Math.max(0,state.offset-visibleCount());
    render();
  });
  els.next.addEventListener('click',()=>{
    state.offset+=visibleCount();
    render();
  });
  window.addEventListener('resize',render,{passive:true});

  renderSubjects();
  renderSearchPicker();
  updateOrderButtons();
  render();
})();
