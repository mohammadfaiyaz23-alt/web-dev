/* Voltbook multi-page front-end script
   - Products, offers, cart (localStorage)
   - Modals, countdowns, reviews, dark mode
*/

// ---------- Data ----------
const PRODUCTS = [
  { id:'air-2025', name:'Voltbook Air', price:69999, desc:'14" FHD, 8GB RAM, 256GB SSD, 12hr battery', img: placeholder('Voltbook Air','#071129','#00aaff') },
  { id:'pro-2025', name:'Voltbook Pro', price:99999, desc:'16" QHD, 16GB RAM, 512GB SSD, Creator GPU option', img: placeholder('Voltbook Pro','#121017','#00ff88') },
  { id:'max-2025', name:'Voltbook Max', price:129999, desc:'16" 165Hz, 32GB RAM, 1TB SSD, High perf GPU', img: placeholder('Voltbook Max','#0b0a12','#ffd166') }
];

const REVIEWS = [
  {name:'Aisha R.', text:'Voltbook Air lasts all day in college — highly recommend!'},
  {name:'Rahul S.', text:'Pro handles my video edits smoothly; great display.'},
  {name:'Neha K.', text:'Max is a beast for gaming and rendering.'}
];

// helper: inline placeholder image (data URI)
function placeholder(text, bg='#0b1220', fg='#00aaff'){
  const svg = `<svg xmlns='http://www.w3.org/2000/svg' width='800' height='500'><rect width='100%' height='100%' fill='${bg}' rx='12'/><text x='50%' y='50%' fill='${fg}' font-size='40' text-anchor='middle' font-family='Arial'>${text}</text></svg>`;
  return 'data:image/svg+xml;utf8,' + encodeURIComponent(svg);
}

// ---------- Cart (localStorage) ----------
const CART_KEY = 'volt_cart';
function getCart(){ try{ return JSON.parse(localStorage.getItem(CART_KEY)) || []; }catch(e){ return []; } }
function saveCart(cart){ localStorage.setItem(CART_KEY, JSON.stringify(cart)); updateCartHeaders(); }
function addToCart(id, qty=1){
  const cart = getCart();
  const row = cart.find(r=>r.id===id);
  if(row) row.qty += qty; else cart.push({id, qty});
  saveCart(cart);
  toast('Added to cart');
}
function removeFromCart(id){
  const cart = getCart().filter(r=>r.id!==id);
  saveCart(cart);
}
function clearCart(){ localStorage.removeItem(CART_KEY); updateCartHeaders(); }

// ---------- UI Helpers ----------
function toast(msg){
  const t = document.createElement('div'); t.textContent = msg;
  Object.assign(t.style,{position:'fixed',right:'18px',bottom:'18px',background:'#12161a',color:'#e7eef5',padding:'10px 12px',borderRadius:'8px',zIndex:999});
  document.body.appendChild(t); setTimeout(()=> t.remove(), 2500);
}
function updateCartHeaders(){
  const count = getCart().reduce((s,r)=>s+r.qty,0);
  document.querySelectorAll('#cart-count, #cart-count-header').forEach(el=> el && (el.textContent = count));
}

// ---------- Theme ----------
function applySavedTheme(){
  if(localStorage.getItem('volt_theme')==='light') document.documentElement.classList.add('light-mode');
  document.querySelectorAll('#darkToggle').forEach(btn=>{
    if(document.documentElement.classList.contains('light-mode')) btn.textContent='🌞'; else btn.textContent='🌙';
  });
}
function toggleTheme(){
  document.documentElement.classList.toggle('light-mode');
  const isLight = document.documentElement.classList.contains('light-mode');
  localStorage.setItem('volt_theme', isLight ? 'light' : 'dark');
  document.querySelectorAll('#darkToggle').forEach(btn=> btn.textContent = isLight ? '🌞' : '🌙' );
}

// ---------- Page init ----------
document.addEventListener('DOMContentLoaded', ()=>{
  updateCartHeaders();
  applySavedTheme();
  document.querySelectorAll('#darkToggle').forEach(btn=> btn && btn.addEventListener('click', toggleTheme));
  const path = location.pathname.split('/').pop() || 'index.html';

  if(path.endsWith('index.html') || path==='') initHome();
  if(path.endsWith('products.html')) initProducts();
  if(path.endsWith('offers.html')) initOffers();
  if(path.endsWith('cart.html')) initCart();
  if(path.endsWith('contact.html')) initContact();

  // offer add handlers global delegation
  document.addEventListener('click', (e)=>{
    if(e.target.matches('.offer-add')) addToCart(e.target.dataset.id);
  });
  window.addEventListener('storage', updateCartHeaders);
});

