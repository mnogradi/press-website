/**
 * North Pass Press - Main JavaScript
 * Handles email copying, scroll animations, and mobile menu
 */

/**
 * Copy email address to clipboard
 */
async function copyEmail() {
    const emailElem = document.getElementById('email-address');
    if (!emailElem) return;
    
    const email = emailElem.textContent;
    const btn = event.currentTarget;
    const original = btn.innerText;
    
    try {
        if (navigator.clipboard && window.isSecureContext) {
            await navigator.clipboard.writeText(email);
        } else {
            const el = document.createElement('textarea');
            el.value = email;
            el.style.position = 'fixed';
            el.style.left = '-999999px';
            document.body.appendChild(el);
            el.select();
            document.execCommand('copy');
            document.body.removeChild(el);
        }
        
        btn.innerText = 'COPIED';
        setTimeout(() => btn.innerText = original, 2000);
    } catch (err) {
        console.error('Failed to copy:', err);
    }
}

/**
 * Initialize scroll fade-in animations
 */
function initScrollAnimations() {
    const sections = document.querySelectorAll('section, header .container');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });
    
    sections.forEach(section => observer.observe(section));
}

/**
 * Mobile Menu Toggle Logic
 */
function initMobileMenu() {
    const btn = document.getElementById('mobile-menu-btn');
    const overlay = document.getElementById('mobile-overlay');
    const closeBtn = document.getElementById('mobile-close-btn');
    if (!btn || !overlay) return;

    function openMenu() {
        overlay.classList.add('active');
        document.body.style.overflow = 'hidden';
        const spans = btn.querySelectorAll('span');
        spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
        spans[1].style.opacity = '0';
        spans[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
    }

    function closeMenu() {
        overlay.classList.remove('active');
        document.body.style.overflow = '';
        const spans = btn.querySelectorAll('span');
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
    }

    btn.addEventListener('click', () => {
        overlay.classList.contains('active') ? closeMenu() : openMenu();
    });

    // Close button inside overlay
    if (closeBtn) closeBtn.addEventListener('click', closeMenu);

    // Close when clicking any nav link (except dropdown toggles)
    overlay.querySelectorAll('.nav-link').forEach(link => {
        if (!link.classList.contains('nav-dropdown-toggle')) {
            link.addEventListener('click', closeMenu);
        }
    });
}

/**
 * Mobile Dropdown Toggles (Projects nav)
 */
function initDropdowns() {
    document.querySelectorAll('.nav-dropdown-toggle').forEach(toggle => {
        toggle.addEventListener('click', (e) => {
            const dropdown = toggle.closest('.nav-dropdown');
            if (!dropdown) return;
            const isOpen = dropdown.classList.contains('open');
            // Close all others first
            document.querySelectorAll('.nav-dropdown.open').forEach(d => d.classList.remove('open'));
            if (!isOpen) dropdown.classList.add('open');
            e.stopPropagation();
        });
    });

    // Close dropdowns when clicking outside
    document.addEventListener('click', () => {
        document.querySelectorAll('.nav-dropdown.open').forEach(d => d.classList.remove('open'));
    });
}

// Global Initialization
document.addEventListener('DOMContentLoaded', () => {
    initScrollAnimations();
    initMobileMenu();
    initDropdowns();
});