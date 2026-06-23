/* ═══════════════════════════════════════
   BASIL SMARTSERVE — MAIN SCRIPT
═══════════════════════════════════════ */

'use strict';

// ─────────────────────────────────────
// DATA
// ─────────────────────────────────────
const MENU_ITEMS = [
  // Breakfast
  { id:1, name:'Masala Dosa', category:'breakfast', price:60, rating:4.8, emoji:'🫓', desc:'Crispy dosa with spiced potato filling & chutneys', badge:'Popular', veg:true },
  { id:2, name:'Idli Sambar', category:'breakfast', price:45, rating:4.6, emoji:'🍱', desc:'Soft steamed idlis with hot sambar & coconut chutney', badge:'', veg:true },
  { id:3, name:'Poha', category:'breakfast', price:35, rating:4.5, emoji:'🍚', desc:'Light flattened rice with onion, peanuts & curry leaves', badge:'', veg:true },
  { id:4, name:'Bread Omelette', category:'breakfast', price:50, rating:4.4, emoji:'🍳', desc:'Fluffy omelette with toasted buttered bread', badge:'', veg:false },
  { id:5, name:'Upma', category:'breakfast', price:30, rating:4.3, emoji:'🥣', desc:'Semolina cooked with vegetables & spices', badge:'', veg:true },
  // Lunch
  { id:6, name:'Chicken Biryani', category:'lunch', price:130, rating:4.9, emoji:'🍛', desc:'Aromatic basmati rice with tender chicken & spices', badge:'Best Seller', veg:false },
  { id:7, name:'Veg Thali', category:'lunch', price:90, rating:4.7, emoji:'🥘', desc:'Dal, sabzi, roti, rice, salad & pickle', badge:'', veg:true },
  { id:8, name:'Paneer Butter Masala', category:'lunch', price:110, rating:4.8, emoji:'🍲', desc:'Creamy tomato gravy with soft paneer cubes', badge:'Popular', veg:true },
  { id:9, name:'Egg Fried Rice', category:'lunch', price:80, rating:4.5, emoji:'🍳', desc:'Wok-tossed fried rice with eggs & veggies', badge:'', veg:false },
  { id:10, name:'Rajma Chawal', category:'lunch', price:85, rating:4.6, emoji:'🫘', desc:'Classic red kidney beans curry with steamed rice', badge:'', veg:true },
  // Snacks
  { id:11, name:'Samosa (2 pcs)', category:'snacks', price:20, rating:4.7, emoji:'🔺', desc:'Crispy pastry stuffed with spiced potatoes', badge:'', veg:true },
  { id:12, name:'Veg Noodles', category:'snacks', price:60, rating:4.5, emoji:'🍜', desc:'Stir-fried noodles with colourful vegetables', badge:'', veg:true },
  { id:13, name:'Paneer Roll', category:'snacks', price:70, rating:4.6, emoji:'🌯', desc:'Grilled paneer with onions & sauces in a roti roll', badge:'Popular', veg:true },
  { id:14, name:'French Fries', category:'snacks', price:50, rating:4.4, emoji:'🍟', desc:'Golden crispy fries with dip', badge:'', veg:true },
  { id:15, name:'Pav Bhaji', category:'snacks', price:65, rating:4.8, emoji:'🫓', desc:'Spiced mashed veggies with buttered pav', badge:'Best Seller', veg:true },
  // Drinks
  { id:16, name:'Cold Coffee', category:'drinks', price:60, rating:4.8, emoji:'☕', desc:'Chilled coffee blend with ice cream & cream', badge:'Popular', veg:true },
  { id:17, name:'Fresh Lime Soda', category:'drinks', price:30, rating:4.6, emoji:'🍋', desc:'Chilled soda with fresh lime & mint', badge:'', veg:true },
  { id:18, name:'Mango Lassi', category:'drinks', price:55, rating:4.7, emoji:'🥭', desc:'Thick yoghurt blended with Alphonso mango', badge:'', veg:true },
  { id:19, name:'Masala Chai', category:'drinks', price:20, rating:4.8, emoji:'🍵', desc:'Strong spiced tea brewed with ginger & cardamom', badge:'', veg:true },
  { id:20, name:'Watermelon Juice', category:'drinks', price:40, rating:4.5, emoji:'🍉', desc:'Fresh cold-pressed watermelon juice', badge:'', veg:true },
];

