/* ==========================================================================
   EuroGourmet Imports - JavaScript Application Logic
   ========================================================================== */

// Portfolio Data
const WINE_DATA = [
    {
        id: "w1",
        name: "Château Montrose Grand Vin de Bordeaux",
        category: "red",
        region: "Bordeaux, France",
        vintage: "2015",
        price: "$195.00",
        notes: "Deep garnet red with complex notes of blackcurrant, cedar, crushed graphite, and velvety polished tannins.",
        image: "images/bordeaux.jpg",
        badge: "Grand Cru Classé",
        pairingFood: "Prime Ribeye & Aged Steaks",
        abv: "14.2%"
    },
    {
        id: "w2",
        name: "Grande Cuvée Prestige Millésime Brut",
        category: "sparkling",
        region: "Champagne, France",
        vintage: "2012",
        price: "$145.00",
        notes: "Fine persistent effervescence with rich aromas of toasted brioche, white peach, candied citrus, and hazelnut.",
        image: "images/champagne.jpg",
        badge: "Limited Release",
        pairingFood: "Fresh Oysters & Grilled Sea Bass",
        abv: "12.5%"
    },
    {
        id: "w3",
        name: "Domaine Seraphin Vosne-Romanée",
        category: "red",
        region: "Burgundy, France",
        vintage: "2018",
        price: "$230.00",
        notes: "Silky Pinot Noir elegance with dark cherry, violet blossoms, subtle forest floor spice, and exceptional balance.",
        image: "images/hero.jpg",
        badge: "Estate Reserve",
        pairingFood: "Truffle Pasta & Cream Risottos",
        abv: "13.5%"
    },
    {
        id: "w4",
        name: "Tenuta San Guido Bolgheri Sassicaia",
        category: "red",
        region: "Tuscany, Italy",
        vintage: "2019",
        price: "$280.00",
        notes: "Iconic Super Tuscan with intense dark berry aromas, rosemary, wild lavender, and structured silky oak tannins.",
        image: "images/bordeaux.jpg",
        badge: "Icon Vintage",
        pairingFood: "Prime Ribeye & Aged Steaks",
        abv: "14.0%"
    },
    {
        id: "w5",
        name: "Domaine William Fèvre Chablis Grand Cru",
        category: "white",
        region: "Chablis, France",
        vintage: "2021",
        price: "$115.00",
        notes: "Crystalline minerality with vibrant green apple, lemon zest, wet stone, and crisp balanced acidity.",
        image: "images/champagne.jpg",
        badge: "Grand Cru",
        pairingFood: "Fresh Oysters & Grilled Sea Bass",
        abv: "13.0%"
    },
    {
        id: "w6",
        name: "Marqués de Murrieta Castillo Ygay Gran Reserva",
        category: "red",
        region: "Rioja, Spain",
        vintage: "2011",
        price: "$210.00",
        notes: "Amasterpiece of Spanish winemaking featuring dark plum, leather, sweet tobacco, vanilla bean, and long finish.",
        image: "images/bordeaux.jpg",
        badge: "99 Pts Suckling",
        pairingFood: "Artisanal Jamón & Aged Cheeses",
        abv: "14.5%"
    },
    {
        id: "g1",
        name: "Jamón Ibérico de Bellota & Manchego Reserva Kit",
        category: "gourmet",
        region: "Jabugo & La Mancha, Spain",
        vintage: "Artisanal",
        price: "$160.00",
        notes: "Hand-sliced 100% acorn-fed Ibérico ham accompanied by 24-month cave-aged Manchego cheese.",
        image: "images/hero.jpg",
        badge: "Artisanal Import",
        pairingFood: "Artisanal Jamón & Aged Cheeses",
        abv: "N/A"
    }
];

// State Management
let selectedItems = JSON.parse(localStorage.getItem('eurogourmet_selection')) || [];
let activeFilter = 'all';

