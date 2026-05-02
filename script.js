// ══ DATA ══════════════════════════════════════════════
const equipment = [
  { img:'images/Trademill.png', name:'Treadmill', cat:'cardio', muscles:'Cardio · Legs', desc:'Diamond 9 commercial treadmills. Variable speed and incline.' },
  { img:'images/Cycle.png', name:'Spin Bike', cat:'cardio', muscles:'Cardio · Glutes', desc:'Precision flywheel spin bikes. Low impact, high burn.' },
  { img:'images/benchpressangle.png', name:'Incline Bench Press', cat:'upper', muscles:'Upper Chest · Shoulders', desc:'Heavy-duty angled press. Targets upper pecs and front delts.' },
  { img:'images/bicepcurl.png', name:'Preacher Curl', cat:'upper', muscles:'Biceps · Brachialis', desc:'Full bicep isolation. No momentum, strict contraction.' },
  { img:'images/shoulder press.png', name:'Lat Pulldown Machine', cat:'upper', muscles:'Lats · Rear Delts', desc:'Dual-function cable station for pulling and flying movements.' },
  { img:'images/hanging bar.png', name:'Power Rack', cat:'compound', muscles:'Full Body', desc:'Sterling heavy-gauge power cage. Squats, deadlifts, overhead.' },
  { img:'images/upper body.png', name:'Overhead Press Machine', cat:'upper', muscles:'Shoulders · Triceps', desc:'Guided press path for safe, heavy shoulder work.' },
  { img:'images/pull up bar.png', name:'Smith Machine', cat:'compound', muscles:'Full Body', desc:'Counter-balanced Smith press with pull-up bar attachment.' },
  { img:'images/Screenshot 2026-05-01 212834.png', name:'Smith + Bench Combo', cat:'compound', muscles:'Chest · Shoulders · Legs', desc:'Commercial Smith press with adjustable bench and leg roller.' },
  { img:'images/Screenshot 2026-05-01 212906.png', name:'Prone Leg Curl', cat:'lower', muscles:'Hamstrings · Glutes', desc:'Lying hamstring isolation. Selectorized weight stack.' },
  { img:'images/Screenshot 2026-05-01 212939.png', name:'Leg Extension', cat:'lower', muscles:'Quadriceps', desc:'Full-range quad extension. Targets teardrop and VMO.' },
  { img:'images/Screenshot 2026-05-01 213021.png', name:'Upper Body Station', cat:'upper', muscles:'Chest · Back', desc:'Multi-function plate-loaded unit for pressing and rowing.' },
  { img:'images/Screenshot 2026-05-01 213055.png', name:'Machine Row', cat:'upper', muscles:'Mid Back · Biceps', desc:'Seated row with independent arms. Builds lat thickness.' },
  { img:'images/Screenshot 2026-05-01 213145.png', name:'Cable Crossover', cat:'compound', muscles:'Chest · Shoulders · Arms', desc:'Full-range cables. Flys, pushdowns, pulls — infinite angles.' },
  { img:'images/Screenshot 2026-05-01 213221.png', name:'Functional Trainer', cat:'compound', muscles:'Full Body', desc:'Dual-pulley functional trainer. Sports performance and rehab.' }
];

