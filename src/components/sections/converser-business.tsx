"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import {
  businessAnswers,
  businessQuestions,
  kpisAfter,
  kpisBefore,
  waMessages,
} from "@/data/homepage";
import { Button, TextLink } from "@/components/ui/button";
import { LogoMark } from "@/components/ui/logo";
import { useReducedMotion } from "@/lib/use-reduced-motion";

const STEPS = 5;

export function ConverserBusiness() {
  const reducedMotion = useReducedMotion();
  const [wa, setWa] = useState(reducedMotion ? STEPS : 0);
  const [ask, setAsk] = useState<0 | 1>(0);
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);

  const startInterval = useCallback(() => {
    if (timer.current) clearInterval(timer.current);
    timer.current = setInterval(() => {
      setWa((current) => {
        if (current >= STEPS) {
          if (timer.current) clearInterval(timer.current);
          return current;
        }
        return current + 1;
      });
    }, 1100);
  }, []);

  const play = useCallback(() => {
    if (reducedMotion) {
      setWa(STEPS);
      return;
    }
    setWa(0);
    startInterval();
  }, [reducedMotion, startInterval]);

  useEffect(() => {
    if (reducedMotion) return;
    startInterval();
    return () => {
      if (timer.current) clearInterval(timer.current);
    };
  }, [reducedMotion, startInterval]);

  const visibleMessages = waMessages.slice(0, Math.min(wa, 4));
  const typing = wa === 4;
  const done = wa >= STEPS;
  const kpis = done ? kpisAfter : kpisBefore;

  return (
    <section id="converser" className="bg-nuit-1">
      <div className="mx-auto max-w-[1280px] px-5 py-16 sm:px-6 md:py-20 lg:px-10 lg:py-24">
        <div className="mb-5.5 flex items-center gap-2.5">
          <span className="h-px w-6.5 flex-none bg-or" />
          <span className="font-mono text-[10.5px] tracking-[0.13em] text-or">
            ÉTAPES 2 À 4 — CONVERSER, VENDRE, GÉRER
          </span>
        </div>
        <h2 className="mb-5 max-w-[820px] font-display text-[28px] font-bold leading-none tracking-[-0.03em] sm:text-[36px] lg:text-[50px]">
          ET SI WHATSAPP DEVENAIT VOTRE COMMERCIAL 24H/24 ?
        </h2>
        <p className="mb-10 max-w-[600px] text-base leading-relaxed text-white/72 lg:text-lg">
          Le client qui a vu la publicité de Mariam écrit. L&apos;assistant
          répond, crée la commande — et cette commande apparaît immédiatement
          dans Djeli&apos;S Business.
        </p>

        <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-12">
          <div className="flex justify-center">
            <div className="w-full max-w-[344px] rounded-[26px] bg-navy p-2.5 shadow-[0_0_0_1px_rgba(242,241,236,0.2)]">
              <div className="flex items-center gap-2.5 border-b border-white/12 px-2.5 pt-3 pb-3.5">
                <LogoMark size={36} />
                <div className="flex-1">
                  <div className="font-display text-[14.5px] font-semibold">
                    Mariam Mode
                  </div>
                  <div className="flex items-center gap-1.5 pt-0.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-whatsapp" />
                    <span className="font-mono text-[9px] tracking-[0.06em] text-whatsapp">
                      ASSISTANT DJELI&apos;S ACTIF
                    </span>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={play}
                  className="rounded-[2px] border border-white/26 px-2.5 py-1.5 font-mono text-[9.5px] tracking-[0.08em] text-white/80 transition-colors duration-150 hover:border-or hover:text-or"
                >
                  REJOUER
                </button>
              </div>
              <div className="flex min-h-[396px] flex-col gap-2.5 px-1.5 pt-4 pb-2">
                {visibleMessages.map((m, i) => (
                  <div
                    key={i}
                    className={m.fromDjelis ? "flex justify-end" : "flex justify-start"}
                  >
                    <div
                      className="max-w-[84%] px-3.25 py-2.75"
                      style={{
                        background: m.fromDjelis
                          ? "rgba(37,211,102,0.14)"
                          : "rgba(242,241,236,0.08)",
                        borderRadius: m.fromDjelis
                          ? "12px 2px 12px 12px"
                          : "2px 12px 12px 12px",
                      }}
                    >
                      <div
                        className="mb-1 font-mono text-[8.5px] tracking-[0.08em]"
                        style={{ color: m.fromDjelis ? "#25D366" : "rgba(242,241,236,0.66)" }}
                      >
                        {m.from}
                      </div>
                      <div className="text-[14.5px] leading-snug text-[#F2F1EC]/94">
                        {m.text}
                      </div>
                    </div>
                  </div>
                ))}
                {typing ? (
                  <div className="flex justify-end">
                    <div className="rounded-[12px_2px_12px_12px] bg-whatsapp/12 px-3.75 py-3.25 font-mono text-[10px] tracking-[0.1em] text-whatsapp">
                      • • •
                    </div>
                  </div>
                ) : null}
                {done ? (
                  <div className="mt-0.5 bg-whatsapp/10 px-3.75 py-3.25 shadow-[0_0_0_1px_#25D366]">
                    <div className="mb-1.75 font-mono text-[10px] tracking-[0.1em] text-whatsapp">
                      COMMANDE CRÉÉE
                    </div>
                    <div className="font-mono text-[11px] leading-loose text-white/85">
                      MARIAM · 2 × MODÈLE NOIR
                      <br />
                      50 000 FCFA · BAMAKO
                      <br />
                      PAIEMENT : À CONFIRMER
                    </div>
                  </div>
                ) : null}
              </div>
            </div>
          </div>

          <div id="gerer">
            <div className="mb-4.5 flex items-center gap-3">
              <span
                className="font-mono text-[10px] tracking-[0.12em] transition-colors duration-500"
                style={{ color: done ? "#F5A623" : "rgba(242,241,236,0.62)" }}
              >
                LA MÊME COMMANDE, DANS DJELI&apos;S BUSINESS
              </span>
              <span className="relative h-px min-w-[30px] flex-1 bg-white/14">
                <span
                  className="absolute inset-y-0 left-0 bg-or transition-[width] duration-700"
                  style={{ width: done ? "100%" : "0%" }}
                />
              </span>
            </div>

            <div
              className="bg-craie text-navy transition-opacity duration-600 shadow-[0_0_0_1px_rgba(242,241,236,0.14)]"
              style={{ opacity: done ? 1 : 0.55 }}
            >
              <div className="flex flex-wrap items-center justify-between gap-2.5 border-b border-navy/12 px-5 py-3.75">
                <div className="flex items-center gap-2.25">
                  <LogoMark size={24} />
                  <span className="font-display text-sm font-semibold">
                    Djeli&apos;S Business
                  </span>
                </div>
                <span className="font-mono text-[9.5px] tracking-[0.1em] text-[#586A7A]">
                  DONNÉES D&apos;ILLUSTRATION
                </span>
              </div>

              {done ? (
                <div className="mx-5 mt-4.5 flex flex-wrap items-center gap-3 bg-succes/8 px-4.25 py-3.75 shadow-[0_0_0_1px_#3FA96B]">
                  <span className="font-mono text-[9.5px] tracking-[0.1em] text-[#2E7F51]">
                    NOUVELLE COMMANDE
                  </span>
                  <span className="font-display text-[15px] font-semibold">
                    Mariam · 2 × produit · 50 000 FCFA · Bamako
                  </span>
                  <span className="ml-auto font-mono text-[9.5px] tracking-[0.08em] text-or-texte">
                    PAIEMENT À CONFIRMER
                  </span>
                </div>
              ) : null}

              <div className="grid grid-cols-2 gap-px px-5 pt-4.5 pb-5 sm:grid-cols-5">
                {kpis.map((kpi) => (
                  <div
                    key={kpi.key}
                    className="p-3.5 shadow-[0_0_0_1px_rgba(22,40,58,0.1)] transition-colors duration-600"
                    style={{ background: kpi.delta ? "rgba(245,166,35,0.1)" : "#FFFFFF" }}
                  >
                    <div className="mb-2.25 font-mono text-[9px] tracking-[0.1em] text-[#586A7A]">
                      {kpi.key}
                    </div>
                    <div
                      className="font-display text-[21px] font-bold tracking-[-0.02em]"
                      style={{ color: kpi.key === "STOCK FAIBLE" ? "#D9544E" : "#16283A" }}
                    >
                      {kpi.value}
                    </div>
                    <div className="min-h-3 pt-1.75 font-mono text-[9px] tracking-[0.06em] text-or-texte">
                      {kpi.delta}
                    </div>
                  </div>
                ))}
              </div>

              <div className="px-5 pb-5">
                <div className="p-4.5 shadow-[0_0_0_1px_rgba(22,40,58,0.12)]">
                  <div className="mb-2.5 font-mono text-[9.5px] tracking-[0.1em] text-or-texte">
                    DEMANDEZ EN LANGAGE COURANT
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {businessQuestions.map((q, i) => (
                      <button
                        key={q}
                        type="button"
                        onClick={() => setAsk(i as 0 | 1)}
                        className="min-h-11.5 rounded-[2px] bg-craie px-3.5 py-3 text-left text-[13.5px] transition-colors duration-150"
                        style={{
                          border: `1px solid ${ask === i ? "#D4841A" : "rgba(22,40,58,0.2)"}`,
                        }}
                      >
                        {q}
                      </button>
                    ))}
                  </div>
                  <div className="pt-3.5 font-display text-[16px] font-semibold leading-snug sm:text-lg">
                    {businessAnswers[ask]}
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <Button href="/produits/whatsapp-ia">DÉCOUVRIR WHATSAPP IA</Button>
              <TextLink href="/produits/djelis-business">
                VOIR DJELI&apos;S BUSINESS →
              </TextLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
