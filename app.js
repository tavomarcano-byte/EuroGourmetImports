/* ==========================================================================
   Euro Gourmet Imports PR - Phase 4 Master JavaScript Application Logic
   ========================================================================== */

// Articles Data
const JOURNAL_ARTICLES = {
    featured: {
        id: "art-feat",
        title: "High-Altitude Viticulture and Climate Resilience in Spanish Monastrell",
        category: "High-Altitude Viticulture",
        readTime: "8 min read",
        author: "Dr. Alejandro Ruiz, Master Sommelier",
        date: "August 4, 2026",
        image: "images/spanish_vineyard_hero.jpg",
        content: `
            <span style="font-size: 0.72rem; letter-spacing: 2px; color: var(--parchment-muted); text-transform: uppercase; font-weight: 700;">TERROIR RESEARCH VOL. 4</span>
            <h1 id="art-intro">High-Altitude Viticulture and Climate Resilience in Spanish Monastrell</h1>
            <p class="lead-text">
                As global temperatures rise across the Mediterranean basin, high-altitude vineyards situated between 600 and 850 meters in Yecla and Jumilla represent the future of sustainable, climate-resilient Spanish viticulture.
            </p>

            <h2 id="art-terroir" style="font-size: 1.5rem; margin: 2rem 0 1rem;">1. The Diurnal Temperature Shift</h2>
            <p>
                In low-altitude regions, intense summer heat accelerates grape sugar accumulation while rapidly degrading natural malic and tartaric acidity. High-altitude Monastrell vineyards benefit from a severe diurnal temperature drop—often exceeding 20°C (36°F) between day and night.
            </p>
            <blockquote>
                "High elevation acts as a natural air conditioner, allowing phenolic grape maturity while locking in crisp, mouth-watering acidity indispensable for Caribbean wine programs."
            </blockquote>

            <h2 id="art-chemistry" style="font-size: 1.5rem; margin: 2rem 0 1rem;">2. Deep Roots & Limestone Moisture Retention</h2>
            <p>
                Non-irrigated dry-farmed bush vines extend their root networks up to 12 meters into deep chalky limestone subsoils. This mineral depth imparts structured minerality and firm, elegant tannins that pair seamlessly with complex culinary reductions.
            </p>

            <h2 id="art-gastronomy" style="font-size: 1.5rem; margin: 2rem 0 1rem;">3. Pairing Resilience with Caribbean Gastronomy</h2>
            <p>
                The inherent fresh acidity and bright red fruit profile of high-altitude Monastrell allows it to cut through rich roasted lechón, sofrito braises, and aged cheeses without overwhelming delicate palates in warm island climates.
            </p>

            <h2 id="art-conclusion" style="font-size: 1.5rem; margin: 2rem 0 1rem;">4. Summary & Downloadable Research Paper</h2>
            <p>
                Euro Gourmet Imports PR exclusively contracts high-altitude allocations to guarantee consistent vintage quality for our hospitality partners.
            </p>
            <div style="margin-top: 2rem; display: flex; gap: 1rem;">
                <button class="btn btn-burgundy btn-sm" onclick="window.print();">📄 Download PDF Research Paper</button>
                <button class="btn btn-outline btn-sm" onclick="closeArticleModal();">Return to Journal Feed</button>
            </div>
        `
    },
    card1: {
        id: "art-c1",
        title: "The Chemistry of Plant-Based Fining: Organic Pea Protein vs Isinglass",
        category: "Vegan Fining",
        readTime: "6 min read",
        author: "Chef Elena Vance",
        date: "July 28, 2026",
        image: "images/bordeaux.jpg",
        content: `
            <span style="font-size: 0.72rem; letter-spacing: 2px; color: var(--parchment-muted); text-transform: uppercase; font-weight: 700;">CELLAR SCIENCE PAPER</span>
            <h1 id="art-intro">The Chemistry of Plant-Based Fining</h1>
            <p>Traditional wine clarification relies on animal proteins such as casein, gelatin, or fish bladder isinglass. Our partner estates utilize pea protein isolate and bentonite clay minerals.</p>
            <blockquote>"Vegetable proteins selectively bind harsh astringent tannins without stripping delicate volatile aromatic compounds."</blockquote>
            <p id="art-conclusion">This ensures 100% vegan purity and hypoallergenic safety for luxury resort dining lists.</p>
        `
    },
    card2: {
        id: "art-c2",
        title: "Preserving Oak Forest Wildlife Corridors in La Mancha Estates",
        category: "Biodiversity Reserves",
        readTime: "4 min read",
        author: "Marcos De La Cruz",
        date: "July 15, 2026",
        image: "images/dehesa_luna_estate.jpg",
        content: `
            <span style="font-size: 0.72rem; letter-spacing: 2px; color: var(--parchment-muted); text-transform: uppercase; font-weight: 700;">SUSTAINABILITY REPORT</span>
            <h1 id="art-intro">Preserving Wildlife Corridors</h1>
            <p>Integrating 3,000 hectares of natural holm oak forest around vineyards preserves predatory bird habitats that naturally control pests, eliminating chemical sprays.</p>
        `
    },
    card3: {
        id: "art-c3",
        title: "Pairing Spanish Tempranillo with Caribbean Spice & Smoked Meats",
        category: "Caribbean Pairing",
        readTime: "7 min read",
        author: "Jean-Paul Mercier, MS",
        date: "June 30, 2026",
        image: "images/caribbean_wine_showcase.jpg",
        content: `
            <span style="font-size: 0.72rem; letter-spacing: 2px; color: var(--parchment-muted); text-transform: uppercase; font-weight: 700;">SOMMELIER PAIRING GUIDE</span>
            <h1 id="art-intro">Pairing Spanish Tempranillo with Caribbean Gastronomy</h1>
            <p>Exploring how oak-aged Tempranillo tannins interact with Allspice, garlic sofrito, and smoked meats in Caribbean fine dining.</p>
        `
    }
};

