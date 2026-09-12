"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { pipelineSteps } from "@/data/homepage";
import { Button } from "@/components/ui/button";
import { PipelineMock } from "@/components/ui/pipeline-mock";
import { useReducedMotion } from "@/lib/use-reduced-motion";

export function AttirerPipeline() {
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
    <section
      id="attirer"
      className="bg-craie text-navy"
    >
      <div className="mx-auto max-w-[1280px] px-5 py-16 sm:px-6 md:py-20 lg:px-10 lg:py-24">
        <div className="mb-5.5 flex items-center gap-2.5">
          <span className="h-px w-6.5 flex-none bg-or-texte" />
          <span className="font-mono text-[10.5px] tracking-[0.13em] text-or-texte">
            ÉTAPE 1 — ATTIRER · DJELI&apos;S CREATIVE
          </span>
        </div>
        <div className="mb-8 grid items-end gap-6 lg:grid-cols-2 lg:gap-12">
          <h2 className="font-display text-[28px] font-bold leading-none tracking-[-0.03em] sm:text-[36px] lg:text-[50px]">
            UNE IDÉE PEUT DEVENIR UNE CAMPAGNE.
          </h2>
          <p className="text-base leading-relaxed text-[#4A5B6B] lg:text-lg">
            Le produit de Mariam, photographié au téléphone, devient un
            contenu, une publicité, une conversation, puis une commande.
            C&apos;est la même vente que vous suivrez plus bas.
          </p>
        </div>

        {/* Mobile: one 9:16 card with tap-to-navigate dots */}
        <div className="mb-7 sm:hidden">
          <div className="shadow-[0_0_0_1px_rgba(22,40,58,0.14)] bg-white">
            <div className="flex items-center justify-between border-b border-navy/10 px-3.5 py-3">
              <span className="font-mono text-[9px] tracking-[0.1em] text-or-texte">
                {String(active + 1).padStart(2, "0")} / {String(pipelineSteps.length).padStart(2, "0")}
              </span>
              <span className="font-mono text-[9px] tracking-[0.08em] text-[#586A7A]">
                9:16
              </span>
            </div>
            <div className="p-3.5">
              {pipelineSteps[active].video ? (
                <video
                  src={pipelineSteps[active].video}
                  controls
                  playsInline
                  preload="metadata"
                  className="mb-3.5 block aspect-9/16 max-h-[300px] w-full bg-navy object-cover shadow-[0_0_0_1px_rgba(22,40,58,0.16)]"
                />
              ) : pipelineSteps[active].photo ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={pipelineSteps[active].photo}
                  alt="Photo produit prise en boutique"
                  className="mb-3.5 block aspect-9/16 max-h-[300px] w-full object-cover shadow-[0_0_0_1px_rgba(22,40,58,0.16)]"
                />
              ) : pipelineSteps[active].mock ? (
                <PipelineMock
                  type={pipelineSteps[active].mock!}
                  className="max-h-[300px]"
                />
              ) : (
                <div className="mb-3.5 flex aspect-9/16 max-h-[300px] items-end bg-[repeating-linear-gradient(135deg,rgba(22,40,58,0.06)_0_8px,transparent_8px_16px)] p-3.5 shadow-[0_0_0_1px_rgba(22,40,58,0.16)]">
                  <span className="whitespace-pre-line font-mono text-[9.5px] leading-relaxed tracking-[0.06em] text-[#4A5B6B]">
                    {pipelineSteps[active].slot}
                  </span>
                </div>
              )}
              <div className="mb-1.5 font-display text-base font-semibold">
                {pipelineSteps[active].title}
              </div>
              <p className="text-sm leading-snug text-[#4A5B6B]">
                {pipelineSteps[active].body}
              </p>
            </div>
          </div>
          <div className="mt-4 flex gap-1.5">
            {pipelineSteps.map((step, i) => (
              <button
                key={step.title}
                type="button"
                onClick={() => setActive(i)}
                aria-label={`Voir l'étape ${i + 1} : ${step.title}`}
                className="flex h-12 flex-1 items-center justify-center"
              >
                <span
                  className="block h-0.75 w-full transition-colors duration-300"
                  style={{ background: i === active ? "#8A5A0E" : "rgba(22,40,58,0.18)" }}
                />
              </button>
            ))}
          </div>
        </div>

        {/* Tablet and up: 5-card grid */}
        <div className="mb-7 hidden sm:grid sm:grid-cols-3 sm:gap-3.5 lg:grid-cols-5">
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
                  ) : step.mock ? (
                    <PipelineMock type={step.mock} />
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

        <div className="flex flex-wrap items-center justify-between gap-4.5 border-t border-navy/12 pt-6.5">
          <div className="flex flex-wrap items-center gap-2 font-display text-sm font-semibold tracking-[-0.01em] sm:text-base">
            <span>CONTENU</span>
            <span className="text-or-texte">→</span>
            <span>ATTENTION</span>
            <span className="text-or-texte">→</span>
            <span>CONVERSATION</span>
            <span className="text-or-texte">→</span>
            <span className="text-or-texte">VENTE</span>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={play}
              className="min-h-12 rounded-[2px] border border-navy/26 px-4 font-mono text-[11px] tracking-[0.08em] text-navy transition-colors duration-150 hover:border-or-texte hover:text-or-texte"
            >
              REJOUER
            </button>
            <Button href="/contact" variant="primary-on-craie">
              CRÉER MA CAMPAGNE
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
