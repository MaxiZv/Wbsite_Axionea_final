"use client";

import { useEffect, useMemo, useState, useRef, useCallback } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { type Container, type ISourceOptions, MoveDirection, OutMode } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";

export default function InteractiveParticles() {
    const [init, setInit] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);
    const rafRef = useRef<number | null>(null);
    const lastScrollClass = useRef<string>("");

    // This should be run only once per application lifetime
    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadSlim(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    // Use direct DOM manipulation for scroll-driven style changes to avoid React re-renders
    useEffect(() => {
        const el = containerRef.current;
        if (!el) return;

        const handleScroll = () => {
            // Cancel any pending animation frame to prevent stacking
            if (rafRef.current) cancelAnimationFrame(rafRef.current);

            rafRef.current = requestAnimationFrame(() => {
                const currentScrollY = window.scrollY;
                const windowHeight = window.innerHeight;
                const documentHeight = document.documentElement.scrollHeight;

                const isHero = currentScrollY <= 150;
                const isBottom = (currentScrollY + windowHeight) >= (documentHeight - 1200);
                const isBlurred = !isHero && !isBottom;

                // Determine the class we want
                const newClass = isBlurred ? "blurred" : "clear";

                // Only apply DOM changes if the state actually changed
                if (newClass !== lastScrollClass.current) {
                    lastScrollClass.current = newClass;

                    if (isBlurred) {
                        el.style.filter = "blur(4px)";
                        el.style.opacity = "0.4";
                        el.style.backgroundColor = "rgba(0,0,0,0.4)";
                    } else {
                        el.style.filter = "blur(0px)";
                        el.style.opacity = "1";
                        el.style.backgroundColor = "transparent";
                    }
                }
            });
        };

        // Set initial state
        handleScroll();

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => {
            window.removeEventListener("scroll", handleScroll);
            if (rafRef.current) cancelAnimationFrame(rafRef.current);
        };
    }, [init]);

    const particlesLoaded = useCallback(async (container?: Container): Promise<void> => {
        // noop
    }, []);

    const options: ISourceOptions = useMemo(
        () => ({
            fullScreen: { enable: false },
            background: {
                color: {
                    value: "transparent",
                },
            },
            fpsLimit: 60,
            interactivity: {
                events: {
                    onClick: {
                        enable: true,
                        mode: "push",
                    },
                    onHover: {
                        enable: true,
                        mode: "grab",
                    },
                },
                modes: {
                    push: {
                        quantity: 4,
                    },
                    grab: {
                        distance: 250,
                        links: {
                            opacity: 0.8,
                            color: "#0F52BA" // Sapphire
                        }
                    },
                },
            },
            particles: {
                color: {
                    value: "#ffffff",
                },
                links: {
                    color: "#ffffff",
                    distance: 150,
                    enable: true,
                    opacity: 0.1,
                    width: 1,
                },
                move: {
                    direction: MoveDirection.none,
                    enable: true,
                    outModes: {
                        default: OutMode.out,
                    },
                    random: false,
                    speed: 0.8,
                    straight: false,
                },
                number: {
                    density: {
                        enable: true,
                    },
                    value: 120,
                },
                opacity: {
                    value: 0.3,
                },
                shape: {
                    type: "circle",
                },
                size: {
                    value: { min: 1, max: 3 },
                },
            },
            detectRetina: true,
        }),
        [],
    );

    if (!init) return null;

    return (
        <div
            ref={containerRef}
            className="fixed inset-0 w-full h-full z-0 pointer-events-none"
            style={{
                transition: "filter 0.7s ease-in-out, opacity 0.7s ease-in-out, background-color 0.7s ease-in-out",
                willChange: "filter, opacity",
            }}
        >
            <div className="w-full h-full pointer-events-auto">
                <Particles
                    id="tsparticles"
                    particlesLoaded={particlesLoaded}
                    options={options}
                    className="w-full h-full"
                />
            </div>
        </div>
    );
}
