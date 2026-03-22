'use strict';

const PRODUCTS = [
  // ── Jewelry ──────────────────────────────────────────────────────────────
  { id: 'J17', name: 'Steel Chain',                      price: 397, category: 'jewelry', img: 'images/j17.png', soldOut: false, desc: 'Heavy-gauge stainless steel link chain. Polished finish, adjustable length.' },
  { id: 'J1',  name: 'Cross Clip-On Earrings',           price: 247, category: 'jewelry', img: 'images/j1.png',  soldOut: false, desc: 'Authentic sterling silver clip-on earrings. Signature Chrome Hearts cross motif.' },
  { id: 'J3',  name: 'Cross Wallet Chain',               price: 253, category: 'jewelry', img: 'images/j3.jpg',  soldOut: false, desc: 'Sterling silver wallet chain with Chrome Hearts hardware and lobster clasp.' },
  { id: 'J6',  name: 'Cross Ring',                       price: 362, category: 'jewelry', img: 'images/j6.png',  soldOut: false, desc: 'Sterling silver band with Chrome Hearts engraving. Available in select sizes.' },
  { id: 'J7',  name: 'Cross Chain',                      price: 546, category: 'jewelry', img: 'images/j7.png',  soldOut: false, desc: 'Heavy sterling silver link necklace. Signature Chrome Hearts design.', imgPos: '50% 92%' },
  { id: 'J8',  name: 'Silver Wrist Chain',                price: 287, category: 'jewelry', img: 'images/j8.png',  soldOut: false, desc: 'Layered sterling silver wrist chain. Adjustable fit.' },
  { id: 'J12', name: 'Cross Wrist Beads',               price: 354, category: 'jewelry', img: 'images/j12.png', soldOut: false, desc: 'Beaded bracelet with sterling silver Chrome Hearts accents.' },
  { id: 'J15', name: 'Black Cross Glasses',             price: 661, category: 'jewelry', img: 'images/j15.png', soldOut: false, desc: 'Black acetate frames with chrome hardware. Full UV protection.' },
  { id: 'J14', name: 'Half Frame Cross Glasses',        price: 640, category: 'jewelry', img: 'images/j14.png', soldOut: false, desc: 'Half-frame design with lightweight chrome detailing. Minimal and sharp.' },
  { id: 'J16', name: 'Layered Cross Wallet Chain',      price: 316, category: 'jewelry', img: 'images/j16.png', soldOut: false, desc: 'Double-layer wallet chain with Chrome Hearts charms throughout.' },
  { id: 'J19', name: 'Cross Pendant',                   price: 221, category: 'jewelry', img: 'images/j19.png', soldOut: false, desc: 'Sterling silver cross pendant with Chrome Hearts engraving. Chain not included.' },
  { id: 'J21', name: 'Classic Cross Pendant',           price: 248, category: 'jewelry', img: 'images/j21.png', soldOut: false, desc: 'Classic logo pendant in sterling silver. Signature Chrome Hearts aesthetic.', imgPos: '50% 75%' },
  { id: 'J26', name: 'Square Ring',              price: 279, category: 'jewelry', img: 'images/j26.jpg', soldOut: false, desc: 'Sterling silver logo ring. Clean minimalist Margiela aesthetic.', imgPos: '50% 60%' },
  { id: 'J27', name: 'Number Belt',              price: 648, category: 'jewelry', img: 'images/j27.png', soldOut: false, desc: 'Full-grain leather with signature Margiela number-tab buckle.', imgPos: '35% 8%' },
  { id: 'J29', name: 'Red Metallic Watch',                price: 808, category: 'jewelry', img: 'images/j29.png', soldOut: false, desc: 'Metallic red case with precision quartz movement. Bold statement piece.' },
  { id: 'J30', name: 'Blue Metallic Watch',               price: 855, category: 'jewelry', img: 'images/j30.png', soldOut: false, desc: 'Metallic blue case with precision quartz movement. Rare colourway.' },
  // ── Headwear ─────────────────────────────────────────────────────────────
  { id: 'Hw1', name: 'Graffiti Beanie', price: 244, category: 'headwear', img: 'images/hw1-white.jpg', soldOut: false, desc: 'Distressed slouch beanie with all-over graffiti print. Raw edge finish. Available in 2 colorways.', colorways: [{ label: 'White', img: 'images/hw1-white.jpg' }, { label: 'Grey', img: 'images/hw1-grey.jpg' }] },
  { id: 'Hw7', name: 'Inverted Cross Beanie', price: 297, category: 'headwear', img: 'images/hw7.jpg', soldOut: false, desc: 'Washed knit beanie with distressed inverted cross print. Raw and archive-ready.' },
  { id: 'Hw4', name: 'Star Patch Slouch Beanie (5 Colors)', price: 297, category: 'headwear', img: 'images/hw4-grey.jpg', soldOut: false, desc: 'Oversized cable knit slouch beanie with star patch detail. Available in 5 colorways.', colorways: [{ label: 'Grey', img: 'images/hw4-grey.jpg' }, { label: 'Black', img: 'images/hw4-black.jpg' }, { label: 'Olive', img: 'images/hw4-olive.jpg' }, { label: 'Navy', img: 'images/hw4-navy.jpg' }, { label: 'Burgundy', img: 'images/hw4-burgundy.jpg' }] },
  { id: 'Hw3', name: 'Washed Script Beanie (3 Colors)', price: 299, category: 'headwear', img: 'images/hw3.jpg', soldOut: false, desc: 'Chunky knit beanie with oversized washed script lettering. Minimal and archive-ready.', colorways: [{ label: 'Grey', img: 'images/hw3.jpg' }, { label: 'Black', img: 'images/hw3-black.jpg' }, { label: 'Cream/Blue', img: 'images/hw3-cream.jpg' }] },
  { id: 'Hw2', name: 'Camo Durag', price: 391, category: 'headwear', img: 'images/hw2.jpg', soldOut: false, desc: 'Distressed camo durag with extended long tails. Raw edge finish.' },
  // ── Jeans ────────────────────────────────────────────────────────────────
  { id: 'Jn2', name: 'Worker Jeans',                     price: 814, category: 'jeans',  img: 'images/jn2.jpg', soldOut: false, desc: 'Washed cargo pants with multi-pocket utility design. Unisex fit.' },
  { id: 'Jn3', name: 'Elevated Jeans (3 Color Ways)',    price: 816, category: 'jeans',  img: 'images/jn3-black.jpg', soldOut: false, desc: 'Wide-leg seam detail jeans with contrast stitching. Available in 3 colorways.', colorways: [{ label: 'Black', img: 'images/jn3-black.jpg' }, { label: 'Vintage Green', img: 'images/jn3-green.jpg' }, { label: 'Blue', img: 'images/jn3-blue.jpg' }] },
  { id: 'Jn6', name: 'Distressed Jeans',                price: 753, category: 'jeans',  img: 'images/jn6.jpg', soldOut: false, desc: 'Heavy distressed denim with patchwork detailing and lace-up accents.' },
  { id: 'Jn7', name: 'White Double Waisted Jeans',     price: 688, category: 'jeans',  img: 'images/jn7.jpg', soldOut: false, desc: 'Camo wide-leg cargo pants with double waistband and contrast black pockets.' },
  { id: 'Jn8', name: 'Patchwork Jeans',               price: 894, category: 'jeans',  img: 'images/jn8.jpg', soldOut: false, desc: 'Heavy utility denim with multi-pocket patchwork, zippers, D-rings and strap detailing.' },
  // ── Backpacks ───────────────────────────────────────────────────────────
  { id: 'Bp2', name: 'Patched Archive Backpack', price: 547, category: 'backpacks', img: 'images/bp2.jpg', soldOut: false, desc: 'Washed canvas backpack with all-over embroidered logo patches. Heavy archive energy.' },
  { id: 'Bp3', name: 'Marble Cross Backpack', price: 487, category: 'backpacks', img: 'images/bp3.jpg', soldOut: false, desc: 'Marble-washed puffer backpack with 3D rubber cross appliques. Statement carry.' },
  { id: 'Bp1', name: 'Faux Fur Monster Backpack', price: 484, category: 'backpacks', img: 'images/bp1.jpg', soldOut: false, desc: 'Oversized black faux fur backpack with horror graphic print. Statement archive piece.' },
  // ── Long Sleeves ─────────────────────────────────────────────────────────
  { id: 'Ls1', name: 'ERD Faded Long Sleeve',          price: 586, category: 'longsleeves', img: 'images/ls1.jpg', soldOut: false, desc: 'Washed black long sleeve with distressed ERD text print and chest pocket. Worn-in archive feel.' },
  { id: 'Ls2', name: 'Cross Washed Long Sleeve',       price: 620, category: 'longsleeves', img: 'images/ls2.jpg', soldOut: false, desc: 'Oversized washed long sleeve with cross graphic and script detailing.' },
  { id: 'Ls3', name: 'Shredded Knit Long Sleeve',      price: 449, category: 'longsleeves', img: 'images/ls3.jpg', soldOut: false, desc: 'Heavily distressed all-over destroyed knit long sleeve. Raw and deconstructed.' },
  { id: 'Ls5', name: 'French Script Collage Long Sleeve', price: 615, category: 'longsleeves', img: 'images/ls5.jpg', soldOut: true,  desc: 'Oversized long sleeve with French text and vintage collage graphic print across chest and sleeves.' },
  // ── Tank Tops ────────────────────────────────────────────────────────────
  { id: 'Tt1', name: 'Washed Cross Tank', price: 336, category: 'tanktops', img: 'images/tt1-white.jpg', soldOut: false, desc: 'Oversized muscle tank with washed cross graphic. Available in 2 colorways.', colorways: [{ label: 'White', img: 'images/tt1-white.jpg' }, { label: 'Black', img: 'images/tt1-black.jpg' }] },
  // ── Sweatshirts ──────────────────────────────────────────────────────────
  { id: 'Ss1', name: 'Abstract Drip Knit Sweater (6 Colors)', price: 699, category: 'sweatshirts', img: 'images/ss1-grey.jpg', soldOut: false, desc: 'Oversized knit sweater with all-over abstract drip pattern. Available in 6 colorways.', colorways: [{ label: 'Grey', img: 'images/ss1-grey.jpg' }, { label: 'Brown', img: 'images/ss1-brown.jpg' }, { label: 'White', img: 'images/ss1-white.jpg' }, { label: 'Black', img: 'images/ss1-black.jpg' }, { label: 'Blue/White', img: 'images/ss1-bluewhite.jpg' }, { label: 'Navy/White', img: 'images/ss1-navywhite.jpg' }] },
  { id: 'Ss2', name: 'All-Over Eye Knit Sweater (2 Colors)',  price: 699, category: 'sweatshirts', img: 'images/ss2-black.jpg', soldOut: false, desc: 'Oversized knit sweater with all-over horror eye graphic. Available in 2 colorways.', colorways: [{ label: 'Black', img: 'images/ss2-black.jpg' }, { label: 'Olive', img: 'images/ss2-olive.jpg' }] },
];