const POPULAR_DISHES = [
  { name:'Chicken Biryani', emoji:'🍛', orders:'120+ orders today', rating:'4.9 ⭐' },
  { name:'Cold Coffee',     emoji:'☕', orders:'95 orders today',   rating:'4.8 ⭐' },
  { name:'Masala Dosa',     emoji:'🫓', orders:'88 orders today',   rating:'4.8 ⭐' },
  { name:'Pav Bhaji',       emoji:'🫓', orders:'76 orders today',   rating:'4.8 ⭐' },
];

const DEMO_REVIEWS = [
  { name:'Divyadharshini', stars:5, text:'Biryani is absolutely amazing! Token system saved me 20 minutes.' },
  { name:'Rohini',         stars:4, text:'Pre-order feature is so convenient. Food was fresh and hot.' },
  { name:'Vasanth',        stars:5, text:'Love the digital token — I could study while waiting for my order!' },
  { name:'Yugesh',         stars:4, text:'Crowd status helped me avoid the 1 PM rush. Very useful app.' },
  { name:'Dinesh Raj',     stars:5, text:'Amazing food and super fast service. Loved the QR ordering!' },
  { name:'Sriram',         stars:4, text:'The seat availability feature is really helpful. Great app!' },
  { name:'Anushri',        stars:5, text:'Paneer Butter Masala was delicious! Will order again.' },
];

const ADMIN_ORDERS_DEMO = [
  { token:'#038', name:'Divyadharshini', items:'Chicken Biryani × 1, Mango Lassi × 1', time:'12:10 PM', status:'delivered' },
  { token:'#039', name:'Rohini',         items:'Masala Dosa × 2, Cold Coffee × 1',      time:'12:18 PM', status:'delivered' },
  { token:'#040', name:'Vasanth',        items:'Veg Thali × 1',                          time:'12:25 PM', status:'ready' },
  { token:'#041', name:'Yugesh',         items:'Paneer Roll × 2, Fries × 1',             time:'12:30 PM', status:'preparing' },
  { token:'#043', name:'Dinesh Raj',     items:'Pav Bhaji × 2, Masala Chai × 1',        time:'12:35 PM', status:'preparing' },
  { token:'#044', name:'Sriram',         items:'Egg Fried Rice × 1, Cold Coffee × 1',   time:'12:40 PM', status:'preparing' },
  { token:'#045', name:'Anushri',        items:'Paneer Butter Masala × 1, Lassi × 1',   time:'12:45 PM', status:'preparing' },
  { token:'#042', name:'You',            items:'Your order',                              time:'Now',      status:'preparing' },
];

// ─────────────────────────────────────
// STATE
// ─────────────────────────────────────
let cart = [];
let currentFilter = 'all';
let tokenNumber = null;
let userRating = 0;
let tokenStep = 1;
let tokenTimer = null;
let crowdLevel = 'medium'; // low | medium | high

// ─────────────────────────────────────
// INIT
// ─────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  renderMenu('all');
  renderSeatMap();
  renderPopularDishes();
  renderReviews();
  renderAdminOrders();
  setCrowdUI(crowdLevel);
  setupPickupSlot();
  setupNavScroll();
  simulateSeatUpdates();
});

// ─────────────────────────────────────
// NAVBAR
// ─────────────────────────────────────
function setupNavScroll() {
  window.addEventListener('scroll', () => {
    document.getElementById('navbar').classList.toggle('scrolled', window.scrollY > 20);
  });
}

function toggleMenu() {
  document.getElementById('navLinks').classList.toggle('open');
}

function scrollTo(id) {
  document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
  document.getElementById('navLinks').classList.remove('open');
}

