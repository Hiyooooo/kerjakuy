"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { FAQ_DATA } from "@/lib/faq-data";

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleItem = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div className="w-full max-w-3xl mx-auto space-y-3">
      {FAQ_DATA.map((item, idx) => {
        const isOpen = openIndex === idx;
        const panelId = `faq-panel-${idx}`;
        const headerId = `faq-header-${idx}`;

        return (
          <div
            key={idx}
            className="rounded-card border-2 border-line bg-paper/60 transition-colors"
          >
            <button
              id={headerId}
              type="button"
              onClick={() => toggleItem(idx)}
              aria-expanded={isOpen}
              aria-controls={panelId}
              className="flex w-full items-center justify-between p-5 text-left font-display font-bold text-sm sm:text-base text-ink hover:text-coral-ink transition-colors focus-visible:outline-3 focus-visible:outline-control"
            >
              <span className="pr-4">{item.question}</span>
              <ChevronDown
                className={`w-5 h-5 shrink-0 text-muted transition-transform duration-200 ${
                  isOpen ? "rotate-180 text-coral-ink" : ""
                }`}
              />
            </button>

            {isOpen && (
              <div
                id={panelId}
                role="region"
                aria-labelledby={headerId}
                className="px-5 pb-5 pt-1 text-xs sm:text-sm text-muted leading-relaxed border-t border-line/40"
              >
                {item.answer}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
