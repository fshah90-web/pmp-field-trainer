/* Run with: node --test tests/study.test.cjs
 * Exercises the shipped plain-script app in a Node VM. The DOM below is only
 * a rendering sink; assertions cover learner state, persistence and feedback.
 * Browser QA remains necessary for layout, keyboard use, images and motion.
 */
'use strict';
const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
process.env.TZ = 'America/Chicago';
const web = path.resolve(__dirname, '../web');
const plain = value => JSON.parse(JSON.stringify(value));

function app(storage = new Map(), initialTime = '2026-10-26T01:30:00.000Z') {
  let now = new Date(initialTime).getTime();
  const RealDate = Date;
  class AppDate extends RealDate {
    constructor(...args) { super(...(args.length ? args : [now])); }
    static now() { return now; }
  }
  const elements = new Map();
  class Node {
    constructor(tag = 'div', id = '') {
      this.tagName = tag.toUpperCase(); this.id = id; this.children = [];
      this.dataset = {}; this.attributes = {}; this.hidden = false; this.disabled = false;
      this.textContent = ''; this._html = ''; this.value = ''; this.checked = false;
      this.style = {setProperty(name, value) { this[name] = value; }, removeProperty(name) { delete this[name]; }};
      this.events = {}; this.parentElement = null; this.offsetWidth = 100;
      const classes = new Set();
      this.classList = {add(...names) { names.forEach(n => classes.add(n)); }, remove(...names) { names.forEach(n => classes.delete(n)); }, contains(name) { return classes.has(name); }, toggle(name, force) { const value = force === undefined ? !classes.has(name) : !!force; if (value) classes.add(name); else classes.delete(name); return value; }};
      this.elements = {minutes: {value: '10'}, examDate: {value: ''}, motion: {checked: true}};
    }
    set innerHTML(value) {
      this._html = String(value); this.children = [];
      for (const match of this._html.matchAll(/\bid=["']([^"']+)["']/g)) get(match[1]);
    }
    get innerHTML() { return this._html; }
    appendChild(child) { child.parentElement = this; this.children.push(child); if(child.id) elements.set(child.id, child); return child; }
    append(...nodes) { nodes.forEach(node => this.appendChild(node)); }
    replaceChildren(...nodes) { this.children = []; this.append(...nodes); }
    setAttribute(name, value) { this.attributes[name] = String(value); if (name === 'id') { this.id = String(value); elements.set(this.id, this); } }
    getAttribute(name) { return this.attributes[name] ?? null; }
    removeAttribute(name) { delete this.attributes[name]; }
    addEventListener(type, fn) { (this.events[type] ||= []).push(fn); }
    removeEventListener() {}
    querySelectorAll(selector) {
      const all = this.children.flatMap(child => [child, ...child.querySelectorAll('*')]);
      if(selector === '*') return all;
      if(selector === 'button') return all.filter(child => child.tagName === 'BUTTON');
      return [];
    }
    querySelector(selector) { return selector.startsWith('#') ? get(selector.slice(1)) : this.querySelectorAll(selector)[0] || null; }
    focus() {}
    click() { if(this.disabled) return; const event = {target: this, currentTarget: this, preventDefault() {}}; this.onclick?.(event); this.events.click?.forEach(fn => fn(event)); }
    remove() { if(this.parentElement) this.parentElement.children = this.parentElement.children.filter(child => child !== this); }
    getBoundingClientRect() { return {top:0,left:0,width:480,height:100,right:480,bottom:100}; }
    getContext() { return new Proxy({}, {get: () => () => {}}); }
    animate() { return {finished: Promise.resolve(), cancel() {}}; }
  }
  function get(id) { if(!elements.has(id)) elements.set(id, new Node('div',id)); return elements.get(id); }
  const body = new Node('body');
  const document = {
    body, documentElement: new Node('html'), hidden:false,
    getElementById:get, createElement:tag => new Node(tag),
    querySelector:selector => selector.startsWith('#') ? get(selector.slice(1)) : null,
    querySelectorAll:() => [], addEventListener() {}, removeEventListener() {}
  };
  const context = {
    console, Date:AppDate, Math, JSON, Object, Array, Number, String, Boolean, Set, Map, RegExp, Intl,
    document, navigator:{onLine:true}, location:{reload() {}},
    localStorage:{getItem:key => storage.get(key) ?? null,setItem:(key,value) => storage.set(key,String(value)),removeItem:key => storage.delete(key),clear:() => storage.clear()},
    matchMedia:() => ({matches:true, addEventListener() {}, removeEventListener() {}}),
    setTimeout:() => 1, clearTimeout() {}, setInterval:() => 1, clearInterval() {}, requestAnimationFrame:() => 1,
    devicePixelRatio:1, innerWidth:390, innerHeight:844,
    addEventListener() {}, removeEventListener() {}, scrollTo() {}, confirm:() => true, alert() {},
    URL:{createObjectURL:() => 'blob:test-backup',revokeObjectURL() {}},
    Blob:class {constructor(parts,options) { this.parts=parts;this.type=options?.type; }},
    performance:{now:() => now}, FileReader:class {},
  };
  context.window = context; context.globalThis = context;
  vm.createContext(context);
  const html = fs.readFileSync(path.join(web, 'index.html'),'utf8');
  const scripts = [...html.matchAll(/<script\b([^>]*)>([\s\S]*?)<\/script>/gi)];
  for(const [whole,attrs,inline] of scripts) {
    const source = attrs.match(/\bsrc=["']([^"']+)["']/i)?.[1];
    if(source) {
      assert.ok(!/^https?:/.test(source), 'The offline app should load its scripts from its own bundle');
      vm.runInContext(fs.readFileSync(path.resolve(web,source),'utf8'),context,{filename:source});
    } else if(inline.trim()) vm.runInContext(inline,context,{filename:'index-inline.js'});
  }
  assert.ok(context.Study && context.STUDY_CONTENT && context.QuizInsights,'The shipped index must load its study modules');
  return {context,storage,document,get,read:code => vm.runInContext(code,context),state:() => plain(context.Study.getState()),advance:ms => {now += ms;}};
}
const DAY = 86400000;