// Storefront B2B Catalog
const B2B_CATALOG = [
    { id: "sp-01", name: "Dehesa de Luna Gran Reserva", winery: "Dehesa de Luna", type: "red", region: "mancha", regionName: "La Mancha / Montiel", grape: "Graciano, Syrah & Tempranillo", aging: "reserva", agingName: "Gran Reserva (14 Mos Oak)", pricePerCase: 180, bottlesPerCase: 6, certified: true, image: "images/dehesa_luna_estate.jpg", abv: "14.2%", tasting: "Intense purple garnet hue. Wild black cherry, violet floral notes, balsamic eucalyptus, and toasted cedar wood.", pairing: "Prime dry-aged steaks, roasted lamb chops, 24-month Manchego cheese.", techSheetUrl: "#" },
    { id: "sp-02", name: "Bodegas Izquierdo Tempranillo", winery: "Bodegas Izquierdo", type: "red", region: "ribera", regionName: "Ribera del Duero D.O.", grape: "100% Biodynamic Tempranillo", aging: "reserva", agingName: "Reserva (16 Mos French Oak)", pricePerCase: 240, bottlesPerCase: 6, certified: true, image: "images/bordeaux.jpg", abv: "14.5%", tasting: "Concentrated ruby core. Dark plum, sweet tobacco, espresso bean, and complex mineral structure.", pairing: "Venison loin, seared ribeye, smoked charcuterie, truffle risotto.", techSheetUrl: "#" },
    { id: "sp-03", name: "Conde de Montornés Monastrell", winery: "Conde de Montornés", type: "red", region: "yecla", regionName: "Yecla / Jumilla (850m)", grape: "100% High-Altitude Monastrell", aging: "crianza", agingName: "Crianza (8 Mos Oak)", pricePerCase: 150, bottlesPerCase: 6, certified: true, image: "images/caribbean_wine_showcase.jpg", abv: "14.0%", tasting: "Lively dark cherry and wild thyme aromas. Crisp mountain acidity balanced by ripe blackberry fruit.", pairing: "Grilled Spanish octopus, braised short ribs, aged goat cheese.", techSheetUrl: "#" },
    { id: "sp-04", name: "Valdeorras Godello Old Vines", winery: "Bodegas Gaia Valdeorras", type: "white", region: "valdeorras", regionName: "Valdeorras D.O. Galicia", grape: "100% Organic Godello", aging: "joven", agingName: "Joven (Lees Contact / Steel)", pricePerCase: 165, bottlesPerCase: 6, certified: true, image: "images/spanish_white_godello.jpg", abv: "13.2%", tasting: "Bright straw gold. White peach, green apple, crushed slate minerality, and vibrant lemon zest acidity.", pairing: "Fresh Caribbean lobster, oysters, ceviche, grilled sea bass.", techSheetUrl: "#" },
    { id: "sp-05", name: "Tierra de Castilla Organic Rosado", winery: "Dehesa de Luna", type: "rose", region: "mancha", regionName: "Tierra de Castilla", grape: "100% Organic Garnacha", aging: "joven", agingName: "Joven (Stainless Steel)", pricePerCase: 135, bottlesPerCase: 6, certified: true, image: "images/spanish_vineyard_hero.jpg", abv: "12.8%", tasting: "Delicate pale salmon hue. Wild strawberry, watermelon, crushed stone minerality.", pairing: "Tuna carpaccio, paella de mariscos, summer salads.", techSheetUrl: "#" },
    { id: "sp-06", name: "Artesanal Spanish Vermut Reserve", winery: "Conde de Montornés", type: "vermut", region: "yecla", regionName: "Valencia / Jumilla", grape: "Macabeo & Botanical Infusion", aging: "crianza", agingName: "Crianza (12 Mos Solera Oak)", pricePerCase: 140, bottlesPerCase: 6, certified: true, image: "images/champagne.jpg", abv: "15.0%", tasting: "Rich amber copper. Aromas of wormwood, bitter orange peel, clove, cinnamon, and caramel.", pairing: "Aperitivo hour, olives, salted almonds, Spanish Jamón Ibérico.", techSheetUrl: "#" }
];

