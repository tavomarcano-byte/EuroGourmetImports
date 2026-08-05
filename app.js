/* ==========================================================================
   Euro Gourmet Imports PR - Phase 3 Master JavaScript Application Logic
   ========================================================================== */

// Spanish Import Catalog Data (B2B Case Allocations)
const B2B_CATALOG = [
    {
        id: "sp-01",
        name: "Dehesa de Luna Gran Reserva",
        winery: "Dehesa de Luna",
        type: "red",
        region: "mancha",
        regionName: "La Mancha / Montiel",
        grape: "Graciano, Syrah & Tempranillo",
        aging: "reserva",
        agingName: "Gran Reserva (14 Mos Oak)",
        pricePerCase: 180, // USD per case (6 bottles)
        bottlesPerCase: 6,
        certified: true,
        image: "images/dehesa_luna_estate.jpg",
        abv: "14.2%",
        tasting: "Intense purple garnet hue. Wild black cherry, violet floral notes, balsamic eucalyptus, and toasted cedar wood. Full-bodied with velvet tannins.",
        pairing: "Prime dry-aged steaks, roasted lamb chops, 24-month Manchego cheese.",
        techSheetUrl: "#"
    },
    {
        id: "sp-02",
        name: "Bodegas Izquierdo Tempranillo",
        winery: "Bodegas Izquierdo",
        type: "red",
        region: "ribera",
        regionName: "Ribera del Duero D.O.",
        grape: "100% Biodynamic Tempranillo",
        aging: "reserva",
        agingName: "Reserva (16 Mos French Oak)",
        pricePerCase: 240,
        bottlesPerCase: 6,
        certified: true,
        image: "images/bordeaux.jpg",
        abv: "14.5%",
        tasting: "Concentrated ruby core. Dark plum, sweet tobacco, espresso bean, and complex mineral structure from 60-year-old vines.",
        pairing: "Venison loin, seared ribeye, smoked charcuterie, truffle risotto.",
        techSheetUrl: "#"
    },
    {
        id: "sp-03",
        name: "Conde de Montornés Monastrell",
        winery: "Conde de Montornés",
        type: "red",
        region: "yecla",
        regionName: "Yecla / Jumilla (850m)",
        grape: "100% High-Altitude Monastrell",
        aging: "crianza",
        agingName: "Crianza (8 Mos Oak)",
        pricePerCase: 150,
        bottlesPerCase: 6,
        certified: true,
        image: "images/caribbean_wine_showcase.jpg",
        abv: "14.0%",
        tasting: "Lively dark cherry and wild thyme aromas. Crisp mountain acidity balanced by ripe blackberry fruit and subtle French oak warmth.",
        pairing: "Grilled Spanish octopus, braised short ribs, aged goat cheese.",
        techSheetUrl: "#"
    },
    {
        id: "sp-04",
        name: "Valdeorras Godello Old Vines",
        winery: "Bodegas Gaia Valdeorras",
        type: "white",
        region: "valdeorras",
        regionName: "Valdeorras D.O. Galicia",
        grape: "100% Organic Godello",
        aging: "joven",
        agingName: "Joven (Lees Contact / Steel)",
        pricePerCase: 165,
        bottlesPerCase: 6,
        certified: true,
        image: "images/spanish_white_godello.jpg",
        abv: "13.2%",
        tasting: "Bright straw gold. White peach, green apple, crushed slate minerality, and vibrant lemon zest acidity. Crisp and refreshing finish.",
        pairing: "Fresh Caribbean lobster, oysters, ceviche, grilled sea bass.",
        techSheetUrl: "#"
    },
    {
        id: "sp-05",
        name: "Tierra de Castilla Organic Rosado",
        winery: "Dehesa de Luna",
        type: "rose",
        region: "mancha",
        regionName: "Tierra de Castilla",
        grape: "100% Organic Garnacha",
        aging: "joven",
        agingName: "Joven (Stainless Steel)",
        pricePerCase: 135,
        bottlesPerCase: 6,
        certified: true,
        image: "images/spanish_vineyard_hero.jpg",
        abv: "12.8%",
        tasting: "Delicate pale salmon hue. Wild strawberry, watermelon, crushed stone minerality, and a crisp, bone-dry finish.",
        pairing: "Tuna carpaccio, paella de mariscos, summer salads, fresh fruit.",
        techSheetUrl: "#"
    },
    {
        id: "sp-06",
        name: "Artesanal Spanish Vermut Reserve",
        winery: "Conde de Montornés",
        type: "vermut",
        region: "yecla",
        regionName: "Valencia / Jumilla",
        grape: "Macabeo & Botanical Infusion",
        aging: "crianza",
        agingName: "Crianza (12 Mos Solera Oak)",
        pricePerCase: 140,
        bottlesPerCase: 6,
        certified: true,
        image: "images/champagne.jpg",
        abv: "15.0%",
        tasting: "Rich amber copper. Aromas of wormwood, bitter orange peel, clove, cinnamon, and caramel. Perfectly balanced sweet-bitter finish.",
        pairing: "Aperitivo hour, olives, salted almonds, Spanish Jamón Ibérico.",
        techSheetUrl: "#"
    }
];