function beginFirstMission(env) {
  const mission = env.context.STUDY_CONTENT.missions[0];
  env.context.Study.startMission(mission.id);
  env.context.Study.beginMission();
  assert.equal(env.state().mission.phase,'question');
  return mission;
}

test('all 300 practice questions have stable IDs and option-specific coaching', () => {
  const env = app(); const questions = env.read('QB'); const api = env.context.QuizInsights;
  assert.equal(questions.length,300); assert.equal(api.coverage,300);
  assert.equal(new Set(questions.map(q => api.id(q))).size,300);
  for(const q of questions.slice().reverse()) {
    const info = api.get(q);
    assert.equal(info.specific,true,q.q);
    assert.equal(info.id,api.id(q)); assert.equal(info.why.length,q.o.length);
    assert.ok(info.conceptId && info.conceptTitle && info.clue);
    info.why.forEach((reason,i) => assert.ok(reason.length > 20,`${q.q}: option ${i}`));
    assert.equal(new Set(info.why).size,q.o.length,'Options should not share generic feedback');
  }
});

test('corrected EV distractor explains the division mistake instead of teaching a false identity', () => {
  const env=app(); const q=env.read('QB.find(q => /Which expression correctly defines earned value/.test(q.q))');
  const edited={...q,o:q.o.slice()}; edited.o[1]='EV = AC ÷ CPI';
  assert.match(env.context.QuizInsights.get(edited).why[1],/divid/i);
  assert.match(env.context.QuizInsights.get(edited).why[1],/multiplying AC by CPI gives EV/);
});