// State
let orderCases = JSON.parse(localStorage.getItem('eurogourmet_b2b_order')) || [];

// DOM Ready
document.addEventListener('DOMContentLoaded', () => {
    setupReadingProgressBar();
    setupTopicPills();
    setupNewsletterForm();
    renderProductGrid();
    updateOrderDrawerUI();
    setupSidebarAccordion();
    setupFilterListeners();
    setupDrawerListeners();
    setupFAQAccordion();
    setupB2BForm();
    setupMobileMenu();
    setupArticleModalListeners();
});

// Reading Progress Bar (Scroll Event)
function setupReadingProgressBar() {
    const progressBar = document.getElementById('readingProgressBar');
    window.addEventListener('scroll', () => {
        const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
        const progress = (window.scrollY / totalHeight) * 100;
        if (progressBar) progressBar.style.width = `${progress}%`;
    });
}

// Open Article Reader Modal
function openArticleReader(articleKey) {
    const article = JOURNAL_ARTICLES[articleKey] || JOURNAL_ARTICLES.featured;
    const modal = document.getElementById('articleReaderModal');
    const content = document.getElementById('articleReaderContent');

    if (!modal || !content) return;

    content.innerHTML = article.content;
    modal.classList.add('active');
}

function closeArticleModal() {
    const modal = document.getElementById('articleReaderModal');
    if (modal) modal.classList.remove('active');
}