const muscleData = {
  chest:{ name:'Chest', machines:[{n:'Incline Bench Press',d:'Upper chest focus'},{n:'Cable Crossover',d:'Inner chest isolation'},{n:'Smith Machine',d:'Flat and incline press'}], exercises:[{n:'Barbell Bench Press',s:'4 x 8–10 reps'},{n:'Incline Dumbbell Press',s:'3 x 10–12 reps'},{n:'Cable Fly',s:'3 x 12–15 reps'},{n:'Push-Up Superset',s:'3 x failure'}] },
  shoulders:{ name:'Shoulders', machines:[{n:'Overhead Press Machine',d:'Front and lateral deltoids'},{n:'Cable Crossover',d:'Lateral raises'},{n:'Smith Machine',d:'Military press'}], exercises:[{n:'Seated Overhead Press',s:'4 x 8–10 reps'},{n:'Lateral Raise',s:'4 x 12–15 reps'},{n:'Front Raise',s:'3 x 12 reps'},{n:'Rear Delt Fly',s:'3 x 15 reps'}] },
  biceps:{ name:'Biceps', machines:[{n:'Preacher Curl Machine',d:'Full isolation, peak contraction'},{n:'Cable Crossover',d:'Cable curls at any angle'}], exercises:[{n:'Barbell Curl',s:'4 x 8–10 reps'},{n:'Preacher Curl',s:'3 x 10–12 reps'},{n:'Hammer Curl',s:'3 x 12 reps'},{n:'Cable Curl',s:'3 x 15 reps'}] },
  triceps:{ name:'Triceps', machines:[{n:'Cable Crossover',d:'Pushdowns and overhead'},{n:'Smith Machine',d:'Close-grip bench press'}], exercises:[{n:'Tricep Pushdown',s:'4 x 12–15 reps'},{n:'Overhead Extension',s:'3 x 10–12 reps'},{n:'Close-Grip Bench',s:'3 x 8–10 reps'},{n:'Dips',s:'3 x failure'}] },
  abs:{ name:'Abs & Core', machines:[{n:'Functional Trainer',d:'Cable crunches and rotations'},{n:'Decline Bench',d:'Decline sit-ups'}], exercises:[{n:'Cable Crunch',s:'4 x 15–20 reps'},{n:'Plank',s:'3 x 60 seconds'},{n:'Leg Raise',s:'3 x 15 reps'},{n:'Russian Twist',s:'3 x 20 reps'}] },
  lats:{ name:'Lats', machines:[{n:'Lat Pulldown Machine',d:'Wide-grip pulldowns'},{n:'Machine Row',d:'Seated cable rows'},{n:'Functional Trainer',d:'Single-arm pulls'}], exercises:[{n:'Wide-Grip Pulldown',s:'4 x 10–12 reps'},{n:'Seated Cable Row',s:'4 x 10–12 reps'},{n:'Single-Arm Row',s:'3 x 12 each'},{n:'Pull-Up',s:'3 x failure'}] },
  traps:{ name:'Traps', machines:[{n:'Machine Row',d:'Upper back shrugs'},{n:'Cable Crossover',d:'Face pulls'}], exercises:[{n:'Barbell Shrug',s:'4 x 12–15 reps'},{n:'Face Pull',s:'4 x 15 reps'},{n:'Upright Row',s:'3 x 12 reps'}] },
  midback:{ name:'Mid Back', machines:[{n:'Machine Row',d:'Mid back thickness'},{n:'Lat Pulldown Machine',d:'Close-grip rowing'}], exercises:[{n:'Bent-Over Row',s:'4 x 8–10 reps'},{n:'Machine Row',s:'4 x 12 reps'},{n:'T-Bar Row',s:'3 x 10 reps'}] },
  forearms:{ name:'Forearms', machines:[{n:'Preacher Curl Machine',d:'Reverse curls'},{n:'Cable Crossover',d:'Wrist curls'}], exercises:[{n:'Wrist Curl',s:'3 x 20 reps'},{n:'Reverse Curl',s:'3 x 15 reps'},{n:'Farmer Carry',s:'3 x 40m'}] },
  quads:{ name:'Quadriceps', machines:[{n:'Leg Extension',d:'Full quad isolation'},{n:'Smith Machine',d:'Front squats'},{n:'Power Rack',d:'Barbell squats'}], exercises:[{n:'Barbell Squat',s:'4 x 8–10 reps'},{n:'Leg Extension',s:'4 x 12–15 reps'},{n:'Hack Squat',s:'3 x 10 reps'},{n:'Lunges',s:'3 x 12 each leg'}] },
  hamstrings:{ name:'Hamstrings', machines:[{n:'Prone Leg Curl',d:'Full hamstring isolation'},{n:'Power Rack',d:'Romanian deadlifts'}], exercises:[{n:'Prone Leg Curl',s:'4 x 12–15 reps'},{n:'Romanian Deadlift',s:'4 x 8–10 reps'},{n:'Stiff-Leg Deadlift',s:'3 x 10 reps'}] },
  glutes:{ name:'Glutes', machines:[{n:'Power Rack',d:'Hip thrusts and squats'},{n:'Prone Leg Curl',d:'Glute-ham raises'}], exercises:[{n:'Hip Thrust',s:'4 x 12 reps'},{n:'Bulgarian Split Squat',s:'3 x 10 each'},{n:'Glute Kickback',s:'3 x 15 reps'}] },
  calves:{ name:'Calves', machines:[{n:'Leg Press',d:'Calf raises'},{n:'Smith Machine',d:'Standing calf raises'}], exercises:[{n:'Standing Calf Raise',s:'4 x 20 reps'},{n:'Seated Calf Raise',s:'4 x 20 reps'},{n:'Single-Leg Calf Raise',s:'3 x 15 each'}] }
};

