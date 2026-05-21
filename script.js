const WPP = "5500000000000";

const CAT_META = {"numericas": {"num": "01", "name": "Numéricas Decorativas", "hasNum": true, "subcats": ["Todos", "Floral", "Pássaro", "Gato", "Pets", "Ornamental", "Premium"], "subcat_map": {"floral": [1, 2, 3, 6, 7, 11, 12, 13, 21, 28, 29, 30, 31], "passaro": [4, 5, 16, 36], "gato": [19, 20, 21, 29, 37, 38], "pet": [16, 17, 18, 39, 40], "ornamental": [8, 9, 10, 22, 23, 24, 25, 30, 32], "premium": [22, 33, 34, 35]}}, "animal": {"num": "02", "name": "Decoração Animal", "hasNum": false, "subcats": ["Todos", "Cavalos", "Aves", "Safari", "Outros"], "subcat_map": {"cavalos": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], "aves": [11, 12, 13, 14], "safari": [15, 16, 17, 18, 19, 20, 21], "outros": [22, 23, 24]}}, "mandalas": {"num": "03", "name": "Mandalas Decorativas", "hasNum": false, "subcats": ["Todos", "Árvore da Vida", "Mandalas", "Buda", "Yoga", "Espiritual"], "subcat_map": {"arvore_vida": [2, 3, 7], "mandalas": [1], "buda": [5], "yoga": [6], "espiritual": [4]}}, "automotiva": {"num": "04", "name": "Decoração Automotiva", "hasNum": false, "subcats": ["Todos", "Esportivos", "Clássicos", "Fórmula 1"], "subcat_map": {"esportivos": [1, 5, 8, 10, 11, 12, 16, 17], "classicos": [6, 7, 13, 14], "formula1": [4, 9, 15, 3]}}, "placas": {"num": "05", "name": "Placas Decorativas", "hasNum": false, "subcats": ["Todos", "Modernas", "Minimalistas", "Decorativas"], "subcat_map": {"modernas": [1, 3], "minimalistas": [2], "decorativas": [4, 5]}}, "fazenda": {"num": "06", "name": "Fazenda & Chácara", "hasNum": true, "subcats": ["Todos", "Tratores", "Cavalos", "Gado", "Rural"], "subcat_map": {}}};