function setupArticleModalListeners() {
    const closeBtn = document.getElementById('articleModalCloseBtn');
    const overlay = document.getElementById('articleModalOverlay');
    if (closeBtn) closeBtn.addEventListener('click', closeArticleModal);
    if (overlay) overlay.addEventListener('click', closeArticleModal);
}

// Scrollable Topic Pills Filter
function setupTopicPills() {
    const pills = document.querySelectorAll('.topic-pill');
    pills.forEach(pill => {
        pill.addEventListener('click', () => {
            pills.forEach(p => p.classList.remove('active'));
            pill.classList.add('active');
        });
    });
}

// Newsletter Inline Form
function setupNewsletterForm() {
    const form = document.getElementById('newsletterForm');
    const msg = document.getElementById('newsletterMsg');

    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            if (msg) {
                msg.style.display = 'block';
                msg.textContent = "✓ Subscribed! You will receive monthly allocation & viticulture analysis reports.";
                form.reset();
            }
        });
    }
}

// Render Responsive Product Grid
function renderProductGrid() {
    const productGrid = document.getElementById('productGrid');
    const resultsCount = document.getElementById('resultsCount');
    if (!productGrid) return;

    const typeFilter = document.querySelector('input[name="typeFilter"]:checked')?.value || 'all';
    const regionFilter = document.querySelector('input[name="regionFilter"]:checked')?.value || 'all';
    const organicOnly = document.getElementById('organicCheck')?.checked || false;
    const searchVal = document.getElementById('storeSearchInput')?.value.toLowerCase().trim() || '';

    const filtered = B2B_CATALOG.filter(item => {
        const matchType = typeFilter === 'all' || item.type === typeFilter;
        const matchRegion = regionFilter === 'all' || item.region === regionFilter;
        const matchOrganic = !organicOnly || item.certified;
        const matchSearch = item.name.toLowerCase().includes(searchVal) ||
                            item.winery.toLowerCase().includes(searchVal) ||
                            item.grape.toLowerCase().includes(searchVal);
        return matchType && matchRegion && matchOrganic && matchSearch;
    });

    if (resultsCount) resultsCount.textContent = `Showing ${filtered.length} Spanish Import Allocations`;

    if (filtered.length === 0) {
        productGrid.innerHTML = `
            <div style="grid-column: 1/-1; text-align: center; padding: 4rem 1rem; color: var(--parchment-muted);">
                <h3>No wine allocations match your active filters</h3>
            </div>
        `;
        return;
    }

    productGrid.innerHTML = filtered.map(item => `
        <article class="product-card" data-id="${item.id}">
            <div class="product-img-wrapper" onclick="openQuickView('${item.id}')">
                ${item.certified ? '<span class="certified-tag">Organic & Vegan</span>' : ''}
                <img src="${item.image}" alt="${item.name}" loading="lazy">
                <div class="quick-add-overlay">
                    <button class="btn btn-burgundy btn-sm" onclick="event.stopPropagation(); addCaseToOrder('${item.id}')">+ Quick Add Case</button>
                </div>
            </div>
            <div class="product-details" onclick="openQuickView('${item.id}')">
                <span class="product-region">${item.regionName}</span>
                <h4 class="product-title">${item.name}</h4>
                <p class="product-grape">${item.grape}</p>
                <div class="product-footer">
                    <span class="case-price">$${item.pricePerCase} <sub>/ Case (6 btl)</sub></span>
                    <button class="btn btn-outline btn-sm" onclick="event.stopPropagation(); openQuickView('${item.id}')">View Spec</button>
                </div>
            </div>
        </article>
    `).join('');
}

