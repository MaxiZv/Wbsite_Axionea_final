"use client";

import CardNav, { CardNavItem } from "./CardNav";
import { useTheme } from "./ThemeProvider";

export default function AnimatedNavbar() {
    const { theme } = useTheme();
    const isDark = theme === "dark";

    const navItems: CardNavItem[] = [
        {
            label: "Plattform",
            bgColor: isDark ? "rgba(15, 82, 186, 0.15)" : "rgba(15, 82, 186, 0.08)",
            textColor: isDark ? "#ffffff" : "#000926",
            links: [
                { label: "Warum Axionea", href: "#warum", ariaLabel: "Gründe für Axionea" },
                { label: "ROI-Rechner", href: "#roi", ariaLabel: "Automatisierungs-ROI berechnen" },
                { label: "Vergleich", href: "#vergleich", ariaLabel: "Axionea vs Andere" },
                { label: "Team", href: "#team", ariaLabel: "Unser Team" },
            ],
        },
        {
            label: "Lösungen",
            bgColor: isDark ? "rgba(255, 255, 255, 0.06)" : "rgba(0, 0, 0, 0.04)",
            textColor: isDark ? "#ffffff" : "#000926",
            links: [
                { label: "Alle Services", href: "#services", ariaLabel: "Übersicht der Services" },
                { label: "Unser Prozess", href: "#prozess", ariaLabel: "Wie wir arbeiten" },
                { label: "KI-Architektur", href: "#workflow", ariaLabel: "Technische Architektur" },
            ],
        },
        {
            label: "Support",
            bgColor: isDark ? "rgba(15, 82, 186, 0.25)" : "rgba(15, 82, 186, 0.10)",
            textColor: isDark ? "#ffffff" : "#000926",
            links: [
                { label: "Kontakt aufnehmen", href: "#kontakt", ariaLabel: "Zum Kontaktformular" },
                { label: "FAQ", href: "#faq", ariaLabel: "Häufige Fragen" },
            ],
        },
    ];

    return (
        <CardNav
            logo="/assets/logo/Asset 4@4x.png"
            logoAlt="Axionea Logo"
            items={navItems}
            baseColor={isDark ? "rgba(10, 10, 12, 0.85)" : "rgba(255, 255, 255, 0.85)"}
            menuColor={isDark ? "#ffffff" : "#000926"}
            buttonBgColor="#0F52BA"
            buttonTextColor="#ffffff"
            ease="power3.out"
        />
    );
}
