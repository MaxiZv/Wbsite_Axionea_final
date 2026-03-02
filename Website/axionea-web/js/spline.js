/* ============================================================
   AXIONEA — Spline Loader
   Load Spline 3D scene using Runtime API with fallbacks
   ============================================================ */

import { Application } from 'https://unpkg.com/@splinetool/runtime@1.5.5/build/runtime.js';

(function () {
    'use strict';

    const SPLINE_URL = 'https://prod.spline.design/n7xL8JVxaUHqpS55/scene.splinecode';
    const MAX_PRELOADER_TIME = 3000;
    const SPLINE_TIMEOUT_MS = 10000;

    let preloaderHidden = false;

    const splineBgContainer = document.getElementById('spline-bg-container');
    const fallback = document.getElementById('spline-fallback');
    const canvas = document.getElementById('canvas3d');

    // Preloader reference
    const preloader = document.getElementById('preloader');

    if (!splineBgContainer || !fallback || !canvas) return;

    /**
     * Check if device can handle Spline (WebGL + hardware)
     */
    function shouldLoadSpline() {
        // Reduced strictness for spline on mobile, but still check for basic WebGL
        try {
            const testCanvas = document.createElement('canvas');
            const gl = testCanvas.getContext('webgl2') || testCanvas.getContext('webgl');
            if (!gl) return false;
        } catch (e) {
            return false;
        }

        return true;
    }

    /**
     * Show fallback gradient and hide canvas/preloader
     */
    function showFallback() {
        splineBgContainer.style.display = 'none';
        fallback.classList.add('active');
        hidePreloader();
    }

    /**
     * Safely hide the preloader and trigger hero animations
     */
    function hidePreloader() {
        if (preloaderHidden) return;
        preloaderHidden = true;

        if (preloader) {
            preloader.classList.add('hidden');
            // Notify animations.js that the hero content can enter
            window.dispatchEvent(new Event('preloaderFinished'));
        }
    }

    /**
     * Load the Spline scene
     */
    function loadSpline() {
        const app = new Application(canvas);

        // Spline true timeout (just for falling back if extremely slow)
        const timeoutId = setTimeout(() => {
            console.warn("Spline load timeout reached.");
            showFallback();
        }, SPLINE_TIMEOUT_MS);

        app.load(SPLINE_URL).then(() => {
            // Scene loaded successfully!
            clearTimeout(timeoutId);
            console.log("Spline scene loaded.");

            // Give it a tiny bit of time to render the first frame
            setTimeout(() => {
                hidePreloader();
            }, 300);

        }).catch((err) => {
            console.error("Error loading Spline scene:", err);
            clearTimeout(timeoutId);
            showFallback();
        });
    }

    // Initialize
    if (shouldLoadSpline()) {
        loadSpline();
    } else {
        showFallback();
    }

    // Force preloader hide after max 3 seconds, regardless of Spline loading status
    setTimeout(hidePreloader, MAX_PRELOADER_TIME);

})();
