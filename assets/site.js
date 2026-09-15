(function(){var d=document,de=d.documentElement;de.className+=' js';
var t=d.querySelector('.nav-toggle');if(t){t.addEventListener('click',function(){var o=t.getAttribute('aria-expanded')==='true';t.setAttribute('aria-expanded',String(!o));d.body.classList.toggle('nav-open',!o);t.textContent=o?t.getAttribute('data-open'):t.getAttribute('data-close');});}
var reel=d.querySelector('[data-reel]');
if(reel&&'IntersectionObserver' in window){var total=Number(reel.getAttribute('data-total'))||1;
var io=new IntersectionObserver(function(es){es.forEach(function(e){if(!e.isIntersecting)return;e.target.classList.add('is-in');var a=e.target.getAttribute('data-idx');if(a!==null){reel.style.setProperty('--p',String(Math.min(1,Number(a)/total)));}});},{threshold:.4});
[].forEach.call(reel.querySelectorAll('.panel'),function(p){io.observe(p);});}else if(reel){[].forEach.call(reel.querySelectorAll('.panel'),function(p){p.classList.add('is-in');});}
/* D3: GA4 events. gtag exists only when GA4_MEASUREMENT_ID is configured; without it every call is a no-op and the buttons still work.
   Parameters are content keys only (slug, cta, place, feed, filter, method) — never an identifier, never the saved list, never a search term. */
function track(name,params){try{if(typeof gtag==='function')gtag('event',name,params||{});}catch(e){}}
function attr(el,k){return (el&&el.getAttribute&&el.getAttribute(k))||'';}
function escText(s){return String(s==null?'':s).replace(/[&<>"']/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c];});}
if(d.addEventListener)d.addEventListener('click',function(e){var el=e.target&&e.target.closest?e.target.closest('[data-track]'):null;if(!el)return;var k=attr(el,'data-track');
if(k==='go')track('go_to_tool',{slug:attr(el,'data-slug'),cta:attr(el,'data-cta'),place:attr(el,'data-place')});else if(k==='rss')track('rss_click',{feed:attr(el,'data-feed')});});
var KEY='tesign.saved';function load(){try{var v=JSON.parse(localStorage.getItem(KEY)||'[]');return Array.isArray(v)?v.filter(function(x){return typeof x==='string';}):[];}catch(e){return [];}}
function store(a){try{localStorage.setItem(KEY,JSON.stringify(a));}catch(e){}}
var saved=load();
function paintCounts(){[].forEach.call(d.querySelectorAll('[data-saved-count]'),function(c){c.textContent=String(saved.length);c.hidden=!saved.length;});}
function bindSave(b,after){var s=attr(b,'data-save');function paint(){var on=saved.indexOf(s)>=0;b.setAttribute('aria-pressed',String(on));b.textContent=on?attr(b,'data-saved-label'):attr(b,'data-save-label');}
paint();b.addEventListener('click',function(){var i=saved.indexOf(s);if(i>=0){saved.splice(i,1);track('unsave_item',{slug:s});}else{saved.push(s);track('save_item',{slug:s});}store(saved);paint();paintCounts();if(after)after();});}
[].forEach.call(d.querySelectorAll('[data-save]'),function(b){bindSave(b);});paintCounts();
async function copyText(b,text){var label=b.textContent;await navigator.clipboard.writeText(text);b.textContent=b.getAttribute('data-copied');setTimeout(function(){b.textContent=label;},1500);}
/* §4-F: a share button carrying data-game reports game_share (method only) instead of share_item, and its copy fallback copies data-copy-text (the streak line + URL) when set */
[].forEach.call(d.querySelectorAll('[data-share]'),function(b){if(!navigator.share)b.textContent=b.getAttribute('data-copy-label');b.addEventListener('click',async function(){var url=b.getAttribute('data-url'),title=b.getAttribute('data-title'),slug=attr(b,'data-slug'),game=attr(b,'data-game')==='1';function done(method){if(game)track('game_share',{method:method});else track('share_item',{slug:slug,method:method});}
try{if(navigator.share){await navigator.share({title:title,url:url});done('share');}else{await copyText(b,attr(b,'data-copy-text')||url);done('copy');}}catch(e){}});});
/* §4-F /game/ "어느 쪽 별이 더 많을까?": two random items from the JSON the build embedded (public items with a stored star total), one click reveals both totals
   with their GitHub check time (+ the GH Archive part of the total when there is one), the streak / best / played counts live in localStorage tesign.game only; game_answer carries {correct} and nothing else.
   UX-1: after a pick the verdict + next button scroll into view and take focus; a round that follows the next button scrolls the board to the top so both options show on a phone */
var gm=d.querySelector('[data-game]');
if(gm){var GAME_KEY='tesign.game',gpool=[];try{var gd=d.getElementById('game-data');gpool=JSON.parse((gd&&gd.textContent)||'[]');}catch(e){gpool=[];}
gpool=(Array.isArray(gpool)?gpool:[]).filter(function(x){return x&&typeof x.slug==='string'&&typeof x.name==='string'&&typeof x.stars==='number';});
function gload(){try{var v=JSON.parse(localStorage.getItem(GAME_KEY)||'{}')||{};return {streak:Number(v.streak)||0,best:Number(v.best)||0,played:Number(v.played)||0,correct:Number(v.correct)||0};}catch(e){return {streak:0,best:0,played:0,correct:0};}}
function gstore(s){try{localStorage.setItem(GAME_KEY,JSON.stringify(s));}catch(e){}}
function gtext(key,vars){var t=attr(gm,'data-'+key);for(var k in vars)t=t.split('{'+k+'}').join(String(vars[k]));return t;}
function gfmt(n){return Number(n).toLocaleString('en-US');}
function gtime(iso){return iso?iso.slice(5,10)+' '+iso.slice(11,16)+' UTC':'';}
var gs=gload(),gcards=[].slice.call(gm.querySelectorAll('[data-game-card]')),gresult=gm.querySelector('[data-game-result]'),gnext=gm.querySelector('[data-game-next]'),gempty=gm.querySelector('[data-game-empty]'),gboard=gm.querySelector('[data-game-board]'),gshare=gm.querySelector('[data-share][data-game]'),gpair=null,ganswered=false;
function gcounts(){var el;el=gm.querySelector('[data-game-streak]');if(el)el.textContent=gtext('streak',{n:gfmt(gs.streak)});el=gm.querySelector('[data-game-best]');if(el)el.textContent=gtext('best',{n:gfmt(gs.best)});el=gm.querySelector('[data-game-played]');if(el)el.textContent=gtext('played',{m:gfmt(gs.played),c:gfmt(gs.correct)});
if(gshare){var line=gtext('share-text',{n:gfmt(gs.streak)});gshare.setAttribute('data-title',line);gshare.setAttribute('data-copy-text',line+' '+attr(gshare,'data-url'));}}
function gpick(){if(gpool.length<2)return null;var a=gpool[Math.floor(Math.random()*gpool.length)],b=a,t=0;while((b===a||(b.stars===a.stars&&t<20))&&t<60){b=gpool[Math.floor(Math.random()*gpool.length)];t++;}return b===a?null:[a,b];}
function gcard(i){return gcards[i]||null;}
function gset(card,sel,text){var el=card.querySelector(sel);if(el)el.textContent=text;return el;}
function ground(ev){gpair=gpick();ganswered=false;if(gresult){gresult.textContent='';gresult.className='game__result';}
if(!gpair){if(gempty)gempty.hidden=false;if(gboard)gboard.hidden=true;if(gnext)gnext.hidden=true;return;}
if(gempty)gempty.hidden=true;if(gboard)gboard.hidden=false;if(gnext)gnext.hidden=true;
gpair.forEach(function(it,i){var card=gcard(i);if(!card)return;card.className='game__card';gset(card,'[data-game-name]',it.name);gset(card,'[data-game-cat]',it.category||'');var s=card.querySelector('[data-game-stars]');if(s){s.textContent='';s.hidden=true;}var c=card.querySelector('[data-game-checked]');if(c){c.textContent='';c.hidden=true;}var l=card.querySelector('[data-game-link]');if(l){l.setAttribute('href',it.href||'#');l.hidden=true;}var p=card.querySelector('[data-game-pick]');if(p){p.hidden=false;p.disabled=false;}});/* UX-1: a round that follows 다음 문제 starts with both options in view (the board to the top, focus on the first pick) — never on page load */if(ev&&gboard&&gboard.scrollIntoView)gboard.scrollIntoView({block:'start'});if(ev){var fp=gcards[0]&&gcards[0].querySelector('[data-game-pick]');if(fp&&fp.focus)fp.focus({preventScroll:true});}}
function ganswer(i){if(ganswered||!gpair)return;ganswered=true;var a=gpair[0].stars,b=gpair[1].stars,win=a>b?0:b>a?1:-1,ok=win===-1||win===i;
gs.played++;if(ok){gs.streak++;gs.correct++;if(gs.streak>gs.best)gs.best=gs.streak;}else gs.streak=0;gstore(gs);track('game_answer',{correct:ok});
gpair.forEach(function(it,j){var card=gcard(j);if(!card)return;card.className='game__card '+(win===-1||win===j?'game__card--win':'game__card--lose');var s=card.querySelector('[data-game-stars]');if(s){s.textContent='★ '+gfmt(it.stars);s.hidden=false;}var c=card.querySelector('[data-game-checked]');if(c){c.textContent=(it.checkedAt?gtext('checked',{time:gtime(it.checkedAt)}):attr(gm,'data-unchecked'))+(it.checkedAt&&it.since>0?' · '+gtext('since',{n:gfmt(it.since)}):'');c.hidden=false;}var l=card.querySelector('[data-game-link]');if(l)l.hidden=false;var p=card.querySelector('[data-game-pick]');if(p){p.hidden=true;p.disabled=true;}});
if(gresult){gresult.textContent=win===-1?attr(gm,'data-tie'):ok?attr(gm,'data-correct'):attr(gm,'data-wrong');gresult.className='game__result '+(ok?'game__result--ok':'game__result--no');}
if(gnext){gnext.hidden=false;if(gnext.scrollIntoView)gnext.scrollIntoView({block:'nearest'});if(gnext.focus)gnext.focus({preventScroll:true});}gcounts();}
gcards.forEach(function(card,i){var p=card.querySelector('[data-game-pick]');if(p)p.addEventListener('click',function(){ganswer(i);});});
if(gnext)gnext.addEventListener('click',ground);gcounts();ground();}
/* /saved/: the list is drawn here from the browser's saved slugs and the small per-language index the build writes (no server, no account) */
var sv=d.querySelector('[data-saved-list]');
if(sv){var svEmpty=d.querySelector('[data-saved-empty]'),svError=d.querySelector('[data-saved-error]'),svIndex;
async function renderSaved(){saved=load();paintCounts();if(svError)svError.hidden=true;if(!saved.length){sv.innerHTML='';if(svEmpty)svEmpty.hidden=false;return;}
try{if(!svIndex)svIndex=fetch(attr(sv,'data-index')).then(function(r){if(!r.ok)throw Error();return r.json();}).catch(function(e){svIndex=null;throw e;});var all=await svIndex;var by={};all.forEach(function(it){by[it.slug]=it;});
/* P2: a slug the index no longer knows (unpublished or renamed) is dropped from the stored list once the index has loaded — never on a failed fetch — so the count badge, the rows and the empty sentence agree */
var known=saved.filter(function(s){return !!by[s];});if(known.length!==saved.length){saved=known;store(saved);paintCounts();}
var rows=saved.slice().reverse().map(function(s){return by[s];}).filter(Boolean),removeLabel=attr(sv,'data-remove-label')||attr(sv,'data-saved-label'),offLabel=attr(sv,'data-save-label');
/* U11: the 240 px derivative is right for the 120/160 px thumbnail column, the 480 px one for the full-width phone row */
sv.innerHTML=rows.map(function(it){var img=it.image?'<img src="'+escText(it.image)+'"'+(it.image2?' srcset="'+escText(it.image)+' '+(it.w||240)+'w, '+escText(it.image2)+' '+(it.w2||480)+'w" sizes="(min-width:900px) 160px, (min-width:640px) 120px, calc(100vw - 32px)"':'')+' alt="" width="'+(it.w||240)+'" height="'+(it.h||150)+'" loading="lazy" decoding="async">':'<span aria-hidden="true">—</span>';
return '<li class="row row--thumb row--unnumbered"><a class="row__image thumb'+(it.image?(it.card?' thumb--card':''):' plate--empty')+'" href="'+escText(it.href)+'" aria-label="'+escText(it.name)+'">'+img+'</a><div class="row__body"><h3 class="row__name"><a href="'+escText(it.href)+'">'+escText(it.name)+'</a></h3>'+(it.use?'<span class="use">'+escText(it.use)+'</span>':'')+'<p class="row__line">'+escText(it.line)+'</p><button class="btn btn--ghost saved__remove" type="button" data-save="'+escText(it.slug)+'" data-save-label="'+escText(offLabel)+'" data-saved-label="'+escText(removeLabel)+'" aria-pressed="true">'+escText(removeLabel)+'</button></div></li>';}).join('');
if(svEmpty)svEmpty.hidden=rows.length>0;[].forEach.call(sv.querySelectorAll('[data-save]'),function(b){bindSave(b,renderSaved);});}catch(e){if(svError)svError.hidden=false;}}
renderSaved();}
[].forEach.call(d.querySelectorAll('[data-copy]'),function(b){b.addEventListener('click',async function(){try{await copyText(b,b.getAttribute('data-copy'));}catch(e){}});});
var ex=d.querySelector('[data-explore]');
if(ex){var chips=[].slice.call(ex.querySelectorAll('.filter-chip')),q=ex.querySelector('input[type=search]'),empty=ex.querySelector('[data-empty]'),cur={},list=ex.querySelector('.rows'),initial=list.innerHTML,index,request=0,pager=ex.querySelector('.pager'),sizes=ex.querySelector('.sizes'),base=ex.getAttribute('data-facet'),rising=ex.hasAttribute('data-rising');
function paging(on){if(pager)pager.hidden=!on;if(sizes)sizes.hidden=!on;}
async function apply(){var ticket=++request,s=(q&&q.value||'').trim().toLowerCase(),active=Object.keys(cur).some(function(k){return !!cur[k];});
if(!s&&!active){list.innerHTML=initial;if(empty)empty.hidden=!!list.children.length;paging(true);return;}
try{if(!index)index=fetch(ex.getAttribute('data-index')).then(function(r){if(!r.ok)throw Error();return r.json();}).catch(function(e){index=null;throw e;});var all=await index;if(ticket!==request)return;
var matches=all.filter(function(it){var f=' '+it.tokens+' ';if(base&&f.indexOf(' '+base+' ')<0)return false;for(var g in cur){if(cur[g]&&f.indexOf(' '+g+':'+cur[g]+' ')<0)return false;}return !s||[it.name,it.useLabel||'',it.oneLiner,it.categories.join(' '),it.tags.join(' '),it.source.join(' '),it.cta,it.signals.map(function(b){return b.text;}).join(' '),it.license||''].join(' ').toLowerCase().indexOf(s)>=0;});
if(rising)matches.sort(function(a,b){return b.starsDelta24h-a.starsDelta24h;});list.innerHTML=matches.map(function(it){return rising?it.risingHtml:it.html;}).join('');if(empty)empty.hidden=matches.length>0;paging(false);}catch(e){}}
chips.forEach(function(c){c.addEventListener('click',function(){var g=c.getAttribute('data-group'),v=c.getAttribute('data-value');cur[g]=cur[g]===v?'':v;if(cur[g])track('filter_use',{filter:g+':'+v});chips.forEach(function(x){if(x.getAttribute('data-group')===g)x.setAttribute('aria-pressed',String(cur[g]===x.getAttribute('data-value')));});apply();});});
if(q){q.addEventListener('input',apply);q.form.addEventListener('submit',function(e){e.preventDefault();var u=new URL(location.href);u.searchParams.set('q',q.value);history.replaceState(null,'',u);track('filter_use',{filter:'search'});apply();});try{var qs=new URLSearchParams(location.search).get('q');if(qs){q.value=qs;apply();}}catch(e){}}}
})();