// Order Drawer State
let orderCases = JSON.parse(localStorage.getItem('eurogourmet_b2b_order')) || [];

// DOM Initialization
document.addEventListener('DOMContentLoaded', () => {
    renderProductGrid();
    updateOrderDrawerUI();
    setupSidebarAccordion();
    setupFilterListeners();
    setupDrawerListeners();
    setupFAQAccordion();
    setupB2BForm();
    setupMobileMenu();
});

// Render Responsive Bottle & Case Grid
function renderProductGrid() {
    const productGrid = document.getElementById('productGrid');
    const resultsCount = document.getElementById('resultsCount');
    if (!productGrid) return;

    // Get Active Filters
    const typeFilter = document.querySelector('input[name="typeFilter"]:checked')?.value || 'all';
    const regionFilter = document.querySelector('input[name="regionFilter"]:checked')?.value || 'all';
    const agingFilter = document.querySelector('input[name="agingFilter"]:checked')?.value || 'all';
    const organicOnly = document.getElementById('organicCheck')?.checked || false;
    const searchVal = document.getElementById('storeSearchInput')?.value.toLowerCase().trim() || '';

    const filtered = B2B_CATALOG.filter(item => {
        const matchType = typeFilter === 'all' || item.type === typeFilter;
        const matchRegion = regionFilter === 'all' || item.region === regionFilter;
        const matchAging = agingFilter === 'all' || item.aging === agingFilter;
        const matchOrganic = !organicOnly || item.certified;
        const matchSearch = item.name.toLowerCase().includes(searchVal) ||
                            item.winery.toLowerCase().includes(searchVal) ||
                            item.grape.toLowerCase().includes(searchVal) ||
                            item.regionName.toLowerCase().includes(searchVal);
        return matchType && matchRegion && matchAging && matchOrganic && matchSearch;
    });

    if (resultsCount) {
        resultsCount.textContent = `Showing ${filtered.length} Spanish Import Allocations`;
    }

    if (filtered.length === 0) {
        productGrid.innerHTML = `
            <div style="grid-column: 1/-1; text-align: center; padding: 4rem 1rem; color: var(--parchment-muted);">
                <h3>No wine allocations match your active filters</h3>
                <p>Try resetting your sidebar filters or clearing your search term.</p>
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

// Add Case to B2B Wholesale Order Bag
function addCaseToOrder(id, count = 1) {
    const wine = B2B_CATALOG.find(w => w.id === id);
    if (!wine) return;

    const existing = orderCases.find(item => item.id === id);
    if (existing) {
        existing.cases += count;
    } else {
        orderCases.push({
            id: wine.id,
            name: wine.name,
            pricePerCase: wine.pricePerCase,
            bottlesPerCase: wine.bottlesPerCase,
            cases: count
        });
    }

    saveOrderState();
    updateOrderDrawerUI();
    openDrawer();
}

// Modify Case Quantity
function changeCaseQty(id, delta) {
    const item = orderCases.find(i => i.id === id);
    if (!item) return;

    item.cases += delta;
    if (item.cases <= 0) {
        orderCases = orderCases.filter(i => i.id !== id);
    }

    saveOrderState();
    updateOrderDrawerUI();
}

function saveOrderState() {
    localStorage.setItem('eurogourmet_b2b_order', JSON.stringify(orderCases));
}

// Update Order Drawer UI and Bottle Calculations
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

    // Sync Form Field
    if (b2bOrderSummaryInput) {
        if (orderCases.length > 0) {
            b2bOrderSummaryInput.value = orderCases.map(i => `${i.name}: ${i.cases} Case(s) (${i.cases * 6} btl)`).join(' | ');
        } else {
            b2bOrderSummaryInput.value = "No cases added yet.";
        }
    }

    // Render Drawer List Items
    if (drawerItemsList) {
        if (orderCases.length === 0) {
            drawerItemsList.innerHTML = '<p class="drawer-empty-msg">Your wholesale case bag is currently empty. Click "+ Add Case" on any bottle card to build your allocation!</p>';
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

// Drawer Toggles
function openDrawer() {
    const drawer = document.getElementById('orderDrawer');
    if (drawer) drawer.classList.add('active');
}

function closeDrawer() {
    const drawer = document.getElementById('orderDrawer');
    if (drawer) drawer.classList.remove('active');
}

function setupDrawerListeners() {
    const trigger = document.getElementById('drawerTrigger');
    const closeBtn = document.getElementById('drawerCloseBtn');
    const backdrop = document.getElementById('drawerBackdrop');
    const proceedBtn = document.getElementById('proceedCheckoutBtn');

    if (trigger) trigger.addEventListener('click', openDrawer);
    if (closeBtn) closeBtn.addEventListener('click', closeDrawer);
    if (backdrop) backdrop.addEventListener('click', closeDrawer);
    if (proceedBtn) proceedBtn.addEventListener('click', closeDrawer);
}

// Sommelier Quick-View Pop-Up Modal
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
                
                <div style="display: flex; gap: 1.5rem; border-top: 1px solid var(--glass-border); border-bottom: 1px solid var(--glass-border); padding: 0.8rem 0; margin-bottom: 1.2rem; font-size: 0.82rem;">
                    <div><strong style="color: var(--soft-parchment); display:block;">OAK AGING</strong> <span style="color: var(--parchment-muted);">${wine.agingName}</span></div>
                    <div><strong style="color: var(--soft-parchment); display:block;">ALCOHOL BY VOL</strong> <span style="color: var(--parchment-muted);">${wine.abv}</span></div>
                    <div><strong style="color: var(--soft-parchment); display:block;">VARIETAL</strong> <span style="color: var(--parchment-muted);">${wine.grape}</span></div>
                </div>

                <div style="margin-bottom: 1.5rem;">
                    <strong style="font-size: 0.82rem; color: var(--soft-parchment); display:block; margin-bottom: 0.3rem;">SOMMELIER PAIRINGS:</strong>
                    <p style="font-size: 0.85rem; color: var(--parchment-muted);">${wine.pairing}</p>
                </div>

                <div style="display: flex; align-items: center; justify-content: space-between; gap: 1rem; margin-top: 1.5rem;">
                    <div>
                        <span style="font-family: var(--font-heading); font-size: 1.6rem; color: var(--soft-parchment); font-weight:700;">$${wine.pricePerCase}</span>
                        <span style="font-size: 0.75rem; color: var(--parchment-muted); display:block;">Per Case (6 btl)</span>
                    </div>
                    <div style="display: flex; gap: 0.6rem;">
                        <button class="btn btn-outline btn-sm" onclick="window.open('${wine.techSheetUrl}', '_blank')">📄 Download Spec Sheet</button>
                        <button class="btn btn-burgundy btn-sm" onclick="addCaseToOrder('${wine.id}', 1); closeQuickViewModal();">+ Add Case to Order</button>
                    </div>
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

// Sidebar Filter Accordion Logic
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
    const resetBtn = document.getElementById('resetFiltersBtn');

    inputs.forEach(input => input.addEventListener('change', renderProductGrid));
    if (searchInput) searchInput.addEventListener('input', renderProductGrid);

    if (resetBtn) {
        resetBtn.addEventListener('click', () => {
            document.querySelectorAll('.filter-sidebar input[type="radio"]').forEach(r => {
                if (r.value === 'all') r.checked = true;
            });
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

// FAQ Accordion Toggle
function setupFAQAccordion() {
    const faqTriggers = document.querySelectorAll('.faq-trigger');
    faqTriggers.forEach(trigger => {
        trigger.addEventListener('click', () => {
            const faqItem = trigger.closest('.faq-item');
            const isOpen = faqItem.classList.contains('active');
            document.querySelectorAll('.faq-item').forEach(item => {
                item.classList.remove('active');
                const btn = item.querySelector('.faq-trigger');
                if (btn) btn.setAttribute('aria-expanded', 'false');
            });
            if (!isOpen) {
                faqItem.classList.add('active');
                trigger.setAttribute('aria-expanded', 'true');
            }
        });
    });
}

// B2B Form Submission
function setupB2BForm() {
    const form = document.getElementById('b2bForm');
    const responseDiv = document.getElementById('b2bResponse');
    if (form) {
        form.addEventListener('submit', (e) => {
            if (responseDiv) {
                responseDiv.className = "form-response success";
                responseDiv.innerHTML = "✓ Stockist Order Inquiry Received! Our commercial beverage director will review your account and send wholesale price sheets within 24 hours.";
            }
        });
    }
}

// Mobile Menu Navigation
function setupMobileMenu() {
    const toggle = document.getElementById('mobileToggle');
    const menu = document.getElementById('navMenu');
    if (toggle && menu) {
        toggle.addEventListener('click', () => {
            menu.style.display = menu.style.display === 'flex' ? 'none' : 'flex';
            if (menu.style.display === 'flex') {
                menu.style.flexDirection = 'column';
                menu.style.position = 'absolute';
                menu.style.top = '100%';
                menu.style.left = '0';
                menu.style.width = '100%';
                menu.style.background = '#1A1D20';
                menu.style.padding = '2rem';
                menu.style.borderBottom = '1px solid var(--glass-border)';
            }
        });
    }
}
