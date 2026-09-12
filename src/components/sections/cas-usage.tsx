import Image from "next/image";
import { storyTimeline } from "@/data/homepage";
import { SectionLabel } from "@/components/ui/section-label";

export function CasUsage() {
  return (
    <section id="cas" className="bg-craie text-navy">
      <div className="mx-auto max-w-[1280px] px-5 py-14 sm:px-6 md:py-20 lg:px-10 lg:py-24">
        <SectionLabel tone="amber">L&apos;HISTOIRE COMPLÈTE</SectionLabel>
        <h2 className="mb-5 max-w-[700px] text-balance font-display text-[clamp(26px,3.8vw,44px)] font-bold leading-[1.06] tracking-[-0.025em]">
          DIX ÉTAPES, UN SEUL PARTENAIRE.
        </h2>
        <p className="mb-8 max-w-[620px] text-[clamp(15px,1.8vw,18px)] leading-relaxed text-[#4A5B6B] md:mb-10">
          La vente que vous venez de suivre, du début à la fin. Les projets
          clients réels prendront cette place une fois les accords obtenus.
        </p>

        <div className="grid items-start gap-8 sm:grid-cols-[280px_1fr] lg:gap-11">
          <div>
            <Image
              src="/images/photo-04-mariam-boutique.png"
              alt="Mariam dans sa boutique à Bamako"
              width={560}
              height={560}
              className="mb-4.5 block aspect-square w-full object-cover shadow-[0_0_0_1px_rgba(22,40,58,0.16)]"
            />
            <div className="mb-1.5 font-display text-[19px] font-semibold">
              Mariam Mode — Bamako
            </div>
            <div className="inline-block border border-[rgba(212,132,26,0.5)] px-2 py-1.25 font-mono text-[10px] tracking-[0.1em] text-or-texte">
              SCÉNARIO TYPE — EN ATTENTE DU PROJET RÉEL
            </div>
          </div>
          <div className="grid gap-px">
            {storyTimeline.map((step, i) => (
              <div
                key={step.text}
                className="flex items-baseline gap-4 p-3.5 shadow-[0_0_0_1px_rgba(22,40,58,0.1)]"
              >
                <span className="min-w-5 font-mono text-[10px] tracking-[0.08em] text-or-texte">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="flex-1 text-[14.5px] leading-snug">
                  {step.text}
                </span>
                <span className="font-mono text-[9px] tracking-[0.08em] text-[#586A7A]">
                  {step.tag}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
