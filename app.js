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

// ── Hero content per category ─────────────────────────────────────────────────
const HERO = {
  all:     { sub: 'Archive Collection',     title: 'Where you can buy<br>fashion affordably.',  cta: 'DM to Order →'        },
  jewelry: { sub: 'Jewelry',                title: 'Chrome Hearts.<br>Silver, steel & beyond.', cta: 'Shop Jewelry →'       },
  jeans:   { sub: 'Denim — Coming Soon',    title: 'The perfect fit<br>is on its way.',          cta: 'Follow for Updates →' },
  hoodies: { sub: 'Hoodies — Coming Soon',  title: 'Stay draped.<br>Coming to the archive.',     cta: 'Follow for Updates →' },
  shirts:  { sub: 'Shirts — Coming Soon',   title: 'Clean cuts.<br>Dropping soon.',              cta: 'Follow for Updates →' },
  shoes:   { sub: 'Footwear — Coming Soon', title: 'Step up.<br>Coming to the archive.',         cta: 'Follow for Updates →' },
};

function setHeroContent(cat) {
  const h = HERO[cat] || HERO.all;
  document.getElementById('hero-sub').textContent  = h.sub;
  document.getElementById('hero-title').innerHTML  = h.title;
  document.getElementById('hero-cta').textContent  = h.cta;
}

function updateHero(cat) {
  const els = ['hero-sub', 'hero-title', 'hero-cta'].map(id => document.getElementById(id));
  els.forEach(el => el.classList.add('hero-fade-out'));
  setTimeout(() => {
    setHeroContent(cat);
    els.forEach(el => {
      el.classList.remove('hero-fade-out');
      el.classList.add('hero-fade-in');
      el.addEventListener('animationend', () => el.classList.remove('hero-fade-in'), { once: true });
    });
  }, 190);
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
      <div class="empty-state">
        <h3>COMING SOON</h3>
        <p>Follow <a href="https://instagram.com/cultestevol" target="_blank" style="color:#fff;text-decoration:underline">@cultestevol</a> for updates.</p>
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
    <div class="product-card${SIZES[i] ? ' ' + SIZES[i] : ''}" data-id="${p.id}" style="animation-delay:${Math.min(i * 0.05, 0.35)}s">
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

  document.getElementById('lb-img').src           = p.img;
  document.getElementById('lb-img').alt           = p.name;
  document.getElementById('lb-id').textContent    = p.id;
  document.getElementById('lb-name').textContent  = p.name;
  document.getElementById('lb-price').textContent = fmt(p.price);
  document.getElementById('lightbox').classList.remove('hidden');

  const card = document.getElementById('lb-card');
  card.classList.remove('lb-animate');
  void card.offsetWidth;
  card.classList.add('lb-animate');

  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  document.getElementById('lightbox').classList.add('hidden');
  document.body.style.overflow = '';
  lightboxProduct = null;
}

// ── Nav indicator ─────────────────────────────────────────────────────────────
const nav = document.querySelector('.nav');
const navIndicator = document.createElement('div');
navIndicator.className = 'nav-indicator';
nav.appendChild(navIndicator);

function moveIndicator(btn) {
  const navRect = nav.getBoundingClientRect();
  const btnRect = btn.getBoundingClientRect();
  navIndicator.style.left  = (btnRect.left - navRect.left) + 'px';
  navIndicator.style.width = btnRect.width + 'px';
}

// ── Nav ───────────────────────────────────────────────────────────────────────
document.querySelectorAll('.nav-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    moveIndicator(btn);
    renderGrid(btn.dataset.cat);
    updateHero(btn.dataset.cat);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
});

// ── Lightbox events ───────────────────────────────────────────────────────────
document.getElementById('lb-close').addEventListener('click', closeLightbox);
document.getElementById('lb-backdrop').addEventListener('click', closeLightbox);
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeLightbox(); });

// ── Custom cursor ─────────────────────────────────────────────────────────────
if (window.matchMedia('(pointer: fine)').matches) {
  const dot  = document.createElement('div'); dot.className  = 'cursor-dot';
  const ring = document.createElement('div'); ring.className = 'cursor-ring';
  document.body.append(dot, ring);

  document.addEventListener('mousemove', e => {
    dot.style.left  = e.clientX + 'px';
    dot.style.top   = e.clientY + 'px';
    ring.style.left = e.clientX + 'px';
    ring.style.top  = e.clientY + 'px';
  });

  document.addEventListener('mouseover', e => {
    const hover = e.target.closest('a, button, .product-card');
    ring.style.width       = hover ? '44px' : '28px';
    ring.style.height      = hover ? '44px' : '28px';
    ring.style.borderColor = hover ? 'rgba(255,255,255,0.7)' : 'rgba(255,255,255,0.4)';
  });

  document.addEventListener('mouseleave', () => { dot.style.opacity = '0'; ring.style.opacity = '0'; });
  document.addEventListener('mouseenter', () => { dot.style.opacity = '1'; ring.style.opacity = '1'; });
}

// ── Init ──────────────────────────────────────────────────────────────────────
renderGrid('all');
setHeroContent('all');
const initialBtn = document.querySelector('.nav-btn.active');
if (initialBtn) moveIndicator(initialBtn);
