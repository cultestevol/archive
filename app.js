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

// ── Chain X + Lock SVG for coming-soon ───────────────────────────────────────
function chainSVG() {
  const W = 560, H = 340, CX = W / 2, CY = H / 2;

  function links(x1, y1, x2, y2, gid) {
    const dx = x2 - x1, dy = y2 - y1;
    const len = Math.sqrt(dx * dx + dy * dy);
    const ang = Math.atan2(dy, dx) * 180 / Math.PI;
    const step = 26, n = Math.ceil(len / step);
    let s = '';
    for (let i = 0; i <= n; i++) {
      const t = i / n;
      const lx = x1 + dx * t, ly = y1 + dy * t;
      if (Math.sqrt((lx - CX) ** 2 + (ly - CY) ** 2) < 54) continue;
      const [rx, ry] = i % 2 === 0 ? [12, 5] : [5, 12];
      s += `<ellipse cx="${lx.toFixed(1)}" cy="${ly.toFixed(1)}" rx="${rx}" ry="${ry}" transform="rotate(${ang.toFixed(1)} ${lx.toFixed(1)} ${ly.toFixed(1)})" fill="none" stroke="url(#${gid})" stroke-width="2.5"/>`;
    }
    return s;
  }

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}" class="coming-chains" aria-hidden="true">
  <defs>
    <linearGradient id="cg1" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#555"/><stop offset="28%" stop-color="#bbb"/>
      <stop offset="58%" stop-color="#eee"/><stop offset="100%" stop-color="#666"/>
    </linearGradient>
    <linearGradient id="cg2" x1="100%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#555"/><stop offset="28%" stop-color="#bbb"/>
      <stop offset="58%" stop-color="#eee"/><stop offset="100%" stop-color="#666"/>
    </linearGradient>
    <radialGradient id="lg" cx="36%" cy="28%" r="65%">
      <stop offset="0%" stop-color="#e0e0e0"/>
      <stop offset="45%" stop-color="#999"/>
      <stop offset="100%" stop-color="#3a3a3a"/>
    </radialGradient>
  </defs>
  ${links(10, 10, W - 10, H - 10, 'cg1')}
  ${links(W - 10, 10, 10, H - 10, 'cg2')}
  <circle cx="${CX}" cy="${CY + 10}" r="50" fill="rgba(120,120,120,0.06)"/>
  <path d="M${CX - 19} ${CY - 2} V${CY - 26} Q${CX - 19} ${CY - 44} ${CX} ${CY - 44} Q${CX + 19} ${CY - 44} ${CX + 19} ${CY - 26} V${CY - 2}"
    fill="none" stroke="url(#cg1)" stroke-width="7.5" stroke-linecap="round"/>
  <rect x="${CX - 30}" y="${CY - 4}" width="60" height="46" rx="7" fill="url(#lg)"/>
  <rect x="${CX - 30}" y="${CY - 4}" width="60" height="46" rx="7" fill="none" stroke="url(#cg1)" stroke-width="1.5"/>
  <rect x="${CX - 22}" y="${CY + 4}" width="16" height="5" rx="2.5" fill="rgba(255,255,255,0.22)"/>
  <circle cx="${CX}" cy="${CY + 16}" r="7.5" fill="#111"/>
  <rect x="${CX - 3}" y="${CY + 21}" width="6" height="12" rx="3" fill="#111"/>
</svg>`;
}

// ── Render grid ──────────────────────────────────────────────────────────────
function renderGrid(cat) {
  activeCategory = cat;
  const grid      = document.getElementById('product-grid');
  const title     = document.getElementById('section-title');
  const countEl   = document.getElementById('products-count');

  const filtered  = cat === 'all' ? PRODUCTS : PRODUCTS.filter(p => p.category === cat);
  const isComingSoon = COMING_SOON.includes(cat);

  // Title
  const labels = { all: 'All Products', jewelry: 'Jewelry', jeans: 'Jeans', hoodies: 'Hoodies', shirts: 'Shirts', shoes: 'Shoes' };
  title.textContent = labels[cat] || 'All Products';

  if (isComingSoon) {
    countEl.textContent = 'Coming soon';
    grid.innerHTML = `
      <div class="empty-state coming-state">
        ${chainSVG()}
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

  document.getElementById('lb-img').src    = p.img;
  document.getElementById('lb-img').alt    = p.name;
  document.getElementById('lb-id').textContent    = p.id;
  document.getElementById('lb-name').textContent  = p.name;
  document.getElementById('lb-price').textContent = fmt(p.price);
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
