'use strict';

const PRODUCTS = [
  // ── Jewelry ──────────────────────────────────────────────────────────────
  { id: 'J17', name: 'Steel Chain',                      price: 396.10, category: 'jewelry', img: 'images/j17.png' },
  { id: 'J1',  name: 'Chrome Hearts Clip-On Earrings',   price: 246.26, category: 'jewelry', img: 'images/j1.png'  },
  { id: 'J3',  name: 'Chrome Hearts Wallet Chain',        price: 253.00, category: 'jewelry', img: 'images/j3.png'  },
  { id: 'J6',  name: 'Chrome Hearts Ring',                price: 361.90, category: 'jewelry', img: 'images/j6.png'  },
  { id: 'J7',  name: 'Chrome Hearts Chain',               price: 545.50, category: 'jewelry', img: 'images/j7.png'  },
  { id: 'J8',  name: 'Silver Wrist Chain',                price: 286.17, category: 'jewelry', img: 'images/j8.png'  },
  { id: 'J12', name: 'Chrome Hearts Wrist Beads',         price: 353.80, category: 'jewelry', img: 'images/j12.png' },
  { id: 'J15', name: 'Black Chrome Hearts Glasses',       price: 660.70, category: 'jewelry', img: 'images/j15.png' },
  { id: 'J14', name: 'Half Frame Chrome Hearts Glasses',  price: 640.00, category: 'jewelry', img: 'images/j14.png' },
  { id: 'J16', name: 'Layered Chrome Hearts Wallet Chain',price: 316.00, category: 'jewelry', img: 'images/j16.png' },
  { id: 'J19', name: 'Chrome Hearts Pendant',             price: 220.60, category: 'jewelry', img: 'images/j19.png' },
  { id: 'J21', name: 'Classic Chrome Hearts Pendant',     price: 247.60, category: 'jewelry', img: 'images/j21.png' },
  { id: 'J26', name: 'Maison Margiela Ring',              price: 278.20, category: 'jewelry', img: 'images/j26.jpg' },
  { id: 'J27', name: 'Maison Margiela Belt',              price: 647.20, category: 'jewelry', img: 'images/j27.png' },
  { id: 'J29', name: 'Red Metallic Watch',                price: 807.40, category: 'jewelry', img: 'images/j29.png' },
  { id: 'J30', name: 'Blue Metallic Watch',               price: 854.92, category: 'jewelry', img: 'images/j30.png' },
];

const COMING_SOON = ['jeans', 'hoodies', 'shirts', 'shoes'];

let activeCategory = 'all';
let lightboxProduct = null;