const ALL_PRODS = {"numericas": [{"id": "numericas_01", "img": "img/numericas_01.jpg", "subcat": "floral", "subcatLabel": "Floral"}, {"id": "numericas_02", "img": "img/numericas_02.jpg", "subcat": "floral", "subcatLabel": "Floral"}, {"id": "numericas_03", "img": "img/numericas_03.jpg", "subcat": "floral", "subcatLabel": "Floral"}, {"id": "numericas_04", "img": "img/numericas_04.jpg", "subcat": "passaro", "subcatLabel": "Pássaro"}, {"id": "numericas_05", "img": "img/numericas_05.jpg", "subcat": "passaro", "subcatLabel": "Pássaro"}, {"id": "numericas_06", "img": "img/numericas_06.jpg", "subcat": "floral", "subcatLabel": "Floral"}, {"id": "numericas_07", "img": "img/numericas_07.jpg", "subcat": "floral", "subcatLabel": "Floral"}, {"id": "numericas_08", "img": "img/numericas_08.jpg", "subcat": "ornamental", "subcatLabel": "Ornamental"}, {"id": "numericas_09", "img": "img/numericas_09.jpg", "subcat": "ornamental", "subcatLabel": "Ornamental"}, {"id": "numericas_10", "img": "img/numericas_10.jpg", "subcat": "ornamental", "subcatLabel": "Ornamental"}, {"id": "numericas_11", "img": "img/numericas_11.jpg", "subcat": "floral", "subcatLabel": "Floral"}, {"id": "numericas_12", "img": "img/numericas_12.jpg", "subcat": "floral", "subcatLabel": "Floral"}, {"id": "numericas_13", "img": "img/numericas_13.jpg", "subcat": "floral", "subcatLabel": "Floral"}, {"id": "numericas_14", "img": "img/numericas_14.jpg", "subcat": "floral", "subcatLabel": "Floral"}, {"id": "numericas_15", "img": "img/numericas_15.jpg", "subcat": "floral", "subcatLabel": "Floral"}, {"id": "numericas_16", "img": "img/numericas_16.jpg", "subcat": "pet", "subcatLabel": "Pets"}, {"id": "numericas_17", "img": "img/numericas_17.jpg", "subcat": "pet", "subcatLabel": "Pets"}, {"id": "numericas_18", "img": "img/numericas_18.jpg", "subcat": "pet", "subcatLabel": "Pets"}, {"id": "numericas_19", "img": "img/numericas_19.jpg", "subcat": "gato", "subcatLabel": "Gato"}, {"id": "numericas_20", "img": "img/numericas_20.jpg", "subcat": "gato", "subcatLabel": "Gato"}, {"id": "numericas_21", "img": "img/numericas_21.jpg", "subcat": "gato", "subcatLabel": "Gato"}, {"id": "numericas_22", "img": "img/numericas_22.jpg", "subcat": "premium", "subcatLabel": "Premium"}, {"id": "numericas_23", "img": "img/numericas_23.jpg", "subcat": "ornamental", "subcatLabel": "Ornamental"}, {"id": "numericas_24", "img": "img/numericas_24.jpg", "subcat": "ornamental", "subcatLabel": "Ornamental"}, {"id": "numericas_25", "img": "img/numericas_25.jpg", "subcat": "ornamental", "subcatLabel": "Ornamental"}, {"id": "numericas_26", "img": "img/numericas_26.jpg", "subcat": "floral", "subcatLabel": "Floral"}, {"id": "numericas_27", "img": "img/numericas_27.jpg", "subcat": "floral", "subcatLabel": "Floral"}, {"id": "numericas_28", "img": "img/numericas_28.jpg", "subcat": "floral", "subcatLabel": "Floral"}, {"id": "numericas_29", "img": "img/numericas_29.jpg", "subcat": "gato", "subcatLabel": "Gato"}, {"id": "numericas_30", "img": "img/numericas_30.jpg", "subcat": "ornamental", "subcatLabel": "Ornamental"}, {"id": "numericas_31", "img": "img/numericas_31.jpg", "subcat": "floral", "subcatLabel": "Floral"}, {"id": "numericas_32", "img": "img/numericas_32.jpg", "subcat": "ornamental", "subcatLabel": "Ornamental"}, {"id": "numericas_33", "img": "img/numericas_33.jpg", "subcat": "premium", "subcatLabel": "Premium"}, {"id": "numericas_34", "img": "img/numericas_34.jpg", "subcat": "premium", "subcatLabel": "Premium"}, {"id": "numericas_35", "img": "img/numericas_35.jpg", "subcat": "premium", "subcatLabel": "Premium"}, {"id": "numericas_36", "img": "img/numericas_36.jpg", "subcat": "passaro", "subcatLabel": "Pássaro"}, {"id": "numericas_37", "img": "img/numericas_37.jpg", "subcat": "gato", "subcatLabel": "Gato"}, {"id": "numericas_38", "img": "img/numericas_38.jpg", "subcat": "gato", "subcatLabel": "Gato"}, {"id": "numericas_39", "img": "img/numericas_39.jpg", "subcat": "pet", "subcatLabel": "Pets"}, {"id": "numericas_40", "img": "img/numericas_40.jpg", "subcat": "pet", "subcatLabel": "Pets"}], "animal": [{"id": "animal_01", "img": "img/animal_01.jpg", "subcat": "cavalos", "subcatLabel": "Cavalos"}, {"id": "animal_02", "img": "img/animal_02.jpg", "subcat": "cavalos", "subcatLabel": "Cavalos"}, {"id": "animal_03", "img": "img/animal_03.jpg", "subcat": "cavalos", "subcatLabel": "Cavalos"}, {"id": "animal_04", "img": "img/animal_04.jpg", "subcat": "cavalos", "subcatLabel": "Cavalos"}, {"id": "animal_05", "img": "img/animal_05.jpg", "subcat": "cavalos", "subcatLabel": "Cavalos"}, {"id": "animal_06", "img": "img/animal_06.jpg", "subcat": "cavalos", "subcatLabel": "Cavalos"}, {"id": "animal_07", "img": "img/animal_07.jpg", "subcat": "cavalos", "subcatLabel": "Cavalos"}, {"id": "animal_08", "img": "img/animal_08.jpg", "subcat": "cavalos", "subcatLabel": "Cavalos"}, {"id": "animal_09", "img": "img/animal_09.jpg", "subcat": "cavalos", "subcatLabel": "Cavalos"}, {"id": "animal_10", "img": "img/animal_10.jpg", "subcat": "cavalos", "subcatLabel": "Cavalos"}, {"id": "animal_11", "img": "img/animal_11.jpg", "subcat": "aves", "subcatLabel": "Aves"}, {"id": "animal_12", "img": "img/animal_12.jpg", "subcat": "aves", "subcatLabel": "Aves"}, {"id": "animal_13", "img": "img/animal_13.jpg", "subcat": "aves", "subcatLabel": "Aves"}, {"id": "animal_14", "img": "img/animal_14.jpg", "subcat": "aves", "subcatLabel": "Aves"}, {"id": "animal_15", "img": "img/animal_15.jpg", "subcat": "safari", "subcatLabel": "Safari"}, {"id": "animal_16", "img": "img/animal_16.jpg", "subcat": "safari", "subcatLabel": "Safari"}, {"id": "animal_17", "img": "img/animal_17.jpg", "subcat": "safari", "subcatLabel": "Safari"}, {"id": "animal_18", "img": "img/animal_18.jpg", "subcat": "safari", "subcatLabel": "Safari"}, {"id": "animal_19", "img": "img/animal_19.jpg", "subcat": "safari", "subcatLabel": "Safari"}, {"id": "animal_20", "img": "img/animal_20.jpg", "subcat": "safari", "subcatLabel": "Safari"}], "mandalas": [{"id": "mandalas_01", "img": "img/mandalas_01.jpg", "subcat": "mandalas", "subcatLabel": "Mandalas"}, {"id": "mandalas_02", "img": "img/mandalas_02.jpg", "subcat": "arvore_vida", "subcatLabel": "Árvore da Vida"}, {"id": "mandalas_03", "img": "img/mandalas_03.jpg", "subcat": "arvore_vida", "subcatLabel": "Árvore da Vida"}, {"id": "mandalas_04", "img": "img/mandalas_04.jpg", "subcat": "espiritual", "subcatLabel": "Espiritual"}, {"id": "mandalas_05", "img": "img/mandalas_05.jpg", "subcat": "buda", "subcatLabel": "Buda"}, {"id": "mandalas_06", "img": "img/mandalas_06.jpg", "subcat": "yoga", "subcatLabel": "Yoga"}, {"id": "mandalas_07", "img": "img/mandalas_07.jpg", "subcat": "arvore_vida", "subcatLabel": "Árvore da Vida"}], "automotiva": [{"id": "automotiva_01", "img": "img/automotiva_01.jpg", "subcat": "esportivos", "subcatLabel": "Esportivos"}, {"id": "automotiva_02", "img": "img/automotiva_02.jpg", "subcat": "esportivos", "subcatLabel": "Esportivos"}, {"id": "automotiva_03", "img": "img/automotiva_03.jpg", "subcat": "formula1", "subcatLabel": "Fórmula 1"}, {"id": "automotiva_04", "img": "img/automotiva_04.jpg", "subcat": "formula1", "subcatLabel": "Fórmula 1"}, {"id": "automotiva_05", "img": "img/automotiva_05.jpg", "subcat": "esportivos", "subcatLabel": "Esportivos"}, {"id": "automotiva_06", "img": "img/automotiva_06.jpg", "subcat": "classicos", "subcatLabel": "Clássicos"}, {"id": "automotiva_07", "img": "img/automotiva_07.jpg", "subcat": "classicos", "subcatLabel": "Clássicos"}, {"id": "automotiva_08", "img": "img/automotiva_08.jpg", "subcat": "esportivos", "subcatLabel": "Esportivos"}, {"id": "automotiva_09", "img": "img/automotiva_09.jpg", "subcat": "formula1", "subcatLabel": "Fórmula 1"}, {"id": "automotiva_10", "img": "img/automotiva_10.jpg", "subcat": "esportivos", "subcatLabel": "Esportivos"}, {"id": "automotiva_11", "img": "img/automotiva_11.jpg", "subcat": "esportivos", "subcatLabel": "Esportivos"}, {"id": "automotiva_12", "img": "img/automotiva_12.jpg", "subcat": "esportivos", "subcatLabel": "Esportivos"}, {"id": "automotiva_13", "img": "img/automotiva_13.jpg", "subcat": "classicos", "subcatLabel": "Clássicos"}, {"id": "automotiva_14", "img": "img/automotiva_14.jpg", "subcat": "classicos", "subcatLabel": "Clássicos"}, {"id": "automotiva_15", "img": "img/automotiva_15.jpg", "subcat": "formula1", "subcatLabel": "Fórmula 1"}, {"id": "automotiva_16", "img": "img/automotiva_16.jpg", "subcat": "esportivos", "subcatLabel": "Esportivos"}, {"id": "automotiva_17", "img": "img/automotiva_17.jpg", "subcat": "esportivos", "subcatLabel": "Esportivos"}], "placas": [{"id": "placas_01", "img": "img/placas_01.jpg", "subcat": "modernas", "subcatLabel": "Modernas"}, {"id": "placas_02", "img": "img/placas_02.jpg", "subcat": "minimalistas", "subcatLabel": "Minimalistas"}, {"id": "placas_03", "img": "img/placas_03.jpg", "subcat": "modernas", "subcatLabel": "Modernas"}, {"id": "placas_04", "img": "img/placas_04.jpg", "subcat": "decorativas", "subcatLabel": "Decorativas"}, {"id": "placas_05", "img": "img/placas_05.jpg", "subcat": "decorativas", "subcatLabel": "Decorativas"}], "fazenda": []};

