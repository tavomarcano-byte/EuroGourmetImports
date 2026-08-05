/* ==========================================================================
   Euro Gourmet Imports PR - Phase 1 JavaScript Application Logic
   ========================================================================== */

// Estate Technical Data for Sommelier Tech Sheets
const ESTATE_DATA = {
    dehesa: {
        title: "Dehesa de Luna - Biodiversity Reserve Estate",
        region: "La Mancha / Campo de Montiel, Spain",
        grape: "Graciano, Syrah, Cabernet Sauvignon & Tempranillo",
        soil: "Clay-limestone & alluvial gravel",
        farming: "100% Certified Organic • Wildlife Sanctuary Reserve",
        cellar: "Indigenous yeast fermentation, 12 months in French oak barrels",
        tasting: "Intense purple hue. Wild blackberry, violet floral notes, balsamic eucalyptus, and subtle cedar oak.",
        pairing: "Aged Manchego, roasted lamb chops, rich reduction sauces."
    },
    izquierdo: {
        title: "Bodegas Izquierdo - Old Vine Tempranillo",
        region: "Burgos • Ribera del Duero, Spain",
        grape: "100% Biodynamic Tempranillo (Tinta del País)",
        soil: "Deep gravel & chalky limestone at 820m elevation",
        farming: "Biodynamic Viticulture • 60+ Year Old Vines",
        cellar: "Unfiltered, 16 months in new French oak barriques",
        tasting: "Concentrated ruby garnet. Ripe black plum, truffle, leather, espresso bean, and velvet tannins.",
        pairing: "Prime ribeye, venison, smoked charcuterie, aged hard cheeses."
    },
    montornes: {
        title: "Conde de Montornés - High-Altitude Monastrell",
        region: "Valencia / Jumilla, Spain (850m Altitude)",
        grape: "100% High-Altitude Dry-Farmed Monastrell",
        soil: "Rocky limestone with exceptional drainage",
        farming: "Non-irrigated dry farming • Low-yield bush vines",
        cellar: "Native yeast stainless steel, finished 8 months in neutral oak",
        tasting: "Lively dark cherry and wild thyme aromas. Fresh mountain acidity with minerality and long persistent finish.",
        pairing: "Seared duck breast, grilled octopus, roasted Mediterranean vegetables."
    },
    all: {
        title: "Euro Gourmet Imports PR Portfolio Tech Sheet Index",
        region: "Spain $\\rightarrow$ Puerto Rico, Caribbean & US",
        grape: "Curated Estate Allocations",
        soil: "Diverse Spanish Terroir Profiles",
        farming: "Organic, Vegan & Biodynamic Certified",
        cellar: "Temperature-Controlled Direct Import Logistics",
        tasting: "Comprehensive technical notes available for restaurant beverage directors and sommeliers.",
        pairing: "Tailored pairing guides available upon request."
    }
};

// DOM Initialization
document.addEventListener('DOMContentLoaded', () => {
    setupMobileMenu();
    setupB2BForm();
    setupModalListeners();
});

// Sommelier Tech Sheet Modal Renderer
function openTechSheet(estateKey) {
    const data = ESTATE_DATA[estateKey] || ESTATE_DATA.all;
    const modal = document.getElementById('techModal');
    const content = document.getElementById('techModalContent');

    if (!modal || !content) return;

    content.innerHTML = `
        <span style="font-size: 0.72rem; letter-spacing: 2px; color: var(--parchment-muted); text-transform: uppercase; font-weight: 700;">SOMMELIER TECH SHEET</span>
        <h2 style="font-size: 1.6rem; margin: 0.5rem 0 1.25rem; color: var(--soft-parchment);">${data.title}</h2>
        
        <div style="display: flex; flex-direction: column; gap: 0.75rem; margin-bottom: 1.5rem; border-top: 1px solid var(--glass-border); border-bottom: 1px solid var(--glass-border); padding: 1rem 0; font-size: 0.88rem;">
            <div><strong style="color: var(--soft-parchment);">Region / Terroir:</strong> <span style="color: var(--parchment-muted);">${data.region}</span></div>
            <div><strong style="color: var(--soft-parchment);">Varietal Profile:</strong> <span style="color: var(--parchment-muted);">${data.grape}</span></div>
            <div><strong style="color: var(--soft-parchment);">Soil Composition:</strong> <span style="color: var(--parchment-muted);">${data.soil}</span></div>
            <div><strong style="color: var(--soft-parchment);">Farming Practices:</strong> <span style="color: var(--parchment-muted);">${data.farming}</span></div>
            <div><strong style="color: var(--soft-parchment);">Cellar Vinification:</strong> <span style="color: var(--parchment-muted);">${data.cellar}</span></div>
        </div>

        <div style="margin-bottom: 1.5rem;">
            <h4 style="font-size: 0.85rem; text-transform: uppercase; letter-spacing: 1px; color: var(--soft-parchment); margin-bottom: 0.4rem;">Tasting Notes:</h4>
            <p style="font-size: 0.88rem; color: var(--parchment-muted);">${data.tasting}</p>
        </div>

        <div style="margin-bottom: 2rem;">
            <h4 style="font-size: 0.85rem; text-transform: uppercase; letter-spacing: 1px; color: var(--soft-parchment); margin-bottom: 0.4rem;">Recommended Culinary Pairings:</h4>
            <p style="font-size: 0.88rem; color: var(--parchment-muted);">${data.pairing}</p>
        </div>

        <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
            <a href="#contact" class="btn btn-burgundy btn-sm" onclick="closeTechModal();">Request Wholesale Allocation</a>
            <button class="btn btn-outline btn-sm" onclick="window.print();">Print Tech Sheet</button>
        </div>
    `;

    modal.classList.add('active');
}

function closeTechModal() {
    const modal = document.getElementById('techModal');
    if (modal) modal.classList.remove('active');
}

function setupModalListeners() {
    const modalClose = document.getElementById('modalClose');
    const modalOverlay = document.getElementById('modalOverlay');
    
    if (modalClose) modalClose.addEventListener('click', closeTechModal);
    if (modalOverlay) modalOverlay.addEventListener('click', closeTechModal);
}

// B2B Wholesale Form Handling
function setupB2BForm() {
    const form = document.getElementById('b2bForm');
    const responseDiv = document.getElementById('b2bResponse');

    if (form) {
        form.addEventListener('submit', (e) => {
            if (responseDiv) {
                responseDiv.className = "form-response success";
                responseDiv.innerHTML = "✓ B2B Inquiry Received! Our commercial wine director will contact your business with wholesale pricing within 24 hours.";
            }
        });
    }
}

// Mobile Menu Setup
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
