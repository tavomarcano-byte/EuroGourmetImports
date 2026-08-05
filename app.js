/* ==========================================================================
   Euro Gourmet Imports PR - Phase 2 JavaScript Application Logic
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
    setupFAQAccordion();
    setupB2BForm();
    setupMobileMenu();
});

// Expandable FAQ Accordion Toggle Logic
function setupFAQAccordion() {
    const faqTriggers = document.querySelectorAll('.faq-trigger');

    faqTriggers.forEach(trigger => {
        trigger.addEventListener('click', () => {
            const faqItem = trigger.closest('.faq-item');
            const isOpen = faqItem.classList.contains('active');

            // Close all other open FAQ items for a clean single-accordion feel
            document.querySelectorAll('.faq-item').forEach(item => {
                item.classList.remove('active');
                const btn = item.querySelector('.faq-trigger');
                if (btn) btn.setAttribute('aria-expanded', 'false');
            });

            // Toggle clicked item
            if (!isOpen) {
                faqItem.classList.add('active');
                trigger.setAttribute('aria-expanded', 'true');
            }
        });
    });
}

// B2B Stockist Form Submission Handling
function setupB2BForm() {
    const form = document.getElementById('b2bForm');
    const responseDiv = document.getElementById('b2bResponse');

    if (form) {
        form.addEventListener('submit', (e) => {
            if (responseDiv) {
                responseDiv.className = "form-response success";
                responseDiv.innerHTML = "✓ Stockist Inquiry Received! Our commercial beverage director will review your account and send wholesale price sheets within 24 hours.";
            }
        });
    }
}

// Mobile Menu Navigation Setup
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