test('ten solo missions contain distinct decisions with feedback for every answer', () => {
  const env=app(); const content=env.context.STUDY_CONTENT;
  assert.equal(content.missions.length,10);
  assert.equal(new Set(content.missions.map(m => m.id)).size,10);
  const domains=new Set();
  for(const mission of content.missions) {
    assert.ok(content.concepts.some(c => c.id===mission.conceptId));
    assert.ok(mission.lesson.length>100); assert.equal(mission.steps.length,2);
    assert.notEqual(mission.steps[0].scenario,mission.steps[1].scenario);
    domains.add(mission.domain);
    for(const step of mission.steps) {
      assert.equal(step.options.length,4); assert.ok(step.correct>=0 && step.correct<4);
      assert.ok(step.hint && step.principle);
      step.options.forEach((option,i) => {assert.ok(option.feedback.length>25);if(i!==step.correct)assert.ok(option.misconception);});
    }
  }
  assert.deepEqual([...domains].sort(),['Business','People','Process']);
});

test('an incorrect mission answer remains visible after a correction and the mission requires every decision', () => {
  const env=app(); const mission=beginFirstMission(env); const api=env.context.Study;
  const wrong=(mission.steps[0].correct+1)%4;
  api.answerMission(wrong);
  let state=env.state();
  assert.equal(state.mission.firstAnswers[mission.steps[0].id].correct,false);
  assert.equal(state.mission.solved.length,0); assert.equal(state.mission.queue.length,3);
  assert.equal(state.completed[mission.id],undefined);
  assert.equal(state.attempts.length,1); assert.equal(state.attempts[0].feedback,mission.steps[0].options[wrong].feedback);
  api.nextMissionQuestion(); api.answerMission(mission.steps[1].correct); api.nextMissionQuestion();
  state=env.state(); assert.equal(state.mission.queue[state.mission.position],0); assert.equal(state.mission.phase,'question');
  api.answerMission(mission.steps[0].correct); api.nextMissionQuestion(); state=env.state();
  assert.equal(state.mission.phase,'complete'); assert.equal(state.completed[mission.id].firstScore,1);
  assert.equal(state.mission.firstAnswers[mission.steps[0].id].choice,wrong);
  assert.equal(state.attempts.filter(a => !a.correct).length,1);
  assert.match(env.get('mission').innerHTML,/Great job!/);
  assert.match(env.get('mission').innerHTML,/data-state="great-job"/);
});

test('a duplicate mission answer cannot record a second attempt or alter the first answer', () => {
  const env=app(); const mission=beginFirstMission(env); const api=env.context.Study;
  const wrong=(mission.steps[0].correct+1)%4;
  api.answerMission(wrong); const before=env.state();
  api.answerMission(mission.steps[0].correct); const after=env.state();
  assert.equal(after.attempts.length,before.attempts.length);
  assert.deepEqual(after.mission.firstAnswers,before.mission.firstAnswers);
  assert.deepEqual(after.mission.queue,before.mission.queue);
});

test('mission position, shuffled choices and first answers survive reopening the app', () => {
  const store=new Map(); const first=app(store); const mission=beginFirstMission(first);
  first.context.Study.answerMission((mission.steps[0].correct+1)%4);
  first.context.Study.nextMissionQuestion(); const saved=first.state().mission;
  const reopened=app(store); reopened.context.Study.startMission(mission.id); const resumed=reopened.state().mission;
  assert.equal(resumed.id,saved.id); assert.equal(resumed.phase,saved.phase); assert.equal(resumed.position,saved.position);
  assert.deepEqual(resumed.queue,saved.queue); assert.deepEqual(resumed.order,saved.order);
  assert.deepEqual(resumed.firstAnswers,saved.firstAnswers); assert.deepEqual(resumed.answers,saved.answers);
});

