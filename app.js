/* ==========================================================================
   EG Imports, LLC (d/b/a Euro Gourmet Imports) - Master Application Logic
   Founder & CEO: Carlos A. Marcano
   Direct Sales: 787-649-4994 | Office: 787-494-4994
   ========================================================================== */

// Official B2B Wholesale Import Catalog Data
const B2B_CATALOG = [
    {
        id: "eg-01",
        name: "Dehesa de Luna Gran Reserva",
        winery: "Dehesa de Luna",
        category: "wine",
        categoryName: "Vinos Orgánicos",
        region: "dehesa",
        regionName: "D.O. Tierra de Castilla",
        grape: "Graciano, Syrah & Tempranillo",
        pricePerCase: 180,
        bottlesPerCase: 6,
        certified: true,
        image: "images/dehesa_luna_estate.jpg",
        abv: "14.2%",
        tasting: "100% Eco-Certified & Vegan. Wild black cherry, violet floral notes, balsamic eucalyptus, and 14 months French oak.",
        pairing: "Aged Quesos Manchegos 100%, roasted lamb, steak.",
        techSheetUrl: "#"
    },
    {
        id: "eg-02",
        name: "Sampayolo Godello Old Vines",
        winery: "Sampayolo",
        category: "wine",
        categoryName: "Vinos Orgánicos",
        region: "sampayolo",
        regionName: "D.O. Valdeorras / Galicia",
        grape: "100% Organic Godello",
        pricePerCase: 165,
        bottlesPerCase: 6,
        certified: true,
        image: "images/spanish_white_godello.jpg",
        abv: "13.2%",
        tasting: "Steep slate-terraced vineyards. Bright straw gold, white peach, green apple, crushed slate minerality.",
        pairing: "Fresh Caribbean oysters, grilled sea bass, octopus.",
        techSheetUrl: "#"
    },
    {
        id: "eg-03",
        name: "Bodegas Corcos & Izquierdo Tempranillo",
        winery: "Bodegas Corcos & Bodegas Izquierdo",
        category: "wine",
        categoryName: "Vinos Orgánicos",
        region: "ribera",
        regionName: "D.O. Ribera del Duero",
        grape: "100% Biodynamic Tempranillo",
        pricePerCase: 240,
        bottlesPerCase: 6,
        certified: true,
        image: "images/bordeaux.jpg",
        abv: "14.5%",
        tasting: "Chalky limestone elevation. Concentrated ruby core, dark plum, espresso, sweet tobacco, 16 months French oak.",
        pairing: "Jamón Ibérico 100%, prime ribeye, venison.",
        techSheetUrl: "#"
    },
    {
        id: "eg-04",
        name: "Quesos Manchegos 100% Artesanal",
        winery: "Tierra de Castilla Reserve",
        category: "cheese",
        categoryName: "Quesos Manchegos 100%",
        region: "dehesa",
        regionName: "D.O. Queso Manchego",
        grape: "100% Pure Manchega Sheep Milk",
        pricePerCase: 195,
        bottlesPerCase: 4,
        certified: true,
        image: "images/hero.jpg",
        abv: "24 Mos Aged",
        tasting: "Raw Manchega sheep milk aged 24 months in stone cellars. Complex nutty, buttery, and crystalline structure.",
        pairing: "Dehesa de Luna Gran Reserva, Spanish olives, Membrillo quince.",
        techSheetUrl: "#"
    },
    {
        id: "eg-05",
        name: "Jamón Ibérico 100% Bellota",
        winery: "Jabugo Direct Reserve",
        category: "jamon",
        categoryName: "Jamón Ibérico 100%",
        region: "dehesa",
        regionName: "D.O. Dehesa de Jabugo",
        grape: "100% Acorn-Fed Pure Ibérico",
        pricePerCase: 320,
        bottlesPerCase: 10,
        certified: true,
        image: "images/caribbean_wine_showcase.jpg",
        abv: "36 Mos Cured",
        tasting: "100% pure acorn-fed Ibérico pig cured 36 months in natural cellars. Rich oleic marbling with melting sweet savory fat.",
        pairing: "Bodegas Corcos & Izquierdo Tempranillo, Sampayolo Godello.",
        techSheetUrl: "#"
    },
    {
        id: "eg-06",
        name: "Sampayolo Mencía Red Reserve",
        winery: "Sampayolo",
        category: "wine",
        categoryName: "Vinos Orgánicos",
        region: "sampayolo",
        regionName: "D.O. Valdeorras / Galicia",
        grape: "100% Organic Mencía",
        pricePerCase: 175,
        bottlesPerCase: 6,
        certified: true,
        image: "images/spanish_vineyard_hero.jpg",
        abv: "13.8%",
        tasting: "Slate hillside vineyards. Pomegranate, red cherry, wild thyme, and vibrant mineral acidity.",
        pairing: "Roasted pork loin, braised meats, cured cheeses.",
        techSheetUrl: "#"
    }
];

