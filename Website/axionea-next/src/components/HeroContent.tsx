"use client";

import dynamic from 'next/dynamic';
import HeroDockCTA from '@/components/HeroDockCTA';
import DockCTA from '@/components/DockCTA';
import { LetterReveal } from '@/components/ui/LetterReveal';

const Spline = dynamic(() => import('@splinetool/react-spline'), {
    ssr: false,
    loading: () => (
        <div className="w-full h-full flex items-center justify-center bg-black">
            <div className="w-8 h-8 rounded-full border-2 border-sapphire border-t-white animate-spin"></div>
            <span className="ml-3 text-sapphire font-semibold tracking-widest text-sm" style={{ fontFamily: 'var(--font-syne)' }}>LADE 3D MODELL...</span>
        </div>
    ),
});

export default function HeroContent() {
    return (
        <div className="relative z-10 w-full min-h-[calc(100vh-6rem)] flex flex-col justify-center items-center overflow-hidden">

            {/* ─── FULLSCREEN: Spline 3D Model ─── */}
            <div className="absolute inset-x-0 bottom-0 top-[-6rem] w-full h-[100vh] pointer-events-auto mix-blend-screen z-0">
                <Spline
                    scene="https://prod.spline.design/RnkVGevCFnxoOpEI/scene.splinecode"
                    className="w-full h-full transform object-cover"
                />
            </div>

            {/* Blinking blue scroll arrow at absolute bottom */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20">
                <a href="#warum" className="block animate-[pulse-arrow_2.5s_ease-in-out_infinite]">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 100 40"
                        fill="none"
                        stroke="#0F52BA"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="w-[120px] h-auto opacity-90 hover:stroke-sapphire-hover transition-colors"
                    >
                        {/* Clean, symmetric and precise arrow */}
                        <path d="M5 5 L 50 35 L 95 5" />
                    </svg>
                </a>
            </div>
        </div>
    );
}