// ---------- Home ----------
function initHome(){
  // reviews slot
  let idx = 0;
  const slot = document.getElementById('reviewSlot');
  const show = () => { if(!slot) return; const r=REVIEWS[idx]; slot.innerHTML = `<div class="card"><strong>${r.name}</strong><p style="color:var(--muted);margin:6px 0">${r.text}</p></div>`; };
  show();
  document.getElementById('nextReview')?.addEventListener('click', ()=>{ idx=(idx+1)%REVIEWS.length; show(); });
  document.getElementById('prevReview')?.addEventListener('click', ()=>{ idx=(idx-1+REVIEWS.length)%REVIEWS.length; show(); });
  setInterval(()=>{ idx=(idx+1)%REVIEWS.length; show(); }, 5000);

  // home countdown (ends Aug 31, 2025 23:59:59 IST)
  const end = new Date('2025-08-31T23:59:59+05:30').getTime();
  const el = document.getElementById('home-timer');
  if(el){ const int = setInterval(()=>{ updateCountdown(end, el, int); }, 1000); updateCountdown(end, el, int); }
}

// ---------- Products page ----------
function initProducts(){
  renderProductGrid(PRODUCTS);
  document.getElementById('searchInput').addEventListener('input', applyProductFilters);
  document.getElementById('priceFilter').addEventListener('change', applyProductFilters);
  document.getElementById('sortSelect').addEventListener('change', applyProductFilters);
  document.getElementById('openCartBtn').addEventListener('click', ()=> location.href='cart.html');
}
function renderProductGrid(list){
  const grid = document.getElementById('productGrid'); if(!grid) return;
  grid.innerHTML = '';
  list.forEach(p=>{
    const el = document.createElement('div'); el.className='card';
    el.innerHTML = `
      <img class="prod-img" src="${p.img}" alt="${p.name}" />
      <div class="prod-title">${p.name}</div>
      <div class="prod-desc">${p.desc}</div>
      <div style="display:flex;justify-content:space-between;align-items:center;margin-top:10px">
        <div class="price">₹${p.price.toLocaleString()}</div>
        <div style="display:flex;gap:8px">
          <button class="btn small view" data-id="${p.id}">Details</button>
          <button class="btn small add" data-id="${p.id}">Add</button>
        </div>
      </div>
    `;
    grid.appendChild(el);
  });
  grid.querySelectorAll('.add').forEach(btn => btn.addEventListener('click', ()=> addToCart(btn.dataset.id)));
  grid.querySelectorAll('.view').forEach(btn => btn.addEventListener('click', ()=> openProductModal(btn.dataset.id)));
}
function applyProductFilters(){
  const q = document.getElementById('searchInput').value.trim().toLowerCase();
  const pf = document.getElementById('priceFilter').value;
  const sort = document.getElementById('sortSelect').value;
  let list = PRODUCTS.filter(p => p.name.toLowerCase().includes(q) || p.desc.toLowerCase().includes(q));
  if(pf!=='all'){ const [min,max] = pf.split('-').map(Number); list = list.filter(p=> p.price >= min && p.price <= max); }
  if(sort==='low-high') list.sort((a,b)=>a.price-b.price);
  if(sort==='high-low') list.sort((a,b)=>b.price-a.price);
  renderProductGrid(list);
}

// ---------- Offers page ----------
function initOffers(){
  const end = new Date('2025-08-31T23:59:59+05:30').getTime();
  const el = document.getElementById('offers-timer');
  if(el){ const int = setInterval(()=>{ updateCountdown(end, el, int); },1000); updateCountdown(end, el, int); }

  document.querySelectorAll('.offer-add').forEach(b => b.addEventListener('click', ()=> addToCart(b.dataset.id)));
}