test('opening another mission preserves the unfinished run', () => {
  const env=app(); const first=beginFirstMission(env); const api=env.context.Study;
  api.answerMission((first.steps[0].correct+1)%4); const original=env.state().mission;
  api.startMission(env.context.STUDY_CONTENT.missions[1].id);
  api.startMission(first.id); const resumed=env.state().mission;
  assert.deepEqual(resumed.firstAnswers,original.firstAnswers);
  assert.deepEqual(resumed.answers,original.answers); assert.deepEqual(resumed.queue,original.queue);
});

test('practice feedback follows the chosen original option after answers are shuffled', () => {
  const env=app(); env.read("start('quick')");
  const q=env.read('session.queue[0]'); const original=(q.a+1)%q.o.length;
  const display=env.read(`session.order.indexOf(${original})`);
  env.read(`answer(${display}, document.getElementById('qopts').children[${display}])`);
  const attempt=env.state().attempts.at(-1);
  assert.equal(attempt.questionId,env.context.QuizInsights.id(q));
  assert.equal(attempt.chosen,q.o[original]); assert.equal(attempt.correct,false);
  assert.equal(attempt.feedback,env.context.QuizInsights.get(q).why[original]);
});

test('extra practice cannot accelerate a review before its due date, and a due success advances it', () => {
  const env=app(); const q=env.read('QB[103]'); const api=env.context.Study;
  api.recordPractice(q,1,'quick'); api.recordPractice(q,q.a,'quick');
  const key=env.context.QuizInsights.id(q); const first=env.state().reviews[key]; assert.equal(first.box,2);
  api.recordPractice(q,q.a,'quick'); const early=env.state().reviews[key];
  assert.equal(early.box,first.box); assert.equal(early.due,first.due);
  env.advance(DAY+1); api.recordPractice(q,q.a,'quick'); const due=env.state().reviews[key];
  assert.equal(due.box,3); assert.ok(due.due>first.due);
  assert.equal(due.firstMiss.chosen,q.o[1]);
});

test('legacy review boxes also honor due dates', () => {
  const env=app(); env.read('addMiss(0);promoteMiss(0)');
  const before=plain(env.read('st.misses[0]')); assert.equal(before.box,2);
  env.read('promoteMiss(0)'); assert.deepEqual(plain(env.read('st.misses[0]')),before);
  env.advance(DAY+1);env.read('promoteMiss(0)');assert.equal(env.read('st.misses[0].box'),3);
});

test('a short perfect practice set makes no exam-passing claim and awards no Exam Ready badge', () => {
  const env=app();env.read('st.answered=5;st.correct=5;st.xp=1600;awardBadges()');
  assert.doesNotMatch(env.read('verdictText(readiness())'),/exam.?ready|book it|on track to pass|pass threshold/i);
  assert.equal(env.read('st.badges.includes("Exam Ready")'),false);
  assert.doesNotMatch(env.read('LEVELS[levelFor(st.xp)].name'),/PMP.?Ready/i);
});

test('study days follow the learner’s local date rather than the UTC date', () => {
  const env=app(new Map(),'2026-10-26T01:30:00.000Z');
  assert.equal(env.read('new Date().toISOString().slice(0,10)'),'2026-10-26');
  assert.equal(env.read('todayStr()'),'2026-10-25');
  env.read('markDay()');assert.equal(env.read('st.lastDay'),'2026-10-25');
});

test('quiz question order, selected answer and position can be resumed after reloading', () => {
  const store=new Map();const first=app(store);first.read("start('quick')");
  const display=first.read('session.order.indexOf(session.queue[0].a)');
  first.read(`answer(${display},document.getElementById('qopts').children[${display}]);next()`);
  first.context.Study.persistQuiz();
  const ids=plain(first.read('session.queue.map(q => QuizInsights.id(q))'));
  const index=first.read('session.idx'); const answers=first.read('session.answers.length');
  const second=app(store);second.context.Study.resumeQuiz();
  assert.deepEqual(plain(second.read('session.queue.map(q => QuizInsights.id(q))')),ids);
  assert.equal(second.read('session.idx'),index);assert.equal(second.read('session.answers.length'),answers);
});

