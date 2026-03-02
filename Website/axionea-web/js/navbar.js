/* ============================================================
   AXIONEA — Navbar
   Scroll-triggered collapse to centered pill
   ============================================================ */

(function () {
    'use strict';

    const COLLAPSE_THRESHOLD = 80;
    const navbar = document.getElementById('navbar');

    if (!navbar) return;

    let isCollapsed = false;
    let ticking = false;

    function onScroll() {
        if (!ticking) {
            window.requestAnimationFrame(() => {
                const scrollY = window.scrollY || window.pageYOffset;

                if (scrollY > COLLAPSE_THRESHOLD && !isCollapsed) {
                    navbar.classList.add('collapsed');
                    isCollapsed = true;
                } else if (scrollY <= COLLAPSE_THRESHOLD && isCollapsed) {
                    navbar.classList.remove('collapsed');
                    isCollapsed = false;
                }

                ticking = false;
            });
            ticking = true;
        }
    }

    window.addEventListener('scroll', onScroll, { passive: true });

    // Initial check
    onScroll();
})();