const popularTimes = [
  [5,8,12,18,22,28,35,42,55,65,75,68,58,42,32,22],
  [5,10,15,22,28,35,45,55,68,74,70,60,50,40,30,20],
  [5,8,18,25,32,40,50,60,72,80,72,62,52,42,30,22],
  [5,10,20,28,35,45,55,68,80,85,76,65,55,44,34,24],
  [5,8,12,18,22,28,32,38,48,55,46,36,26,20,15,10],
  [12,22,38,52,68,78,88,95,90,82,72,62,52,42,32,22],
  [18,28,42,58,68,74,80,85,80,72,62,52,42,32,24,15]
];
const hours = ['6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21'];

const reviews = [
  { name:'Rakib Hassan', stars:5, text:'Best gym in Mirpur — hands down. New equipment, AC works, trainers know their stuff.', src:'Google Maps' },
  { name:'Sadia Islam', stars:5, text:'Clean, organized and the treadmills are commercial grade. Six months in, zero complaints.', src:'Google Maps' },
  { name:'Arif Ahmed', stars:4, text:'Great place to train seriously. Crowded around 6–8 PM but the energy is electric.', src:'Google Maps' },
  { name:'Tanvir Hossain', stars:5, text:'The power rack and Smith machine alone justify the membership. Premium feel throughout.', src:'Facebook' },
  { name:'Naima Khan', stars:4, text:'Trainers actually care. The machines are diverse and well-maintained. Highly recommend.', src:'Facebook' },
  { name:'Sabbir Rahman', stars:5, text:'Incredible atmosphere. Focused, motivated crew. My strength numbers have gone through the roof.', src:'Google Maps' },
  { name:'Mithun Roy', stars:4, text:'Value-to-quality ratio is off the charts. Beats gyms charging triple.', src:'Facebook' },
  { name:'Farhan Haque', stars:5, text:'Spin bikes and treadmills are proper commercial spec. You feel it the moment you walk in.', src:'Google Maps' }
];

const aiKnowledge = {
  beginner: `Here is your RDDL Beginner Plan (3 days/week):\n\nDay 1 — Push:\n• Incline Bench Press: 3x10\n• Overhead Press Machine: 3x12\n• Cable Crossover: 3x15\n\nDay 2 — Pull:\n• Lat Pulldown: 3x10\n• Machine Row: 3x12\n• Preacher Curl: 3x12\n\nDay 3 — Legs:\n• Leg Extension: 3x15\n• Prone Leg Curl: 3x15\n• Treadmill: 20 min cardio\n\nRest 60–90 seconds between sets. Progressive overload every week.`,
  chest: `Best machines at RDDL for chest:\n\n1. Incline Bench Press — upper chest priority\n2. Smith Machine — flat or incline press\n3. Cable Crossover — inner chest isolation\n\nProgram:\n• Incline Bench: 4x8-10\n• Smith Flat Press: 3x10-12\n• Cable Fly: 3x15\n\nTip: Squeeze at the top. Control the negative.`,
  nutrition: `Pre-Workout Nutrition at RDDL:\n\n45–60 min before training:\n• Carbs: rice, banana, oats\n• Protein: eggs, Greek yogurt, shake\n• Avoid heavy fats pre-workout\n\nDuring: Water — minimum 500ml/hour\n\nPost-workout (within 30 min):\n• Protein: 25–40g\n• Fast carbs: fruit, white rice\n\nFor muscle gain: eat in a calorie surplus. For fat loss: moderate deficit with high protein.`,
  frequency: `Training Frequency Guide:\n\nBeginner (0–6 months): 3 days/week\nIntermediate (6–24 months): 4–5 days/week\nAdvanced (2+ years): 5–6 days/week\n\nMinimum effective dose:\n• Each muscle group: 2x per week\n• 10–20 sets per muscle per week\n\nRest is when you grow. Never skip recovery.`,
  treadmill: `RDDL Treadmill Guide (Diamond 9):\n\n1. Step on the belt before starting\n2. Start at 3–4 km/h for warm-up\n3. Incline 1–2% mimics outdoor running\n4. Fat burn zone: 60–70% max heart rate\n5. HIIT: 30s sprint / 90s walk x 8 rounds\n\nMax speed varies by model. Hold rails only if needed — free arm swing burns more calories.\n\nClean down with cloth after use.`
};

