/* Local-first professor, guided missions, and an honest first-answer mistake log. */
(() => {
  'use strict';
  const KEY = 'pmpft-study-v1', QUIZ_KEY = 'pmpft-active-quiz-v1';
  const content = window.STUDY_CONTENT;
  const $ = id => document.getElementById(id);
  const esc = value => String(value == null ? '' : value).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const fresh = () => ({version:1,preferences:{minutes:10,examDate:'',motion:true},completed:{},reviews:{},attempts:[],mission:null,daily:{},rewarded:{}});
  const dictionary = value => value&&typeof value==='object'&&!Array.isArray(value)?value:{};
  const dailyCounts = value => Object.fromEntries(Object.entries(dictionary(value)).filter(([key,count])=>/^\d{4}-\d{2}-\d{2}$/.test(key)&&Number.isFinite(count)&&count>=0));
  const rewardCounts = value => Object.fromEntries(Object.entries(dictionary(value)).filter(([key,earned])=>/^\d{4}-\d{2}-\d{2}:/.test(key)&&earned===true));
  let data = fresh(), mistakeFilter = 'All', storageWarned = false, installPrompt=null;
  try {
    const saved = JSON.parse(localStorage.getItem(KEY));
    if (saved && saved.version === 1) data = {...fresh(),...saved,preferences:{...fresh().preferences,...saved.preferences}};
  } catch (_) { /* A fresh plan is safe; the original practice totals live separately. */ }
  data.daily=dailyCounts(data.daily);data.rewarded=rewardCounts(data.rewarded);
  data.attempts=Array.isArray(data.attempts)?data.attempts:[];
  data.completed=dictionary(data.completed);data.reviews=dictionary(data.reviews);
  const concept = id => content.concepts.find(c => c.id === id);
  const missionById = id => content.missions.find(m => m.id === id);
  const activeMission = () => data.mission && (data.mission.review ? data.mission.reviewContent : missionById(data.mission.id));
  const day = () => todayStr();
  const localDay = time => {const d=new Date(time);return d.getFullYear()+'-'+String(d.getMonth()+1).padStart(2,'0')+'-'+String(d.getDate()).padStart(2,'0');};
  const dateLabel = time => new Date(time).toLocaleDateString(undefined,{month:'short',day:'numeric'});
  const dueReviews = () => Object.entries(data.reviews).filter(([,r]) => r.box < 5 && r.due <= Date.now());
  const completedCount = () => Object.keys(data.completed).filter(id => missionById(id)).length;
  const avatar = (state, small = false) => `<div class="professor animate${small?' compact':''}" data-state="${state}" aria-hidden="true"></div>`;
  const coach = (state, title, message, small = false) => `<div class="coach${small?' small':''}">${avatar(state)}<div class="coach-copy"><b>${esc(title)}</b><p>${esc(message)}</p></div></div>`;
  function notice() {
    if (storageWarned) return;
    storageWarned = true;
    const el = $('storage-notice');
    el.textContent = 'Your browser could not save progress. Keep this page open and export a backup in Study settings.';
    el.hidden = false;
  }
  function persist() {
    try { localStorage.setItem(KEY, JSON.stringify(data)); } catch (_) { notice(); }
  }
  function applyPreferences() {
    document.documentElement.dataset.coachMotion = data.preferences.motion ? 'on' : 'off';
  }
  function record(attempt) {
    const entry = {...attempt,at:Date.now(),id:Date.now().toString(36)+'-'+Math.random().toString(36).slice(2,8)};
    data.attempts.push(entry);
    // Bound storage while preserving the active review records and first answers in each mission.
    if (data.attempts.length > 2000) data.attempts.splice(0,data.attempts.length-2000);
    const old = data.reviews[attempt.questionId];
    if (!attempt.correct) {
      data.reviews[attempt.questionId] = {box:1,due:Date.now(),firstMiss:old?.firstMiss||entry,latestMiss:entry,source:attempt.source};
    } else if (old && old.box < 5 && old.due <= Date.now()) {
      const box = old.box+1;
      data.reviews[attempt.questionId] = {...old,box,due:Date.now()+({2:1,3:3,4:7,5:30}[box]||30)*86400000};
    }
    data.daily[day()] = (data.daily[day()]||0)+1;
    persist();
    return entry;
  }
  function practiceEntry(q, choice, mode) {
    const info = QuizInsights.get(q);
    return {source:'practice',mode,questionId:info.id,question:q.q,chosen:q.o[choice],correctAnswer:q.o[q.a],correct:choice===q.a,
      conceptId:info.conceptId,conceptTitle:info.conceptTitle,domain:q.dom,feedback:info.why[choice]||q.e,clue:info.clue,tip:info.tip,
      originalChoice:choice,first:mode!=='misses'};
  }
  function recordPractice(q, choice, mode) { return record(practiceEntry(q,choice,mode)); }
  function recommendedMission() {
    const unresolved = Object.values(data.reviews).filter(r=>r.box<5).sort((a,b)=>b.latestMiss.at-a.latestMiss.at);
    for (const review of unresolved) {
      const match = missionForConcept(review.latestMiss.conceptId);
      if (match && !data.completed[match.id]) return match;
    }
    return content.missions.find(m=>!data.completed[m.id]) || content.missions[0];
  }
  function missionForConcept(id) {
    const direct = content.missions.find(m=>m.conceptId===id);
    if (direct) return direct;
    // The original bank has finer topic tags than this introductory mission collection.
    const aliases = {leadership:'conflict',motivation:'conflict','team-development':'conflict','servant-leadership':'conflict','leadership-power':'conflict','emotional-intelligence':'conflict',negotiation:'conflict',coaching:'conflict',communication:'stakeholders','knowledge-transfer':'stakeholders',schedule:'hybrid-tailoring','scope-baseline':'change-control',scope:'change-control',procurement:'risk-issue',risk:'risk-issue',quality:'quality-acceptance','continuous-improvement':'quality-acceptance','agile-prioritization':'agile-priorities','agile-flow':'agile-priorities',agile:'agile-priorities',formula:'earned-value',estimation:'earned-value',ethics:'ethics-ai',business:'business-value',governance:'business-value',sustainability:'business-value','organizational-change':'business-value','project-context':'hybrid-tailoring'};
    const target = aliases[id];
    return target ? content.missions.find(m=>m.conceptId===target) : null;
  }
  function renderHome() {
    const nextMission = recommendedMission(), count = completedCount(), due = dueReviews().length;
    const continuing = data.mission && data.mission.phase !== 'complete';
    const active = activeMission();
    const target = data.preferences.examDate ? Math.ceil((new Date(data.preferences.examDate+'T12:00:00')-new Date(day()+'T12:00:00'))/86400000) : null;
    const targetText = target === null ? 'A flexible plan, at your pace' : target > 0 ? `${target} days to your target date` : 'Your target date has arrived · adjust your plan anytime';
    const todayCount = data.daily[day()]||0;
    const learnedToday=Object.values(data.completed).some(m=>localDay(m.lastAt)===day());
    const practiceToday=data.attempts.filter(a=>a.source==='practice'&&a.first!==false&&localDay(a.at)===day()).length;
    const practiceGoal=Math.min(10,data.preferences.minutes);
    $('studyHome').innerHTML = `
      <div class="professor-welcome">${avatar(count===10?'celebrate':'welcome')}<div><p class="study-kicker">YOUR PROFESSOR, YOUR PACE</p><h1 class="study-title">A little clearer.<br>A little closer.</h1><p>Learn the reasoning. Practice the decisions. Build your confidence.</p></div></div>
      <div class="study-panel"><div class="panel-meta"><b>${continuing?'Pick up where you left off':'Your next mission'}</b><span>${continuing&&active?active.minutes:nextMission.minutes} min</span></div><h2>${esc(continuing&&active?active.title:nextMission.title)}</h2><p>${esc(continuing?'Your lesson, first answers, and place in the mission are saved.':nextMission.briefing)}</p><button class="btn" data-study="${continuing?'resume-mission':'start-mission'}" data-id="${nextMission.id}">${continuing?'Continue your mission':learnedToday?'Try another mission':'Start today’s mission'} →</button><div class="study-track" role="progressbar" aria-label="Core missions completed" aria-valuemin="0" aria-valuemax="10" aria-valuenow="${count}"><span style="width:${count*10}%"></span></div><div class="study-links"><p class="study-caption">${count} of 10 core missions cleared</p><button class="text-action" data-study="missions">See your journey →</button></div></div>
      ${hasSavedQuiz()?'<div class="study-panel"><h2>Your practice is saved</h2><p>Continue your unfinished question set.</p><button class="btn sec" data-study="resume-quiz">Resume practice →</button></div>':''}
      <div class="section-head"><h2>Today’s study plan</h2><button class="text-action" data-study="plan">Adjust</button></div>
      <p class="study-caption">${data.preferences.minutes} minutes a day · ${esc(targetText)}</p>
      <ol class="study-list"><li><span class="step-check">${due?'1':'✓'}</span><div class="step-copy"><b>${due?`${due} question${due===1?'':'s'} ready to revisit`:'Review is up to date'}</b><p>${due?'Use what you learned in a new attempt.':'Missed questions return on a spaced schedule.'}</p></div>${due?'<button data-study="due-review">Review →</button>':''}</li><li><span class="step-check">${learnedToday?'✓':'2'}</span><div class="step-copy"><b>${learnedToday?'Today’s mission, cleared':'Learn one useful principle'}</b><p>${learnedToday?'Your first answers and any corrections are saved.':'Read the lesson, then work through two project decisions.'}</p></div><button data-study="${learnedToday?'mistakes':continuing?'resume-mission':'start-mission'}" data-id="${nextMission.id}">${learnedToday?'Review →':'Go →'}</button></li><li><span class="step-check">${practiceToday>=practiceGoal?'✓':'3'}</span><div class="step-copy"><b>${practiceToday>=practiceGoal?'Practice goal, complete':'Try a mixed practice set'}</b><p>${practiceToday?`${practiceToday} practice answers today · goal ${practiceGoal}.`:'Ten questions to put your knowledge to work.'}</p></div><button data-study="quick">Practice →</button></li></ol>
      ${learnedToday&&!due&&practiceToday>=practiceGoal?coach('great-job','Great job! Today’s routine is complete.','Your learning is saved. Come back for your next review, or keep exploring at your own pace.'):''}
      <p class="safety-note">Ten core missions build a foundation. Keep practicing across all exam topics; completion and XP are learning milestones, not a prediction of passing.</p>`;
  }
  function renderMissions() {
    const next = recommendedMission();
    $('missions').innerHTML = `<p class="study-kicker">YOUR STUDY JOURNEY</p><h1 class="study-title">Small missions.<br>Useful progress.</h1><p class="study-sub">Each mission includes a lesson and two situations. Correct a missed decision before clearing the mission. Your first answers stay in your review.</p><div class="study-track" role="progressbar" aria-label="Core missions cleared" aria-valuemin="0" aria-valuemax="10" aria-valuenow="${completedCount()}"><span style="width:${completedCount()*10}%"></span></div><p class="study-caption" style="margin-bottom:20px">${completedCount()} / 10 cleared · All missions are open</p><div class="mission-list">${content.missions.map((m,i)=>{
      const done=data.completed[m.id];
      return `<article class="mission-card${m.id===next.id&&!done?' current':''}"><div class="mission-line"><span>Mission ${i+1} · ${m.domain==='Business'?'Business Environment':m.domain}</span><span>${m.minutes} min</span></div><h2>${esc(m.title)}</h2><p>${esc(m.briefing)}</p><div class="mission-actions"><span class="mission-status">${done?`✓ Cleared · first run ${done.firstScore}/${m.steps.length} first try`:m.id===next.id?'Suggested next':'Ready when you are'}</span><button class="btn${done?' sec':''}" data-study="start-mission" data-id="${m.id}">${done?'Practice again':'Start mission'} →</button></div></article>`;
    }).join('')}</div>`;
  }
  function renderLibrary() {
    $('lessonLibrary').className = 'lesson-library';
    $('lessonLibrary').innerHTML = content.concepts.map(c=>{
      const m=content.missions.find(m=>m.conceptId===c.id);
      return `<details id="lesson-${c.id}"><summary>${esc(c.title)}</summary><p>${esc(m.lesson)}</p><div class="lesson-highlight"><b>The principle</b>${esc(c.principle)}</div><p><b>Worked example</b><br>${esc(c.workedExample)}</p><p><b>A common trap</b><br>${esc(c.trap)}</p><button class="text-action" data-study="start-mission" data-id="${m.id}">Apply it in a mission →</button><p class="lesson-source">References: ${c.sources.map(id=>{const source=content.sources.find(s=>s.id===id);return source?`<a href="${source.url}" target="_blank" rel="noopener">${esc(source.title)}</a>`:'';}).join(' · ')}</p></details>`;
    }).join('');
  }
  function openPlan() {
    go('plan');
    $('plan').innerHTML = `<button class="back" data-study="home">‹ Home</button><h1 class="study-title" style="margin-top:15px">Make room for study.</h1><p class="study-sub">Choose a routine that fits your life. Your target date is optional and you can change it anytime.</p><form id="study-plan-form" class="study-form"><label>Daily study time<span>A guide for your routine; lessons and practice stay open.</span><select name="minutes"><option value="5">5 minutes · one small step</option><option value="10">10 minutes · a steady routine</option><option value="15">15 minutes · room for review</option><option value="25">25 minutes · a deeper session</option></select></label><label>Target exam date <span>Optional. This sets a planning countdown, not a readiness prediction.</span><input type="date" name="examDate" value="${esc(data.preferences.examDate)}"></label><label class="check-setting"><input type="checkbox" name="motion"${data.preferences.motion?' checked':''}>Animate the professor</label><p class="study-caption">Your device’s reduced-motion preference always takes priority.</p><button class="btn" type="submit">Save my plan</button></form><div class="section-head"><h2>Your saved progress</h2></div><p class="study-sub">Progress is stored in this browser on this device. Export a backup to keep a copy or transfer it to another device.</p><div class="row"><button class="btn sec" data-study="export">Export backup</button><button class="btn sec" data-study="import">Restore backup</button></div><input type="file" id="study-backup-file" accept="application/json,.json" hidden><p id="backup-status" class="review-note" role="status"></p><button class="text-action" data-study="preview-professor">Meet your professor’s animations →</button><div id="professor-preview"></div><button class="text-action" data-study="reset" style="margin-top:24px">Reset progress…</button>`;
    $('study-plan-form').elements.minutes.value = data.preferences.minutes;
    $('study-plan-form').addEventListener('submit',event=>{
      event.preventDefault();
      const form=event.currentTarget;
      data.preferences={minutes:Number(form.elements.minutes.value),examDate:form.elements.examDate.value,motion:form.elements.motion.checked};
      st.daily.goal=data.preferences.minutes;save();applyPreferences();persist();go('home');miniToast('Your study plan is saved');
    });
    $('study-backup-file').addEventListener('change', restoreBackup);
    const installSection=document.createElement('div');
    installSection.className='lesson-block';
    installSection.innerHTML='<h3>Keep your study plan close.</h3><p>The app and professor work offline after the first complete visit. On iPhone or iPad, open in Safari, choose Share, then Add to Home Screen. On Android or desktop, use your browser’s Install app option.</p><button class="btn sec" data-study="install">Install app / see instructions</button><p id="install-status" class="study-caption" role="status"></p>';
    $('plan').appendChild(installSection);
    if('serviceWorker' in navigator)navigator.serviceWorker.ready.then(()=>{if($('install-status'))$('install-status').textContent='Offline study content is ready on this device.';}).catch(()=>{});
  }
  function startMission(id) {
    const m=missionById(id);
    if (!m) return;
    if (data.mission && data.mission.phase!=='complete' && data.mission.id===id) { resumeMission();return; }
    if (data.mission && data.mission.phase!=='complete') {
      // Keep every unfinished run, so browsing another mission cannot destroy first answers.
      data.suspended=data.suspended||{};data.suspended[data.mission.id]=data.mission;
    }
    if (data.suspended?.[id]) {data.mission=data.suspended[id];delete data.suspended[id];}
    else data.mission={id,phase:'briefing',queue:m.steps.map((_,i)=>i),position:0,answers:[],firstAnswers:{},solved:[],order:null,hint:false,startedAt:Date.now(),runId:Date.now().toString(36)};
    persist();go('mission');
  }
  function resumeMission() { if(activeMission()) go('mission');else go('missions'); }
  function startDueReview(domain='All') {
    const due=dueReviews().filter(([,review])=>domain==='All'||review.firstMiss.domain===domain).slice(0,Math.max(3,Math.min(10,data.preferences.minutes)));
    if (!due.length) {miniToast('Your scheduled review is up to date');return;}
    const steps=[];
    due.forEach(([id,review])=>{
      const item=questionForId(id);
      if(item) steps.push({...item,id,reviewId:id});
    });
    if (!steps.length) {miniToast('These review items are not in this content version');return;}
    if(data.mission&&data.mission.phase!=='complete'){data.suspended=data.suspended||{};data.suspended[data.mission.id]=data.mission;}
    const reviewContent={id:'scheduled-review',title:'A second look, a little wiser',minutes:data.preferences.minutes,domain:'Mixed',conceptId:'review',briefing:'Revisit the decisions you found difficult. Your original mistakes stay saved, even after you correct them.',lesson:'Read the situation again before answering. Look for the clue you missed last time, then check why each action fits or does not fit. A successful review moves the next review further into the future.',steps};
    data.mission={id:reviewContent.id,review:true,reviewContent,phase:'briefing',queue:steps.map((_,i)=>i),position:0,answers:[],firstAnswers:{},solved:[],order:null,hint:false,startedAt:Date.now(),runId:Date.now().toString(36)};
    persist();go('mission');
  }
  function questionForId(id) {
    const q=QB.find(q=>QuizInsights.id(q)===id);
    if(q){const info=QuizInsights.get(q);return {approach:q.app,domain:q.dom,conceptId:info.conceptId,conceptTitle:info.conceptTitle,scenario:q.q,prompt:'Choose the best answer.',correct:q.a,hint:info.clue,principle:info.tip,options:q.o.map((text,i)=>({text,feedback:info.why[i],misconception:i===q.a?'':'Review the deciding clue'}))};}
    for(const m of content.missions){const step=m.steps.find(s=>`mission:${m.id}:${s.id}`===id);if(step)return {...step,domain:m.domain,conceptId:m.conceptId,conceptTitle:concept(m.conceptId).title};}
    return null;
  }
  function renderMission() {
    const run=data.mission,m=activeMission();
    if(!run||!m){go('missions');return;}
    if(run.phase==='complete'){renderMissionComplete(m,run);return;}
    const c=concept(m.conceptId);
    if(run.phase==='briefing'){
      $('mission').innerHTML=`<button class="back" data-study="home">‹ Save &amp; exit</button><div class="mission-stage"><span>${run.review?'Your scheduled review':'Professor’s briefing'}</span><span>${m.minutes} min · ${m.steps.length} decisions</span></div><h1 class="study-title">${esc(m.title)}</h1>${coach('explain','Let’s work through this together.',m.briefing)}<div class="lesson-block"><h3>Before you begin</h3><p>${esc(m.lesson)}</p></div>${c?`<div class="lesson-highlight"><b>Keep this principle in mind</b>${esc(c.principle)}</div><div class="lesson-block"><h3>A worked example</h3><p>${esc(c.workedExample)}</p><h3>A common trap</h3><p>${esc(c.trap)}</p></div>`:''}<button class="btn" data-study="begin-mission">Try the first decision →</button><p class="review-note">Take the time you need. If you miss a decision, you’ll revisit it before clearing the mission. Your first answer stays in your score.</p>`;
      return;
    }
    const stepIndex=run.queue[run.position],step=m.steps[stepIndex];
    if(!run.order)run.order=shuffle(step.options.map((_,i)=>i));
    const response=run.answers[run.position],answered=!!response;
    const isRetry=Object.prototype.hasOwnProperty.call(run.firstAnswers,step.id)&&!answered;
    const domain=step.domain||m.domain;
    $('mission').innerHTML=`<button class="back" data-study="home">‹ Save &amp; exit</button><div class="mission-stage"><span>${run.review?'Scheduled review':esc(m.title)}</span><span>${run.solved.length}/${m.steps.length} decisions resolved</span></div><div class="study-track" role="progressbar" aria-label="Decisions resolved" aria-valuemin="0" aria-valuemax="${m.steps.length}" aria-valuenow="${run.solved.length}"><span style="width:${run.solved.length/m.steps.length*100}%"></span></div><div class="chips"><span class="chip appr">${esc(domain==='Business'?'Business Environment':domain)}</span><span class="chip appr">${esc(step.approach)}</span>${isRetry?'<span class="chip appr">Another try</span>':''}</div><p class="mission-scenario">${esc(step.scenario)}</p><h1 class="mission-question">${esc(step.prompt)}</h1><div class="opts" role="group" aria-label="Answer choices">${run.order.map((original,display)=>{
      const selected=answered&&response.choice===original,right=answered&&original===step.correct;
      return `<button class="opt mission-choice${right?' correct':selected?' wrong':''}" data-study="mission-answer" data-choice="${original}"${answered?' disabled':''} aria-label="${String.fromCharCode(65+display)}. ${esc(step.options[original].text)}${right?', correct answer':selected?', your answer, incorrect':''}"><span class="key" aria-hidden="true">${String.fromCharCode(65+display)}</span><span>${esc(step.options[original].text)}${right||selected?`<span class="choice-status">${right?'✓ Correct answer':'× Your answer'}</span>`:''}</span></button>`;
    }).join('')}</div>${answered?missionFeedback(step,response):`<div class="coach small">${avatar(run.hint?'hint':'think')}<div class="coach-copy"><b>${run.hint?'Here’s a clue.':'Take your time.'}</b><p${run.hint?' role="status"':''}>${esc(run.hint?step.hint:isRetry?'Use the explanation from your first attempt. You can correct this.':'Look at the context before choosing an action.')}</p>${!run.hint?'<button class="text-action" data-study="mission-hint">Ask the professor for a hint</button>':''}</div></div>`}<div class="mission-bottom">${answered?`<button class="btn" data-study="mission-next">${run.position===run.queue.length-1&&run.solved.length===m.steps.length?'Clear the mission →':response.correct?'Next decision →':'Continue · this decision will return →'}</button>`:''}</div><p class="review-note">${Object.keys(run.firstAnswers).length?`${Object.values(run.firstAnswers).filter(a=>a.correct).length}/${Object.keys(run.firstAnswers).length} correct first try · `:''}Corrections resolve decisions without changing first-answer scores.</p>`;
    persist();
  }
  function missionFeedback(step,response) {
    const correct=response.correct;
    return `<div class="mission-feedback" role="status">${coach(correct?'celebrate':'retry',correct?'That’s the right reasoning.':'Let’s look at the deciding detail.',step.options[response.choice].feedback,true)}${!correct?`<span class="feedback-label">The better answer</span><p>${esc(step.options[step.correct].text)}</p><p>${esc(step.options[step.correct].feedback)}</p><p class="feedback-misconception">What to work on: ${esc(step.options[response.choice].misconception)}</p>`:''}<div class="lesson-highlight"><b>Carry this into the next situation</b>${esc(step.principle)}</div><details><summary>Why the other choices don’t fit</summary><ul>${step.options.map((o,i)=>i!==response.choice?`<li><b>${esc(o.text)}</b><br>${esc(o.feedback)}</li>`:'').join('')}</ul></details></div>`;
  }
  function answerMission(choice) {
    const run=data.mission,m=activeMission();
    if(!run||run.phase!=='question'||run.answers[run.position])return;
    const stepIndex=run.queue[run.position],step=m.steps[stepIndex];
    if(!Number.isInteger(choice)||!step.options[choice])return;
    const correct=choice===step.correct,first=!Object.prototype.hasOwnProperty.call(run.firstAnswers,step.id);
    const response={choice,correct,stepIndex,first,hint:run.hint,order:run.order.slice()};
    run.answers.push(response);
    if(first)run.firstAnswers[step.id]={choice,correct};
    if(correct){if(!run.solved.includes(stepIndex))run.solved.push(stepIndex);}else run.queue.push(stepIndex);
    const questionId=step.reviewId||`mission:${m.id}:${step.id}`;
    record({source:run.review?'review':'mission',mode:'mission',missionId:run.review?null:m.id,questionId,question:step.scenario,prompt:step.prompt,chosen:step.options[choice].text,correctAnswer:step.options[step.correct].text,correct,conceptId:step.conceptId||m.conceptId,conceptTitle:step.conceptTitle||concept(m.conceptId)?.title||'Review',domain:step.domain||m.domain,feedback:step.options[choice].feedback,misconception:step.options[choice].misconception,clue:step.hint,tip:step.principle,first:first&&!run.review});
    markDay();st.answered++;if(correct)st.correct++;
    if(run.review){const qi=QB.findIndex(q=>QuizInsights.id(q)===questionId);if(qi>=0){if(correct)promoteMiss(qi);else addMiss(qi);}}
    const domain=step.domain||m.domain;if(st.domStats[domain]){st.domStats[domain][0]++;if(correct)st.domStats[domain][1]++;}
    const rewardKey=`${day()}:${questionId}`;
    if(!data.rewarded[rewardKey]){st.xp+=correct?5:1;data.rewarded[rewardKey]=true;}
    trackDaily();save();persist();awardBadges();renderMission();refreshHeader();showFeedback($('mission').querySelector('.mission-feedback'));
  }
  function nextMissionQuestion() {
    const run=data.mission,m=activeMission();
    if(!run||!run.answers[run.position])return;
    if(run.position===run.queue.length-1&&run.solved.length===m.steps.length){
      const firstScore=Object.values(run.firstAnswers).filter(a=>a.correct).length;
      const firstClear=!run.review&&!data.completed[m.id];
      if(!run.review){const previous=data.completed[m.id];data.completed[m.id]={firstScore:previous?previous.firstScore:firstScore,bestScore:Math.max(previous?.bestScore||0,firstScore),clearedAt:previous?.clearedAt||Date.now(),lastAt:Date.now(),runs:(previous?.runs||0)+1};}
      run.phase='complete';run.completionXP=firstClear?30:0;
      if(firstClear)st.xp+=30;
      save();persist();renderMission();refreshHeader();
      if(firstClear&&data.preferences.motion)fireConfetti();
    }else{run.position++;run.order=null;run.hint=false;persist();renderMission();window.scrollTo(0,0);}
  }
  function renderMissionComplete(m,run) {
    const firstScore=Object.values(run.firstAnswers).filter(a=>a.correct).length;
    const wrong=run.answers.filter(a=>!a.correct).length;
    const next=content.missions.find(candidate=>!data.completed[candidate.id]);
    $('mission').innerHTML=`<div class="mission-reward">${avatar('great-job')}<p class="study-kicker">${run.review?'REVIEW COMPLETE':'MISSION CLEARED'}</p><h1>Great job!</h1><p>You worked through every decision${wrong?' and corrected the tricky ones':''}.</p><span class="reward-token">${run.completionXP?`+${run.completionXP} XP · first completion`:'Learning milestone saved'}</span><button class="text-action" style="display:block;margin:auto;text-align:center" data-study="replay-great-job">Replay the professor’s applause</button></div><div class="study-panel"><div class="panel-meta"><b>Your first-answer score</b><span>${firstScore} / ${m.steps.length}</span></div><p>${wrong?`${wrong} correction${wrong===1?'':'s'} made. Your original first answers remain in Mistakes, so you can see exactly what changed.`:'Every decision right on the first try. Keep testing the principle in unfamiliar situations.'}</p><p class="study-caption">${run.review?'Scheduled reviews advance only when they are due.':'Clearing a mission recognizes practice and corrections. Retention is demonstrated in later reviews.'}</p></div><button class="btn" data-study="mistakes">See what to work on →</button>${next&&!run.review?`<button class="btn sec" style="margin-top:10px" data-study="start-mission" data-id="${next.id}">Next mission: ${esc(next.title)}</button>`:''}<button class="btn ghost" data-study="home">Back to my study plan</button>`;
    window.scrollTo(0,0);
  }
  function renderMistakes() {
    const records=data.attempts.filter(a=>mistakeFilter==='All'||a.domain===mistakeFilter);
    const first=records.filter(a=>a.first!==false);
    const reviews=Object.values(data.reviews).filter(r=>mistakeFilter==='All'||r.firstMiss.domain===mistakeFilter).sort((a,b)=>b.latestMiss.at-a.latestMiss.at);
    const due=reviews.filter(r=>r.box<5&&r.due<=Date.now());
    const corrected=reviews.filter(r=>r.box>1).length;
    const groups={};
    first.forEach(a=>{const g=groups[a.conceptId]||(groups[a.conceptId]={id:a.conceptId,title:a.conceptTitle,total:0,wrong:0});g.total++;if(!a.correct)g.wrong++;});
    const topics=Object.values(groups).sort((a,b)=>b.wrong-a.wrong||b.total-a.total);
    const accuracy=first.length?Math.round(first.filter(a=>a.correct).length/first.length*100):null;
    $('mistakes').innerHTML=`<p class="study-kicker">LEARN FROM EVERY ATTEMPT</p><h1 class="study-title">See the pattern.<br>Find your next step.</h1><p class="study-sub">Your first answer stays visible after a correction. See what went wrong, the clue that mattered, and what to practice next.</p><div class="filter-row" role="group" aria-label="Filter mistake history by domain">${['All','People','Process','Business'].map(d=>`<button data-study="filter-mistakes" data-id="${d}" aria-pressed="${mistakeFilter===d}">${d==='Business'?'Business Environment':d}</button>`).join('')}</div><div class="mistake-metrics"><div><b>${first.length}</b><span>First answers</span></div><div><b>${accuracy===null?'—':accuracy+'%'}</b><span>Practice accuracy</span></div><div><b>${corrected}</b><span>Mistakes corrected</span></div></div><p class="study-caption">Based on up to 2,000 recent answers recorded in this version. Corrective retries are excluded from this first-answer score. Older practice totals remain in Home statistics.</p>${!records.length?`<div class="empty-study">${avatar('welcome')}<h2>Your next insight starts here.</h2><p>Complete a mission or answer a practice question. Your topic breakdown and specific feedback will appear here.</p><button class="btn" data-study="start-mission" data-id="${recommendedMission().id}">Try a guided mission →</button></div>`:`${coach(reviews.length?'explain':'celebrate',reviews.length?'Mistakes are a useful study map.':'A strong start.',reviews.length?'Focus on the reason behind a choice. A correct retry is progress; a later review checks what you retained.':'Keep trying unfamiliar questions. This score describes your practice, not an official exam result.')}<div class="section-head"><h2>Where to focus</h2></div>${topics.slice(0,8).map(t=>`<div class="topic-row"><div class="topic-line"><b>${esc(t.title)}</b><span>${t.total-t.wrong}/${t.total} right</span></div><p class="study-caption">${t.wrong?`${t.wrong} first-answer miss${t.wrong===1?'':'es'}`:'No first-answer misses recorded'} · ${Math.round((t.total-t.wrong)/t.total*100)}% practice accuracy</p><button class="text-action" data-study="practice-topic" data-id="${esc(t.id)}">Practice this topic →</button>${missionForConcept(t.id)?`<button class="text-action" style="margin-left:16px" data-study="start-mission" data-id="${missionForConcept(t.id).id}">Related mission →</button>`:''}</div>`).join('')}<div class="section-head"><h2>Your saved mistakes</h2><span class="study-caption">${reviews.length} question${reviews.length===1?'':'s'}</span></div>${due.length?`<button class="btn" style="margin-bottom:16px" data-study="due-review" data-domain="${mistakeFilter}">Review ${Math.min(due.length,Math.max(3,Math.min(10,data.preferences.minutes)))} due question${due.length===1?'':'s'} →</button>`:''}${reviews.length?reviews.map(r=>{
      const a=r.firstMiss;
      const status=r.box>=5?'Retained across spaced reviews':r.box>1?`Corrected · review ${dateLabel(r.due)}`:'Ready for another look';
      return `<details class="mistake-item"><summary><small>${esc(a.conceptTitle)} · ${esc(status)}</small>${esc(a.question)}</summary><div class="mistake-body"><p><span class="answer-label">Your original answer</span>${esc(a.chosen)}</p><p><span class="answer-label">Why it missed the mark</span>${esc(a.feedback)}</p><p><span class="answer-label">The correct answer</span>${esc(a.correctAnswer)}</p><div class="lesson-highlight"><b>The deciding clue</b>${esc(a.clue)}</div>${a.misconception?`<p>What to work on: ${esc(a.misconception)}</p>`:''}<p>${esc(a.tip)}</p><button class="text-action" data-study="practice-topic" data-id="${esc(a.conceptId)}">Practice this topic →</button></div></details>`;
    }).join(''):'<p class="review-note">You have no saved mistakes in this domain yet. Try a fresh topic to keep checking your understanding.</p>'}`}`;
  }
  function questionReady(q) {
    $('quiz-coach').innerHTML=`<div class="coach small">${avatar('think')}<div class="coach-copy"><b>Read the situation first.</b><p>You can ask for a clue before choosing.</p><button class="text-action" data-study="practice-hint">Ask the professor for a hint</button></div></div>`;
    persistQuiz();
  }
  function practiceHint() {
    if(!session||session.answers[session.idx])return;
    const info=QuizInsights.get(session.queue[session.idx]);
    $('quiz-coach').innerHTML=coach('hint','Here’s a clue.',info.clue,true);
  }
  function feedbackHTML(q,choice) {
    const info=QuizInsights.get(q),correct=choice===q.a;
    return `${coach(correct?'celebrate':'retry',correct?'That’s right. Here’s why.':'Let’s work through this.',info.why[choice],true)}${!correct?`<span class="feedback-label">The correct answer</span><p>${esc(q.o[q.a])}</p><p>${esc(info.why[q.a])}</p>`:''}<div class="lesson-highlight"><b>The deciding clue</b>${esc(info.clue)}</div>${info.tip!==info.clue?`<p>${esc(info.tip)}</p>`:''}<details><summary>Explain the other choices</summary><ul>${q.o.map((option,i)=>i!==choice?`<li><b>${esc(option)}</b><br>${esc(info.why[i])}</li>`:'').join('')}</ul></details>`;
  }
  function onPracticeAnswer(q,choice,mode) {
    recordPractice(q,choice,mode);
    $('quiz-coach').innerHTML='';
    $('qexplain').className='mission-feedback';
    $('qexplain').innerHTML=feedbackHTML(q,choice);
    persistQuiz();
    showFeedback($('qexplain'));
  }
  function showFeedback(element) {
    if(!element)return;
    element.setAttribute('tabindex','-1');
    if(element.focus)element.focus({preventScroll:true});
    if(element.scrollIntoView)element.scrollIntoView({block:'start',behavior:data.preferences.motion&&!matchMedia('(prefers-reduced-motion: reduce)').matches?'smooth':'auto'});
  }
  function refreshHeader() {
    const lv=levelFor(st.xp);
    $('xpval').textContent=st.xp+' XP';$('lvlnum').textContent=lv+1;$('lvlname').textContent=LEVELS[lv].name;
  }
  function renderResultCoach(quiz) {
    const misses=quiz?.answers?.filter(a=>!a.right)||[];
    $('results-coach').innerHTML=coach(misses.length?'explain':'great-job',misses.length?'Here’s your next study step.':'Great job!',misses.length?`${misses.length} first-answer miss${misses.length===1?'':'es'} saved. Open Mistakes to see the exact choices, explanations, and topics to work on.`:'Your practice is saved. Keep building understanding with a fresh mission or a scheduled review.');
  }
  function sessionFinished(quiz) {
    try{localStorage.removeItem(QUIZ_KEY);}catch(_){notice();}
    renderResultCoach(quiz);
  }
  function practiceTopic(id) {
    const pool=[];QB.forEach((q,i)=>{if(QuizInsights.get(q).conceptId===id)pool.push(i);});
    if(!pool.length){const related=missionForConcept(id);if(related)startMission(related.id);else go('missions');return;}
    const queue=draw(pool,Math.min(10,pool.length)).map(i=>QB[i]);
    session={mode:'topic',conceptId:id,title:'Targeted practice · '+QuizInsights.get(queue[0]).conceptTitle,queue,idx:0,answers:[],correct:0,start:Date.now()};
    stopTimer();$('qtimer').hidden=true;go('quiz');renderQ();
  }
  function persistQuiz() {
    if(!session||!session.queue?.length)return;
    const snapshot={version:1,mode:session.mode,conceptId:session.conceptId||null,title:session.title,queue:session.queue.map(q=>QuizInsights.id(q)),idx:session.idx,correct:session.correct,elapsed:Date.now()-session.start,order:session.order,answers:session.answers.map(a=>({questionId:QuizInsights.id(a.q),order:a.order,chosenDisp:a.chosenDisp,correctDisp:a.correctDisp,right:a.right}))};
    try{localStorage.setItem(QUIZ_KEY,JSON.stringify(snapshot));}catch(_){notice();}
  }
  function savedQuiz() {
    try{const saved=JSON.parse(localStorage.getItem(QUIZ_KEY));return saved&&saved.version===1&&Array.isArray(saved.queue)&&saved.queue.length>0?saved:null;}catch(_){return null;}
  }
  function hasSavedQuiz(){return !!savedQuiz();}
  function resumeQuiz() {
    const saved=savedQuiz();
    if(!saved)return;
    const bank=new Map(QB.map(q=>[QuizInsights.id(q),q]));
    const queue=saved.queue.map(id=>bank.get(id));
    const permutation=order=>Array.isArray(order)&&order.length===4&&new Set(order).size===4&&order.every(i=>Number.isInteger(i)&&i>=0&&i<4);
    const validMode=['quick','mock','misses','topic',...Object.keys(CATS)].includes(saved.mode);
    if(!validMode||queue.some(q=>!q)||!Number.isInteger(saved.idx)||saved.idx<0||saved.idx>=queue.length||!permutation(saved.order)||!Array.isArray(saved.answers)||saved.answers.length<saved.idx||saved.answers.length>saved.idx+1){miniToast('This saved session is from different content. Your totals and mistake history are safe.');return;}
    const answers=[];
    for(let i=0;i<saved.answers.length;i++){
      const a=saved.answers[i],q=queue[i];
      if(a.questionId!==QuizInsights.id(q)||!permutation(a.order)||!Number.isInteger(a.chosenDisp)||a.chosenDisp<0||a.chosenDisp>3){miniToast('This saved session could not be restored. Your study history is safe.');return;}
      answers.push({q,order:a.order,chosenDisp:a.chosenDisp,correctDisp:a.order.indexOf(q.a),right:a.order[a.chosenDisp]===q.a});
    }
    session={mode:saved.mode,conceptId:saved.mode==='topic'?QuizInsights.get(queue[0]).conceptId:null,title:saved.mode==='topic'?'Targeted practice · '+QuizInsights.get(queue[0]).conceptTitle:modeTitle(saved.mode),queue,idx:saved.idx,correct:answers.filter(a=>a.right).length,answers,start:Date.now()-Math.min(7*86400000,Math.max(0,Number(saved.elapsed)||0))};
    go('quiz');$('qtimer').hidden=session.mode!=='mock';if(session.mode==='mock')startTimer();else stopTimer();
    renderQ(answers[saved.idx]?.order||saved.order);
    const current=answers[saved.idx];
    if(current){
      [...$('qopts').children].forEach((button,i)=>{button.disabled=true;if(i===current.correctDisp)button.classList.add('correct');else if(i===current.chosenDisp)button.classList.add('wrong');else button.classList.add('dim');});
      $('quiz-coach').innerHTML='';$('qexplain').className='mission-feedback';$('qexplain').innerHTML=feedbackHTML(queue[saved.idx],current.order[current.chosenDisp]);
      $('qnav').hidden=false;$('nextbtn').textContent=saved.idx===queue.length-1?'See results →':'Next →';
      $('pfill').style.width=((saved.idx+1)/queue.length*100)+'%';
    }
  }
  function exportBackup() {
    const snapshot={format:'pmp-professor-backup',version:1,createdAt:new Date().toISOString(),practice:st,study:data,quiz:savedQuiz()};
    const url=URL.createObjectURL(new Blob([JSON.stringify(snapshot,null,2)],{type:'application/json'}));
    const link=document.createElement('a');link.href=url;link.download=`pmp-study-backup-${day()}.json`;document.body.appendChild(link);link.click();link.remove();setTimeout(()=>URL.revokeObjectURL(url),1000);
    if($('backup-status'))$('backup-status').textContent='Backup downloaded. Keep it somewhere you can find it.';
    return snapshot;
  }
  function validateBackup(backup) {
    if(!backup||backup.format!=='pmp-professor-backup'||backup.version!==1||backup.study?.version!==1||!backup.practice)throw new Error('Choose a backup exported from this app.');
    const s=backup.study,p=backup.practice;
    if(!Array.isArray(s.attempts)||s.attempts.length>2000||!s.completed||typeof s.completed!=='object'||!s.reviews||typeof s.reviews!=='object')throw new Error('This backup is incomplete.');
    const validAttempt=a=>a&&typeof a.questionId==='string'&&typeof a.question==='string'&&typeof a.chosen==='string'&&typeof a.correctAnswer==='string'&&typeof a.feedback==='string'&&typeof a.correct==='boolean'&&Number.isFinite(a.at)&&['People','Process','Business'].includes(a.domain);
    if(!s.attempts.every(validAttempt)||!Object.values(s.reviews).every(r=>r&&Number.isInteger(r.box)&&r.box>=1&&r.box<=5&&Number.isFinite(r.due)&&validAttempt(r.firstMiss)&&validAttempt(r.latestMiss)))throw new Error('The answer history in this backup is invalid.');
    if(!['xp','answered','correct','streak'].every(key=>Number.isFinite(p[key])&&p[key]>=0)||p.correct>p.answered||!Array.isArray(p.badges)||!p.domStats)throw new Error('The practice totals in this backup are invalid.');
    const preferences={minutes:[5,10,15,25].includes(s.preferences?.minutes)?s.preferences.minutes:10,examDate:/^\d{4}-\d{2}-\d{2}$/.test(s.preferences?.examDate)?s.preferences.examDate:'',motion:s.preferences?.motion!==false};
    const completed={};
    content.missions.forEach(m=>{const done=s.completed[m.id];if(done&&Number.isInteger(done.firstScore)&&done.firstScore>=0&&done.firstScore<=m.steps.length)completed[m.id]={...done};});
    const cleaned={...fresh(),...s,preferences,completed,daily:dailyCounts(s.daily),rewarded:rewardCounts(s.rewarded)};
    function validRun(run){
      if(!run)return null;
      let m=missionById(run.id);
      if(run.review&&Array.isArray(run.reviewContent?.steps)){
        const steps=run.reviewContent.steps.map(step=>{const item=questionForId(step.reviewId);return item?{...item,id:step.reviewId,reviewId:step.reviewId}:null;});
        if(steps.some(step=>!step)||!steps.length||steps.length>20)return null;
        m={id:'scheduled-review',title:'A second look, a little wiser',minutes:preferences.minutes,domain:'Mixed',conceptId:'review',briefing:'Revisit the decisions you found difficult. Your original mistakes stay saved, even after you correct them.',lesson:'Read the situation again before answering. Look for the clue you missed last time, then check why each action fits or does not fit. A successful review moves the next review further into the future.',steps};run={...run,reviewContent:m};
      }
      if(!m||!['briefing','question','complete'].includes(run.phase)||!Array.isArray(run.queue)||run.queue.length>200||!run.queue.every(i=>Number.isInteger(i)&&i>=0&&i<m.steps.length)||!Number.isInteger(run.position)||run.position<0||run.position>=run.queue.length||!Array.isArray(run.answers)||!run.firstAnswers||!Array.isArray(run.solved))return null;
      const permutation=order=>Array.isArray(order)&&order.length===4&&new Set(order).size===4&&order.every(i=>Number.isInteger(i)&&i>=0&&i<4);
      if(run.order!==null&&!permutation(run.order))return null;
      if(run.answers.length<run.position||run.answers.length>run.position+1||run.answers.length>run.queue.length)return null;
      if(run.answers.some((a,i)=>!a||!Number.isInteger(a.choice)||a.choice<0||a.choice>3||a.stepIndex!==run.queue[i]||!permutation(a.order)))return null;
      const stepIds=new Set(m.steps.map(step=>step.id));
      if(Object.entries(run.firstAnswers).some(([id,a])=>!stepIds.has(id)||!a||!Number.isInteger(a.choice)||a.choice<0||a.choice>3||typeof a.correct!=='boolean'))return null;
      if(new Set(run.solved).size!==run.solved.length||run.solved.some(i=>!Number.isInteger(i)||i<0||i>=m.steps.length))return null;
      if(run.phase==='complete'&&(run.solved.length!==m.steps.length||run.answers.length!==run.queue.length))return null;
      return {...run,hint:run.hint===true,completionXP:run.completionXP===30?30:0,startedAt:Number.isFinite(run.startedAt)?run.startedAt:Date.now()};
    }
    cleaned.mission=validRun(s.mission);cleaned.suspended={};
    Object.entries(s.suspended||{}).forEach(([id,run])=>{const valid=validRun(run);if(valid)cleaned.suspended[id]=valid;});
    const stats={};
    for(const domain of ['People','Process','Business']){
      const row=p.domStats[domain];
      if(!Array.isArray(row)||row.length!==2||!row.every(n=>Number.isFinite(n)&&n>=0)||row[1]>row[0])throw new Error('The domain totals in this backup are invalid.');
      stats[domain]=row.slice();
    }
    const misses={};
    for(const [id,r] of Object.entries(p.misses||{})){if(/^\d+$/.test(id)&&QB[Number(id)]&&r&&Number.isInteger(r.box)&&r.box>=1&&r.box<=4&&Number.isFinite(r.due))misses[id]={box:r.box,due:r.due};}
    const numeric=(value,fallback=0)=>Number.isFinite(value)&&value>=0?value:fallback;
    const practice={xp:p.xp,answered:p.answered,correct:p.correct,streak:p.streak,lastDay:/^\d{4}-\d{2}-\d{2}$/.test(p.lastDay)?p.lastDay:null,best:{},badges:p.badges.filter(id=>BADGES.some(b=>b.id===id)),seen:{},daily:{date:/^\d{4}-\d{2}-\d{2}$/.test(p.daily?.date)?p.daily.date:null,count:numeric(p.daily?.count),goal:[5,10,15,25].includes(p.daily?.goal)?p.daily.goal:15},lightningBest:numeric(p.lightningBest),misses,freezes:Math.min(2,numeric(p.freezes,1)),mastered:numeric(p.mastered),domStats:stats};
    for(const [key,value] of Object.entries(p.best||{}))if(Number.isFinite(value)&&value>=0&&value<=100)practice.best[key]=value;
    for(const id of Object.keys(p.seen||{}))if(/^\d+$/.test(id)&&QB[Number(id)])practice.seen[id]=1;
    return {study:cleaned,practice,quiz:backup.quiz};
  }
  async function restoreBackup(event) {
    const file=event.target.files[0];if(!file)return;
    const status=$('backup-status');
    if(file.size>8*1024*1024){status.textContent='This file is too large to be an app backup.';event.target.value='';return;}
    try{
      const backup=validateBackup(JSON.parse(await file.text()));
      const dialog=document.createElement('dialog');
      dialog.innerHTML='<h2>Restore this backup?</h2><p>This replaces the progress currently saved in this browser. Export the current progress first if you want to keep both copies.</p><div class="row"><button class="btn sec" data-cancel>Keep current</button><button class="btn" data-restore>Restore backup</button></div>';
      document.body.appendChild(dialog);
      dialog.querySelector('[data-cancel]').onclick=()=>{dialog.close();dialog.remove();};
      dialog.querySelector('[data-restore]').onclick=()=>{
        data=backup.study;st=backup.practice;session=null;stopTimer();
        try{if(backup.quiz)localStorage.setItem(QUIZ_KEY,JSON.stringify(backup.quiz));else localStorage.removeItem(QUIZ_KEY);}catch(_){notice();}
        applyPreferences();save();persist();buildAreas();renderLibrary();refreshHeader();dialog.close();dialog.remove();go('home');miniToast('Your backup is restored');
      };
      dialog.addEventListener('cancel',()=>dialog.remove());dialog.showModal();
    }catch(error){status.textContent=error instanceof SyntaxError?'This file is not valid JSON. Choose an exported backup.':error.message;}
    event.target.value='';
  }
  function renderAwards() {
    const count=completedCount(),retained=Object.values(data.reviews).filter(r=>r.box>=5).length;
    $('missionAwards').innerHTML=`<div class="section-head"><h2>Mission milestones</h2></div><div class="study-panel"><div class="panel-meta"><b>${count} / 10 missions cleared</b><span>${retained} retained reviews</span></div><p class="study-caption">First completion earns 30 XP. Answer XP is capped once per mission decision per day. Repeat missions stay open for practice.</p><div class="study-track"><span style="width:${count*10}%"></span></div><button class="text-action" data-study="missions">Continue your journey →</button></div>`;
  }
  function previewProfessor() {
    const states=[['welcome','Welcome'],['think','Think'],['hint','Hint'],['explain','Explain'],['celebrate','Celebrate'],['retry','Try again'],['great-job','Great job!']];
    $('professor-preview').innerHTML=`${coach('great-job','Great job!','Seven expressions, with a distinct applause animation for clearing a mission.')}<div class="filter-row" role="group" aria-label="Preview professor animations">${states.map(([state,label])=>`<button data-study="preview-state" data-id="${state}">${label}</button>`).join('')}</div>`;
  }
  function resetConfirmed() {
    $('reset-dialog').close();data=fresh();session=null;stopTimer();
    try{localStorage.removeItem(QUIZ_KEY);}catch(_){notice();}
    resetProgress();persist();applyPreferences();renderLibrary();go('home');
  }
  function onNavigate(id) {
    if(id==='home')renderHome();
    if(id==='missions')renderMissions();
    if(id==='mission')renderMission();
    if(id==='mistakes')renderMistakes();
    if(id==='achievements')renderAwards();
  }
  function handleAction(event) {
    const button=event.target.closest('[data-study]');if(!button||button.disabled)return;
    const action=button.dataset.study,id=button.dataset.id;
    if(['home','missions','mistakes'].includes(action)){go(action);return;}
    if(action==='start-mission')startMission(id);
    else if(action==='resume-mission')resumeMission();
    else if(action==='begin-mission'){data.mission.phase='question';persist();renderMission();window.scrollTo(0,0);}
    else if(action==='mission-answer')answerMission(Number(button.dataset.choice));
    else if(action==='mission-next')nextMissionQuestion();
    else if(action==='mission-hint'){data.mission.hint=true;persist();renderMission();}
    else if(action==='quick')start('quick');
    else if(action==='plan')openPlan();
    else if(action==='due-review')startDueReview(button.dataset.domain||'All');
    else if(action==='practice-topic')practiceTopic(id);
    else if(action==='filter-mistakes'){mistakeFilter=id;renderMistakes();}
    else if(action==='practice-hint')practiceHint();
    else if(action==='resume-quiz')resumeQuiz();
    else if(action==='export')exportBackup();
    else if(action==='import')$('study-backup-file').click();
    else if(action==='reset')$('reset-dialog').showModal();
    else if(action==='preview-professor')previewProfessor();
    else if(action==='preview-state')$('professor-preview').querySelector('.professor').outerHTML=avatar(id);
    else if(action==='replay-great-job')$('mission').querySelector('.professor').outerHTML=avatar('great-job');
    else if(action==='install'){
      if(installPrompt){installPrompt.prompt();installPrompt=null;}
      else $('install-status').textContent='iPhone/iPad: Safari → Share → Add to Home Screen. Android/desktop: browser menu → Install app. Your browser controls whether installation is available.';
    }
  }
  function init() {
    applyPreferences();renderLibrary();renderHome();
    document.addEventListener('click',handleAction);
    window.addEventListener('beforeinstallprompt',event=>{event.preventDefault();installPrompt=event;});
    window.addEventListener('pagehide',()=>{if(!$('quiz').hidden)persistQuiz();persist();});
    document.addEventListener('visibilitychange',()=>{
      if(document.hidden){if(!$('quiz').hidden)persistQuiz();persist();}
      else if(!$('home').hidden)renderHome();
    });
  }
  window.Study={onNavigate,renderHome,openPlan,startMission,resumeMission,answerMission,nextMissionQuestion,startDueReview,practiceTopic,recordPractice,onPracticeAnswer,feedbackHTML,questionReady,persistQuiz,resumeQuiz,sessionFinished,renderResultCoach,notice,exportBackup,validateBackup,resetConfirmed,init,
    beginMission(){if(data.mission){data.mission.phase='question';persist();renderMission();}},
    showMistakes(){mistakeFilter='All';go('mistakes');},
    getState(){return JSON.parse(JSON.stringify(data));}};
  init();
})();