// DOM Elements
const catalogGrid = document.getElementById('catalogGrid');
const filterBtns = document.querySelectorAll('.filter-btn');
const searchInput = document.getElementById('searchInput');
const cartCount = document.getElementById('cartCount');
const cartToggle = document.getElementById('cartToggle');
const cartDrawer = document.getElementById('cartDrawer');
const drawerClose = document.getElementById('drawerClose');
const drawerOverlay = document.getElementById('drawerOverlay');
const drawerItems = document.getElementById('drawerItems');
const wineModal = document.getElementById('wineModal');
const modalClose = document.getElementById('modalClose');
const modalOverlay = document.getElementById('modalOverlay');
const modalBody = document.getElementById('modalBody');
const selectedWinesField = document.getElementById('selectedWinesField');
const inquiryForm = document.getElementById('inquiryForm');
const formResponse = document.getElementById('formResponse');

// Initialize App
document.addEventListener('DOMContentLoaded', () => {
    renderCatalog();
    updateCartUI();
    setupEventListeners();
});

// Render Catalog Grid
function renderCatalog() {
    if (!catalogGrid) return;
    
    const searchTerm = searchInput ? searchInput.value.toLowerCase().trim() : '';
    
    const filteredWines = WINE_DATA.filter(wine => {
        const matchesCategory = activeFilter === 'all' || wine.category === activeFilter;
        const matchesSearch = wine.name.toLowerCase().includes(searchTerm) || 
                              wine.region.toLowerCase().includes(searchTerm) ||
                              wine.vintage.toLowerCase().includes(searchTerm) ||
                              wine.notes.toLowerCase().includes(searchTerm);
        return matchesCategory && matchesSearch;
    });

    if (filteredWines.length === 0) {
        catalogGrid.innerHTML = `
            <div style="grid-column: 1/-1; text-align: center; padding: 4rem 1rem; color: var(--text-muted);">
                <h3>No wines found matching your search</h3>
                <p>Try clearing your filter or search terms.</p>
            </div>
        `;
        return;
    }

    catalogGrid.innerHTML = filteredWines.map(wine => `
        <div class="wine-card" data-id="${wine.id}">
            <div class="wine-img-wrapper">
                <span class="wine-badge">${wine.badge}</span>
                <img src="${wine.image}" alt="${wine.name}" loading="lazy">
            </div>
            <div class="wine-details">
                <span class="wine-region">${wine.region} • ${wine.vintage}</span>
                <h3 class="wine-name">${wine.name}</h3>
                <p class="wine-notes">${wine.notes}</p>
                <div class="wine-meta">
                    <span class="wine-price">${wine.price}</span>
                    <div class="wine-actions">
                        <button class="btn-card-action btn-quickview" onclick="openQuickView('${wine.id}')">Details</button>
                        <button class="btn-card-action" onclick="toggleSelection('${wine.id}')">
                            ${isSelected(wine.id) ? '✓ Selected' : '+ Selection'}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `).join('');
}

// Check if item is selected
function isSelected(id) {
    return selectedItems.some(item => item.id === id);
}

// Toggle Item Selection
function toggleSelection(id) {
    const itemIndex = selectedItems.findIndex(item => item.id === id);
    const wine = WINE_DATA.find(w => w.id === id);
    
    if (itemIndex > -1) {
        selectedItems.splice(itemIndex, 1);
    } else if (wine) {
        selectedItems.push(wine);
    }
    
    localStorage.setItem('eurogourmet_selection', JSON.stringify(selectedItems));
    updateCartUI();
    renderCatalog();
}

// Update Cart & Form State UI
function updateCartUI() {
    if (cartCount) {
        cartCount.textContent = selectedItems.length;
    }
    
    // Update Hidden Form Input for Selected Wines
    if (selectedWinesField) {
        if (selectedItems.length > 0) {
            selectedWinesField.value = selectedItems.map(i => `${i.name} (${i.vintage})`).join(', ');
        } else {
            selectedWinesField.value = "No specific items pre-selected.";
        }
    }
    
    // Update Drawer Body
    if (drawerItems) {
        if (selectedItems.length === 0) {
            drawerItems.innerHTML = '<p class="empty-msg">Your cellar list is empty. Click "+ Selection" on any wine!</p>';
        } else {
            drawerItems.innerHTML = selectedItems.map(wine => `
                <div class="drawer-item">
                    <div class="drawer-item-info">
                        <h4>${wine.name}</h4>
                        <p>${wine.vintage} • ${wine.price}</p>
                    </div>
                    <button class="remove-item-btn" onclick="toggleSelection('${wine.id}')">&times;</button>
                </div>
            `).join('');
        }
    }
}

