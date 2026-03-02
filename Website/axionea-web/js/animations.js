/* ============================================================
   AXIONEA — Animations
   Intersection Observer for scroll-triggered + load animations
   ============================================================ */

(function () {
    'use strict';

    // ─── Hero Load Animation ─────────────────────────────────
    // Trigger staggered entrance after DOM is ready
    function initHeroAnimations() {
        const heroElements = document.querySelectorAll('.animate-in');

        // Small delay to ensure paint has happened
        requestAnimationFrame(() => {
            setTimeout(() => {
                heroElements.forEach(el => {
                    el.classList.add('visible');
                });
            }, 100);
        });
    }

    // ─── Scroll Animations ───────────────────────────────────
    function initScrollAnimations() {
        const scrollElements = document.querySelectorAll('.fade-in-up, .scale-in');

        if (scrollElements.length === 0) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                        observer.unobserve(entry.target);
                    }
                });
            },
            {
                threshold: 0.15,
                rootMargin: '0px 0px -50px 0px'
            }
        );

        scrollElements.forEach(el => observer.observe(el));
    }

    // ─── Initialize ──────────────────────────────────────────
    // Scroll animations can initialize immediately
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => {
            initScrollAnimations();
        });
    } else {
        initScrollAnimations();
    }

    // Hero animations should wait for the preloader to finish
    window.addEventListener('preloaderFinished', () => {
        initHeroAnimations();
    });

    // Fallback: If preloaderFinished never fires for some reason, trigger after 4s
    setTimeout(() => {
        const heroElements = document.querySelectorAll('.animate-in:not(.visible)');
        if (heroElements.length > 0) {
            initHeroAnimations();
        }
    }, 4000);

})();
