// ── Equipment Data ─────────────────────────────────
const equipment = [
  {
    img: 'images/Trademill.png',
    name: 'Treadmill',
    muscles: 'Cardio · Legs · Core',
    desc: 'Diamond 9 commercial-grade treadmills. Variable speed and incline. Built for endurance training.'
  },
  {
    img: 'images/Cycle.png',
    name: 'Spinning Bike',
    muscles: 'Cardio · Glutes · Hamstrings',
    desc: 'Precision-flywheel spin bikes. Low impact, high caloric burn. Ideal for HIIT and steady-state cardio.'
  },
  {
    img: 'images/benchpressangle.png',
    name: 'Incline Bench Press',
    muscles: 'Upper Chest · Front Deltoids',
    desc: 'Heavy-duty angled press station. Targets upper pec fibers and front shoulders with maximum stability.'
  },
  {
    img: 'images/bicepcurl.png',
    name: 'Preacher Curl Machine',
    muscles: 'Biceps · Brachialis',
    desc: 'Isolates the bicep completely. Eliminates momentum for strict peak contraction on every rep.'
  },
  {
    img: 'images/shoulder press.png',
    name: 'Lat Pulldown & Fly Machine',
    muscles: 'Lats · Chest · Rear Delts',
    desc: 'Dual-function cable station. Wide-grip pulldowns and cable flys. Full upper-body pulling power.'
  },
  {
    img: 'images/hanging bar.png',
    name: 'Power Rack',
    muscles: 'Full Body · Compound Lifts',
    desc: 'Sterling heavy-gauge power cage. Squats, deadlifts, overhead press. The throne of strength training.'
  },
  {
    img: 'images/upper body.png',
    name: 'Overhead Press Machine',
    muscles: 'Shoulders · Triceps · Upper Back',
    desc: 'Guided press path for safe, heavy shoulder work. Adjustable seat. Develops thick, rounded delts.'
  },
  {
    img: 'images/pull up bar.png',
    name: 'Smith Machine',
    muscles: 'Full Body · Stabilizers',
    desc: 'Counter-balanced Smith press with pull-up bar and cable attachment. The most versatile station on the floor.'
  },
  {
    img: 'images/Screenshot 2026-05-01 212834.png',
    name: 'Smith Machine + Bench',
    muscles: 'Chest · Shoulders · Legs',
    desc: 'Commercial Smith press with adjustable bench and leg roller. Handles compound and isolation movements alike.'
  },
  {
    img: 'images/Screenshot 2026-05-01 212906.png',
    name: 'Prone Leg Curl',
    muscles: 'Hamstrings · Glutes',
    desc: 'Lying leg curl machine with selectorized weight stack. Strict hamstring isolation for athletic development.'
  },
  {
    img: 'images/Screenshot 2026-05-01 212939.png',
    name: 'Leg Extension',
    muscles: 'Quadriceps',
    desc: 'Full-range quad extension machine. Develops the teardrop and VMO for strong, sculpted legs.'
  },
  {
    img: 'images/Screenshot 2026-05-01 213021.png',
    name: 'Upper Body Machine',
    muscles: 'Chest · Back · Core',
    desc: 'Multi-function upper-body plate-loaded unit. Heavy pressing and rowing patterns for dense muscle mass.'
  },
  {
    img: 'images/Screenshot 2026-05-01 213055.png',
    name: 'Machine Row',
    muscles: 'Mid Back · Rear Delts · Biceps',
    desc: 'Seated row station with independent arm movement. Builds thickness through the lats and rhomboids.'
  },
  {
    img: 'images/Screenshot 2026-05-01 213145.png',
    name: 'Cable Crossover',
    muscles: 'Chest · Shoulders · Arms',
    desc: 'Full-range cable system. Countless angle options for chest flys, tricep pushdowns and functional pulls.'
  },
  {
    img: 'images/Screenshot 2026-05-01 213221.png',
    name: 'Functional Trainer',
    muscles: 'Full Body · Athletic Performance',
    desc: 'Dual-pulley functional trainer. Sports performance, core, rehab. Infinite movement patterns.'
  }
];

// ── Popular Times Data (per day, 6AM–10PM) ────────
const popularTimes = [
  // Mon
  [10,15,20,25,30,35,40,50,60,70,80,65,55,40,30,25],
  // Tue
  [10,15,25,30,35,40,50,60,70,75,70,60,50,40,30,20],
  // Wed
  [10,20,30,35,40,50,55,65,75,80,70,60,50,40,30,25],
  // Thu
  [10,15,25,30,40,50,60,70,80,85,75,65,55,45,35,25],
  // Fri
  [5,10,15,20,25,30,35,40,50,55,45,35,25,20,15,10],
  // Sat
  [15,25,40,55,70,80,90,95,90,80,70,60,50,40,30,20],
  // Sun
  [20,30,45,60,70,75,80,85,80,70,60,50,40,30,25,15]
];
const hours = ['6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21'];

