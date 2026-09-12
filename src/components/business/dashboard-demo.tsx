"use client";

import { useState } from "react";
import { dashboardKpiOrder, dashboardQuestions } from "@/data/djelis-business";
import { LogoMark } from "@/components/ui/logo";
import { cn } from "@/lib/utils";

export function DashboardDemo() {
  const [qIndex, setQIndex] = useState(0);
  const current = dashboardQuestions[qIndex];

  return (
    <div>
      <div className="mb-5.5 flex flex-wrap gap-2">
        {dashboardQuestions.map((question, i) => {
          const active = i === qIndex;
          return (
            <button
              key={question.q}
              type="button"
              onClick={() => setQIndex(i)}
              className={cn(
                "min-h-12 rounded-[2px] border px-4 py-3.5 text-left text-sm transition-colors duration-150",
                active
                  ? "border-navy bg-navy text-craie"
                  : "border-navy/20 bg-craie text-navy hover:border-or-texte/60",
              )}
            >
              {question.q}
            </button>
          );
        })}
      </div>

      <div className="mb-5.5 bg-white text-navy shadow-[0_0_0_1px_rgba(22,40,58,0.14)]">
        <div className="flex flex-wrap items-center gap-2.5 border-b border-navy/10 px-5 py-4">
          <LogoMark size={26} />
          <div className="min-w-[240px] flex-1 font-display text-[clamp(16px,2vw,21px)] font-semibold leading-[1.35]">
            {current.a}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-px p-5 sm:grid-cols-5">
          {dashboardKpiOrder.map((kpi) => {
            const on = current.highlightKpis.includes(kpi.key);
            return (
              <div
                key={kpi.key}
                className="p-3.5 shadow-[0_0_0_1px_rgba(22,40,58,0.1)] transition-colors duration-400"
                style={{ background: on ? "rgba(245,166,35,0.12)" : "#fff" }}
              >
                <div className="mb-2.25 font-mono text-[9px] tracking-[0.1em] text-[#586A7A]">
                  {kpi.key}
                </div>
                <div
                  className="font-display text-[21px] font-bold tracking-[-0.02em]"
                  style={{ color: kpi.key === "STOCK FAIBLE" ? "#A8441F" : "#16283A" }}
                >
                  {kpi.value}
                </div>
                <div className="pt-1.75 font-mono text-[9px] tracking-[0.06em] text-[#586A7A]">
                  {kpi.sub}
                </div>
              </div>
            );
          })}
        </div>

        <div className="px-5 pb-5">
          <div className="mb-3 font-mono text-[9.5px] tracking-[0.1em] text-or-texte">
            {current.detailTitle}
          </div>
          <div className="grid gap-px">
            {current.rows.map((row) => (
              <div
                key={row.tag + row.t}
                className="flex flex-wrap items-baseline gap-x-4 gap-y-2 p-3.5 shadow-[0_0_0_1px_rgba(22,40,58,0.1)]"
              >
                <span className="min-w-[62px] font-mono text-[10px] tracking-[0.08em] text-[#586A7A]">
                  {row.tag}
                </span>
                <span className="min-w-[180px] flex-1 text-[14.5px] leading-snug">
                  {row.t}
                </span>
                <span
                  className="font-mono text-xs"
                  style={{ color: row.highlight ? "#8A5A0E" : "#4A5B6B" }}
                >
                  {row.v}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <p className="max-w-[620px] text-[14.5px] leading-relaxed text-[#4A5B6B]">
        Les chiffres viennent de vos ventes réelles, saisies en boutique ou
        créées par l&apos;assistant WhatsApp. Aucune ressaisie, aucun calcul
        de fin de mois.
      </p>
    </div>
  );
}