// ─────────────────────────────────────
// MENU RENDERING
// ─────────────────────────────────────
function renderMenu(filter) {
  const grid = document.getElementById('menuGrid');
  const items = filter === 'all' ? MENU_ITEMS : MENU_ITEMS.filter(i => i.category === filter);

  grid.innerHTML = '';
  items.forEach((item, idx) => {
    const inCart = cart.find(c => c.id === item.id);
    const bgColors = {
      breakfast: 'linear-gradient(135deg,#fef3c7,#fde68a)',
      lunch:     'linear-gradient(135deg,#d1fae5,#a7f3d0)',
      snacks:    'linear-gradient(135deg,#fee2e2,#fecaca)',
      drinks:    'linear-gradient(135deg,#dbeafe,#bfdbfe)',
    };

    const card = document.createElement('div');
    card.className = 'menu-card';
    card.style.animationDelay = `${idx * 0.05}s`;
    card.innerHTML = `
      <div class="menu-card-img" style="background:${bgColors[item.category]}">
        ${item.emoji}
        ${item.badge ? `<div class="menu-card-badge ${item.veg ? 'veg-badge' : ''}">${item.badge}</div>` : ''}
        ${item.veg ? '<div class="menu-card-badge veg-badge" style="left:auto;right:.75rem">🟢 Veg</div>' : '<div class="menu-card-badge" style="left:auto;right:.75rem;background:#e74c3c">🔴 Non-veg</div>'}
      </div>
      <div class="menu-card-body">
        <div class="menu-card-name">${item.name}</div>
        <div class="menu-card-desc">${item.desc}</div>
        <div class="menu-card-footer">
          <span class="menu-card-price">₹${item.price}</span>
          <span class="menu-card-rating">⭐ ${item.rating}</span>
        </div>
        <button class="add-btn ${inCart ? 'added' : ''}" id="addBtn${item.id}" onclick="addToCart(${item.id})">
          ${inCart ? `<i class="fas fa-check"></i> Added (${inCart.qty})` : '<i class="fas fa-plus"></i> Add to Cart'}
        </button>
      </div>
    `;
    grid.appendChild(card);
  });
}

function filterMenu(filter, btn) {
  currentFilter = filter;
  document.querySelectorAll('.cat-tab').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  renderMenu(filter);
}

// ─────────────────────────────────────
// CART
// ─────────────────────────────────────
function addToCart(id) {
  const item = MENU_ITEMS.find(i => i.id === id);
  if (!item) return;

  const existing = cart.find(c => c.id === id);
  if (existing) {
    existing.qty++;
  } else {
    cart.push({ ...item, qty: 1 });
  }

  updateCartUI();
  refreshAddButton(id);

  // mini bounce feedback
  const btn = document.getElementById(`addBtn${id}`);
  if (btn) {
    btn.style.transform = 'scale(0.9)';
    setTimeout(() => btn.style.transform = '', 150);
  }
}

function changeQty(id, delta) {
  const idx = cart.findIndex(c => c.id === id);
  if (idx === -1) return;
  cart[idx].qty += delta;
  if (cart[idx].qty <= 0) cart.splice(idx, 1);
  updateCartUI();
  refreshAddButton(id);
}

function refreshAddButton(id) {
  const btn = document.getElementById(`addBtn${id}`);
  if (!btn) return;
  const inCart = cart.find(c => c.id === id);
  btn.className = `add-btn ${inCart ? 'added' : ''}`;
  btn.innerHTML = inCart
    ? `<i class="fas fa-check"></i> Added (${inCart.qty})`
    : '<i class="fas fa-plus"></i> Add to Cart';
}

