"use client";

import { ROI_INDUSTRIES } from "./roi-calculator.utils";
import { ChevronDown } from "lucide-react";

interface IndustrySelectorProps {
    selectedId: string | null;
    onChange: (id: string) => void;
}

export function IndustrySelector({ selectedId, onChange }: IndustrySelectorProps) {
    return (
        <div className="w-full relative">
            <label className="block text-sm font-medium text-foreground mb-3 text-left">
                In welcher Branche sind Sie tätig?
            </label>
            <div className="relative">
                <select
                    value={selectedId || ""}
                    onChange={(e) => onChange(e.target.value)}
                    className="w-full appearance-none bg-black/[0.02] dark:bg-white/5 border border-black/10 dark:border-white/10 text-foreground text-sm sm:text-base rounded-xl px-4 py-3.5 pr-10 focus:outline-none focus:ring-2 focus:ring-sapphire focus:border-transparent transition-all cursor-pointer"
                >
                    <option value="" disabled className="text-muted-foreground bg-background">
                        -- Bitte wählen --
                    </option>
                    {Object.values(ROI_INDUSTRIES).map((industry) => (
                        <option key={industry.id} value={industry.id} className="bg-background text-foreground">
                            {industry.name_de}
                        </option>
                    ))}
                </select>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-muted-foreground">
                    <ChevronDown className="w-5 h-5 text-sapphire" />
                </div>
            </div>
        </div>
    );
}
