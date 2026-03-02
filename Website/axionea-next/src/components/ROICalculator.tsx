"use client";

import { useState, useRef, useEffect } from "react";
import { LetterReveal } from "./ui/LetterReveal";

function useInView(threshold = 0.15) {
    const ref = useRef<HTMLDivElement>(null);
    const [isInView, setIsInView] = useState(false);
    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setIsInView(true); obs.disconnect(); } }, { threshold });
        obs.observe(el);
        return () => obs.disconnect();
    }, [threshold]);
    return { ref, isInView };
}

export default function ROICalculator() {
    const [teamSize, setTeamSize] = useState(12);
    const [weeklyHours, setWeeklyHours] = useState(10);
    const [hourlyCost, setHourlyCost] = useState(40);
    const { ref, isInView } = useInView(0.1);

    const monthlyHoursLost = teamSize * weeklyHours * 4;
    const monthlyCost = monthlyHoursLost * hourlyCost;
    const savingsPercent = 75;
    const monthlySavings = Math.round(monthlyCost * (savingsPercent / 100));

    return (
        <section id="roi" className="py-24 px-6 bg-background">
            <div className="max-w-4xl mx-auto">
                {/* Header */}
                <div className="text-center mb-14">
                    <span className="inline-flex items-center gap-2 text-xs font-bold tracking-[3px] uppercase text-sapphire mb-4 bg-sapphire/10 px-4 py-2 rounded-full border border-sapphire/15">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5">
                            <rect x="4" y="2" width="16" height="20" rx="2" ry="2" /><line x1="8" y1="6" x2="16" y2="6" /><line x1="8" y1="10" x2="16" y2="10" /><line x1="8" y1="14" x2="12" y2="14" />
                        </svg>
                        CALCULATOR
                    </span>
                    <h2
                        className="text-[clamp(32px,5vw,52px)] font-bold tracking-tight leading-tight mb-4"
                        style={{ fontFamily: "var(--font-syne)" }}
                    >
                        <LetterReveal text="Berechne deinen" />
                        <br />
                        <span className="text-sapphire">
                            <LetterReveal text="Automatisierungs-ROI" delay={0.3} />
                        </span>
                    </h2>
                    <p className="text-muted-foreground text-lg max-w-xl mx-auto">
                        <LetterReveal text="Finde heraus, wie viel Zeit und Geld du mit KI-Automatisierung sparen kannst." delay={0.6} stagger={0.015} />
                    </p>
                </div>

                {/* Calculator Card */}
                <div
                    ref={ref}
                    style={{
                        opacity: isInView ? 1 : 0,
                        transform: isInView ? "translateY(0)" : "translateY(20px)",
                        transition: "all 1s cubic-bezier(0.16, 1, 0.3, 1)",
                    }}
                >
                    <div className="rounded-3xl border border-gray-200 dark:border-[#0a1628]/80 bg-white dark:bg-[#070d1a] shadow-[0_2px_16px_-4px_rgba(0,0,0,0.06)] p-8 md:p-10">
                        {/* Sliders */}
                        <div className="space-y-8">
                            {/* Team Size */}
                            <div>
                                <div className="flex items-center justify-between mb-3">
                                    <label className="text-sm font-medium text-foreground">Teamgröße</label>
                                    <span className="text-sm font-bold text-foreground tabular-nums">{teamSize}</span>
                                </div>
                                <input
                                    type="range"
                                    min="1"
                                    max="100"
                                    value={teamSize}
                                    onChange={(e) => setTeamSize(Number(e.target.value))}
                                    className="roi-slider w-full"
                                />
                            </div>

                            {/* Weekly Hours */}
                            <div>
                                <div className="flex items-center justify-between mb-3">
                                    <label className="text-sm font-medium text-foreground">Wöchentliche Stunden manuelle Arbeit (pro Mitarbeiter)</label>
                                    <span className="text-sm font-bold text-foreground tabular-nums">{weeklyHours}</span>
                                </div>
                                <input
                                    type="range"
                                    min="1"
                                    max="40"
                                    value={weeklyHours}
                                    onChange={(e) => setWeeklyHours(Number(e.target.value))}
                                    className="roi-slider w-full"
                                />
                            </div>

                            {/* Hourly Cost */}
                            <div>
                                <div className="flex items-center justify-between mb-3">
                                    <label className="text-sm font-medium text-foreground">Durchschnittliche Stundenkosten (€)</label>
                                    <span className="text-sm font-bold text-foreground tabular-nums">{hourlyCost}€</span>
                                </div>
                                <input
                                    type="range"
                                    min="10"
                                    max="200"
                                    step="5"
                                    value={hourlyCost}
                                    onChange={(e) => setHourlyCost(Number(e.target.value))}
                                    className="roi-slider w-full"
                                />
                            </div>
                        </div>

                        {/* Divider */}
                        <div className="h-px w-full bg-black/5 dark:bg-white/5 my-8" />

                        {/* Results */}
                        <div className="space-y-3">
                            <p
                                className="text-xl md:text-2xl font-bold text-foreground leading-snug"
                                style={{ fontFamily: "var(--font-syne)" }}
                            >
                                Du verlierst <span className="text-sapphire">{monthlyHoursLost.toLocaleString("de-DE")} Stunden/Monat</span> durch repetitive Aufgaben!
                            </p>
                            <p
                                className="text-lg md:text-xl font-semibold text-foreground/80"
                                style={{ fontFamily: "var(--font-syne)" }}
                            >
                                Das entspricht <span className="text-sapphire">{monthlyCost.toLocaleString("de-DE")}€/Monat</span> an verlorener Zeit.
                            </p>
                            <p className="text-sm text-muted-foreground">
                                Mit Axionea sparst du {savingsPercent}%, also <span className="font-semibold text-sapphire">{monthlySavings.toLocaleString("de-DE")}€/Monat</span>!
                            </p>
                        </div>

                        {/* CTA */}
                        <a
                            href="#kontakt"
                            className="mt-8 w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-sapphire text-white font-semibold text-sm transition-all duration-300 hover:bg-sapphire-hover hover:shadow-[0_8px_32px_rgba(15,82,186,0.3)]"
                        >
                            Kostenlosen Automatisierungsplan erhalten
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                                <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