// Articles Data
const JOURNAL_ARTICLES = {
    featured: {
        title: "High-Altitude Viticulture and Climate Resilience in Spanish Monastrell",
        content: `
            <span style="font-size: 0.72rem; letter-spacing: 2px; color: var(--bronze-amber); text-transform: uppercase; font-weight: 700;">EG IMPORTS, LLC TERROIR JOURNAL</span>
            <h1 id="art-intro" style="font-size: 2rem; margin: 0.5rem 0 1rem; color: var(--charcoal-dark);">High-Altitude Viticulture and Climate Resilience in Spanish Monastrell</h1>
            <p><strong>Carlos A. Marcano, Founder & CEO</strong> of EG Imports, LLC directs our sourcing toward high-altitude organic vineyards that lock in natural acidity.</p>
            <p style="margin-top:1rem; padding-top:1rem; border-top:1px solid var(--card-border);">Direct Sales Line: <strong>787-649-4994</strong> | Direct Office: <strong>787-494-4994</strong></p>
        `
    }
};

// Order State
let orderCases = JSON.parse(localStorage.getItem('eurogourmet_b2b_order')) || [];

// DOM Initialization
document.addEventListener('DOMContentLoaded', () => {
    setupTradeTabs();
    setupReadingProgressBar();
    renderProductGrid();
    updateOrderDrawerUI();
    setupSidebarAccordion();
    setupFilterListeners();
    setupDrawerListeners();
    setupFAQAccordion();
    setupB2BForm();
    setupTastingForm();
    setupMobileMenu();
    setupArticleModalListeners();
});

// Trade Tabs
function setupTradeTabs() {
    const tabBtns = document.querySelectorAll('.trade-tabs-header .tab-btn');
    const tabPanes = document.querySelectorAll('.trade-tabs-body .tab-pane');
    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const target = btn.dataset.tab;
            tabBtns.forEach(b => b.classList.remove('active'));
            tabPanes.forEach(p => p.classList.remove('active'));
            btn.classList.add('active');
            const targetPane = document.getElementById(target);
            if (targetPane) targetPane.classList.add('active');
        });
    });
}

// Reading Progress Bar
function setupReadingProgressBar() {
    const progressBar = document.getElementById('readingProgressBar');
    window.addEventListener('scroll', () => {
        const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
        const progress = (window.scrollY / totalHeight) * 100;
        if (progressBar) progressBar.style.width = `${progress}%`;
    }, { passive: true });
}