const SIZES = ['30×30cm','40×40cm','50×50cm','60×60cm','80×80cm','100×100cm'];
const COLORS = [
  {name:'Preto Fosco',hex:'#1a1a1a'},
  {name:'Branco Fosco',hex:'#f0f0f0'},
  {name:'Dourado',hex:'#C9A84C'}
];

const WPP_SVG = `<svg viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>`;

const BACK_SVG = `<svg viewBox="0 0 24 24"><path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/></svg>`;
const ARROW_SVG = `<svg viewBox="0 0 24 24"><path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6z"/></svg>`;
const CHECK_SVG = `<svg viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>`;

let currentCat = null;
let currentFilter = 'Todos';
let currentProd = null;
let selectedSize = null;
let selectedColor = null;
let numInput = '';
let nameInput = '';
let touchStartX = 0;

const CATS_ORDER = ['numericas','animal','mandalas','automotiva','placas','fazenda'];

function buildCatGrid() {
  const grid = document.getElementById('catGrid');
  grid.innerHTML = '';
  CATS_ORDER.forEach(key => {
    const m = CAT_META[key];
    const prods = ALL_PRODS[key] || [];
    const firstImg = prods[0]?.img || '';
    const card = document.createElement('div');
    card.className = 'cat-card';
    card.onclick = () => openCatPanel(key);
    card.innerHTML = `
      ${firstImg ? `<img src="${firstImg}" alt="${m.name}" loading="lazy">` : ''}
      <div class="cat-overlay"></div>
      <div class="cat-arrow">${ARROW_SVG}</div>
      <div class="cat-content">
        <div class="cat-num">${m.num}</div>
        <div class="cat-name">${m.name}</div>
        <div class="cat-count">${prods.length > 0 ? prods.length + ' modelos' : 'Em breve'}</div>
      </div>`;
    grid.appendChild(card);
  });
}

