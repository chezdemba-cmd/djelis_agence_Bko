import type { Metadata } from "next";
import Image from "next/image";
import {
  businessFaq,
  businessModules,
  businessSetupSteps,
} from "@/data/djelis-business";
import { SectionLabel } from "@/components/ui/section-label";
import { Button, TextLink } from "@/components/ui/button";
import { FaqAccordion } from "@/components/ui/faq-accordion";
import { DashboardDemo } from "@/components/business/dashboard-demo";

export const metadata: Metadata = {
  title: "Djeli'S Business",
  description:
    "Les ventes, le stock, les clients et les créances au même endroit. Posez votre question en français, la réponse arrive avec le chiffre.",
};

export default function DjelisBusinessPage() {
  return (
    <>
      <section className="mx-auto max-w-[1280px] px-5 pt-10 pb-8 sm:px-6 md:pt-14 md:pb-10 lg:px-10 lg:pt-17 lg:pb-12">
        <SectionLabel>PRODUIT DJELI&apos;S — ÉTAPE 4, GÉRER</SectionLabel>
        <div className="grid items-end gap-8 lg:grid-cols-2 lg:gap-13">
          <h1 className="text-balance font-display text-[clamp(34px,4.8vw,60px)] font-bold leading-[0.98] tracking-[-0.035em]">
            VOTRE COMMERCE DANS VOTRE TÉLÉPHONE.
          </h1>
          <div>
            <p className="mb-6.5 text-pretty text-[clamp(16px,1.9vw,19px)] leading-[1.6] text-white/75">
              Les ventes, le stock, les clients et les créances au même
              endroit. Posez votre question en français, la réponse arrive
              avec le chiffre.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <Button href="/contact">PARLER À DJELI&apos;S</Button>
              <TextLink href="#demo">ESSAYER LE TABLEAU DE BORD →</TextLink>
            </div>
          </div>
        </div>
      </section>

      <section id="demo" className="border-t border-white/10 bg-craie text-navy">
        <div className="mx-auto max-w-[1280px] px-5 py-12 sm:px-6 md:py-16 lg:px-10 lg:py-18">
          <div className="mb-6 flex flex-wrap items-baseline justify-between gap-3.5">
            <h2 className="font-display text-[clamp(24px,3.4vw,38px)] font-bold leading-[1.06] tracking-[-0.025em]">
              POSEZ UNE QUESTION. CLIQUEZ.
            </h2>
            <span className="font-mono text-[9.5px] tracking-[0.1em] text-[#586A7A]">
              DONNÉES D&apos;ILLUSTRATION — JEUDI 11 SEPTEMBRE
            </span>
          </div>
          <DashboardDemo />
        </div>
      </section>

      <section id="modules" className="border-t border-white/10">
        <div className="mx-auto max-w-[1280px] px-5 py-12 sm:px-6 md:py-16 lg:px-10 lg:py-20">
          <h2 className="mb-5 max-w-[700px] font-display text-[clamp(24px,3.4vw,40px)] font-bold leading-[1.06] tracking-[-0.025em]">
            SEPT MODULES, UN SEUL LOGICIEL.
          </h2>
          <p className="mb-8 max-w-[600px] text-[clamp(15px,1.8vw,18px)] leading-relaxed text-white/70 md:mb-9">
            Vous activez ce dont vous avez besoin. Un commerce démarre
            souvent avec trois modules et ajoute les autres plus tard.
          </p>
          <div className="grid grid-cols-1 gap-px sm:grid-cols-2 lg:grid-cols-4">
            {businessModules.map((mod) => (
              <div
                key={mod.n}
                className="p-6 shadow-[0_0_0_1px_rgba(242,241,236,0.12)]"
              >
                <div className="mb-3 font-mono text-[9.5px] tracking-[0.1em] text-or">
                  {mod.n}
                </div>
                <div className="mb-2.5 font-display text-[17px] font-semibold">
                  {mod.t}
                </div>
                <p className="text-[13.5px] leading-relaxed text-white/62">
                  {mod.d}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-craie text-navy">
        <div className="mx-auto max-w-[1280px] px-5 py-12 sm:px-6 md:py-16 lg:px-10 lg:py-20">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
            <div>
              <SectionLabel tone="amber">MISE EN PLACE</SectionLabel>
              <h2 className="mb-5.5 font-display text-[clamp(24px,3.4vw,40px)] font-bold leading-[1.06] tracking-[-0.025em]">
                DU CAHIER AU LOGICIEL, EN QUATRE TEMPS.
              </h2>
              <div className="grid gap-px">
                {businessSetupSteps.map((step) => (
                  <div
                    key={step.n}
                    className="flex gap-4 p-4.5 shadow-[0_0_0_1px_rgba(22,40,58,0.1)]"
                  >
                    <span className="min-w-[18px] font-mono text-[10px] text-or-texte">
                      {step.n}
                    </span>
                    <div>
                      <div className="mb-1 font-display text-[15.5px] font-semibold">
                        {step.t}
                      </div>
                      <div className="text-sm leading-relaxed text-[#4A5B6B]">
                        {step.d}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <Image
              src="/images/photo-07-formation.png"
              alt="Formation DJELI'S sur le comptoir d'un commerce"
              width={560}
              height={700}
              className="block aspect-4/5 w-full object-cover shadow-[0_0_0_1px_rgba(22,40,58,0.16)]"
            />
          </div>
        </div>
      </section>

      <section id="faq" className="border-t border-white/10">
        <div className="mx-auto max-w-[1280px] px-5 py-12 sm:px-6 md:py-16 lg:px-10 lg:py-20">
          <h2 className="mb-8 max-w-[640px] font-display text-[clamp(24px,3.4vw,40px)] font-bold leading-[1.06] tracking-[-0.025em] md:mb-9">
            LES QUESTIONS QUE L&apos;ON NOUS POSE.
          </h2>
          <FaqAccordion items={businessFaq} tone="dark" />
        </div>
      </section>

      <section id="cta" className="border-t border-white/10 bg-navy">
        <div className="mx-auto max-w-[1280px] px-5 py-12 sm:px-6 md:py-16 lg:px-10 lg:py-20">
          <h2 className="mb-5 max-w-[720px] text-balance font-display text-[clamp(26px,4.2vw,50px)] font-bold leading-[1.04] tracking-[-0.03em]">
            APPORTEZ VOTRE CAHIER DE VENTES.
          </h2>
          <p className="mb-7.5 max-w-[560px] text-[clamp(15px,1.9vw,19px)] leading-relaxed text-white/72">
            Une semaine de ventes nous suffit pour vous montrer ce que le
            tableau de bord aurait affiché.
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <Button href="/contact">PARLER À DJELI&apos;S</Button>
            <TextLink href="/produits/whatsapp-ia">VOIR WHATSAPP IA →</TextLink>
          </div>
        </div>
      </section>
    </>
  );
}