// Render Product Grid (Dehesa de Luna Style Clean Cards)
function renderProductGrid() {
    const productGrid = document.getElementById('productGrid');
    const resultsCount = document.getElementById('resultsCount');
    if (!productGrid) return;

    const categoryFilter = document.querySelector('input[name="categoryFilter"]:checked')?.value || 'all';
    const regionFilter = document.querySelector('input[name="regionFilter"]:checked')?.value || 'all';
    const organicOnly = document.getElementById('organicCheck')?.checked || false;
    const searchVal = document.getElementById('storeSearchInput')?.value.toLowerCase().trim() || '';

    const filtered = B2B_CATALOG.filter(item => {
        const matchCategory = categoryFilter === 'all' || item.category === categoryFilter;
        const matchRegion = regionFilter === 'all' || item.region === regionFilter;
        const matchOrganic = !organicOnly || item.certified;
        const matchSearch = item.name.toLowerCase().includes(searchVal) ||
                            item.winery.toLowerCase().includes(searchVal) ||
                            item.categoryName.toLowerCase().includes(searchVal);
        return matchCategory && matchRegion && matchOrganic && matchSearch;
    });

    if (resultsCount) resultsCount.textContent = `Showing ${filtered.length} Items (Call Sales: 787-649-4994)`;

    if (filtered.length === 0) {
        productGrid.innerHTML = `<div style="grid-column: 1/-1; text-align: center; padding: 4rem 1rem; color: var(--charcoal-muted);"><h3>No items match your active filters</h3></div>`;
        return;
    }

    productGrid.innerHTML = filtered.map(item => `
        <article class="product-card" data-id="${item.id}">
            <div class="product-img-wrapper" onclick="openQuickView('${item.id}')">
                ${item.certified ? '<span class="certified-tag">100% Eco / Artisanal</span>' : ''}
                <img src="${item.image}" alt="${item.name}" loading="lazy">
                <div class="quick-add-overlay">
                    <button class="btn btn-burgundy btn-sm" onclick="event.stopPropagation(); openQuickView('${item.id}')">VIEW PRODUCT</button>
                    <button class="btn btn-outline-dark btn-sm" onclick="event.stopPropagation(); addCaseToOrder('${item.id}')">+ Quick Add Case</button>
                </div>
            </div>
            <div class="product-details" onclick="openQuickView('${item.id}')">
                <span class="product-region">${item.categoryName} • ${item.regionName}</span>
                <h4 class="product-title">${item.name}</h4>
                <p class="product-grape">${item.grape}</p>
                <div class="product-footer">
                    <span class="case-price">$${item.pricePerCase} <sub>/ Case</sub></span>
                    <button class="btn btn-outline-dark btn-sm" onclick="event.stopPropagation(); openQuickView('${item.id}')">VIEW PRODUCT</button>
                </div>
            </div>
        </article>
    `).join('');
}

// Order Drawer State
function addCaseToOrder(id, count = 1) {
    const item = B2B_CATALOG.find(w => w.id === id);
    if (!item) return;
    const existing = orderCases.find(i => i.id === id);
    if (existing) { existing.cases += count; }
    else { orderCases.push({ id: item.id, name: item.name, pricePerCase: item.pricePerCase, bottlesPerCase: item.bottlesPerCase, cases: count }); }
    saveOrderState();
    updateOrderDrawerUI();
    openDrawer();
}

function changeCaseQty(id, delta) {
    const item = orderCases.find(i => i.id === id);
    if (!item) return;
    item.cases += delta;
    if (item.cases <= 0) orderCases = orderCases.filter(i => i.id !== id);
    saveOrderState();
    updateOrderDrawerUI();
}

function saveOrderState() { localStorage.setItem('eurogourmet_b2b_order', JSON.stringify(orderCases)); }

