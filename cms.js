if (localStorage.getItem('rddlAdmin') !== 'true') {
  window.location.href = 'admin.html';
}

function logout() {
  localStorage.removeItem('rddlAdmin');
  window.location.href = 'index.html';
}

const defaultCMS = {
  heroTitle: 'LEGACY',
  heroSub: 'The harder the battle — the sweeter the victory.',
  about1: 'RDDL Fitness Zone is Mirpur\'s elite strength and conditioning facility. Purpose-built for serious athletes and beginners who refuse to stay beginners — every machine, every inch of floor is engineered for results.',
  about2: '768 members. One goal. No excuses.'
};

const defaultReviews = [
  { name: 'Rakib Hassan', stars: 5, text: 'Best gym in Mirpur — hands down. Equipment is new, AC works, trainers know what they are doing.', source: 'Google Maps' },
  { name: 'Sadia Islam', stars: 5, text: 'Clean, well-organized, and the treadmills are top quality. Been coming for 6 months and never looked back.', source: 'Google Maps' },
  { name: 'Arif Ahmed', stars: 4, text: 'Great place to train seriously. Gets a bit crowded around 6–8 PM but the energy is unreal.', source: 'Google Maps' },
  { name: 'Tanvir Hossain', stars: 5, text: 'The power rack and Smith machine alone are worth the membership. Facility feels premium.', source: 'Facebook' },
  { name: 'Naima Khan', stars: 4, text: 'Good trainers who give proper guidance. The machines are well-maintained and diverse.', source: 'Facebook' }
];

if (!localStorage.getItem('rddlCMS')) localStorage.setItem('rddlCMS', JSON.stringify(defaultCMS));
if (!localStorage.getItem('rddlReviews')) localStorage.setItem('rddlReviews', JSON.stringify(defaultReviews));

function loadCMS() {
  const data = JSON.parse(localStorage.getItem('rddlCMS'));
  document.getElementById('cms-hero-title').value = data.heroTitle;
  document.getElementById('cms-hero-sub').value = data.heroSub;
  document.getElementById('cms-about1').value = data.about1;
  document.getElementById('cms-about2').value = data.about2;
  
  const fbEmbed = localStorage.getItem('rddlFbEmbed') || '';
  document.getElementById('cms-fb-embed').value = fbEmbed;
  
  renderReviewMgmt();
}

function renderReviewMgmt() {
  const reviews = JSON.parse(localStorage.getItem('rddlReviews'));
  const container = document.getElementById('review-mgmt');
  container.innerHTML = reviews.map((r, i) => `
    <div class="review-row">
      <div class="review-row-info">
        <div class="review-row-name">${r.name} — ${'★'.repeat(r.stars)}</div>
        <div class="review-row-text">"${r.text.substring(0, 80)}..."</div>
      </div>
      <button class="del-btn" onclick="deleteReview(${i})">Delete</button>
    </div>
  `).join('');
}

function deleteReview(i) {
  const reviews = JSON.parse(localStorage.getItem('rddlReviews'));
  reviews.splice(i, 1);
  localStorage.setItem('rddlReviews', JSON.stringify(reviews));
  renderReviewMgmt();
}

function addReview() {
  const name = document.getElementById('new-rev-name').value.trim();
  const stars = parseInt(document.getElementById('new-rev-stars').value);
  const text = document.getElementById('new-rev-text').value.trim();
  const source = document.getElementById('new-rev-source').value.trim();
  if (!name || !text) return;
  const reviews = JSON.parse(localStorage.getItem('rddlReviews'));
  reviews.push({ name, stars, text, source });
  localStorage.setItem('rddlReviews', JSON.stringify(reviews));
  document.getElementById('new-rev-name').value = '';
  document.getElementById('new-rev-text').value = '';
  renderReviewMgmt();
}

function saveAll() {
  const data = {
    heroTitle: document.getElementById('cms-hero-title').value,
    heroSub: document.getElementById('cms-hero-sub').value,
    about1: document.getElementById('cms-about1').value,
    about2: document.getElementById('cms-about2').value
  };
  localStorage.setItem('rddlCMS', JSON.stringify(data));
  
  const fbEmbed = document.getElementById('cms-fb-embed').value;
  localStorage.setItem('rddlFbEmbed', fbEmbed);
  
  const msg = document.getElementById('save-msg');
  msg.style.opacity = '1';
  setTimeout(() => { msg.style.opacity = '0'; }, 2000);
}

document.addEventListener('DOMContentLoaded', loadCMS);

// ══ VISUAL EDITOR ═════════════════════════════════════
function initVisualEditor() {
  const frame = document.getElementById('visual-frame');
  if (!frame || !frame.contentDocument) return alert('Please wait for iframe to load or run on a local server.');
  const doc = frame.contentDocument;
  
  // Inject Admin CSS into iframe
  const style = doc.createElement('style');
  style.innerHTML = `
    .editable-block { border: 1px dashed var(--gray); position: relative; resize: both; overflow: auto; min-height: 50px; }
    .editable-block::after { content: 'Editable'; position: absolute; top: 0; right: 0; background: var(--red); color: #fff; font-size: 9px; padding: 2px 6px; }
    [contenteditable="true"] { outline: 1px dashed var(--red); background: rgba(214,40,40,0.05); }
  `;
  doc.head.appendChild(style);

  // Make text editable
  doc.querySelectorAll('.hero-title, .hero-sub, .sec-title, p').forEach(el => {
    el.setAttribute('contenteditable', 'true');
  });

  // Make sections and elements resizable by adding .editable-block and an ID if missing
  let blockCount = 0;
  doc.querySelectorAll('section, .map-cutout, .eq-card').forEach(el => {
    if (!el.id) el.id = 'visual-block-' + (++blockCount);
    el.classList.add('editable-block');
  });
}

function saveVisuals() {
  const frame = document.getElementById('visual-frame');
  if (!frame || !frame.contentDocument) return;
  const doc = frame.contentDocument;
  
  // Save overrides map
  const overrides = {};
  doc.querySelectorAll('.editable-block').forEach(el => {
    if (el.id && el.style.cssText) {
      overrides['#' + el.id] = el.style.cssText;
    }
  });
  
  localStorage.setItem('rddlVisual', JSON.stringify(overrides));
  
  // We can also save text edits made visually
  const hTitle = doc.querySelector('.hero-title');
  const hSub = doc.querySelector('.hero-sub');
  
  const data = JSON.parse(localStorage.getItem('rddlCMS') || '{}');
  if (hTitle) data.heroTitle = hTitle.innerHTML;
  if (hSub) data.heroSub = hSub.innerHTML;
  
  localStorage.setItem('rddlCMS', JSON.stringify(data));
  
  // Update CMS text fields to match visual edits
  if (hTitle) document.getElementById('cms-hero-title').value = hTitle.innerHTML;
  if (hSub) document.getElementById('cms-hero-sub').value = hSub.innerHTML;
  
  const msg = document.getElementById('visual-save-msg');
  msg.style.opacity = '1';
  setTimeout(() => { msg.style.opacity = '0'; }, 2000);
}
