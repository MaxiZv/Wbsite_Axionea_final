"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function Preloader() {
    const [phase, setPhase] = useState<"loading" | "exiting" | "done">("loading");

    useEffect(() => {
        // Lock body scroll during preloader
        document.body.style.overflow = "hidden";

        // Start exit after 2.5 seconds (shorter since it's just a splash screen)
        const exitTimer = setTimeout(() => {
            setPhase("exiting");
        }, 2200);

        // Remove from DOM after exit animation (1s)
        const doneTimer = setTimeout(() => {
            setPhase("done");
            document.body.style.overflow = "";
        }, 3000);

        return () => {
            clearTimeout(exitTimer);
            clearTimeout(doneTimer);
            document.body.style.overflow = "";
        };
    }, []);

    if (phase === "done") return null;

    return (
        <div
            className="fixed inset-0 z-[9999] bg-[#000000] flex flex-col items-center justify-center overflow-hidden"
            style={{
                transform: phase === "exiting" ? "translateY(-100%)" : "translateY(0)", // slide up smoothly
                transition: "transform 0.8s cubic-bezier(0.76, 0, 0.24, 1)",
            }}
        >
            {/* Glowing Logo Container */}
            <div className="relative flex flex-col items-center justify-center">
                {/* Background ambient glow behind logo */}
                <div className="absolute inset-0 bg-sapphire/30 blur-[70px] rounded-full w-48 h-48 animate-pulse-slow z-0" />

                {/* The Logo Image */}
                <div className="relative z-10 animate-fade-in-up">
                    <Image
                        src="/assets/logo/Asset 4@4x.png"
                        alt="Axionea Logo"
                        width={64}
                        height={64}
                        priority
                        className="object-contain drop-shadow-[0_0_20px_rgba(15,82,186,0.8)] animate-glow-pulse"
                    />
                </div>

                {/* Sleek Progress Bar Container */}
                <div className="mt-10 w-48 h-[2px] bg-white/10 rounded-full overflow-hidden relative z-10">
                    {/* Animated Progress Line */}
                    <div
                        className="absolute top-0 left-0 h-full bg-gradient-to-r from-sapphire to-cyan-400 rounded-full origin-left"
                        style={{
                            animation: "loading-bar 2.2s cubic-bezier(0.25, 1, 0.5, 1) forwards"
                        }}
                    />
                </div>
            </div>

            {/* Local Styles for sleek keyframe animations */}
            <style jsx>{`
                @keyframes loading-bar {
                    0% { transform: scaleX(0); }
                    40% { transform: scaleX(0.4); }
                    80% { transform: scaleX(0.8); }
                    100% { transform: scaleX(1); }
                }
                @keyframes glow-pulse {
                    0%, 100% { filter: drop-shadow(0 0 15px rgba(15,82,186,0.4)); transform: scale(1); }
                    50% { filter: drop-shadow(0 0 35px rgba(15,82,186,1)); transform: scale(1.08); }
                }
                .animate-glow-pulse {
                    animation: glow-pulse 2s ease-in-out infinite;
                }
                @keyframes pulse-slow {
                    0%, 100% { opacity: 0.5; transform: scale(1); }
                    50% { opacity: 1; transform: scale(1.2); }
                }
                .animate-pulse-slow {
                    animation: pulse-slow 3s cubic-bezier(0.4, 0, 0.6, 1) infinite;
                }
                @keyframes fade-in-up {
                    from { opacity: 0; transform: translateY(20px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                .animate-fade-in-up {
                    animation: fade-in-up 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
                }
            `}</style>
        </div>
    );
}
