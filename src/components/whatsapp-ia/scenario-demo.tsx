"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { scenarios, type Scenario } from "@/data/whatsapp-ia";
import { LogoMark } from "@/components/ui/logo";
import { cn } from "@/lib/utils";
import { useReducedMotion } from "@/lib/use-reduced-motion";

function ScenarioPlayer({ scenario }: { scenario: Scenario }) {
  const reducedMotion = useReducedMotion();
  const total = scenario.msgs.length;
  const [step, setStep] = useState(reducedMotion ? total + 1 : 0);
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);

  const startInterval = useCallback(() => {
    if (timer.current) clearInterval(timer.current);
    timer.current = setInterval(() => {
      setStep((current) => {
        if (current >= total + 1) {
          if (timer.current) clearInterval(timer.current);
          return current;
        }
        return current + 1;
      });
    }, 1100);
  }, [total]);

  useEffect(() => {
    if (reducedMotion) return;
    startInterval();
    return () => {
      if (timer.current) clearInterval(timer.current);
    };
  }, [reducedMotion, startInterval]);

  const shown = scenario.msgs.slice(0, Math.min(step, total));
  const typing = step === total;
  const done = step > total;

  return (
    <div className="grid items-start gap-8 lg:grid-cols-2 lg:gap-12">
      <div className="flex justify-center">
        <div className="w-full max-w-[344px] rounded-[26px] bg-navy p-2.5 shadow-[0_0_0_1px_rgba(242,241,236,0.2)]">
          <div className="flex items-center gap-2.5 border-b border-white/12 px-2.5 pt-3 pb-3.5">
            <LogoMark size={36} />
            <div className="flex-1">
              <div className="font-display text-[14.5px] font-semibold">
                {scenario.shop}
              </div>
              <div className="flex items-center gap-1.5 pt-0.5">
                <span className="h-1.5 w-1.5 rounded-full bg-whatsapp" />
                <span className="font-mono text-[9px] tracking-[0.06em] text-whatsapp">
                  ASSISTANT DJELI&apos;S ACTIF
                </span>
              </div>
            </div>
          </div>
          <div className="flex min-h-[420px] flex-col gap-2.5 px-1.5 pt-4 pb-2">
            {shown.map((m, i) => (
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
                  {scenario.resultLabel}
                </div>
                <div className="whitespace-pre-line font-mono text-[11px] leading-loose text-white/85">
                  {scenario.result}
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </div>

      <div>
        <div className="mb-3.5 font-mono text-[10px] tracking-[0.12em] text-or">
          CE QUE FAIT L&apos;ASSISTANT ICI
        </div>
        <div className="mb-6.5 grid gap-px">
          {scenario.actions.map((action, i) => (
            <div
              key={action}
              className="flex items-baseline gap-3.5 p-4 shadow-[0_0_0_1px_rgba(242,241,236,0.12)]"
            >
              <span className="min-w-[18px] font-mono text-[10px] text-or">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="text-[14.5px] leading-snug text-white/85">
                {action}
              </span>
            </div>
          ))}
        </div>

        <div
          className="bg-craie text-navy shadow-[0_0_0_1px_rgba(242,241,236,0.14)] transition-opacity duration-600"
          style={{ opacity: done ? 1 : 0.55 }}
        >
          <div className="flex flex-wrap items-center justify-between gap-2.5 border-b border-navy/12 px-4.5 py-3.75">
            <div className="flex items-center gap-2.25">
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-or font-display text-[13px] font-bold text-navy">
                D
              </div>
              <span className="font-display text-sm font-semibold">
                Djeli&apos;S Business
              </span>
            </div>
            <span className="font-mono text-[9.5px] tracking-[0.1em] text-[#586A7A]">
              DONNÉES D&apos;ILLUSTRATION
            </span>
          </div>
          <div className="px-4.5 py-4">
            <div className="mb-2.5 font-mono text-[9.5px] tracking-[0.1em] text-or-texte">
              CE QUI EST ENREGISTRÉ CÔTÉ LOGICIEL
            </div>
            <div className="font-display text-[clamp(15px,1.8vw,18px)] font-semibold leading-snug">
              {done ? scenario.dash : "En attente de la fin de la conversation…"}
            </div>
          </div>
        </div>

        <p className="mt-5.5 max-w-[480px] text-[14.5px] leading-relaxed text-white/62">
          Rien n&apos;est ressaisi. Ce que l&apos;assistant écrit dans la
          conversation existe déjà dans votre logiciel de gestion.
        </p>
      </div>
    </div>
  );
}

export function ScenarioDemo() {
  const [tab, setTab] = useState(0);
  const [replayCount, setReplayCount] = useState(0);

  return (
    <div>
      <div className="mb-6.5 flex flex-wrap items-baseline justify-between gap-3.5">
        <h2 className="font-display text-[clamp(24px,3.4vw,38px)] font-bold leading-[1.06] tracking-[-0.025em]">
          QUATRE SITUATIONS RÉELLES.
        </h2>
        <button
          type="button"
          onClick={() => setReplayCount((c) => c + 1)}
          className="min-h-12 rounded-[2px] border border-white/26 px-4 font-mono text-[11px] tracking-[0.08em] text-white/80 transition-colors duration-150 hover:border-or hover:text-or"
        >
          REJOUER
        </button>
      </div>

      <div className="mb-7 flex flex-wrap gap-2">
        {scenarios.map((scenario, i) => {
          const active = i === tab;
          return (
            <button
              key={scenario.label}
              type="button"
              onClick={() => setTab(i)}
              className={cn(
                "min-h-12 rounded-[2px] border px-4.5 py-3.5 font-display text-sm font-semibold tracking-[0.02em] transition-colors duration-150",
                active
                  ? "border-or bg-or text-nuit"
                  : "border-white/24 bg-transparent text-white/82",
              )}
            >
              {scenario.label}
            </button>
          );
        })}
      </div>

      <ScenarioPlayer key={`${tab}-${replayCount}`} scenario={scenarios[tab]} />
    </div>
  );
}