function openCatPanel(key) {
  currentCat = key;
  currentFilter = 'Todos';
  const m = CAT_META[key];
  document.getElementById('panelTitle').textContent = m.name;
  document.getElementById('panelSubtitle').textContent = m.num + ' — Selecione um modelo';
  buildFilters();
  buildProducts();
  document.getElementById('catPanel').classList.add('active');
  document.getElementById('overlay').classList.add('active');
  document.body.classList.add('no-scroll');
}

function buildFilters() {
  const m = CAT_META[currentCat];
  const div = document.getElementById('filterBtns');
  div.innerHTML = '';
  m.subcats.forEach(s => {
    const btn = document.createElement('button');
    btn.className = 'filter-btn' + (s === currentFilter ? ' active' : '');
    btn.textContent = s;
    btn.onclick = () => { currentFilter = s; buildFilters(); buildProducts(); };
    div.appendChild(btn);
  });
}

function buildProducts() {
  const grid = document.getElementById('productsGrid');
  grid.innerHTML = '';
  const prods = ALL_PRODS[currentCat] || [];
  const filtered = currentFilter === 'Todos'
    ? prods
    : prods.filter(p => p.subcatLabel === currentFilter);
  if (filtered.length === 0) {
    grid.innerHTML = '<div class="empty-state">Em breve novos modelos</div>';
    return;
  }
  filtered.forEach((prod, i) => {
    const card = document.createElement('div');
    card.className = 'prod-card';
    card.onclick = () => openProdPanel(prod);
    card.innerHTML = `
      <div class="prod-img"><img src="${prod.img}" alt="${prod.subcatLabel}" loading="lazy"></div>
      <div class="prod-info">
        <div class="prod-sub">${prod.subcatLabel}</div>
        <div class="prod-name">Modelo ${String(i+1).padStart(2,'0')}</div>
      </div>`;
    grid.appendChild(card);
  });
}

