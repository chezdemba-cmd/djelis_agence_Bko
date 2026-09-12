import Link from "next/link";
import { solutions } from "@/data/homepage";
import { SectionLabel } from "@/components/ui/section-label";

export function GrandirSolutions() {
  return (
    <section id="grandir" className="border-t border-white/10">
      <div className="mx-auto max-w-[1280px] px-5 py-14 sm:px-6 md:py-20 lg:px-10 lg:py-24">
        <SectionLabel>
          ÉTAPES 6 ET 7 — AUTOMATISER, GRANDIR · DJELI&apos;S SOLUTIONS
        </SectionLabel>
        <h2 className="mb-5 max-w-[780px] text-balance font-display text-[clamp(26px,3.8vw,44px)] font-bold leading-[1.06] tracking-[-0.025em]">
          SIX SOLUTIONS ASSEMBLÉES POUR VOTRE MÉTIER.
        </h2>
        <p className="mb-8 max-w-[600px] text-[clamp(15px,1.8vw,18px)] leading-relaxed text-white/70 md:mb-10">
          Chaque solution combine les univers DJELI&apos;S selon les besoins
          réels d&apos;un secteur, avec un périmètre écrit et un prix.
        </p>
        <div className="grid grid-cols-1 gap-px sm:grid-cols-2 lg:grid-cols-3">
          {solutions.map((solution) => (
            <Link
              key={solution.tag}
              href={solution.href}
              className="block p-7 shadow-[0_0_0_1px_rgba(242,241,236,0.12)] transition-colors duration-150 hover:bg-navy"
            >
              <div className="mb-3 font-mono text-[9.5px] tracking-[0.1em] text-or">
                {solution.tag}
              </div>
              <div className="mb-2.5 font-display text-[17.5px] font-semibold">
                {solution.title}
              </div>
              <p className="text-[13.5px] leading-relaxed text-white/62">
                {solution.body}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
