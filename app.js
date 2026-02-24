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
  const W = 620, H = 400;
  const CX = W / 2, CY = H / 2;
  const SKIP = 68;

  const defs = `<defs>
    <linearGradient id="steel" x1="0" y1="0" x2="0" y2="${H}" gradientUnits="userSpaceOnUse">
      <stop offset="0%"   stop-color="#f2f2f2"/>
      <stop offset="8%"   stop-color="#ffffff"/>
      <stop offset="22%"  stop-color="#c8c8c8"/>
      <stop offset="40%"  stop-color="#3a3a3a"/>
      <stop offset="52%"  stop-color="#1e1e1e"/>
      <stop offset="66%"  stop-color="#4a4a4a"/>
      <stop offset="80%"  stop-color="#d0d0d0"/>
      <stop offset="100%" stop-color="#e8e8e8"/>
    </linearGradient>
    <radialGradient id="lb" cx="28%" cy="20%" r="75%">
      <stop offset="0%"   stop-color="#f0f0f0"/>
      <stop offset="18%"  stop-color="#d8d8d8"/>
      <stop offset="50%"  stop-color="#7a7a7a"/>
      <stop offset="82%"  stop-color="#242424"/>
      <stop offset="100%" stop-color="#101010"/>
    </radialGradient>
    <filter id="ds" x="-50%" y="-50%" width="200%" height="200%">
      <feDropShadow dx="0" dy="4" stdDeviation="6" flood-color="#000" flood-opacity="0.95"/>
    </filter>
    <filter id="ls" x="-30%" y="-30%" width="160%" height="160%">
      <feDropShadow dx="1" dy="2" stdDeviation="2.5" flood-color="#000" flood-opacity="0.6"/>
    </filter>
  </defs>`;

  function link(x, y, angle) {
    const rx = 16, ry = 7;
    const r = `rotate(${angle.toFixed(1)} ${x.toFixed(1)} ${y.toFixed(1)})`;
    const xf = x.toFixed(1), yf = y.toFixed(1), yh = (y - 1.2).toFixed(1), yg = (y - 2.2).toFixed(1);
    return [
      `<ellipse cx="${xf}" cy="${yf}" rx="${rx + 2}" ry="${ry + 2}" transform="${r}" fill="none" stroke="#000" stroke-width="11" opacity="0.55" filter="url(#ls)"/>`,
      `<ellipse cx="${xf}" cy="${yf}" rx="${rx}" ry="${ry}" transform="${r}" fill="none" stroke="#0a0a0a" stroke-width="9.5"/>`,
      `<ellipse cx="${xf}" cy="${yf}" rx="${rx}" ry="${ry}" transform="${r}" fill="none" stroke="#1a1a1a" stroke-width="7.5"/>`,
      `<ellipse cx="${xf}" cy="${yf}" rx="${rx}" ry="${ry}" transform="${r}" fill="none" stroke="url(#steel)" stroke-width="6"/>`,
      `<ellipse cx="${xf}" cy="${yf}" rx="${rx - 1.5}" ry="${ry - 1.5}" transform="${r}" fill="none" stroke="rgba(0,0,0,0.5)" stroke-width="1"/>`,
      `<ellipse cx="${xf}" cy="${yh}" rx="${rx - 2.5}" ry="${ry - 2.5}" transform="${r}" fill="none" stroke="rgba(255,255,255,0.36)" stroke-width="1.8"/>`,
      `<ellipse cx="${xf}" cy="${yg}" rx="${(rx * 0.52).toFixed(1)}" ry="${(ry * 0.42).toFixed(1)}" transform="${r}" fill="none" stroke="rgba(255,255,255,0.52)" stroke-width="1"/>`,
    ].join('');
  }

  function chain(x1, y1, x2, y2) {
    const dx = x2 - x1, dy = y2 - y1;
    const len = Math.sqrt(dx * dx + dy * dy);
    const ang = Math.atan2(dy, dx) * 180 / Math.PI;
    const step = 28;
    const n = Math.ceil(len / step);
    let s = '';
    for (let i = 0; i <= n; i++) {
      const t = i / n;
      const lx = x1 + dx * t, ly = y1 + dy * t;
      if (Math.sqrt((lx - CX) ** 2 + (ly - CY) ** 2) < SKIP) continue;
      s += link(lx, ly, i % 2 === 0 ? ang : ang + 90);
    }
    return s;
  }

  // Shackle: legs go up then arc over the top (sweep=1 = clockwise = curves up)
  const sh  = `M${CX - 23} ${CY + 2} V${CY - 28} A23 23 0 0 1 ${CX + 23} ${CY - 28} V${CY + 2}`;
  const shi = `M${CX - 21} ${CY + 2} V${CY - 27} A21 21 0 0 1 ${CX + 21} ${CY - 27} V${CY + 2}`;

  const lockSVG = `
    <g filter="url(#ds)">
      <path d="${sh}" fill="none" stroke="#000" stroke-width="18" stroke-linecap="round"/>
      <rect x="${CX - 39}" y="${CY - 2}" width="78" height="62" rx="10" fill="#000"/>
    </g>
    <path d="${sh}" fill="none" stroke="#0a0a0a" stroke-width="15" stroke-linecap="round"/>
    <path d="${sh}" fill="none" stroke="url(#steel)" stroke-width="11" stroke-linecap="round"/>
    <path d="${shi}" fill="none" stroke="rgba(0,0,0,0.4)" stroke-width="1.5" stroke-linecap="round"/>
    <path d="${shi}" fill="none" stroke="rgba(255,255,255,0.2)" stroke-width="2" stroke-linecap="round"/>
    <rect x="${CX - 39}" y="${CY - 2}" width="78" height="62" rx="10" fill="url(#lb)"/>
    <rect x="${CX - 39}" y="${CY - 2}" width="78" height="62" rx="10" fill="none" stroke="#333" stroke-width="1.5"/>
    <rect x="${CX - 28}" y="${CY + 8}" width="24" height="5" rx="2.5" fill="rgba(255,255,255,0.28)"/>
    <rect x="${CX - 28}" y="${CY + 9}" width="24" height="2" rx="1" fill="rgba(255,255,255,0.10)"/>
    <circle cx="${CX}" cy="${CY + 26}" r="10.5" fill="#080808"/>
    <circle cx="${CX}" cy="${CY + 26}" r="10.5" fill="none" stroke="#222" stroke-width="1.5"/>
    <rect x="${CX - 4.5}" y="${CY + 33}" width="9" height="16" rx="4.5" fill="#080808"/>`;

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}" class="coming-chains" aria-hidden="true">
  ${defs}
  ${chain(15, 15, W - 15, H - 15)}
  ${chain(W - 15, 15, 15, H - 15)}
  ${lockSVG}
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
