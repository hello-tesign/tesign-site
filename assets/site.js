(function(){var d=document,de=d.documentElement;de.className+=' js';
var t=d.querySelector('.nav-toggle');if(t){t.addEventListener('click',function(){var o=t.getAttribute('aria-expanded')==='true';t.setAttribute('aria-expanded',String(!o));d.body.classList.toggle('nav-open',!o);t.textContent=o?t.getAttribute('data-open'):t.getAttribute('data-close');});}
var reel=d.querySelector('[data-reel]');
if(reel&&'IntersectionObserver' in window){var total=Number(reel.getAttribute('data-total'))||1;
var io=new IntersectionObserver(function(es){es.forEach(function(e){if(!e.isIntersecting)return;e.target.classList.add('is-in');var a=e.target.getAttribute('data-idx');if(a!==null){reel.style.setProperty('--p',String(Math.min(1,Number(a)/total)));}});},{threshold:.4});
[].forEach.call(reel.querySelectorAll('.panel'),function(p){io.observe(p);});}else if(reel){[].forEach.call(reel.querySelectorAll('.panel'),function(p){p.classList.add('is-in');});}
var KEY='tesign.saved';function load(){try{var v=JSON.parse(localStorage.getItem(KEY)||'[]');return Array.isArray(v)?v:[];}catch(e){return [];}}
function store(a){try{localStorage.setItem(KEY,JSON.stringify(a));}catch(e){}}
var saved=load();
[].forEach.call(d.querySelectorAll('[data-save]'),function(b){var s=b.getAttribute('data-save');function paint(){var on=saved.indexOf(s)>=0;b.setAttribute('aria-pressed',String(on));b.textContent=on?b.getAttribute('data-saved-label'):b.getAttribute('data-save-label');}
paint();b.addEventListener('click',function(){var i=saved.indexOf(s);if(i>=0)saved.splice(i,1);else saved.push(s);store(saved);paint();});});
async function copyText(b,text){var label=b.textContent;await navigator.clipboard.writeText(text);b.textContent=b.getAttribute('data-copied');setTimeout(function(){b.textContent=label;},1500);}
[].forEach.call(d.querySelectorAll('[data-share]'),function(b){if(!navigator.share)b.textContent=b.getAttribute('data-copy-label');b.addEventListener('click',async function(){var url=b.getAttribute('data-url'),title=b.getAttribute('data-title');try{if(navigator.share){await navigator.share({title:title,url:url});}else{await copyText(b,url);}}catch(e){}});});
[].forEach.call(d.querySelectorAll('[data-copy]'),function(b){b.addEventListener('click',async function(){try{await copyText(b,b.getAttribute('data-copy'));}catch(e){}});});
var ex=d.querySelector('[data-explore]');
if(ex){var chips=[].slice.call(ex.querySelectorAll('.filter-chip')),q=ex.querySelector('input[type=search]'),empty=ex.querySelector('[data-empty]'),cur={},list=ex.querySelector('.rows'),initial=list.innerHTML,index,request=0,pager=ex.querySelector('.pager'),sizes=ex.querySelector('.sizes'),base=ex.getAttribute('data-facet'),rising=ex.hasAttribute('data-rising');
function paging(on){if(pager)pager.hidden=!on;if(sizes)sizes.hidden=!on;}
async function apply(){var ticket=++request,s=(q&&q.value||'').trim().toLowerCase(),active=Object.keys(cur).some(function(k){return !!cur[k];});
if(!s&&!active){list.innerHTML=initial;if(empty)empty.hidden=!!list.children.length;paging(true);return;}
try{if(!index)index=fetch(ex.getAttribute('data-index')).then(function(r){if(!r.ok)throw Error();return r.json();}).catch(function(e){index=null;throw e;});var all=await index;if(ticket!==request)return;
var matches=all.filter(function(it){var f=' '+it.tokens+' ';if(base&&f.indexOf(' '+base+' ')<0)return false;for(var g in cur){if(cur[g]&&f.indexOf(' '+g+':'+cur[g]+' ')<0)return false;}return !s||[it.name,it.oneLiner,it.categories.join(' '),it.tags.join(' '),it.source.join(' '),it.cta,it.signals.map(function(b){return b.text;}).join(' '),it.license||''].join(' ').toLowerCase().indexOf(s)>=0;});
if(rising)matches.sort(function(a,b){return b.starsDelta24h-a.starsDelta24h;});list.innerHTML=matches.map(function(it){return rising?it.risingHtml:it.html;}).join('');if(empty)empty.hidden=matches.length>0;paging(false);}catch(e){}}
chips.forEach(function(c){c.addEventListener('click',function(){var g=c.getAttribute('data-group'),v=c.getAttribute('data-value');cur[g]=cur[g]===v?'':v;chips.forEach(function(x){if(x.getAttribute('data-group')===g)x.setAttribute('aria-pressed',String(cur[g]===x.getAttribute('data-value')));});apply();});});
if(q){q.addEventListener('input',apply);q.form.addEventListener('submit',function(e){e.preventDefault();var u=new URL(location.href);u.searchParams.set('q',q.value);history.replaceState(null,'',u);apply();});try{var qs=new URLSearchParams(location.search).get('q');if(qs){q.value=qs;apply();}}catch(e){}}}
})();
