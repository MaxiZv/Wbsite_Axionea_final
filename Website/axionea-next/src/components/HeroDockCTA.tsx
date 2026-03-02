"use client";

import { useState } from "react";
import Dock from "./Dock";
import type { DockItemData } from "./Dock";

/* ──────────── SVG Icons ──────────── */
const DemoIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-sapphire">
        <polygon points="5 3 19 12 5 21 5 3" />
    </svg>
);

const WorkflowIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-emerald-400">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
    </svg>
);

const ContactIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-amber-400">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
    </svg>
);

const RocketIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-purple-400">
        <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
        <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
        <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
        <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
    </svg>
);

export default function HeroDockCTA() {
    const [showDock, setShowDock] = useState(false);

    const items: DockItemData[] = [
        {
            icon: <DemoIcon />,
            label: "Demo anfragen",
            onClick: () => { window.location.hash = '#kontakt'; },
        },
        {
            icon: <WorkflowIcon />,
            label: "Beispiel Workflows",
            onClick: () => { window.location.hash = '#services'; },
        },
        {
            icon: <ContactIcon />,
            label: "Kontakt anfrage",
            onClick: () => { window.location.hash = '#kontakt'; },
        },
        {
            icon: <RocketIcon />,
            label: "Kostenlos starten",
            onClick: () => { window.location.hash = '#kontakt'; },
        },
    ];

    return (
        <div
            className="relative"
            onMouseEnter={() => setShowDock(true)}
            onMouseLeave={() => setShowDock(false)}
        >
            {/* Trigger Button */}
            <button
                type="button"
                className="inline-flex h-14 items-center justify-center rounded-xl bg-transparent border border-muted-foreground/30 px-8 text-sm font-medium text-foreground transition-all duration-300 hover:bg-muted hover:text-foreground hover:border-sapphire/30 cursor-pointer gap-2"
            >
                <span>Demo ansehen</span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={`w-3.5 h-3.5 transition-transform duration-300 ${showDock ? 'rotate-180' : ''}`}>
                    <polyline points="6 9 12 15 18 9" />
                </svg>
            </button>

            {/* Invisible bridge — fills the gap between button and dock so hover stays active */}
            <div className="absolute top-full left-0 right-0 h-4" />

            {/* Dock Popup */}
            <div
                className={`absolute top-[calc(100%+12px)] left-1/2 -translate-x-1/2 z-50 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${showDock ? 'opacity-100 translate-y-0 pointer-events-auto scale-100' : 'opacity-0 translate-y-3 pointer-events-none scale-95'}`}
            >
                <Dock
                    items={items}
                    panelHeight={56}
                    baseItemSize={44}
                    magnification={64}
                    distance={150}
                />
            </div>
        </div>
    );
}