// Open Quick View Modal
function openQuickView(id) {
    const wine = WINE_DATA.find(w => w.id === id);
    if (!wine || !wineModal || !modalBody) return;

    modalBody.innerHTML = `
        <div class="modal-grid">
            <div class="modal-img-col">
                <img src="${wine.image}" alt="${wine.name}" style="max-height: 380px; margin: 0 auto; object-fit: contain;">
            </div>
            <div class="modal-info-col">
                <span class="wine-region" style="color: var(--gold-accent); font-weight:700;">${wine.region} • ${wine.vintage}</span>
                <h2 style="margin: 0.5rem 0 1rem; font-size: 1.8rem;">${wine.name}</h2>
                <p style="color: var(--text-muted); margin-bottom: 1.5rem;">${wine.notes}</p>
                <div style="display: flex; gap: 2rem; margin-bottom: 2rem; border-y: 1px solid var(--border-subtle); padding: 1rem 0;">
                    <div>
                        <span style="font-size: 0.8rem; color: var(--text-muted); display: block;">ALCOHOL BY VOL</span>
                        <strong style="font-size: 1.1rem; color: var(--text-light);">${wine.abv}</strong>
                    </div>
                    <div>
                        <span style="font-size: 0.8rem; color: var(--text-muted); display: block;">CLASSIFICATION</span>
                        <strong style="font-size: 1.1rem; color: var(--gold-accent);">${wine.badge}</strong>
                    </div>
                </div>
                <div style="display: flex; align-items: center; justify-content: space-between;">
                    <span style="font-size: 1.8rem; font-family: var(--font-heading); color: var(--gold-accent);">${wine.price}</span>
                    <button class="btn btn-primary" onclick="toggleSelection('${wine.id}'); wineModal.classList.remove('active');">
                        ${isSelected(wine.id) ? '✓ Remove from Selection' : '+ Add to Cellar Selection'}
                    </button>
                </div>
            </div>
        </div>
    `;
    wineModal.classList.add('active');
}

// Event Listeners Setup
function setupEventListeners() {
    // Category Filter Buttons
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            activeFilter = btn.dataset.filter;
            renderCatalog();
        });
    });

    // Search Input
    if (searchInput) {
        searchInput.addEventListener('input', () => {
            renderCatalog();
        });
    }

    // Drawer Toggles
    if (cartToggle) {
        cartToggle.addEventListener('click', () => cartDrawer.classList.add('active'));
    }
    if (drawerClose) {
        drawerClose.addEventListener('click', () => cartDrawer.classList.remove('active'));
    }
    if (drawerOverlay) {
        drawerOverlay.addEventListener('click', () => cartDrawer.classList.remove('active'));
    }

    // Modal Toggles
    if (modalClose) {
        modalClose.addEventListener('click', () => wineModal.classList.remove('active'));
    }
    if (modalOverlay) {
        modalOverlay.addEventListener('click', () => wineModal.classList.remove('active'));
    }

    // Sommelier Pairing Select
    const foodSelect = document.getElementById('foodSelect');
    if (foodSelect) {
        foodSelect.addEventListener('change', (e) => {
            const selectedVal = e.target.options[e.target.selectedIndex].text;
            const match = WINE_DATA.find(w => w.pairingFood === selectedVal) || WINE_DATA[0];
            
            document.getElementById('pairingTitle').textContent = match.name;
            document.getElementById('pairingRegion').textContent = `${match.region} • ${match.vintage}`;
            document.getElementById('pairingNotes').textContent = match.notes;
            
            const addBtn = document.getElementById('pairingAddBtn');
            if (addBtn) {
                addBtn.onclick = () => toggleSelection(match.id);
            }
        });
    }

    // Form Submission Handling (Works natively with Netlify Forms)
    if (inquiryForm) {
        inquiryForm.addEventListener('submit', (e) => {
            // Netlify handles form post automatically, but show friendly message
            if (formResponse) {
                formResponse.className = "form-response-msg success";
                formResponse.innerHTML = "✓ Thank you for your inquiry! Our sommelier team will review your selection and contact you shortly.";
            }
        });
    }
}
