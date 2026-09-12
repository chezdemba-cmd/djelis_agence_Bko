import type { Metadata } from "next";
import Image from "next/image";
import { scopeDoes, scopeDoesNot, setupSteps, whatsappFaq } from "@/data/whatsapp-ia";
import { SectionLabel } from "@/components/ui/section-label";
import { Button, TextLink } from "@/components/ui/button";
import { FaqAccordion } from "@/components/ui/faq-accordion";
import { ScenarioDemo } from "@/components/whatsapp-ia/scenario-demo";

export const metadata: Metadata = {
  title: "WhatsApp IA",
  description:
    "L'assistant DJELI'S répond à vos clients sur votre numéro WhatsApp, donne les prix, vérifie la disponibilité et crée la commande.",
};

export default function WhatsappIaPage() {
  return (
    <>
      <section className="mx-auto max-w-[1280px] px-5 pt-10 pb-8 sm:px-6 md:pt-14 md:pb-10 lg:px-10 lg:pt-17 lg:pb-12">
        <SectionLabel>PRODUIT DJELI&apos;S — ÉTAPE 2, CONVERSER</SectionLabel>
        <div className="grid items-end gap-8 lg:grid-cols-2 lg:gap-13">
          <h1 className="text-balance font-display text-[clamp(34px,4.8vw,60px)] font-bold leading-[0.98] tracking-[-0.035em]">
            ET SI WHATSAPP DEVENAIT VOTRE COMMERCIAL 24H/24 ?
          </h1>
          <div>
            <p className="mb-6.5 text-pretty text-[clamp(16px,1.9vw,19px)] leading-[1.6] text-white/75">
              L&apos;assistant DJELI&apos;S répond à vos clients sur votre
              numéro WhatsApp, donne les prix, vérifie la disponibilité et
              crée la commande. Vous reprenez la main quand vous voulez.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <Button href="/contact">PARLER À DJELI&apos;S</Button>
              <TextLink href="#scenarios">VOIR UNE CONVERSATION →</TextLink>
            </div>
          </div>
        </div>
      </section>

      <section id="scenarios" className="border-t border-white/10 bg-nuit-1">
        <div className="mx-auto max-w-[1280px] px-5 py-12 sm:px-6 md:py-16 lg:px-10 lg:py-20">
          <ScenarioDemo />
        </div>
      </section>

      <section id="perimetre" className="bg-craie text-navy">
        <div className="mx-auto max-w-[1280px] px-5 py-12 sm:px-6 md:py-16 lg:px-10 lg:py-20">
          <SectionLabel tone="amber">
            PÉRIMÈTRE — CE QUE L&apos;ASSISTANT FAIT, ET CE QU&apos;IL NE FAIT PAS
          </SectionLabel>
          <h2 className="mb-8 max-w-[700px] font-display text-[clamp(24px,3.4vw,40px)] font-bold leading-[1.06] tracking-[-0.025em] md:mb-9">
            UN ASSISTANT COMMERCIAL, PAS UNE INTELLIGENCE GÉNÉRALE.
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-10">
            <div>
              <div className="mb-3.5 font-mono text-[10px] tracking-[0.1em] text-[#2E7F51]">
                IL S&apos;EN CHARGE
              </div>
              <div className="grid gap-px">
                {scopeDoes.map((item) => (
                  <div
                    key={item}
                    className="p-3.5 text-[14.5px] leading-snug shadow-[0_0_0_1px_rgba(22,40,58,0.1)]"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div className="mb-3.5 font-mono text-[10px] tracking-[0.1em] text-[#A8441F]">
                IL PASSE LA MAIN
              </div>
              <div className="grid gap-px">
                {scopeDoesNot.map((item) => (
                  <div
                    key={item}
                    className="p-3.5 text-[14.5px] leading-snug shadow-[0_0_0_1px_rgba(22,40,58,0.1)]"
                  >
                    {item}
                  </div>
                ))}
              </div>
              <p className="mt-4.5 text-sm leading-relaxed text-[#4A5B6B]">
                Dans ces cas, la conversation vous est transférée avec un
                résumé de ce qui a été dit.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-white/10">
        <div className="mx-auto max-w-[1280px] px-5 py-12 sm:px-6 md:py-16 lg:px-10 lg:py-20">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
            <div>
              <SectionLabel>MISE EN PLACE</SectionLabel>
              <h2 className="mb-5.5 font-display text-[clamp(24px,3.4vw,40px)] font-bold leading-[1.06] tracking-[-0.025em]">
                CE QUE NOUS DEMANDONS POUR COMMENCER.
              </h2>
              <div className="grid gap-px">
                {setupSteps.map((step) => (
                  <div
                    key={step.n}
                    className="flex gap-4 p-4.5 shadow-[0_0_0_1px_rgba(242,241,236,0.12)]"
                  >
                    <span className="min-w-[18px] font-mono text-[10px] text-or">
                      {step.n}
                    </span>
                    <div>
                      <div className="mb-1 font-display text-[15.5px] font-semibold">
                        {step.t}
                      </div>
                      <div className="text-sm leading-relaxed text-white/62">
                        {step.d}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <Image
              src="/images/photo-01-mariam-portrait.png"
              alt="Commerçante répondant à ses clients sur WhatsApp"
              width={560}
              height={700}
              className="block aspect-4/5 w-full object-cover shadow-[0_0_0_1px_rgba(242,241,236,0.18)]"
              style={{ objectPosition: "center 20%" }}
            />
          </div>
        </div>
      </section>

      <section id="faq" className="bg-craie text-navy">
        <div className="mx-auto max-w-[1280px] px-5 py-12 sm:px-6 md:py-16 lg:px-10 lg:py-20">
          <h2 className="mb-8 max-w-[640px] font-display text-[clamp(24px,3.4vw,40px)] font-bold leading-[1.06] tracking-[-0.025em] md:mb-9">
            LES QUESTIONS QUE L&apos;ON NOUS POSE.
          </h2>
          <FaqAccordion items={whatsappFaq} />
        </div>
      </section>

      <section id="cta" className="border-t border-white/10 bg-navy">
        <div className="mx-auto max-w-[1280px] px-5 py-12 sm:px-6 md:py-16 lg:px-10 lg:py-20">
          <h2 className="mb-5 max-w-[720px] text-balance font-display text-[clamp(26px,4.2vw,50px)] font-bold leading-[1.04] tracking-[-0.03em]">
            VOYONS CE QUE VOS CLIENTS VOUS DEMANDENT LE PLUS SOUVENT.
          </h2>
          <p className="mb-7.5 max-w-[560px] text-[clamp(15px,1.9vw,19px)] leading-relaxed text-white/72">
            Montrez-nous vos dix dernières conversations. Nous vous dirons
            lesquelles l&apos;assistant peut traiter seul.
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <Button href="/contact">PARLER À DJELI&apos;S</Button>
            <TextLink href="/produits/djelis-business">
              VOIR DJELI&apos;S BUSINESS →
            </TextLink>
          </div>
        </div>
      </section>
    </>
  );
}