// ══ NAV SCROLL ══════════════════════════════════════
window.addEventListener('scroll', () => {
  document.getElementById('navbar').classList.toggle('scrolled', window.scrollY > 60);
});

// ══ COUNTER ANIMATION ════════════════════════════════
const counterObs = new IntersectionObserver(entries => {
  if (!entries[0].isIntersecting) return;
  document.querySelectorAll('.hstat-n').forEach(el => {
    const target = +el.dataset.target;
    let cur = 0;
    const step = Math.ceil(target / 50);
    const t = setInterval(() => {
      cur = Math.min(cur + step, target);
      el.textContent = cur;
      if (cur >= target) clearInterval(t);
    }, 25);
  });
  counterObs.disconnect();
}, { threshold: 0.3 });
const heroEl = document.querySelector('#hero');
if (heroEl) counterObs.observe(heroEl);

// ══ EQUIPMENT ════════════════════════════════════════
function renderEquipment(cat) {
  const grid = document.getElementById('eq-grid');
  grid.innerHTML = equipment.map(e => `
    <div class="eq-card ${cat !== 'all' && e.cat !== cat ? 'hidden' : ''}">
      <img src="${e.img}" alt="${e.name}" loading="lazy">
      <div class="eq-ov">
        <div class="eq-cat">${e.cat}</div>
        <div class="eq-name">${e.name}</div>
        <div class="eq-muscles">${e.muscles}</div>
        <div class="eq-desc">${e.desc}</div>
      </div>
    </div>`).join('');
}
renderEquipment('all');
document.querySelectorAll('.eq-filter').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.eq-filter').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    renderEquipment(btn.dataset.cat);
  });
});

// ══ MUSCLE WIKI GRID ════════════════════════════════════
const mwData = [
  { name: 'Chest', desc: 'Pectorals, Upper & Lower Chest', link: 'https://musclewiki.com/directory/chest' },
  { name: 'Shoulders', desc: 'Deltoids: Front, Lateral, Rear', link: 'https://musclewiki.com/directory/shoulders' },
  { name: 'Biceps', desc: 'Biceps Brachii & Brachialis', link: 'https://musclewiki.com/directory/biceps' },
  { name: 'Triceps', desc: 'Triceps Brachii, all 3 heads', link: 'https://musclewiki.com/directory/triceps' },
  { name: 'Back', desc: 'Lats, Rhomboids, Traps, Lower Back', link: 'https://musclewiki.com/directory/back' },
  { name: 'Legs', desc: 'Quads, Hamstrings, Glutes, Calves', link: 'https://musclewiki.com/directory/legs' },
  { name: 'Core', desc: 'Abs and Obliques', link: 'https://musclewiki.com/directory/core' },
  { name: 'Forearms', desc: 'Wrist flexors and extensors', link: 'https://musclewiki.com/directory/forearms' }
];

const mwGrid = document.getElementById('mw-grid');
if (mwGrid) {
  mwGrid.innerHTML = mwData.map(m => `
    <div class="mw-card editable-block">
      <div>
        <div class="mw-title" contenteditable="false">${m.name}</div>
        <div class="mw-desc" contenteditable="false">${m.desc}</div>
      </div>
      <a href="${m.link}" target="_blank" class="mw-btn">View Exercises</a>
    </div>
  `).join('');
}

// ══ FB EMBED ═════════════════════════════════════════
function renderFbEmbed() {
  const container = document.getElementById('fb-embed-container');
  if (!container) return;
  const savedEmbed = localStorage.getItem('rddlFbEmbed') || '<p style="color:var(--gray)">No update posted yet.</p>';
  container.innerHTML = savedEmbed;
}
renderFbEmbed();

// ══ CMS APPLICATOR ═════════════════════════════════════
const cmsData = JSON.parse(localStorage.getItem('rddlCMS'));
if (cmsData) {
  const hTitle = document.querySelector('.hero-title');
  if (hTitle && cmsData.heroTitle) hTitle.innerHTML = cmsData.heroTitle;
  const hSub = document.querySelector('.hero-sub');
  if (hSub && cmsData.heroSub) hSub.innerHTML = cmsData.heroSub;
  
  // Apply visual overrides
  const overrides = JSON.parse(localStorage.getItem('rddlVisual') || '{}');
  for (const [selector, cssText] of Object.entries(overrides)) {
    const el = document.querySelector(selector);
    if (el) {
      el.style.cssText += cssText;
    }
  }
}