function fmt(price) {
  return '฿' + price.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

// ── Coming-soon chain X ───────────────────────────────────────────────────────
const LOCK_SVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 132" class="chain-lock-svg">
  <defs>
    <radialGradient id="lb" cx="28%" cy="20%" r="75%">
      <stop offset="0%"   stop-color="#f2f2f2"/>
      <stop offset="20%"  stop-color="#d5d5d5"/>
      <stop offset="55%"  stop-color="#7a7a7a"/>
      <stop offset="85%"  stop-color="#222"/>
      <stop offset="100%" stop-color="#0e0e0e"/>
    </radialGradient>
    <linearGradient id="sg" x1="0" y1="0" x2="0" y2="132" gradientUnits="userSpaceOnUse">
      <stop offset="0%"   stop-color="#f0f0f0"/>
      <stop offset="10%"  stop-color="#ffffff"/>
      <stop offset="28%"  stop-color="#bcbcbc"/>
      <stop offset="48%"  stop-color="#252525"/>
      <stop offset="66%"  stop-color="#585858"/>
      <stop offset="84%"  stop-color="#d2d2d2"/>
      <stop offset="100%" stop-color="#e8e8e8"/>
    </linearGradient>
    <filter id="ds" x="-40%" y="-40%" width="180%" height="180%">
      <feDropShadow dx="0" dy="5" stdDeviation="8" flood-color="#000" flood-opacity="1"/>
    </filter>
  </defs>
  <!-- shadow layer -->
  <g filter="url(#ds)">
    <path d="M37 63 V38 A23 23 0 0 0 83 38 V63" fill="none" stroke="#000" stroke-width="18" stroke-linecap="round"/>
    <rect x="16" y="61" width="88" height="65" rx="11" fill="#000"/>
  </g>
  <!-- shackle -->
  <path d="M37 63 V38 A23 23 0 0 0 83 38 V63" fill="none" stroke="#111" stroke-width="14" stroke-linecap="round"/>
  <path d="M37 63 V38 A23 23 0 0 0 83 38 V63" fill="none" stroke="url(#sg)" stroke-width="10" stroke-linecap="round"/>
  <path d="M39 63 V39 A21 21 0 0 0 81 39 V63" fill="none" stroke="rgba(255,255,255,0.18)" stroke-width="2" stroke-linecap="round"/>
  <!-- body -->
  <rect x="16" y="61" width="88" height="65" rx="11" fill="url(#lb)"/>
  <rect x="16" y="61" width="88" height="65" rx="11" fill="none" stroke="#2e2e2e" stroke-width="1.5"/>
  <!-- body highlight streak -->
  <rect x="26" y="72" width="28" height="5" rx="2.5" fill="rgba(255,255,255,0.28)"/>
  <rect x="26" y="73" width="28" height="2" rx="1" fill="rgba(255,255,255,0.10)"/>
  <!-- keyhole -->
  <circle cx="60" cy="90" r="11" fill="#080808"/>
  <circle cx="60" cy="90" r="11" fill="none" stroke="#1c1c1c" stroke-width="1.5"/>
  <rect x="55" y="98" width="10" height="18" rx="5" fill="#080808"/>
</svg>`;

function comingSoonHTML() {
  return `<div class="chain-x">
    <div class="chain-arm chain-arm-1"><img src="images/chain.jpg" class="chain-img" alt=""></div>
    <div class="chain-arm chain-arm-2"><img src="images/chain.jpg" class="chain-img" alt=""></div>
    <div class="chain-lock-wrap">${LOCK_SVG}</div>
  </div>`;
}

// ── Render grid ──────────────────────────────────────────────────────────────
function renderGrid(cat) {
  activeCategory = cat;
  const grid    = document.getElementById('product-grid');
  const title   = document.getElementById('section-title');
  const countEl = document.getElementById('products-count');

  const filtered     = cat === 'all' ? PRODUCTS : PRODUCTS.filter(p => p.category === cat);
  const isComingSoon = COMING_SOON.includes(cat);

  const labels = { all: 'All Products', jewelry: 'Jewelry', jeans: 'Jeans', hoodies: 'Hoodies', shirts: 'Shirts', shoes: 'Shoes' };
  title.textContent = labels[cat] || 'All Products';

  if (isComingSoon) {
    countEl.textContent = 'Coming soon';
    grid.innerHTML = `
      <div class="empty-state coming-state">
        ${comingSoonHTML()}
        <h3>COMING SOON</h3>
        <p class="coming-text">Follow <a href="https://instagram.com/cultestevol" target="_blank" style="color:#fff;text-decoration:underline">@cultestevol</a> for updates.</p>
      </div>`;
    return;
  }

  countEl.textContent = `${filtered.length} item${filtered.length !== 1 ? 's' : ''}`;

  if (filtered.length === 0) {
    grid.innerHTML = `<div class="empty-state"><h3>NO ITEMS</h3></div>`;
    return;
  }

  const SIZES = { 2: 'card-lg', 5: 'card-wide', 10: 'card-lg', 15: 'card-wide' };

  grid.innerHTML = filtered.map((p, i) => `
    <div class="product-card${SIZES[i] ? ' ' + SIZES[i] : ''}" data-id="${p.id}">
      <div class="card-img-wrap">
        <img class="card-img" src="${p.img}" alt="${p.name}" loading="lazy">
      </div>
      <div class="card-overlay">
        <span class="card-overlay-text">View</span>
      </div>
      <div class="card-info">
        <div class="card-id">${p.id}</div>
        <div class="card-name">${p.name}</div>
        <div class="card-price">${fmt(p.price)}</div>
      </div>
    </div>
  `).join('');

  grid.querySelectorAll('.product-card').forEach(card => {
    card.addEventListener('click', () => openLightbox(card.dataset.id));
  });
}

// ── Lightbox ─────────────────────────────────────────────────────────────────
function openLightbox(id) {
  const p = PRODUCTS.find(x => x.id === id);
  if (!p) return;
  lightboxProduct = p;

  document.getElementById('lb-img').src              = p.img;
  document.getElementById('lb-img').alt              = p.name;
  document.getElementById('lb-id').textContent       = p.id;
  document.getElementById('lb-name').textContent     = p.name;
  document.getElementById('lb-price').textContent    = fmt(p.price);
  document.getElementById('lightbox').classList.remove('hidden');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  document.getElementById('lightbox').classList.add('hidden');
  document.body.style.overflow = '';
  lightboxProduct = null;
}

// ── Nav ───────────────────────────────────────────────────────────────────────
document.querySelectorAll('.nav-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    renderGrid(btn.dataset.cat);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
});

// ── Lightbox events ───────────────────────────────────────────────────────────
document.getElementById('lb-close').addEventListener('click', closeLightbox);
document.getElementById('lb-backdrop').addEventListener('click', closeLightbox);
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeLightbox(); });

// ── Init ──────────────────────────────────────────────────────────────────────
renderGrid('all');