function updateOrderDrawerUI() {
    const drawerBadge = document.getElementById('drawerBadge');
    const drawerItemsList = document.getElementById('drawerItemsList');
    const totalBottlesCalc = document.getElementById('totalBottlesCalc');
    const drawerSubtotal = document.getElementById('drawerSubtotal');
    const b2bOrderSummaryInput = document.getElementById('b2bOrderSummaryInput');

    const totalCases = orderCases.reduce((sum, i) => sum + i.cases, 0);
    const subtotal = orderCases.reduce((sum, i) => sum + (i.cases * i.pricePerCase), 0);

    if (drawerBadge) drawerBadge.textContent = totalCases;
    if (totalBottlesCalc) totalBottlesCalc.textContent = `${totalCases} Cases Selected`;
    if (drawerSubtotal) drawerSubtotal.textContent = `$${subtotal.toLocaleString('en-US', { minimumFractionDigits: 2 })} USD`;

    if (b2bOrderSummaryInput) {
        b2bOrderSummaryInput.value = orderCases.length > 0 ? orderCases.map(i => `${i.name}: ${i.cases} Case(s)`).join(' | ') : "No items added yet.";
    }

    if (drawerItemsList) {
        if (orderCases.length === 0) {
            drawerItemsList.innerHTML = '<p class="drawer-empty-msg" style="color:var(--charcoal-muted); text-align:center; padding:2rem 0;">Your wholesale order bag is currently empty.</p>';
        } else {
            drawerItemsList.innerHTML = orderCases.map(item => `
                <div class="drawer-item-row">
                    <div class="drawer-item-info">
                        <h4 style="font-size:0.95rem; color:var(--charcoal-dark);">${item.name}</h4>
                        <p style="font-size:0.8rem; color:var(--charcoal-muted);">$${item.pricePerCase} / Case</p>
                    </div>
                    <div class="qty-controls">
                        <button class="qty-btn" onclick="changeCaseQty('${item.id}', -1)">−</button>
                        <span class="qty-num">${item.cases}</span>
                        <button class="qty-btn" onclick="changeCaseQty('${item.id}', 1)">+</button>
                    </div>
                </div>
            `).join('');
        }
    }
}

function openDrawer() { const drawer = document.getElementById('orderDrawer'); if (drawer) drawer.classList.add('active'); }
function closeDrawer() { const drawer = document.getElementById('orderDrawer'); if (drawer) drawer.classList.remove('active'); }

function setupDrawerListeners() {
    const trigger = document.getElementById('drawerTrigger');
    const closeBtn = document.getElementById('drawerCloseBtn');
    const backdrop = document.getElementById('drawerBackdrop');
    if (trigger) trigger.addEventListener('click', openDrawer);
    if (closeBtn) closeBtn.addEventListener('click', closeDrawer);
    if (backdrop) backdrop.addEventListener('click', closeDrawer);
}

function openQuickView(id) {
    const item = B2B_CATALOG.find(w => w.id === id);
    const modal = document.getElementById('quickViewModal');
    const content = document.getElementById('quickViewContent');
    if (!item || !modal || !content) return;

    content.innerHTML = `
        <div style="display:grid; grid-template-columns: 1fr 1fr; gap:2.5rem; align-items:center;">
            <div style="text-align: center; background: var(--parchment-soft); padding: 2rem; border-radius: var(--radius-md); border: 1px solid var(--card-border);">
                <img src="${item.image}" alt="${item.name}" style="max-height: 380px; object-fit: contain;">
            </div>
            <div>
                <span style="font-size: 0.72rem; letter-spacing: 2px; color: var(--bronze-amber); text-transform: uppercase; font-weight: 700;">EG IMPORTS, LLC • ${item.regionName}</span>
                <h2 style="font-size: 1.8rem; margin: 0.4rem 0 0.8rem; color: var(--charcoal-dark);">${item.name}</h2>
                <p style="font-size: 0.9rem; color: var(--charcoal-muted); margin-bottom: 1.2rem;">${item.tasting}</p>
                
                <div style="padding: 0.8rem 0; border-top: 1px solid var(--card-border); border-bottom: 1px solid var(--card-border); margin-bottom: 1.2rem; font-size: 0.85rem; color: var(--charcoal-muted);">
                    📞 Primary Sales: <a href="tel:7876494994" style="color: var(--deep-burgundy); font-weight:700;">787-649-4994</a> | Office: <a href="tel:7874944994" style="color: var(--deep-burgundy); font-weight:700;">787-494-4994</a>
                </div>

                <div style="display: flex; gap: 1rem;">
                    <button class="btn btn-burgundy btn-sm" onclick="addCaseToOrder('${item.id}', 1); closeQuickViewModal();">+ Add Case to Order</button>
                    <a href="tel:7876494994" class="btn btn-outline-dark btn-sm">📞 Call Sales Now</a>
                </div>
            </div>
        </div>
    `;
    modal.classList.add('active');
}

function closeQuickViewModal() { const modal = document.getElementById('quickViewModal'); if (modal) modal.classList.remove('active'); }