// ══ CROWD METER ═══════════════════════════════════════
function getCurrentCrowd() {
  const now = new Date();
  const day = now.getDay(); // 0=Sun,6=Sat
  const hour = now.getHours();
  const bdDay = day === 0 ? 6 : day - 1; // Mon=0
  if (hour < 6) return { pct: 0, label: 'Closed', color: '#444' };
  const idx = Math.min(Math.max(hour - 6, 0), 15);
  const raw = popularTimes[bdDay][idx];
  let label, color;
  if (raw < 30) { label = 'Not Busy'; color = '#44cc44'; }
  else if (raw < 60) { label = 'Moderate'; color = '#ffc800'; }
  else if (raw < 80) { label = 'Busy'; color = '#ff8800'; }
  else { label = 'Very Busy'; color = '#D62828'; }
  return { pct: raw, label, color };
}

function updateCrowdMeter() {
  const { pct, label, color } = getCurrentCrowd();
  const pctEl = document.getElementById('crowd-pct');
  const lblEl = document.getElementById('crowd-label');
  const arc = document.getElementById('crowd-arc-fill');
  if (!pctEl) return;
  pctEl.textContent = pct + '%';
  lblEl.textContent = label;
  pctEl.style.color = color;
  // Arc: total length ~282.74, offset from 282.74 down to (1 - pct/100)*282.74
  const offset = 282.74 - (pct / 100) * 282.74;
  arc.style.strokeDashoffset = offset;
  arc.style.stroke = color;
}
updateCrowdMeter();
setInterval(updateCrowdMeter, 60000);

// ══ POPULAR TIMES CHART ═══════════════════════════════
let activeDay = new Date().getDay();
activeDay = activeDay === 0 ? 6 : activeDay - 1;

function renderPopChart(dayIdx) {
  const chart = document.getElementById('pop-chart');
  if (!chart) return;
  const data = popularTimes[dayIdx];
  const max = Math.max(...data);
  const nowHour = new Date().getHours();
  chart.innerHTML = data.map((val, i) => {
    const h = i + 6;
    const isNow = h === nowHour;
    const pct = Math.round((val / max) * 100);
    return `<div class="pop-bar ${isNow ? 'now' : ''}" style="height:${pct}%" data-h="${h}:00 — ${val}% full"></div>`;
  }).join('');
}
renderPopChart(activeDay);

document.querySelectorAll('.pd').forEach(btn => {
  if (+btn.dataset.d === activeDay) btn.classList.add('active');
  btn.addEventListener('click', () => {
    document.querySelectorAll('.pd').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    renderPopChart(+btn.dataset.d);
  });
});

// ══ AI TRAINER ═════════════════════════════════════════
const aiResponses = {
  keywords: {
    beginner: aiKnowledge.beginner,
    plan: aiKnowledge.beginner,
    workout: aiKnowledge.beginner,
    chest: aiKnowledge.chest,
    pec: aiKnowledge.chest,
    bench: aiKnowledge.chest,
    eat: aiKnowledge.nutrition,
    food: aiKnowledge.nutrition,
    nutrition: aiKnowledge.nutrition,
    diet: aiKnowledge.nutrition,
    protein: aiKnowledge.nutrition,
    'pre-workout': aiKnowledge.nutrition,
    days: aiKnowledge.frequency,
    frequency: aiKnowledge.frequency,
    'how often': aiKnowledge.frequency,
    treadmill: aiKnowledge.treadmill,
    cardio: aiKnowledge.treadmill,
    run: aiKnowledge.treadmill,
  }
};

