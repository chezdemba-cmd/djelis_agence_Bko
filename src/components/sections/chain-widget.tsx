"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { chainSteps } from "@/data/homepage";
import { useReducedMotion } from "@/lib/use-reduced-motion";

export function ChainWidget() {
  const reducedMotion = useReducedMotion();
  const [active, setActive] = useState(reducedMotion ? chainSteps.length - 1 : 0);
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);

  const startInterval = useCallback(() => {
    if (timer.current) clearInterval(timer.current);
    timer.current = setInterval(() => {
      setActive((current) => {
        if (current >= chainSteps.length - 1) {
          if (timer.current) clearInterval(timer.current);
          return current;
        }
        return current + 1;
      });
    }, 900);
  }, []);

  const play = useCallback(() => {
    if (reducedMotion) {
      setActive(chainSteps.length - 1);
      return;
    }
    setActive(0);
    startInterval();
  }, [reducedMotion, startInterval]);

  useEffect(() => {
    if (reducedMotion) return;
    startInterval();
    return () => {
      if (timer.current) clearInterval(timer.current);
    };
  }, [reducedMotion, startInterval]);

  const pct = Math.round(((active + 1) / chainSteps.length) * 100);
  const windowStart = Math.min(Math.max(active - 1, 0), chainSteps.length - 3);
  const windowSteps = chainSteps.slice(windowStart, windowStart + 3);

  return (
    <div className="shadow-[0_0_0_1px_rgba(242,241,236,0.14)] bg-navy">
      {/* Mobile: compact 3-of-7 window with counter */}
      <div className="sm:hidden">
        <div className="flex items-center justify-between gap-2.5 border-b border-white/12 px-4 py-3.25">
          <span className="font-mono text-[9px] tracking-[0.1em] text-or">
            LA CHAÎNE DJELI&apos;S
          </span>
          <span className="font-mono text-[9px] tracking-[0.08em] text-white/66">
            {String(active + 1).padStart(2, "0")} / {String(chainSteps.length).padStart(2, "0")}
          </span>
        </div>
        <div className="p-4">
          <div className="relative mb-3.5 mt-1 h-px bg-white/16">
            <div
              className="absolute inset-y-0 left-0 bg-or transition-[width] duration-600 ease-[cubic-bezier(0.2,0.7,0.2,1)]"
              style={{ width: `${pct}%` }}
            />
            <div
              className="absolute -top-[3px] h-1.75 w-1.75 -ml-[3px] rounded-full bg-or transition-[left] duration-600 ease-[cubic-bezier(0.2,0.7,0.2,1)]"
              style={{ left: `${pct}%` }}
            />
          </div>
          <div className="grid gap-1.5">
            {windowSteps.map((step, i) => {
              const idx = windowStart + i;
              const isActive = idx === active;
              return (
                <div
                  key={step.label}
                  className="flex items-center gap-2.75 px-3.25 py-3 transition-colors duration-450"
                  style={{
                    boxShadow: `0 0 0 1px ${isActive ? "rgba(245,166,35,0.55)" : "rgba(242,241,236,0.12)"}`,
                    background: isActive ? "rgba(245,166,35,0.12)" : "transparent",
                  }}
                >
                  <span
                    className="min-w-[16px] font-mono text-[9.5px]"
                    style={{ color: isActive ? "#F5A623" : "rgba(242,241,236,0.62)" }}
                  >
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  <span
                    className="font-display text-sm font-semibold"
                    style={{ color: isActive ? "#F5A623" : "rgba(242,241,236,0.75)" }}
                  >
                    {step.label}
                  </span>
                </div>
              );
            })}
          </div>
          <div className="flex items-center justify-between pt-3">
            <span className="font-mono text-[9px] tracking-[0.06em] text-white/62">
              3 ÉTAPES VISIBLES SUR 7
            </span>
            <button
              type="button"
              onClick={play}
              className="min-h-12 rounded-[2px] border border-white/24 px-2.5 font-mono text-[9px] tracking-[0.08em] text-white/75 transition-colors duration-150 hover:border-or hover:text-or"
            >
              REJOUER
            </button>
          </div>
        </div>
      </div>

      {/* Desktop and up: full 7-step list */}
      <div className="hidden sm:block">
        <div className="flex items-center justify-between gap-2.5 border-b border-white/12 px-5.5 py-4.5">
          <span className="font-mono text-[10px] tracking-[0.12em] text-or">
            LA CHAÎNE DJELI&apos;S
          </span>
          <button
            type="button"
            onClick={play}
            className="rounded-[2px] border border-white/26 px-2.5 py-1.5 font-mono text-[9.5px] tracking-[0.08em] text-white/80 transition-colors duration-150 hover:border-or hover:text-or"
          >
            REJOUER
          </button>
        </div>
        <div className="p-5.5">
          <div className="relative mb-5 mt-1.5 h-px bg-white/16">
            <div
              className="absolute inset-y-0 left-0 bg-or transition-[width] duration-600 ease-[cubic-bezier(0.2,0.7,0.2,1)]"
              style={{ width: `${pct}%` }}
            />
            <div
              className="absolute -top-[3px] h-1.75 w-1.75 -ml-[3px] rounded-full bg-or transition-[left] duration-600 ease-[cubic-bezier(0.2,0.7,0.2,1)]"
              style={{ left: `${pct}%` }}
            />
          </div>
          <div className="grid gap-1.75">
            {chainSteps.map((step, i) => {
              const isActive = i === active;
              const isPast = i < active;
              return (
                <div
                  key={step.label}
                  className="flex items-center gap-3.5 px-3.5 py-3.25 transition-colors duration-450"
                  style={{
                    boxShadow: `0 0 0 1px ${isActive ? "rgba(245,166,35,0.55)" : "rgba(242,241,236,0.12)"}`,
                    background: isActive ? "rgba(245,166,35,0.12)" : "transparent",
                  }}
                >
                  <span
                    className="min-w-[18px] font-mono text-[10px] tracking-[0.08em]"
                    style={{ color: isActive ? "#F5A623" : "rgba(242,241,236,0.62)" }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span
                    className="flex-1 font-display text-[15px] font-semibold"
                    style={{
                      color: isActive
                        ? "#F5A623"
                        : isPast
                          ? "rgba(242,241,236,0.88)"
                          : "rgba(242,241,236,0.55)",
                    }}
                  >
                    {step.label}
                  </span>
                  <span
                    className="font-mono text-[9.5px] tracking-[0.08em]"
                    style={{ color: isActive ? "rgba(245,166,35,0.75)" : "rgba(242,241,236,0.62)" }}
                  >
                    {step.tag}
                  </span>
                </div>
              );
            })}
          </div>
          <div className="mt-4.5 border-t border-white/12 pt-4 font-mono text-[9.5px] leading-[1.8] tracking-[0.06em] text-white/62">
            NOUS NE VENDONS PAS DES OUTILS ISOLÉS.
            <br />
            NOUS CONNECTONS LES ÉTAPES DU DÉVELOPPEMENT DE L&apos;ENTREPRISE.
          </div>
        </div>
      </div>
    </div>
  );
}