// B2B Case Order Logic
function addCaseToOrder(id, count = 1) {
    const wine = B2B_CATALOG.find(w => w.id === id);
    if (!wine) return;
    const existing = orderCases.find(item => item.id === id);
    if (existing) { existing.cases += count; }
    else { orderCases.push({ id: wine.id, name: wine.name, pricePerCase: wine.pricePerCase, bottlesPerCase: wine.bottlesPerCase, cases: count }); }
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
    const totalBottles = totalCases * 6;
    const subtotal = orderCases.reduce((sum, i) => sum + (i.cases * i.pricePerCase), 0);

    if (drawerBadge) drawerBadge.textContent = totalCases;
    if (totalBottlesCalc) totalBottlesCalc.textContent = `${totalBottles} Bottles (${totalCases} Cases)`;
    if (drawerSubtotal) drawerSubtotal.textContent = `$${subtotal.toLocaleString('en-US', { minimumFractionDigits: 2 })} USD`;

    if (b2bOrderSummaryInput) {
        b2bOrderSummaryInput.value = orderCases.length > 0 ? orderCases.map(i => `${i.name}: ${i.cases} Case(s)`).join(' | ') : "No cases added yet.";
    }

    if (drawerItemsList) {
        if (orderCases.length === 0) {
            drawerItemsList.innerHTML = '<p class="drawer-empty-msg">Your wholesale case bag is currently empty.</p>';
        } else {
            drawerItemsList.innerHTML = orderCases.map(item => `
                <div class="drawer-item-row">
                    <div class="drawer-item-info">
                        <h4>${item.name}</h4>
                        <p>$${item.pricePerCase} / Case • ${item.cases * item.bottlesPerCase} Bottles</p>
                    </div>
                    <div class="qty-controls">
                        <button class="qty-btn" onclick="changeCaseQty('${item.id}', -1)">−</button>
                        <span class="qty-num">${item.cases} Case</span>
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
    const wine = B2B_CATALOG.find(w => w.id === id);
    const modal = document.getElementById('quickViewModal');
    const content = document.getElementById('quickViewContent');
    if (!wine || !modal || !content) return;

    content.innerHTML = `
        <div class="modal-grid-layout">
            <div style="text-align: center; background: radial-gradient(circle at center, #2b3037 0%, #15181b 100%); padding: 2rem; border-radius: var(--radius-md);">
                <img src="${wine.image}" alt="${wine.name}" style="max-height: 380px; object-fit: contain;">
            </div>
            <div>
                <span style="font-size: 0.72rem; letter-spacing: 2px; color: var(--parchment-muted); text-transform: uppercase; font-weight: 700;">${wine.regionName}</span>
                <h2 style="font-size: 1.8rem; margin: 0.4rem 0 0.8rem; color: var(--soft-parchment);">${wine.name}</h2>
                <p style="font-size: 0.9rem; color: var(--parchment-muted); margin-bottom: 1.2rem;">${wine.tasting}</p>
                <div style="display: flex; gap: 1rem; margin-top: 1.5rem;">
                    <button class="btn btn-burgundy btn-sm" onclick="addCaseToOrder('${wine.id}', 1); closeQuickViewModal();">+ Add Case to Order</button>
                </div>
            </div>
        </div>
    `;
    modal.classList.add('active');
}

function closeQuickViewModal() {
    const modal = document.getElementById('quickViewModal');
    if (modal) modal.classList.remove('active');
}

function setupSidebarAccordion() {
    const triggers = document.querySelectorAll('.sidebar-accordion-trigger');
    triggers.forEach(trigger => {
        trigger.addEventListener('click', () => {
            const content = trigger.nextElementSibling;
            const arrow = trigger.querySelector('.accordion-arrow');
            trigger.classList.toggle('active');
            if (content) content.classList.toggle('open');
            if (arrow) arrow.textContent = content.classList.contains('open') ? '−' : '+';
        });
    });
}

function setupFilterListeners() {
    const inputs = document.querySelectorAll('.filter-sidebar input');
    const searchInput = document.getElementById('storeSearchInput');
    inputs.forEach(input => input.addEventListener('change', renderProductGrid));
    if (searchInput) searchInput.addEventListener('input', renderProductGrid);

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
                responseDiv.innerHTML = "✓ Stockist Order Inquiry Received!";
            }
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