function getAIResponse(q) {
  const lower = q.toLowerCase();
  for (const [key, val] of Object.entries(aiResponses.keywords)) {
    if (lower.includes(key)) return val;
  }
  if (lower.includes('machine') || lower.includes('equipment')) {
    return `RDDL has 15+ machines:\n\n- Treadmills (Diamond 9)\n- Spin Bikes\n- Power Rack\n- Smith Machine\n- Incline Bench Press\n- Preacher Curl\n- Lat Pulldown\n- Machine Row\n- Leg Extension\n- Prone Leg Curl\n- Cable Crossover\n- Functional Trainer\n- Upper Body Station\n- Overhead Press Machine\n- Smith + Bench Combo\n\nUse the Muscle Map above to find which machine targets your goal.`;
  }
  if (lower.includes('hour') || lower.includes('open') || lower.includes('time')) {
    return `RDDL Fitness Zone Hours:\n\nSaturday – Thursday: 6:00 AM – 10:00 PM\nFriday: Limited / Closed\n\nBest time to train: 6–9 AM (low crowd)\nPeak hours: 5–9 PM\n\nCheck the Live Data section for real-time crowd levels.`;
  }
  if (lower.includes('price') || lower.includes('membership') || lower.includes('cost') || lower.includes('fee')) {
    return `For current membership pricing, please contact RDDL directly:\n\nFacebook: facebook.com/Rddlfitnesszone\nLocation: Mirpur, Dhaka\nGoogle Maps: Search "RDDL Fitness Zone"\n\nPricing may vary by plan type and duration.`;
  }
  return `I can help you with:\n\n- Workout plans for any goal\n- Which machines to use\n- Nutrition and diet advice\n- Training frequency\n- Treadmill and cardio guides\n- Gym hours and crowd info\n\nTry asking: "Create a beginner plan" or "How do I build bigger arms?"`;
}

function addMessage(text, isUser) {
  const container = document.getElementById('ai-messages');
  const div = document.createElement('div');
  div.className = `ai-msg ${isUser ? 'user' : 'bot'}`;
  div.innerHTML = `<div class="ai-bubble">${text.replace(/\n/g,'<br>')}</div>`;
  container.appendChild(div);
  container.scrollTop = container.scrollHeight;
}

function sendAI() {
  const input = document.getElementById('ai-input');
  const q = input.value.trim();
  if (!q) return;
  addMessage(q, true);
  input.value = '';
  const typing = document.createElement('div');
  typing.className = 'ai-msg bot ai-typing';
  typing.innerHTML = '<div class="ai-bubble">...</div>';
  document.getElementById('ai-messages').appendChild(typing);
  setTimeout(() => {
    typing.remove();
    addMessage(getAIResponse(q), false);
  }, 700);
}

document.getElementById('ai-send').addEventListener('click', sendAI);
document.getElementById('ai-input').addEventListener('keydown', e => { if (e.key === 'Enter') sendAI(); });
document.querySelectorAll('.ai-quick').forEach(btn => {
  btn.addEventListener('click', () => {
    document.getElementById('ai-input').value = btn.dataset.q;
    sendAI();
  });
});

// ══ REVIEWS CAROUSEL ══════════════════════════════════
function renderReviews() {
  const storedRev = localStorage.getItem('rddlReviews');
  const allRev = storedRev ? JSON.parse(storedRev) : reviews;
  const track = document.getElementById('rev-track');
  if (!track) return;
  track.innerHTML = allRev.map(r => `
    <div class="rev-card">
      <div class="rev-stars">${'★'.repeat(r.stars)}${'☆'.repeat(5-r.stars)}</div>
      <p class="rev-text">"${r.text}"</p>
      <div class="rev-author">${r.name}</div>
      <div class="rev-src">${r.src || r.source || 'Google Maps'}</div>
    </div>`).join('');
  const dots = document.getElementById('rev-dots');
  const total = Math.ceil(allRev.length / 3);
  dots.innerHTML = Array(total).fill(0).map((_, i) =>
    `<div class="rev-dot ${i===0?'active':''}" data-i="${i}"></div>`).join('');
  dots.querySelectorAll('.rev-dot').forEach(d => d.addEventListener('click', () => goRev(+d.dataset.i)));
}
let revIdx = 0;
function goRev(i) {
  const cards = document.querySelectorAll('.rev-card');
  if (!cards.length) return;
  const max = Math.ceil(cards.length / 3) - 1;
  revIdx = Math.max(0, Math.min(i, max));
  const w = cards[0].offsetWidth + 20;
  document.getElementById('rev-track').style.transform = `translateX(-${revIdx * w * 3}px)`;
  document.querySelectorAll('.rev-dot').forEach((d, j) => d.classList.toggle('active', j === revIdx));
}
document.getElementById('rev-next').addEventListener('click', () => goRev(revIdx + 1));
document.getElementById('rev-prev').addEventListener('click', () => goRev(revIdx - 1));
renderReviews();