function openProdPanel(prod) {
  currentProd = prod;
  selectedSize = null;
  selectedColor = null;
  const m = CAT_META[currentCat];
  document.getElementById('prodPanelTitle').textContent = prod.subcatLabel;
  document.getElementById('prodPanelSub').textContent = m.name;

  const isNum = m.hasNum && currentCat === 'numericas';
  const isFaz = currentCat === 'fazenda';

  let persHTML = '';
  if (isNum) {
    persHTML = `<div class="personalization">
      <h4>✦ Personalizar Número</h4>
      <input class="pers-input" type="text" maxlength="6" placeholder="Ex: 123" id="numField" oninput="updatePreview(this.value,'num')" value="${numInput}">
      <div class="pers-preview" id="persPreview">${numInput || '—'}</div>
    </div>`;
  } else if (isFaz) {
    persHTML = `<div class="personalization">
      <h4>✦ Personalizar Nome</h4>
      <input class="pers-input" type="text" maxlength="20" placeholder="Ex: Fazenda Boa Vista" id="nameField" oninput="updatePreview(this.value,'name')" value="${nameInput}">
      <div class="pers-preview" id="persPreview" style="font-size:18px">${nameInput || '—'}</div>
    </div>`;
  }

  const sizeBtns = SIZES.map(s =>
    `<button class="size-btn" onclick="selectSize(this,'${s}')">${s}</button>`
  ).join('');

  const colorBtns = COLORS.map(c =>
    `<button class="color-btn" onclick="selectColor(this,'${c.name}')" style="background:${c.hex}" title="${c.name}">${CHECK_SVG}</button>`
  ).join('');

  document.getElementById('prodPanelBody').innerHTML = `
    <img src="${prod.img}" alt="${prod.subcatLabel}" class="prod-detail-img">
    <div class="prod-detail-name">${prod.subcatLabel}</div>
    <div class="prod-detail-sub">${m.name}</div>
    ${persHTML}
    <div class="prod-options">
      <h4>Tamanho</h4>
      <div class="size-grid">${sizeBtns}</div>
    </div>
    <div class="prod-options">
      <h4>Acabamento</h4>
      <div class="color-grid">${colorBtns}</div>
    </div>
    <a class="cta-wpp" href="#" onclick="openWpp(event)">${WPP_SVG} Pedir via WhatsApp</a>
  `;

  document.getElementById('prodPanel').classList.add('active');
}

function updatePreview(val, type) {
  if (type === 'num') numInput = val;
  else nameInput = val;
  const el = document.getElementById('persPreview');
  if (el) el.textContent = val || '—';
}

function selectSize(btn, size) {
  document.querySelectorAll('.size-btn').forEach(b => b.classList.remove('selected'));
  btn.classList.add('selected');
  selectedSize = size;
}

function selectColor(btn, color) {
  document.querySelectorAll('.color-btn').forEach(b => b.classList.remove('selected'));
  btn.classList.add('selected');
  selectedColor = color;
}

function openWpp(e) {
  e.preventDefault();
  const m = CAT_META[currentCat];
  const lines = [
    'Olá! Tenho interesse em:',
    `📦 Categoria: ${m.name}`,
    `🎨 Modelo: ${currentProd?.subcatLabel || ''}`,
    selectedSize ? `📐 Tamanho: ${selectedSize}` : '',
    selectedColor ? `🎨 Acabamento: ${selectedColor}` : '',
    numInput ? `🔢 Número: ${numInput}` : '',
    nameInput ? `🏡 Nome: ${nameInput}` : '',
    '',
    'Pode me passar mais informações?'
  ].filter(Boolean);
  const msg = lines.join('\n');
  window.open(`https://wa.me/${WPP}?text=${encodeURIComponent(msg)}`, '_blank');
}

function closePanel() {
  document.getElementById('catPanel').classList.remove('active');
  document.getElementById('overlay').classList.remove('active');
  document.body.classList.remove('no-scroll');
  document.getElementById('prodPanel').classList.remove('active');
}

function closeProdPanel() {
  document.getElementById('prodPanel').classList.remove('active');
}

// Swipe to close
['catPanel','prodPanel'].forEach(id => {
  const el = document.getElementById(id);
  el.addEventListener('touchstart', e => { touchStartX = e.touches[0].clientX; }, {passive:true});
  el.addEventListener('touchend', e => {
    if (e.changedTouches[0].clientX - touchStartX > 80) {
      id === 'prodPanel' ? closeProdPanel() : closePanel();
    }
  });
});

document.getElementById('overlay').onclick = closePanel;

buildCatGrid();