function updateCartUI() {
  const count = cart.reduce((s, c) => s + c.qty, 0);
  document.getElementById('cartCount').textContent = count;

  const itemsEl = document.getElementById('cartItems');
  const footer = document.getElementById('cartFooter');
  const slotInfo = document.getElementById('cartSlotInfo');

  if (cart.length === 0) {
    itemsEl.innerHTML = `
      <div class="cart-empty">
        <div class="empty-icon">🛒</div>
        <p>Your cart is empty</p>
        <span>Add items from the menu</span>
      </div>`;
    footer.style.display = 'none';
    slotInfo.classList.remove('show');
    return;
  }

  itemsEl.innerHTML = cart.map(item => `
    <div class="cart-item">
      <div class="cart-item-emoji">${item.emoji}</div>
      <div class="cart-item-info">
        <div class="cart-item-name">${item.name}</div>
        <div class="cart-item-price">₹${item.price} × ${item.qty}</div>
      </div>
      <div class="cart-item-qty">
        <button class="qty-btn" onclick="changeQty(${item.id}, -1)">−</button>
        <span class="qty-val">${item.qty}</span>
        <button class="qty-btn" onclick="changeQty(${item.id}, 1)">+</button>
      </div>
    </div>
  `).join('');

  const subtotal = cart.reduce((s, c) => s + c.price * c.qty, 0);
  const gst = Math.round(subtotal * 0.05);
  const grand = subtotal + gst;

  document.getElementById('cartTotal').textContent = `₹${subtotal}`;
  document.getElementById('cartGST').textContent   = `₹${gst}`;
  document.getElementById('cartGrand').textContent  = `₹${grand}`;
  footer.style.display = 'block';

  // Slot info in cart
  const slot = document.getElementById('pickupSlot').value;
  if (slot) {
    slotInfo.textContent = `📍 Pickup: ${slot}`;
    slotInfo.classList.add('show');
  }
}

function toggleCart() {
  const sidebar = document.getElementById('cartSidebar');
  const overlay = document.getElementById('cartOverlay');
  const isOpen = sidebar.classList.contains('open');
  sidebar.classList.toggle('open');
  overlay.classList.toggle('show');
  document.body.style.overflow = isOpen ? '' : 'hidden';
}

// ─────────────────────────────────────
// PICKUP SLOT
// ─────────────────────────────────────
function setupPickupSlot() {
  document.getElementById('pickupSlot').addEventListener('change', function() {
    const display = document.getElementById('prepTimeDisplay');
    if (this.value) {
      display.style.display = 'flex';
    } else {
      display.style.display = 'none';
    }
    updateCartUI();
  });
}

// ─────────────────────────────────────
// ORDER
// ─────────────────────────────────────
function placeOrder() {
  if (cart.length === 0) return;

  const slot = document.getElementById('pickupSlot').value;
  tokenNumber = Math.floor(Math.random() * 20) + 40; // 40–59

  // Update modal
  document.getElementById('modalToken').textContent = `#0${tokenNumber}`;
  const modalSlot = document.getElementById('modalSlot');
  modalSlot.textContent = slot ? `⏰ Pickup slot: ${slot}` : '';
  document.getElementById('orderModal').style.display = 'flex';
  document.body.style.overflow = 'hidden';

  // Close cart
  document.getElementById('cartSidebar').classList.remove('open');
  document.getElementById('cartOverlay').classList.remove('show');

  // Activate token section
  activateToken();

  // Update admin orders
  addLiveOrder();

  // Update stats
  const total = document.getElementById('totalOrders');
  total.textContent = parseInt(total.textContent) + 1;
  const pending = document.getElementById('pendingOrders');
  pending.textContent = parseInt(pending.textContent) + 1;

  // Clear cart
  cart = [];
  updateCartUI();
  renderMenu(currentFilter);
}

function closeModal() {
  document.getElementById('orderModal').style.display = 'none';
  document.body.style.overflow = '';
  document.getElementById('token').scrollIntoView({ behavior: 'smooth' });
}