test('backup validation rejects invalid histories and impossible practice totals', () => {
  const env=app(); const snapshot=plain(env.context.Study.exportBackup());
  snapshot.practice.correct=snapshot.practice.answered+1;
  assert.throws(() => env.context.Study.validateBackup(snapshot),/totals|invalid/i);
  const badHistory=plain(env.context.Study.exportBackup());
  badHistory.study.attempts=[{questionId:'forged',correct:false}];
  assert.throws(() => env.context.Study.validateBackup(badHistory),/history|invalid/i);
});

test('imported badge strings cannot become markup in earned-badge output', () => {
  const env=app(); const snapshot=plain(env.context.Study.exportBackup());
  snapshot.practice.badges.push('<img src=x onerror=alert(1)>');
  let cleaned;
  try { cleaned=env.context.Study.validateBackup(snapshot); } catch (_) { return; }
  const allowed=new Set(env.read('BADGES.map(b => b.id)'));
  assert.ok(cleaned.practice.badges.every(id => allowed.has(id)),'Restore must allow only known badge IDs');
});

test('scheduled-review backup metadata cannot inject markup through the minutes label', () => {
  const env=app(); const q=env.read('QB[0]');
  env.context.Study.recordPractice(q,1,'quick');env.context.Study.startDueReview();
  const snapshot=plain(env.context.Study.exportBackup());
  snapshot.study.mission.reviewContent.minutes='<img src=x onerror=alert(1)>';
  let cleaned;
  try { cleaned=env.context.Study.validateBackup(snapshot); } catch (_) { return; }
  const run=cleaned.study.mission;
  if(!run) return;
  assert.equal(typeof run.reviewContent.minutes,'number','Review durations must come from trusted numeric plan settings');
  assert.ok([5,10,15,25].includes(run.reviewContent.minutes));
});

test('malformed saved choice order and first-answer entries cannot survive validation and break resume', () => {
  const env=app();const mission=beginFirstMission(env);const snapshot=plain(env.context.Study.exportBackup());
  snapshot.study.mission.order='not-an-option-permutation';
  snapshot.study.mission.firstAnswers[mission.steps[0].id]=null;
  let cleaned;
  try { cleaned=env.context.Study.validateBackup(snapshot); } catch (_) { return; }
  const run=cleaned.study.mission;
  if(!run) return;
  assert.ok(run.order===null || (Array.isArray(run.order)&&run.order.length===4&&new Set(run.order).size===4&&run.order.every(i => Number.isInteger(i)&&i>=0&&i<4)),'Restored order must be a valid permutation or request a fresh shuffle');
  assert.ok(Object.values(run.firstAnswers).every(answer => answer&&Number.isInteger(answer.choice)&&typeof answer.correct==='boolean'),'First answers must be valid records');
});

test('a future scheduled review is unavailable until due and retained mistakes remain visible', () => {
  const env=app();const q=env.read('QB[0]');const api=env.context.Study;
  api.recordPractice(q,1,'quick');api.recordPractice(q,q.a,'quick');
  api.startDueReview();assert.equal(env.state().mission,null,'An early retry must not start a scheduled review');
  api.showMistakes();assert.ok(env.get('mistakes').innerHTML.includes(q.o[1]));
  env.advance(DAY+1);api.startDueReview();
  const run=env.state().mission;assert.equal(run.review,true);assert.equal(run.reviewContent.steps.length,1);
  assert.equal(run.reviewContent.steps[0].reviewId,env.context.QuizInsights.id(q));
  api.beginMission();api.answerMission(q.a);api.nextMissionQuestion();
  assert.equal(env.state().reviews[env.context.QuizInsights.id(q)].box,3);
  api.showMistakes();assert.ok(env.get('mistakes').innerHTML.includes(q.o[1]),'The original mistake remains available after success');
});

