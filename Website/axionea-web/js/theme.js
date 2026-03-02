/* ============================================================
   AXIONEA — Theme Toggle
   Dark/light mode with localStorage persistence
   ============================================================ */

(function () {
    'use strict';

    const STORAGE_KEY = 'axionea-theme';
    const html = document.documentElement;

    /**
     * Get the preferred theme
     * Priority: localStorage > system preference > light
     */
    function getPreferredTheme() {
        const stored = localStorage.getItem(STORAGE_KEY);
        if (stored === 'dark' || stored === 'light') return stored;

        if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
            return 'dark';
        }
        return 'light';
    }

    /**
     * Apply the theme to the document
     */
    function setTheme(theme) {
        html.setAttribute('data-theme', theme);
        localStorage.setItem(STORAGE_KEY, theme);
        updateLogoVariant(theme);
    }

    /**
     * Switch between the correct logo variant
     */
    function updateLogoVariant(theme) {
        const logoLight = document.getElementById('logo-light');
        const logoDark = document.getElementById('logo-dark');
        if (!logoLight || !logoDark) return;

        if (theme === 'dark') {
            logoLight.style.display = 'none';
            logoDark.style.display = 'block';
        } else {
            logoLight.style.display = 'block';
            logoDark.style.display = 'none';
        }
    }

    /**
     * Toggle between themes
     */
    function toggleTheme() {
        const toggle = document.querySelector('.theme-toggle');
        if (toggle) {
            toggle.classList.add('theme-rotating');
            setTimeout(() => toggle.classList.remove('theme-rotating'), 500);
        }

        const current = html.getAttribute('data-theme');
        const next = current === 'dark' ? 'light' : 'dark';
        setTheme(next);
    }

    // Initialize
    setTheme(getPreferredTheme());

    // Listen for system theme changes
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
        if (!localStorage.getItem(STORAGE_KEY)) {
            setTheme(e.matches ? 'dark' : 'light');
        }
    });

    // Expose toggle to global scope
    window.toggleTheme = toggleTheme;
})();