// ─────────────────────────────────────
// TOKEN SYSTEM
// ─────────────────────────────────────
function activateToken() {
  document.getElementById('tokenEmpty').style.display  = 'none';
  document.getElementById('tokenActive').style.display = 'flex';
  document.getElementById('tokenNumber').textContent    = `#0${tokenNumber}`;

  tokenStep = 1;
  updateTokenStep();
  renderQueueTokens();

  // Simulate progress
  if (tokenTimer) clearTimeout(tokenTimer);
  tokenTimer = setTimeout(() => {
    tokenStep = 2;
    updateTokenStep();
    tokenTimer = setTimeout(() => {
      tokenStep = 3;
      updateTokenStep();
      const pending = document.getElementById('pendingOrders');
      pending.textContent = Math.max(0, parseInt(pending.textContent) - 1);
    }, 12000);
  }, 8000);

  // Show ordered items in token section
  const tokenItemsEl = document.getElementById('tokenItems');
  if (cart.length > 0) {
    tokenItemsEl.innerHTML = `<h4 style="margin-bottom:.75rem;">Your Items</h4>` +
      cart.map(i => `<div class="cart-item">
        <div class="cart-item-emoji">${i.emoji}</div>
        <div class="cart-item-info">
          <div class="cart-item-name">${i.name}</div>
          <div class="cart-item-price">₹${i.price} × ${i.qty}</div>
        </div>
      </div>`).join('');
  }
}

function updateTokenStep() {
  const steps = [
    { el: 'step1', line: null,  msg: '' },
    { el: 'step2', line: 'line1', msg: 'Your order is being prepared. Estimated time: <strong>8 minutes</strong>' },
    { el: 'step3', line: 'line2', msg: '🔔 <strong>Your order is ready for pickup!</strong> Please collect from the counter.' },
  ];

  // Reset
  ['step1','step2','step3'].forEach(s => {
    document.getElementById(s).classList.remove('done','active');
  });
  ['line1','line2'].forEach(l => document.getElementById(l).classList.remove('done'));

  if (tokenStep >= 1) {
    document.getElementById('step1').classList.add('done');
  }
  if (tokenStep >= 2) {
    document.getElementById('line1').classList.add('done');
    document.getElementById('step2').classList.add(tokenStep === 2 ? 'active' : 'done');
    document.getElementById('tokenMessage').innerHTML = steps[1].msg;
  }
  if (tokenStep >= 3) {
    document.getElementById('line2').classList.add('done');
    document.getElementById('step3').classList.add('done');
    document.getElementById('tokenMessage').innerHTML = steps[2].msg;
    document.getElementById('tokensAhead').textContent = '0';
  }
}

function renderQueueTokens() {
  const container = document.getElementById('queueTokens');
  const ahead = Math.floor(Math.random() * 3) + 2;
  document.getElementById('tokensAhead').textContent = ahead;

  const tokens = [];
  for (let i = ahead; i > 0; i--) {
    tokens.push({ num: tokenNumber - i, type: 'ahead' });
  }
  tokens.push({ num: tokenNumber, type: 'current' });
  for (let i = 1; i <= 3; i++) {
    tokens.push({ num: tokenNumber + i, type: 'behind' });
  }

  container.innerHTML = tokens.map(t =>
    `<span class="queue-token ${t.type}">#0${t.num}</span>`
  ).join('');
}

// ─────────────────────────────────────
// CROWD STATUS
// ─────────────────────────────────────
function setCrowdUI(level) {
  crowdLevel = level;
  const configs = {
    low:    { emoji:'🟢', label:'Low Crowd',    pct:'28%',  barGrad:'linear-gradient(90deg,#2ecc71,#a8f0c6)', color:'--crowd-low',  tip:'Great time to visit! Minimal waiting.', bestTime:'2:00 PM – 3:00 PM', pulseColor:'var(--crowd-low)' },
    medium: { emoji:'🟡', label:'Medium Crowd', pct:'65%',  barGrad:'linear-gradient(90deg,#2ecc71,#f39c12)', color:'--crowd-med',  tip:'Moderate crowd — ordering online recommended to skip the queue.', bestTime:'2:00 PM – 3:00 PM', pulseColor:'var(--crowd-med)' },
    high:   { emoji:'🔴', label:'High Crowd',   pct:'88%',  barGrad:'linear-gradient(90deg,#f39c12,#e74c3c)', color:'--crowd-high', tip:'Very busy right now! Pre-order and pick up during off-peak hours.', bestTime:'3:00 PM – 4:00 PM', pulseColor:'var(--crowd-high)' },
  };

  const cfg = configs[level];
  document.getElementById('crowdEmoji').textContent      = cfg.emoji;
  document.getElementById('crowdLabel').textContent      = cfg.label;
  document.getElementById('crowdPercentage').textContent = cfg.pct;
  document.getElementById('crowdBar').style.width        = cfg.pct;
  document.getElementById('crowdBar').style.background   = cfg.barGrad;
  document.getElementById('crowdTip').textContent        = cfg.tip;
  document.getElementById('bestTime').textContent        = cfg.bestTime;
  document.querySelector('.crowd-pulse').style.background = cfg.pulseColor;
}