function openArticleReader(articleKey) {
    const article = JOURNAL_ARTICLES[articleKey] || JOURNAL_ARTICLES.featured;
    const modal = document.getElementById('articleReaderModal');
    const content = document.getElementById('articleReaderContent');
    if (!modal || !content) return;
    content.innerHTML = article.content;
    modal.classList.add('active');
}

function closeArticleModal() { const modal = document.getElementById('articleReaderModal'); if (modal) modal.classList.remove('active'); }

function setupArticleModalListeners() {
    const closeBtn = document.getElementById('articleModalCloseBtn');
    const overlay = document.getElementById('articleModalOverlay');
    if (closeBtn) closeBtn.addEventListener('click', closeArticleModal);
    if (overlay) overlay.addEventListener('click', closeArticleModal);
}

function setupSidebarAccordion() {
    const triggers = document.querySelectorAll('.sidebar-accordion-trigger');
    triggers.forEach(trigger => {
        trigger.addEventListener('click', () => {
            const content = trigger.nextElementSibling;
            trigger.classList.toggle('active');
            if (content) content.classList.toggle('open');
        });
    });
}

function setupFilterListeners() {
    const inputs = document.querySelectorAll('.filter-sidebar input');
    const searchInput = document.getElementById('storeSearchInput');
    const resetBtn = document.getElementById('resetFiltersBtn');

    inputs.forEach(input => input.addEventListener('change', renderProductGrid));
    if (searchInput) searchInput.addEventListener('input', renderProductGrid);

    if (resetBtn) {
        resetBtn.addEventListener('click', () => {
            document.querySelectorAll('.filter-sidebar input[type="radio"]').forEach(r => { if (r.value === 'all') r.checked = true; });
            const organicCheck = document.getElementById('organicCheck');
            if (organicCheck) organicCheck.checked = false;
            if (searchInput) searchInput.value = '';
            renderProductGrid();
        });
    }

    const modalCloseBtn = document.getElementById('modalCloseBtn');
    const modalOverlay = document.getElementById('modalOverlay');
    if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeQuickViewModal);
    if (modalOverlay) modalOverlay.addEventListener('click', closeQuickViewModal);
}

function setupFAQAccordion() {
    const faqTriggers = document.querySelectorAll('.faq-trigger');
    faqTriggers.forEach(trigger => {
        trigger.addEventListener('click', () => {
            const faqItem = trigger.closest('.faq-item');
            const isOpen = faqItem.classList.contains('active');
            document.querySelectorAll('.faq-item').forEach(item => item.classList.remove('active'));
            if (!isOpen) faqItem.classList.add('active');
        });
    });
}

function setupB2BForm() {
    const form = document.getElementById('b2bForm');
    const responseDiv = document.getElementById('b2bResponse');
    if (form) {
        form.addEventListener('submit', (e) => {
            if (responseDiv) {
                responseDiv.className = "form-response success";
                responseDiv.innerHTML = "✓ B2B Trade Account Inquiry Received! EG Imports, LLC team will contact you within 24 hours (Sales: 787-649-4994).";
            }
        });
    }
}

function setupTastingForm() {
    const form = document.getElementById('tastingRequestForm');
    const responseDiv = document.getElementById('tastingFormResponse');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const restaurant = document.getElementById('tastingRestaurant')?.value || 'Restaurant';
            const winery = document.getElementById('tastingWinery')?.value || 'Selected Portfolio';
            if (responseDiv) {
                responseDiv.className = "form-response success";
                responseDiv.innerHTML = `✓ Tasting Visit Request Received for ${restaurant}! Our sommelier team will contact you to confirm your guided tasting of ${winery}. (Sales: 787-649-4994)`;
            }
            form.reset();
        });
    }
}

function setupMobileMenu() {
    const toggle = document.getElementById('mobileToggle');
    const menu = document.getElementById('navMenu');
    if (toggle && menu) {
        toggle.addEventListener('click', () => {
            menu.style.display = menu.style.display === 'flex' ? 'none' : 'flex';
        });
    }
}