// ── Reviews ───────────────────────────────────────
const reviews = [
  { name: 'Rakib Hassan', stars: 5, text: 'Best gym in Mirpur — hands down. Equipment is new, AC works, trainers know what they are doing.', source: 'Google Maps' },
  { name: 'Sadia Islam', stars: 5, text: 'Clean, well-organized, and the treadmills are top quality. Been coming for 6 months and never looked back.', source: 'Google Maps' },
  { name: 'Arif Ahmed', stars: 4, text: 'Great place to train seriously. Gets a bit crowded around 6–8 PM but the energy is unreal.', source: 'Google Maps' },
  { name: 'Tanvir Hossain', stars: 5, text: 'The power rack and Smith machine alone are worth the membership. Facility feels premium.', source: 'Facebook' },
  { name: 'Naima Khan', stars: 4, text: 'Good trainers who give proper guidance. The machines are well-maintained and diverse.', source: 'Facebook' },
  { name: 'Sabbir Rahman', stars: 5, text: 'Incredible atmosphere. Everyone is focused and motivated. My strength has improved massively.', source: 'Google Maps' },
  { name: 'Mithun Roy', stars: 4, text: 'Value for money is very high. Equipment quality surpasses gyms that charge 3x the price.', source: 'Facebook' },
  { name: 'Farhan Haque', stars: 5, text: 'The spinning bikes and treadmills are commercial grade. You can feel the quality the moment you walk in.', source: 'Google Maps' }
];

// ── DOM Helpers ───────────────────────────────────
function el(id) { return document.getElementById(id); }

// ── Navbar scroll ─────────────────────────────────
window.addEventListener('scroll', () => {
  const nav = document.getElementById('navbar');
  nav.classList.toggle('scrolled', window.scrollY > 60);
});

// ── Stat counter animation ────────────────────────
function animateCounters() {
  document.querySelectorAll('.stat-num').forEach(el => {
    const target = +el.dataset.target;
    let current = 0;
    const step = Math.ceil(target / 60);
    const timer = setInterval(() => {
      current = Math.min(current + step, target);
      el.textContent = current;
      if (current >= target) clearInterval(timer);
    }, 20);
  });
}
const heroObserver = new IntersectionObserver(entries => {
  if (entries[0].isIntersecting) { animateCounters(); heroObserver.disconnect(); }
}, { threshold: 0.3 });
heroObserver.observe(document.querySelector('#hero'));

// ── Render Equipment ──────────────────────────────
function renderEquipment() {
  const grid = el('equipment-grid');
  grid.innerHTML = equipment.map(e => `
    <div class="eq-card">
      <img src="${e.img}" alt="${e.name}" loading="lazy">
      <div class="eq-overlay">
        <div class="eq-muscles">${e.muscles}</div>
        <div class="eq-name">${e.name}</div>
        <div class="eq-desc">${e.desc}</div>
      </div>
    </div>
  `).join('');
}

// ── Render Bar Chart ──────────────────────────────
let activeDay = 0;
function renderChart(dayIdx) {
  const chart = el('bar-chart');
  const data = popularTimes[dayIdx];
  const max = Math.max(...data);
  chart.innerHTML = data.map((val, i) => {
    const pct = Math.round((val / max) * 100);
    const isPeak = val >= max * 0.8;
    return `
      <div class="bar-col">
        <div class="bar-fill ${isPeak ? 'peak' : ''}"
          data-pct="${val}"
          style="height:${pct}%"></div>
        <div class="bar-label">${hours[i]}</div>
      </div>
    `;
  }).join('');
}

// ── Tabs ──────────────────────────────────────────
document.querySelectorAll('.tab-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
    btn.classList.add('active');
    el('tab-' + btn.dataset.tab).classList.add('active');
  });
});

// ── Day buttons ───────────────────────────────────
document.querySelectorAll('.day-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.day-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    activeDay = +btn.dataset.day;
    renderChart(activeDay);
  });
});

// ── Reviews Carousel ──────────────────────────────
let revIndex = 0;
function renderReviews() {
  const track = el('reviews-track');
  track.innerHTML = reviews.map(r => `
    <div class="review-card">
      <div class="review-stars">${Array(r.stars).fill('<div class="review-star"></div>').join('')}</div>
      <p class="review-text">"${r.text}"</p>
      <div class="review-author">${r.name}</div>
      <div class="review-source">${r.source}</div>
    </div>
  `).join('');
  const dots = el('rev-dots');
  const total = Math.ceil(reviews.length / 3);
  dots.innerHTML = Array(total).fill(0).map((_, i) => `<div class="rev-dot ${i === 0 ? 'active' : ''}" data-i="${i}"></div>`).join('');
  dots.querySelectorAll('.rev-dot').forEach(d => {
    d.addEventListener('click', () => goRev(+d.dataset.i));
  });
}
function goRev(i) {
  const max = Math.ceil(reviews.length / 3) - 1;
  revIndex = Math.max(0, Math.min(i, max));
  const cardWidth = document.querySelector('.review-card')?.offsetWidth + 24 || 404;
  el('reviews-track').style.transform = `translateX(-${revIndex * cardWidth * 3}px)`;
  document.querySelectorAll('.rev-dot').forEach((d, j) => d.classList.toggle('active', j === revIndex));
}
el('rev-next').addEventListener('click', () => goRev(revIndex + 1));
el('rev-prev').addEventListener('click', () => goRev(revIndex - 1));

// ── Init ──────────────────────────────────────────
renderEquipment();
renderChart(0);
renderReviews();