function adminSetCrowd(level) {
  setCrowdUI(level);
  const labels = { low:'🟢 Low Crowd set', medium:'🟡 Medium Crowd set', high:'🔴 High Crowd set' };
  showAdminToast(labels[level]);
}

// ─────────────────────────────────────
// SEAT MAP
// ─────────────────────────────────────
const SEAT_STATES = ['avail','occ','occ','avail','avail','occ','res','avail','occ','avail','avail','occ','avail','avail','occ','occ','avail','avail','occ','avail','avail','occ','avail','avail','occ','avail','avail','occ','res','avail','avail','occ','avail','occ','avail','avail','occ','avail','avail','avail'];

function renderSeatMap() {
  const grid = document.getElementById('seatGrid');
  grid.innerHTML = '';
  SEAT_STATES.forEach((state, i) => {
    const cell = document.createElement('div');
    cell.className = `seat-cell ${state}`;
    cell.textContent = i + 1;
    cell.title = state === 'avail' ? 'Available' : state === 'occ' ? 'Occupied' : 'Reserved';
    grid.appendChild(cell);
  });
  updateSeatCounts();
}

function updateSeatCounts() {
  const avail = SEAT_STATES.filter(s => s === 'avail').length;
  const occ   = SEAT_STATES.filter(s => s === 'occ').length;
  const res   = SEAT_STATES.filter(s => s === 'res').length;
  document.getElementById('availSeats').textContent   = avail;
  document.getElementById('occupiedSeats').textContent = occ;
  document.getElementById('seatStatusLabel').textContent = avail > 5 ? 'Seats Available' : avail > 0 ? 'Limited Seats' : 'No Seats Available';
}

function refreshSeats() {
  // Simulate slight random change
  for (let i = 0; i < 5; i++) {
    const idx = Math.floor(Math.random() * SEAT_STATES.length);
    if (SEAT_STATES[idx] === 'avail') SEAT_STATES[idx] = Math.random() > .5 ? 'occ' : 'avail';
    else if (SEAT_STATES[idx] === 'occ') SEAT_STATES[idx] = Math.random() > .4 ? 'avail' : 'occ';
  }
  renderSeatMap();
  const btn = document.querySelector('.btn-small');
  if (btn) { btn.innerHTML = '<i class="fas fa-check"></i> Updated'; setTimeout(() => { btn.innerHTML = '<i class="fas fa-sync-alt"></i> Refresh'; }, 1500); }
}

function simulateSeatUpdates() {
  setInterval(() => {
    const idx = Math.floor(Math.random() * SEAT_STATES.length);
    if (SEAT_STATES[idx] !== 'res') {
      SEAT_STATES[idx] = SEAT_STATES[idx] === 'avail' ? 'occ' : 'avail';
      renderSeatMap();
    }
  }, 8000);
}

// ─────────────────────────────────────
// FEEDBACK
// ─────────────────────────────────────
function setRating(val) {
  userRating = val;
  document.querySelectorAll('#ratingStars i').forEach((star, i) => {
    star.classList.toggle('active', i < val);
  });
}

function submitFeedback() {
  if (userRating === 0) {
    alert('Please select a star rating first!');
    return;
  }
  const name  = document.getElementById('feedbackName').value.trim() || 'Anonymous';
  const text  = document.getElementById('feedbackText').value.trim();
  const dish  = document.getElementById('dishSelect').value;

  if (!text) { alert('Please write something in the feedback box!'); return; }

  // Add to reviews
  DEMO_REVIEWS.unshift({ name, stars: userRating, text: dish ? `[${dish}] ${text}` : text });
  renderReviews();

  // Show success
  document.getElementById('feedbackSuccess').style.display = 'flex';
  setTimeout(() => document.getElementById('feedbackSuccess').style.display = 'none', 3000);

  // Reset form
  document.getElementById('feedbackName').value = '';
  document.getElementById('feedbackText').value = '';
  document.getElementById('dishSelect').value = '';
  setRating(0);
}

