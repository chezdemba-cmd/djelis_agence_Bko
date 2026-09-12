import type { Metadata } from "next";
import Image from "next/image";
import {
  pmeFaq,
  pmeScope,
  pmeSteps,
  pmeTodayVsWith,
} from "@/data/pme-connectee";
import { SectionLabel } from "@/components/ui/section-label";
import { Button, TextLink } from "@/components/ui/button";
import { FaqAccordion } from "@/components/ui/faq-accordion";

export const metadata: Metadata = {
  title: "PME Connectée",
  description:
    "Le réseau, les postes, la sauvegarde, la sécurité et les logiciels tenus par la même équipe. Un interlocuteur, un contrat, une maintenance.",
};

export default function PmeConnecteePage() {
  return (
    <>
      <section className="mx-auto max-w-[1280px] px-5 pt-10 pb-8 sm:px-6 md:pt-14 md:pb-10 lg:px-10 lg:pt-17 lg:pb-12">
        <SectionLabel>SOLUTION MÉTIER — ÉTAPES 5 À 7</SectionLabel>
        <div className="grid items-end gap-8 lg:grid-cols-2 lg:gap-13">
          <h1 className="text-balance font-display text-[clamp(34px,4.8vw,60px)] font-bold leading-[0.98] tracking-[-0.035em]">
            UN SEUL PARTENAIRE POUR VOTRE ENTREPRISE NUMÉRIQUE.
          </h1>
          <div>
            <p className="mb-6.5 text-pretty text-[clamp(16px,1.9vw,19px)] leading-[1.6] text-white/75">
              Le réseau, les postes, la sauvegarde, la sécurité et les
              logiciels tenus par la même équipe. Un interlocuteur, un
              contrat, une maintenance.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <Button href="/contact">DEMANDER UN DIAGNOSTIC</Button>
              <TextLink href="#perimetre">VOIR LE PÉRIMÈTRE →</TextLink>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-white/10">
        <div className="mx-auto max-w-[1280px] px-5 py-12 sm:px-6 md:py-16 lg:px-10 lg:py-18">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
            <Image
              src="/images/photo-tech-clean.png"
              alt="Technicien DJELI'S en intervention sur une baie réseau"
              width={640}
              height={480}
              className="block aspect-4/3 w-full object-cover shadow-[0_0_0_1px_rgba(242,241,236,0.18)]"
            />
            <div>
              <h2 className="mb-6 font-display text-[clamp(22px,2.8vw,32px)] font-bold leading-[1.1] tracking-[-0.02em]">
                CE QUI CHANGE POUR VOUS.
              </h2>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="p-5.5 shadow-[0_0_0_1px_rgba(242,241,236,0.14)]">
                  <div className="mb-4 font-mono text-[10px] tracking-[0.1em] text-white/66">
                    AUJOURD&apos;HUI
                  </div>
                  <div className="grid gap-3">
                    {pmeTodayVsWith.today.map((line) => (
                      <div key={line} className="flex gap-2.75">
                        <span className="text-white/66">—</span>
                        <span className="text-[14.5px] leading-snug text-white/82">
                          {line}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="bg-navy p-5.5 shadow-[0_0_0_1px_rgba(245,166,35,0.35)]">
                  <div className="mb-4 font-mono text-[10px] tracking-[0.1em] text-or">
                    AVEC PME CONNECTÉE
                  </div>
                  <div className="grid gap-3">
                    {pmeTodayVsWith.with.map((line) => (
                      <div key={line} className="flex gap-2.75">
                        <span className="text-or">—</span>
                        <span className="text-[14.5px] leading-snug text-white/90">
                          {line}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="perimetre" className="bg-craie text-navy">
        <div className="mx-auto max-w-[1280px] px-5 py-12 sm:px-6 md:py-16 lg:px-10 lg:py-18">
          <h2 className="mb-4 max-w-[640px] font-display text-[clamp(24px,3.4vw,38px)] font-bold leading-[1.06] tracking-[-0.025em]">
            CE QUE COUVRE LE CONTRAT.
          </h2>
          <p className="mb-8 max-w-[600px] text-[clamp(15px,1.8vw,18px)] leading-relaxed text-[#4A5B6B] md:mb-9">
            Six domaines. Vous prenez l&apos;ensemble ou seulement ceux qui
            vous manquent — mais le périmètre est écrit avant de commencer.
          </p>
          <div className="grid grid-cols-1 gap-px sm:grid-cols-2 lg:grid-cols-3">
            {pmeScope.map((item) => (
              <div
                key={item.n}
                className="p-6 shadow-[0_0_0_1px_rgba(22,40,58,0.12)]"
              >
                <div className="mb-3 font-mono text-[9.5px] tracking-[0.1em] text-or-texte">
                  {item.n}
                </div>
                <div className="mb-2.5 font-display text-[17px] font-semibold">
                  {item.t}
                </div>
                <p className="mb-3.5 text-[13.5px] leading-relaxed text-[#4A5B6B]">
                  {item.d}
                </p>
                <div className="whitespace-pre-line font-mono text-[9.5px] leading-loose tracking-[0.08em] text-[#586A7A]">
                  {item.inc}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="etapes" className="border-t border-white/10">
        <div className="mx-auto max-w-[1280px] px-5 py-12 sm:px-6 md:py-16 lg:px-10 lg:py-18">
          <h2 className="mb-4 max-w-[640px] font-display text-[clamp(24px,3.4vw,38px)] font-bold leading-[1.06] tracking-[-0.025em]">
            COMMENT NOUS PROCÉDONS.
          </h2>
          <p className="mb-8 max-w-[600px] text-[clamp(15px,1.8vw,18px)] leading-relaxed text-white/70 md:mb-9">
            Le diagnostic est gratuit et sans engagement. Vous repartez avec
            un document, même si vous ne travaillez pas avec nous.
          </p>
          <div className="grid grid-cols-1 gap-px sm:grid-cols-2 lg:grid-cols-4">
            {pmeSteps.map((step) => (
              <div
                key={step.n}
                className="p-6 shadow-[0_0_0_1px_rgba(242,241,236,0.12)]"
              >
                <div className="mb-3 font-mono text-[9.5px] tracking-[0.1em] text-or">
                  {step.n}
                </div>
                <div className="mb-2.5 font-display text-[16.5px] font-semibold">
                  {step.t}
                </div>
                <p className="text-[13.5px] leading-relaxed text-white/68">
                  {step.d}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="bg-craie text-navy">
        <div className="mx-auto max-w-[1280px] px-5 py-12 sm:px-6 md:py-16 lg:px-10 lg:py-18">
          <h2 className="mb-8 max-w-[640px] font-display text-[clamp(24px,3.4vw,38px)] font-bold leading-[1.06] tracking-[-0.025em] md:mb-9">
            LES QUESTIONS QUE L&apos;ON NOUS POSE.
          </h2>
          <FaqAccordion items={pmeFaq} />
        </div>
      </section>

      <section id="cta" className="border-t border-white/10 bg-navy">
        <div className="mx-auto max-w-[1280px] px-5 py-12 sm:px-6 md:py-16 lg:px-10 lg:py-18">
          <h2 className="mb-5 max-w-[720px] text-balance font-display text-[clamp(26px,4.2vw,50px)] font-bold leading-[1.04] tracking-[-0.03em]">
            COMMENÇONS PAR REGARDER CE QUE VOUS AVEZ.
          </h2>
          <p className="mb-7.5 max-w-[560px] text-[clamp(15px,1.9vw,19px)] leading-relaxed text-white/72">
            Une visite d&apos;une heure dans vos locaux suffit à établir
            l&apos;état des lieux et l&apos;ordre des priorités.
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <Button href="/contact">DEMANDER UN DIAGNOSTIC</Button>
            <TextLink href="/produits/djelis-business">
              VOIR DJELI&apos;S BUSINESS →
            </TextLink>
          </div>
        </div>
      </section>
    </>
  );
}
