"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

export type FaqItem = { q: string; a: string };

export function FaqAccordion({
  items,
  tone = "light",
}: {
  items: FaqItem[];
  tone?: "light" | "dark";
}) {
  const [open, setOpen] = useState(0);
  const dark = tone === "dark";

  return (
    <div className="grid max-w-[860px] gap-px">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div
            key={item.q}
            className={cn(
              "shadow-[0_0_0_1px_rgba(22,40,58,0.12)]",
              dark && "shadow-[0_0_0_1px_rgba(242,241,236,0.12)]",
            )}
          >
            <button
              type="button"
              onClick={() => setOpen(isOpen ? -1 : i)}
              className={cn(
                "flex min-h-12 w-full items-baseline justify-between gap-4 px-5 py-4.5 text-left font-display text-[clamp(15px,1.7vw,17px)] font-semibold",
                dark ? "text-[#F2F1EC]" : "text-navy",
              )}
            >
              <span>{item.q}</span>
              <span
                className={cn(
                  "flex-none font-mono text-sm",
                  dark ? "text-or" : "text-or-texte",
                )}
              >
                {isOpen ? "−" : "+"}
              </span>
            </button>
            {isOpen ? (
              <p
                className={cn(
                  "max-w-[640px] px-5 pb-5 text-[14.5px] leading-relaxed",
                  dark ? "text-white/68" : "text-[#4A5B6B]",
                )}
              >
                {item.a}
              </p>
            ) : null}
          </div>
        );
      })}
    </div>
  );
}
