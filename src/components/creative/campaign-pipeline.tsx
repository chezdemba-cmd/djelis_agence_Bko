"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { pipelineSteps } from "@/data/homepage";
import { useReducedMotion } from "@/lib/use-reduced-motion";

export function CampaignPipeline() {
  const reducedMotion = useReducedMotion();
  const [active, setActive] = useState(
    reducedMotion ? pipelineSteps.length - 1 : 0,
  );
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);

  const startInterval = useCallback(() => {
    if (timer.current) clearInterval(timer.current);
    timer.current = setInterval(() => {
      setActive((current) => {
        if (current >= pipelineSteps.length - 1) {
          if (timer.current) clearInterval(timer.current);
          return current;
        }
        return current + 1;
      });
    }, 1000);
  }, []);

  const play = useCallback(() => {
    if (reducedMotion) {
      setActive(pipelineSteps.length - 1);
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

  return (
    <div>
      <div className="mb-6.5 flex flex-wrap items-baseline justify-between gap-3.5">
        <h2 className="font-display text-[clamp(24px,3.4vw,38px)] font-bold leading-[1.06] tracking-[-0.025em]">
          CINQ ÉTAPES, DE LA PHOTO À LA COMMANDE.
        </h2>
        <button
          type="button"
          onClick={play}
          className="min-h-12 rounded-[2px] border border-navy/26 px-4 font-mono text-[11px] tracking-[0.08em] text-navy transition-colors duration-150 hover:border-or-texte hover:text-or-texte"
        >
          REJOUER
        </button>
      </div>

      <div className="mb-6.5 grid grid-cols-2 gap-3.5 sm:grid-cols-3 lg:grid-cols-5">
        {pipelineSteps.map((step, i) => {
          const isActive = i === active;
          return (
            <div
              key={step.title}
              className="transition-[box-shadow,background] duration-400"
              style={{
                boxShadow: `0 0 0 1px ${isActive ? "rgba(212,132,26,0.6)" : "rgba(22,40,58,0.12)"}`,
                background: isActive ? "#FFFFFF" : "transparent",
              }}
            >
              <div className="flex items-center justify-between border-b border-navy/10 px-3.5 py-3">
                <span
                  className="font-mono text-[10px] tracking-[0.1em]"
                  style={{ color: isActive ? "#8A5A0E" : "#586A7A" }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="font-mono text-[9px] tracking-[0.08em] text-[#586A7A]">
                  9:16
                </span>
              </div>
              <div className="p-3.5">
                {step.video ? (
                  <video
                    src={step.video}
                    controls
                    playsInline
                    preload="metadata"
                    className="mb-3.5 block aspect-9/16 w-full bg-navy object-cover shadow-[0_0_0_1px_rgba(22,40,58,0.16)]"
                  />
                ) : step.photo ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={step.photo}
                    alt="Photo produit prise en boutique"
                    className="mb-3.5 block aspect-9/16 w-full object-cover shadow-[0_0_0_1px_rgba(22,40,58,0.16)]"
                  />
                ) : (
                  <div className="mb-3.5 flex aspect-9/16 items-end bg-[repeating-linear-gradient(135deg,rgba(22,40,58,0.06)_0_8px,transparent_8px_16px)] p-3 shadow-[0_0_0_1px_rgba(22,40,58,0.16)]">
                    <span className="whitespace-pre-line font-mono text-[9px] leading-relaxed tracking-[0.06em] text-[#4A5B6B]">
                      {step.slot}
                    </span>
                  </div>
                )}
                <div className="mb-1.5 font-display text-[15px] font-semibold">
                  {step.title}
                </div>
                <p className="text-[13px] leading-snug text-[#4A5B6B]">
                  {step.body}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="flex flex-wrap items-center gap-2 border-t border-navy/12 pt-6.5 font-display text-sm font-semibold tracking-[-0.01em] sm:text-base">
        <span>CONTENU</span>
        <span className="text-or-texte">→</span>
        <span>ATTENTION</span>
        <span className="text-or-texte">→</span>
        <span>CONVERSATION</span>
        <span className="text-or-texte">→</span>
        <span className="text-or-texte">VENTE</span>
      </div>
    </div>
  );
}