function serviceWorker() {
  const handlers={}; const added=[],deleted=[]; let activeCache=''; const fallback={body:'cached app shell'};
  const context={URL, self:{location:{origin:'https://example.test'},clients:{claim:async()=>{}},skipWaiting() {},addEventListener:(type,fn)=>handlers[type]=fn},
    caches:{open:async name=>{activeCache=name;return {addAll:async assets=>added.push(...assets),put:async()=>{}};},keys:async()=>['pmpft-v1',activeCache,'another-app-cache'],delete:async key=>{deleted.push(key);return true;},match:async key=>key==='./index.html'?fallback:undefined},
    fetch:async()=>{throw new Error('offline');}};
  vm.runInNewContext(fs.readFileSync(path.join(web,'service-worker.js'),'utf8'),context,{filename:'service-worker.js'});
  return {handlers,added,deleted,fallback,cache:()=>activeCache};
}

test('offline installation caches the scripts, styles and all seven professor assets', async () => {
  const worker=serviceWorker();let installed;
  worker.handlers.install({waitUntil:promise=>installed=promise});await installed;
  const required=['./index.html','./study.css','./study.js','./study-content.js','./quiz-insights.js',...['welcome','think','hint','explain','celebrate','retry','great-job'].map(name=>`./assets/professor/${name}.png`)];
  for(const asset of required)assert.ok(worker.added.includes(asset),`Offline bundle missing ${asset}`);
  for(const asset of worker.added)assert.ok(fs.existsSync(path.resolve(web,asset)),`${asset} must exist`);
  assert.notEqual(worker.cache(),'pmpft-v4','A release with new offline assets must use a new cache version');
});

test('service-worker activation preserves unrelated applications’ caches', async () => {
  const worker=serviceWorker();let installed,activated;
  worker.handlers.install({waitUntil:promise=>installed=promise});await installed;
  worker.handlers.activate({waitUntil:promise=>activated=promise});await activated;
  assert.ok(worker.deleted.includes('pmpft-v1'));
  assert.ok(!worker.deleted.includes(worker.cache()));
  assert.ok(!worker.deleted.includes('another-app-cache'));
});

test('offline navigation returns the cached application shell', async () => {
  const worker=serviceWorker();let response;
  worker.handlers.fetch({request:{method:'GET',mode:'navigate',url:'https://example.test/web/'},respondWith:promise=>response=promise});
  assert.equal(await response,worker.fallback);
});

test('a saved quiz cannot skip unrecorded answers and create duplicate-credit gaps', () => {
  const store=new Map();const first=app(store);first.read("start('quick')");first.context.Study.persistQuiz();
  const saved=JSON.parse(store.get('pmpft-active-quiz-v1'));
  saved.idx=2;saved.answers=[];store.set('pmpft-active-quiz-v1',JSON.stringify(saved));
  const restored=app(store);restored.context.Study.resumeQuiz();
  assert.equal(restored.read('session===null'),true,'Invalid missing answer history must not become an active quiz');
});

test('saved quiz mode and title must be valid before an imported session is resumed', () => {
  for(const edit of [saved => {saved.mode='unknown-mode';},saved => {saved.title=null;}]) {
    const store=new Map();const first=app(store);first.read("start('quick')");first.context.Study.persistQuiz();
    const saved=JSON.parse(store.get('pmpft-active-quiz-v1'));edit(saved);store.set('pmpft-active-quiz-v1',JSON.stringify(saved));
    const restored=app(store);assert.doesNotThrow(() => restored.context.Study.resumeQuiz());
    const session=restored.read('session');
    if(session) {
      assert.ok(['quick','mock','misses','people','process','business','agile','formula','topic'].includes(session.mode));
      assert.equal(typeof session.title,'string');assert.ok(session.title.length>0);
    }
  }
});