const COMING_SOON = ['hoodies', 'shirts', 'shoes'];

let activeCategory    = 'all';
let lightboxProduct   = null;
let currentFiltered   = [];
let currentLbIndex    = -1;

function fmt(price) {
  return '฿' + price.toLocaleString('en-US', { minimumFractionDigits: 0, maximumFractionDigits: 2 });
}

// ── Hero content per category ─────────────────────────────────────────────────
const HERO = {
  all:     { sub: 'CultestEvol Archive',     title: 'Where you can buy<br>fashion affordably.',  cta: 'DM to Order →'        },
  jewelry: { sub: 'Jewelry',                title: 'Silver, steel & beyond.', cta: 'Shop Jewelry →'       },
  jeans:   { sub: 'Jeans',                  title: 'Denim & accessories<br>from the archive.',   cta: 'Shop Jeans →'         },
  headwear: { sub: 'Headwear',              title: 'Caps, durags & more<br>from the archive.', cta: 'Shop Headwear →'     },
  backpacks: { sub: 'Backpacks',             title: 'Carry the archive.<br>Bags from the vault.', cta: 'Shop Backpacks →' },
  longsleeves: { sub: 'Long Sleeves',   title: 'Layered & archive.<br>Long sleeve cuts.',     cta: 'Shop Long Sleeves →' },
  tanktops:    { sub: 'Tank Tops',      title: 'Clean & minimal.<br>Tank tops from the vault.', cta: 'Shop Tank Tops →'    },
  sweatshirts: { sub: 'Sweatshirts',    title: 'Heavy & oversized.<br>Sweatshirts from the archive.', cta: 'Shop Sweatshirts →' },
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

  const labels = { all: 'All Products', jewelry: 'Jewelry', headwear: 'Headwear', jeans: 'Jeans', backpacks: 'Backpacks', longsleeves: 'Long Sleeves', tanktops: 'Tank Tops', sweatshirts: 'Sweatshirts', hoodies: 'Hoodies', shirts: 'Shirts', shoes: 'Shoes' };
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

  currentFiltered = filtered;
  countEl.textContent = `${filtered.length} item${filtered.length !== 1 ? 's' : ''}`;

  if (filtered.length === 0) {
    grid.innerHTML = `<div class="empty-state"><h3>NO ITEMS</h3></div>`;
    return;
  }

  const SIZES = { 2: 'card-lg', 5: 'card-wide', 10: 'card-lg', 15: 'card-wide' };

  grid.innerHTML = filtered.map((p, i) => `
    <div class="product-card${SIZES[i] ? ' ' + SIZES[i] : ''}${p.soldOut ? ' sold-out' : ''}" data-id="${p.id}" style="animation-delay:${Math.min(i * 0.05, 0.35)}s">
      ${p.soldOut ? '<div class="sold-badge">Sold</div>' : ''}
      <div class="card-img-wrap">
        ${p.img ? `<img class="card-img" src="${p.img}" alt="${p.name}" loading="lazy"${p.imgPos ? ` style="object-position:${p.imgPos}"` : ''}>` : `<div class="card-img card-img-black"></div>`}
      </div>
      <div class="card-overlay">
        <span class="card-overlay-text">${p.soldOut ? 'Sold Out' : 'View'}</span>
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

  // ── Scroll-triggered reveal ───────────────────────────────────────────────
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('card-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08 });

  grid.querySelectorAll('.product-card').forEach(card => observer.observe(card));

  // ── Shimmer: mark wrap as loaded once image loads ─────────────────────────
  grid.querySelectorAll('.card-img').forEach(img => {
    const wrap = img.closest('.card-img-wrap');
    const done = () => wrap.classList.add('loaded');
    if (img.complete) { done(); } else {
      img.addEventListener('load',  done, { once: true });
      img.addEventListener('error', done, { once: true });
    }
  });
}

// ── Lightbox ─────────────────────────────────────────────────────────────────
function updateNavBtns() {
  const prev = document.getElementById('lb-prev');
  const next = document.getElementById('lb-next');
  if (prev) prev.disabled = currentLbIndex <= 0;
  if (next) next.disabled = currentLbIndex >= currentFiltered.length - 1;
}

function navigateLightbox(dir) {
  const newIndex = currentLbIndex + dir;
  if (newIndex < 0 || newIndex >= currentFiltered.length) return;
  openLightbox(currentFiltered[newIndex].id);
}

function openLightbox(id) {
  const p = PRODUCTS.find(x => x.id === id);
  if (!p) return;
  lightboxProduct = p;
  currentLbIndex  = currentFiltered.findIndex(x => x.id === id);
  updateNavBtns();

  const lbImgWrap = document.querySelector('.lb-img-wrap');
  const lbImg     = document.getElementById('lb-img');
  const lbOrder   = document.getElementById('lb-order');

  // Reset shimmer
  lbImgWrap.classList.remove('loaded');
  if (p.img) {
    lbImg.src = p.img;
    lbImg.alt = p.name;
    lbImg.style.objectPosition = p.imgPos || '';
    lbImg.style.display = '';
    lbImgWrap.style.background = '';
    const imgDone = () => lbImgWrap.classList.add('loaded');
    if (lbImg.complete) { imgDone(); } else {
      lbImg.addEventListener('load',  imgDone, { once: true });
      lbImg.addEventListener('error', imgDone, { once: true });
    }
  } else {
    lbImg.src = '';
    lbImg.style.display = 'none';
    lbImgWrap.style.background = '#000';
    lbImgWrap.classList.add('loaded');
  }

  document.getElementById('lb-id').textContent    = p.id;
  document.getElementById('lb-name').textContent  = p.name;
  document.getElementById('lb-desc').textContent  = p.desc || '';
  document.getElementById('lb-price').textContent = fmt(p.price);

  // Colorways
  let cwEl = document.getElementById('lb-colorways');
  if (!cwEl) {
    cwEl = document.createElement('div');
    cwEl.id = 'lb-colorways';
    cwEl.style.cssText = 'display:flex;gap:8px;flex-wrap:wrap;margin:10px 0;';
    document.getElementById('lb-price').insertAdjacentElement('afterend', cwEl);
  }
  cwEl.innerHTML = '';
  if (p.colorways && p.colorways.length > 1) {
    p.colorways.forEach((cw, i) => {
      const btn = document.createElement('button');
      btn.textContent = cw.label;
      btn.style.cssText = 'padding:6px 14px;border:1px solid rgba(255,255,255,0.4);background:rgba(255,255,255,0.08);color:#fff;font-size:12px;letter-spacing:0.05em;cursor:pointer;transition:all 0.2s;border-radius:2px;';
      if (i === 0) btn.style.background = 'rgba(255,255,255,0.25)';
      btn.addEventListener('click', () => {
        const wrap = document.querySelector('.lb-img-wrap');
        wrap.classList.remove('loaded');
        const img = document.getElementById('lb-img');
        img.src = cw.img;
        img.style.display = '';
        wrap.style.background = '';
        const done = () => wrap.classList.add('loaded');
        if (img.complete) { done(); } else {
          img.addEventListener('load', done, { once: true });
          img.addEventListener('error', done, { once: true });
        }
        cwEl.querySelectorAll('button').forEach(b => b.style.background = 'rgba(255,255,255,0.08)');
        btn.style.background = 'rgba(255,255,255,0.25)';
      });
      cwEl.appendChild(btn);
    });
  }
  if (p.soldOut) {
    lbOrder.textContent = 'Sold Out';
    lbOrder.classList.add('sold-out');
    lbOrder.removeAttribute('href');
  } else {
    lbOrder.textContent = 'Order on Instagram →';
    lbOrder.classList.remove('sold-out');
    lbOrder.href = 'https://instagram.com/cultestevol';
  }

  document.getElementById('lightbox').classList.remove('hidden');

  const card = document.getElementById('lb-card');
  card.classList.remove('lb-animate');
  void card.offsetWidth;
  card.classList.add('lb-animate');

  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  document.getElementById('lightbox').classList.add('hidden');
  document.querySelector('.lb-img-wrap').classList.remove('zoomed');
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
document.getElementById('lb-prev').addEventListener('click', () => navigateLightbox(-1));
document.getElementById('lb-next').addEventListener('click', () => navigateLightbox(1));

document.querySelector('.lb-img-wrap').addEventListener('click', function () {
  this.classList.toggle('zoomed');
});

document.addEventListener('keydown', e => {
  if (document.getElementById('lightbox').classList.contains('hidden')) return;
  if (e.key === 'Escape')      closeLightbox();
  if (e.key === 'ArrowLeft')   navigateLightbox(-1);
  if (e.key === 'ArrowRight')  navigateLightbox(1);
});

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

// ── Mobile menu ───────────────────────────────────────────────────────────────
const hamburger   = document.getElementById('hamburger');
const mobileMenu  = document.getElementById('mobile-menu');

hamburger.addEventListener('click', () => {
  const isOpen = mobileMenu.classList.toggle('open');
  hamburger.classList.toggle('open', isOpen);
  document.body.style.overflow = isOpen ? 'hidden' : '';
});

document.querySelectorAll('.mobile-menu-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const cat = btn.dataset.cat;
    document.querySelectorAll('.mobile-menu-btn').forEach(b => b.classList.remove('active'));
    document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const desktopBtn = document.querySelector(`.nav-btn[data-cat="${cat}"]`);
    if (desktopBtn) { desktopBtn.classList.add('active'); moveIndicator(desktopBtn); }
    renderGrid(cat);
    updateHero(cat);
    mobileMenu.classList.remove('open');
    hamburger.classList.remove('open');
    document.body.style.overflow = '';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
});

// ── Hero collage background ───────────────────────────────────────────────────
function buildHeroCollage() {
  const hero = document.querySelector('.hero');
  const imgs = PRODUCTS.map(p =>
    `<img class="hero-collage-img" src="${p.img}" alt="" loading="lazy">`
  ).join('');
  hero.insertAdjacentHTML('afterbegin', `<div class="hero-collage">${imgs}</div>`);
}

// ── Init ──────────────────────────────────────────────────────────────────────
renderGrid('all');
setHeroContent('all');
buildHeroCollage();
const initialBtn = document.querySelector('.nav-btn.active');
if (initialBtn) moveIndicator(initialBtn);
document.querySelector('.mobile-menu-btn[data-cat="all"]')?.classList.add('active');

// ── Logo sound effect ─────────────────────────────────────────────────────────
document.querySelector('.logo').addEventListener('click', function(e) {
  e.preventDefault();
  const audio = new Audio('Jeffect2.mp3');
  audio.play();
});
