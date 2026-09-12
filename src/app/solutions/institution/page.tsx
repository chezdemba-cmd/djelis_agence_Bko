import type { Metadata } from "next";
import Image from "next/image";
import {
  institutionDeliverables,
  institutionFaq,
  institutionLots,
} from "@/data/institution";
import { SectionLabel } from "@/components/ui/section-label";
import { Button, TextLink } from "@/components/ui/button";
import { FaqAccordion } from "@/components/ui/faq-accordion";

export const metadata: Metadata = {
  title: "Institution",
  description:
    "DJELI'S conduit des programmes de digitalisation pour les institutions, les administrations, les collectivités et les ONG. Méthode écrite, lots livrables, équipes formées.",
};

export default function InstitutionPage() {
  return (
    <>
      <section className="mx-auto max-w-[1280px] px-5 pt-10 pb-8 sm:px-6 md:pt-14 md:pb-10 lg:px-10 lg:pt-17 lg:pb-12">
        <SectionLabel>SOLUTION MÉTIER — INSTITUTIONS ET COLLECTIVITÉS</SectionLabel>
        <div className="grid items-end gap-8 lg:grid-cols-2 lg:gap-13">
          <h1 className="text-balance font-display text-[clamp(34px,4.8vw,58px)] font-bold leading-[0.98] tracking-[-0.035em]">
            DIGITALISER UNE ORGANISATION, PAS SEULEMENT SON SITE.
          </h1>
          <div>
            <p className="mb-6.5 text-pretty text-[clamp(16px,1.9vw,19px)] leading-[1.6] text-white/75">
              DJELI&apos;S conduit des programmes de digitalisation pour les
              institutions, les administrations, les collectivités et les
              ONG. Méthode écrite, lots livrables, équipes formées.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <Button href="/contact">NOUS CONTACTER</Button>
              <TextLink href="#comite">NOS RÉPONSES À VOS QUESTIONS →</TextLink>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-white/10">
        <div className="mx-auto max-w-[1280px] px-5 py-12 sm:px-6 md:py-16 lg:px-10 lg:py-18">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
            <Image
              src="/images/photo-06-institution.png"
              alt="Équipe DJELI'S en réunion de travail avec des représentants institutionnels"
              width={640}
              height={480}
              className="block aspect-4/3 w-full object-cover shadow-[0_0_0_1px_rgba(242,241,236,0.18)]"
            />
            <div>
              <h2 className="mb-4.5 font-display text-[clamp(22px,2.8vw,32px)] font-bold leading-[1.1] tracking-[-0.02em]">
                LE PROBLÈME N&apos;EST PRESQUE JAMAIS TECHNIQUE.
              </h2>
              <p className="mb-5.5 text-[clamp(15px,1.8vw,17.5px)] leading-[1.65] text-white/75">
                Les dossiers circulent en papier, les données existent en
                plusieurs versions, les agents travaillent sans outil
                commun, et chaque nouveau service est confié à un
                prestataire différent. Un site institutionnel ne règle rien
                de tout cela.
              </p>
              <p className="text-[clamp(15px,1.8vw,17.5px)] leading-[1.65] text-white/75">
                Nous commençons par un état des lieux des procédures, pas
                des logiciels. Ce qui se digitalise en premier est ce qui
                fait perdre le plus de temps aux agents et aux usagers.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="lots" className="bg-craie text-navy">
        <div className="mx-auto max-w-[1280px] px-5 py-12 sm:px-6 md:py-16 lg:px-10 lg:py-18">
          <h2 className="mb-4 max-w-[640px] font-display text-[clamp(24px,3.4vw,38px)] font-bold leading-[1.06] tracking-[-0.025em]">
            UN PROGRAMME EN QUATRE LOTS.
          </h2>
          <p className="mb-8 max-w-[620px] text-[clamp(15px,1.8vw,18px)] leading-relaxed text-[#4A5B6B] md:mb-9">
            Chaque lot est livrable et utilisable seul. Un programme peut
            s&apos;arrêter après le lot 2 et avoir déjà produit un résultat
            mesurable.
          </p>
          <div className="grid grid-cols-1 gap-px sm:grid-cols-2 lg:grid-cols-4">
            {institutionLots.map((lot) => (
              <div
                key={lot.n}
                className="p-6 shadow-[0_0_0_1px_rgba(22,40,58,0.12)]"
              >
                <div className="mb-3 font-mono text-[9.5px] tracking-[0.1em] text-or-texte">
                  {lot.n}
                </div>
                <div className="mb-2.5 font-display text-[17px] font-semibold">
                  {lot.t}
                </div>
                <p className="mb-3.5 text-[13.5px] leading-relaxed text-[#4A5B6B]">
                  {lot.d}
                </p>
                <div className="whitespace-pre-line font-mono text-[9.5px] leading-loose tracking-[0.08em] text-[#586A7A]">
                  {lot.inc}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="methode" className="border-t border-white/10">
        <div className="mx-auto max-w-[1280px] px-5 py-12 sm:px-6 md:py-16 lg:px-10 lg:py-18">
          <h2 className="mb-4 max-w-[700px] font-display text-[clamp(24px,3.4vw,38px)] font-bold leading-[1.06] tracking-[-0.025em]">
            CE QUE NOUS REMETTONS À CHAQUE ÉTAPE.
          </h2>
          <p className="mb-8 max-w-[620px] text-[clamp(15px,1.8vw,18px)] leading-relaxed text-white/70 md:mb-9">
            Un marché public se juge sur des livrables, pas sur des
            intentions. Voici les documents qui accompagnent chaque phase.
          </p>
          <div className="border-t border-white/12">
            {institutionDeliverables.map((item) => (
              <div
                key={item.phase}
                className="flex flex-wrap items-baseline gap-x-6 gap-y-2.5 border-b border-white/12 py-4.5"
              >
                <span className="min-w-[130px] font-mono text-[10px] tracking-[0.1em] text-or">
                  {item.phase}
                </span>
                <span className="min-w-[200px] flex-1 font-display text-[15.5px] font-semibold">
                  {item.t}
                </span>
                <span className="min-w-[240px] flex-[2] text-sm leading-relaxed text-white/68">
                  {item.d}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="comite" className="bg-craie text-navy">
        <div className="mx-auto max-w-[1280px] px-5 py-12 sm:px-6 md:py-16 lg:px-10 lg:py-18">
          <h2 className="mb-4 max-w-[700px] font-display text-[clamp(24px,3.4vw,38px)] font-bold leading-[1.06] tracking-[-0.025em]">
            LES QUESTIONS D&apos;UN COMITÉ, ET NOS RÉPONSES.
          </h2>
          <p className="mb-8 max-w-[620px] text-[clamp(15px,1.8vw,18px)] leading-relaxed text-[#4A5B6B] md:mb-9">
            Nous préférons y répondre ici plutôt qu&apos;en réunion.
          </p>
          <FaqAccordion items={institutionFaq} />
        </div>
      </section>

      <section id="cta" className="border-t border-white/10 bg-navy">
        <div className="mx-auto max-w-[1280px] px-5 py-12 sm:px-6 md:py-16 lg:px-10 lg:py-18">
          <h2 className="mb-5 max-w-[760px] text-balance font-display text-[clamp(26px,4.2vw,48px)] font-bold leading-[1.04] tracking-[-0.03em]">
            PARLONS DE VOTRE PROGRAMME, PAS DE NOS OUTILS.
          </h2>
          <p className="mb-7.5 max-w-[580px] text-[clamp(15px,1.9vw,19px)] leading-relaxed text-white/72">
            Décrivez-nous la procédure qui vous pose le plus de difficultés.
            Nous revenons vers vous avec une approche chiffrée et un
            calendrier.
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <Button href="/contact">CONTACT PARTENAIRES</Button>
            <TextLink href="#lots">REVOIR LES QUATRE LOTS →</TextLink>
          </div>
        </div>
      </section>
    </>
  );
}