test('opening a practice set counts only the presented question and does not earn a learning streak', () => {
  const env=app();env.read("start('quick')");
  assert.equal(env.read('st.streak'),0);assert.equal(env.read('st.answered'),0);
  assert.equal(env.read('Object.keys(st.seen).length'),1);
  const display=env.read('session.order.indexOf(session.queue[0].a)');
  env.read(`answer(${display},document.getElementById('qopts').children[${display}])`);
  assert.equal(env.read('st.streak'),1);
});

test('backup restore sanitizes malformed daily and reward dictionaries before reopening or recording answers', () => {
  for(const malformed of [null,[], 'invalid map']) {
    const env=app();const snapshot=plain(env.context.Study.exportBackup());
    snapshot.study.daily=malformed;snapshot.study.rewarded=malformed;
    const cleaned=plain(env.context.Study.validateBackup(snapshot));
    for(const key of ['daily','rewarded']) {
      assert.ok(cleaned.study[key]&&typeof cleaned.study[key]==='object'&&!Array.isArray(cleaned.study[key]),`${key} must be a usable dictionary`);
    }
    env.storage.set('pmpft-study-v1',JSON.stringify(cleaned.study));
    let restored;
    assert.doesNotThrow(() => {restored=app(env.storage);},'A restored backup must not crash the Home screen');
    const mission=beginFirstMission(restored);
    assert.doesNotThrow(() => restored.context.Study.answerMission(mission.steps[0].correct),'The restored daily and reward maps must support a new answer');
    assert.equal(restored.state().attempts.length,1);
    assert.equal(restored.state().daily[restored.read('todayStr()')],1);
  }
});

test('guided review synchronizes original practice misses after both success and a later mistake', () => {
  const env=app();const api=env.context.Study;
  env.read("start('quick')");
  const q=env.read('session.queue[0]'),qi=env.read('QB.indexOf(session.queue[0])');
  const wrong=env.read('session.order.findIndex(index => index!==session.queue[0].a)');
  env.read(`answer(${wrong},document.getElementById('qopts').children[${wrong}])`);
  const id=env.context.QuizInsights.id(q);
  assert.equal(env.read(`st.misses[${qi}].box`),1);
  api.startDueReview();api.beginMission();api.answerMission(q.a);api.nextMissionQuestion();
  assert.equal(env.state().reviews[id].box,2);
  assert.equal(env.read(`st.misses[${qi}].box`),2,'The legacy Review Misses path must advance with the guided review');
  assert.equal(env.read('dueMisses().length'),0,'The same corrected question must not remain due in the legacy view');
  env.advance(DAY+1);api.startDueReview();api.beginMission();api.answerMission((q.a+1)%q.o.length);
  assert.equal(env.state().reviews[id].box,1);
  assert.equal(env.read(`st.misses[${qi}].box`),1,'A later guided-review mistake must reset the original practice review too');
  assert.equal(env.read('dueMisses().length'),1);
});

test('domain-scoped scheduled review contains only that domain while the default remains mixed', () => {
  const env=app();const api=env.context.Study;
  const people=env.read("QB.find(q => q.dom==='People')"),process=env.read("QB.find(q => q.dom==='Process')");
  api.recordPractice(people,(people.a+1)%people.o.length,'quick');
  api.recordPractice(process,(process.a+1)%process.o.length,'quick');
  api.startDueReview('Process');
  const filtered=env.state().mission.reviewContent.steps;
  assert.equal(filtered.length,1,'A Process review must match the domain-specific due count');
  assert.ok(filtered.every(step => step.domain==='Process'),'A domain filter must carry into the launched review');
  assert.equal(filtered[0].reviewId,env.context.QuizInsights.id(process));
  api.startDueReview();
  const mixed=env.state().mission.reviewContent.steps;
  assert.equal(mixed.length,2,'The Home review action should include all due domains by default');
  assert.deepEqual([...new Set(mixed.map(step => step.domain))].sort(),['People','Process']);
});