function renderPopularDishes() {
  document.getElementById('popularDishes').innerHTML = POPULAR_DISHES.map(d => `
    <div class="popular-dish">
      <div class="popular-dish-emoji">${d.emoji}</div>
      <div class="popular-dish-info">
        <div class="popular-dish-name">${d.name}</div>
        <div class="popular-dish-orders">${d.orders}</div>
      </div>
      <div class="popular-dish-rating">${d.rating}</div>
    </div>
  `).join('');
}

function renderReviews() {
  document.getElementById('reviewsList').innerHTML = DEMO_REVIEWS.slice(0, 4).map(r => `
    <div class="review-item">
      <div class="review-header">
        <span class="review-name">${r.name}</span>
        <span class="review-stars">${'⭐'.repeat(r.stars)}</span>
      </div>
      <div class="review-text">"${r.text}"</div>
    </div>
  `).join('');
}

// ─────────────────────────────────────
// ADMIN
// ─────────────────────────────────────
function renderAdminOrders() {
  const el = document.getElementById('adminOrders');
  el.innerHTML = ADMIN_ORDERS_DEMO.map(o => `
    <div class="admin-order-item">
      <div class="aorder-token">${o.token}</div>
      <div class="aorder-info">
        <div class="aorder-name">${o.name}</div>
        <div class="aorder-items">${o.items}</div>
      </div>
      <div class="aorder-time">${o.time}</div>
      <div class="aorder-status status-${o.status}">${o.status}</div>
    </div>
  `).join('');
}

function addLiveOrder() {
  ADMIN_ORDERS_DEMO.push({
    token: `#0${tokenNumber}`,
    name: 'You',
    items: cart.map(i => `${i.name} × ${i.qty}`).join(', ') || 'New order',
    time: new Date().toLocaleTimeString('en-IN', { hour:'2-digit', minute:'2-digit' }),
    status: 'preparing',
  });
  renderAdminOrders();
}

function adminAddItem() {
  const name  = document.getElementById('newItemName').value.trim();
  const price = parseInt(document.getElementById('newItemPrice').value);
  const cat   = document.getElementById('newItemCat').value;

  if (!name || isNaN(price) || price <= 0) {
    alert('Please fill in a valid item name and price.');
    return;
  }

  const emojis = { breakfast:'🍽️', lunch:'🥘', snacks:'🍟', drinks:'🥤' };
  MENU_ITEMS.push({
    id: Date.now(), name, category: cat, price, rating: 4.0,
    emoji: emojis[cat], desc: `Freshly prepared ${name}`,
    badge: 'New', veg: true,
  });

  document.getElementById('newItemName').value  = '';
  document.getElementById('newItemPrice').value = '';
  const ok = document.getElementById('adminSuccess');
  ok.style.display = 'flex';
  setTimeout(() => ok.style.display = 'none', 2500);

  if (currentFilter === 'all' || currentFilter === cat) renderMenu(currentFilter);
}

function showAdminToast(msg) {
  // Reuse adminSuccess element momentarily
  const el = document.getElementById('adminSuccess');
  el.textContent = msg;
  el.style.display = 'flex';
  setTimeout(() => el.style.display = 'none', 2000);
}

// ─────────────────────────────────────
// CLOSE MOBILE NAV ON LINK CLICK
// ─────────────────────────────────────
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    document.getElementById('navLinks').classList.remove('open');
  });
});

// ─────────────────────────────────────
// KEYBOARD ESCAPE
// ─────────────────────────────────────
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    if (document.getElementById('cartSidebar').classList.contains('open')) toggleCart();
    if (document.getElementById('orderModal').style.display !== 'none') closeModal();
  }
});