// ---------- Cart page ----------
function initCart(){
  renderCartItems();
  document.getElementById('checkoutBtn').addEventListener('click', handleCheckout);
  document.getElementById('clearCartBtn').addEventListener('click', ()=>{ if(confirm('Clear cart?')){ clearCart(); renderCartItems(); } });
}
function renderCartItems(){
  const itemsEl = document.getElementById('cartItems'); if(!itemsEl) return;
  itemsEl.innerHTML='';
  const cart = getCart();
  if(cart.length===0){ itemsEl.innerHTML = '<div class="card">Your cart is empty.</div>'; updateCartTotals(); return; }
  let subtotal = 0;
  cart.forEach(row=>{
    const p = PRODUCTS.find(x=>x.id===row.id);
    if(!p) return;
    const item = document.createElement('div'); item.className='cart-item';
    item.innerHTML = `
      <img src="${p.img}" alt="${p.name}" />
      <div style="flex:1">
        <div style="font-weight:700">${p.name}</div>
        <div style="color:var(--muted)">₹${p.price.toLocaleString()} × ${row.qty}</div>
      </div>
      <div style="display:flex;gap:8px;align-items:center">
        <button class="btn small dec" data-id="${p.id}">-</button>
        <div>${row.qty}</div>
        <button class="btn small inc" data-id="${p.id}">+</button>
        <button class="btn small btn-ghost remove" data-id="${p.id}">Remove</button>
      </div>
    `;
    itemsEl.appendChild(item);
    subtotal += p.price * row.qty;
  });
  itemsEl.querySelectorAll('.inc').forEach(b => b.addEventListener('click', ()=>{ const id=b.dataset.id; const cart = getCart(); const r=cart.find(x=>x.id===id); if(r){ r.qty++; saveCart(cart); renderCartItems(); } }));
  itemsEl.querySelectorAll('.dec').forEach(b => b.addEventListener('click', ()=>{ const id=b.dataset.id; const cart = getCart(); const r=cart.find(x=>x.id===id); if(r){ r.qty--; if(r.qty<=0) { removeFromCart(id); } saveCart(cart); renderCartItems(); } }));
  itemsEl.querySelectorAll('.remove').forEach(b => b.addEventListener('click', ()=>{ removeFromCart(b.dataset.id); renderCartItems(); }));
  updateCartTotals();
}
function updateCartTotals(){
  const cart = getCart();
  const subtotal = cart.reduce((s,r)=>{ const p = PRODUCTS.find(x=>x.id===r.id); return s + (p ? p.price * r.qty : 0); }, 0);
  const promo = (subtotal > 70000) ? 2000 : 0; // mock promo
  const total = subtotal - promo;
  document.getElementById('cartSubtotal').textContent = `₹${subtotal.toLocaleString()}`;
  document.getElementById('cartDiscount').textContent = `₹${promo.toLocaleString()}`;
  document.getElementById('cartTotal').textContent = `₹${total.toLocaleString()}`;
  updateCartHeaders();
}
function handleCheckout(){
  const cart = getCart();
  if(cart.length===0){ alert('Cart is empty'); return; }
  const name = prompt('Enter your name for order confirmation');
  if(!name) return;
  const email = prompt('Enter your email for confirmation');
  if(!email) return;
  clearCart();
  renderCartItems();
  alert(`Thanks ${name}! Your order is placed (mock). Confirmation sent to ${email}.`);
}

// ---------- Product Modal ----------
function openProductModal(id){
  const p = PRODUCTS.find(x=>x.id===id);
  if(!p) return;
  let modal = document.getElementById('productModal');
  if(!modal){
    modal = document.createElement('div'); modal.id='productModal'; modal.className='modal';
    modal.innerHTML = `<div class="modal-card">
      <img class="modal-img" id="modalImg" />
      <div style="flex:1">
        <h3 id="modalTitle"></h3>
        <p id="modalDesc" style="color:var(--muted)"></p>
        <div style="margin-top:12px;display:flex;justify-content:space-between;align-items:center">
          <div id="modalPrice" style="font-weight:700"></div>
          <div><button id="modalAddBtn" class="btn">Add to Cart</button></div>
        </div>
      </div>
    </div>`;
    document.body.appendChild(modal);
    modal.addEventListener('click', (e)=>{ if(e.target===modal) closeModal(); });
  }
  document.getElementById('modalImg').src = p.img;
  document.getElementById('modalTitle').textContent = p.name;
  document.getElementById('modalDesc').textContent = p.desc;
  document.getElementById('modalPrice').textContent = `₹${p.price.toLocaleString()}`;
  document.getElementById('modalAddBtn').onclick = ()=>{ addToCart(p.id); closeModal(); };
  modal.style.display='flex';
}
function closeModal(){ const m=document.getElementById('productModal'); if(m) m.style.display='none'; }

// ---------- Countdown Helper ----------
function updateCountdown(targetTs, el, intervalRef){
  const now = Date.now(); const diff = targetTs - now;
  if(diff<=0){ el.textContent = 'EXPIRED'; if(intervalRef) clearInterval(intervalRef); return; }
  const days = Math.floor(diff/(1000*60*60*24));
  const hrs = Math.floor((diff/(1000*60*60))%24);
  const mins = Math.floor((diff/(1000*60))%60);
  const secs = Math.floor((diff/1000)%60);
  el.textContent = `${days}d ${String(hrs).padStart(2,'0')}h ${String(mins).padStart(2,'0')}m ${String(secs).padStart(2,'0')}s`;
}

// ---------- Contact page ----------
function initContact(){
  const form = document.getElementById('contactForm');
  if(!form) return;
  form.addEventListener('submit', (e)=>{ e.preventDefault();
    const n=document.getElementById('cname').value.trim();
    const em=document.getElementById('cemail').value.trim();
    const msg=document.getElementById('cmsg').value.trim();
    if(!n||!em||!msg){ alert('Fill all fields'); return; }
    toast('Message sent (mock). We will contact you.');
    form.reset();
  });
}
