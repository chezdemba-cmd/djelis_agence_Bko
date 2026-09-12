import type { Metadata } from "next";
import Image from "next/image";
import {
  creativeGallery,
  creativeMethodSteps,
  creativeOffers,
} from "@/data/creative-ads";
import { SectionLabel } from "@/components/ui/section-label";
import { Button, TextLink } from "@/components/ui/button";
import { ImagePlaceholder } from "@/components/ui/image-placeholder";
import { CampaignPipeline } from "@/components/creative/campaign-pipeline";

export const metadata: Metadata = {
  title: "Creative & Social Ads",
  description:
    "Nous transformons un produit en contenu, le contenu en attention, l'attention en conversation, et la conversation en vente.",
};

export default function CreativeSocialAdsPage() {
  return (
    <>
      <section className="mx-auto max-w-[1280px] px-5 pt-10 pb-8 sm:px-6 md:pt-14 md:pb-10 lg:px-10 lg:pt-17 lg:pb-12">
        <SectionLabel>DJELI&apos;S CREATIVE — ÉTAPE 1, ATTIRER</SectionLabel>
        <div className="grid items-end gap-8 lg:grid-cols-2 lg:gap-13">
          <h1 className="text-balance font-display text-[clamp(34px,4.8vw,60px)] font-bold leading-[0.98] tracking-[-0.035em]">
            UNE IDÉE PEUT DEVENIR UNE CAMPAGNE.
          </h1>
          <div>
            <p className="mb-6.5 text-pretty text-[clamp(16px,1.9vw,19px)] leading-[1.6] text-white/75">
              Nous ne livrons pas une jolie vidéo. Nous transformons un
              produit en contenu, le contenu en attention, l&apos;attention
              en conversation, et la conversation en vente.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <Button href="/contact">CRÉER MA CAMPAGNE</Button>
              <TextLink href="#galerie">VOIR NOS VIDÉOS →</TextLink>
            </div>
          </div>
        </div>
      </section>

      <section id="parcours" className="border-t border-white/10 bg-craie text-navy">
        <div className="mx-auto max-w-[1280px] px-5 py-12 sm:px-6 md:py-16 lg:px-10 lg:py-18">
          <CampaignPipeline />
        </div>
      </section>

      <section id="galerie" className="border-t border-white/10">
        <div className="mx-auto max-w-[1280px] px-5 py-12 sm:px-6 md:py-16 lg:px-10 lg:py-18">
          <h2 className="mb-4 font-display text-[clamp(24px,3.4vw,38px)] font-bold leading-[1.06] tracking-[-0.025em]">
            NOS VIDÉOS.
          </h2>
          <p className="mb-8 max-w-[600px] text-[clamp(15px,1.8vw,18px)] leading-relaxed text-white/70 md:mb-9">
            Produites par DJELI&apos;S. Format vertical, pensées pour être
            vues sans le son et regardées jusqu&apos;au bout.
          </p>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {creativeGallery.map((item) => (
              <div
                key={item.t + item.tag}
                className="shadow-[0_0_0_1px_rgba(242,241,236,0.12)]"
              >
                {item.kind === "video" ? (
                  <video
                    src={item.src}
                    controls
                    playsInline
                    preload="metadata"
                    className="block aspect-9/16 w-full bg-navy object-cover"
                  />
                ) : (
                  <ImagePlaceholder
                    label="VIDÉO À VENIR"
                    aspect="aspect-9/16"
                    className="w-full bg-navy"
                  />
                )}
                <div className="px-3.75 py-3.5">
                  <div className="mb-1 font-display text-[14.5px] font-semibold">
                    {item.t}
                  </div>
                  <div className="font-mono text-[9.5px] tracking-[0.08em] text-white/62">
                    {item.tag}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="offres" className="bg-craie text-navy">
        <div className="mx-auto max-w-[1280px] px-5 py-12 sm:px-6 md:py-16 lg:px-10 lg:py-18">
          <h2 className="mb-4 max-w-[640px] font-display text-[clamp(24px,3.4vw,38px)] font-bold leading-[1.06] tracking-[-0.025em]">
            CE QUE NOUS PRODUISONS.
          </h2>
          <p className="mb-8 max-w-[600px] text-[clamp(15px,1.8vw,18px)] leading-relaxed text-[#4A5B6B] md:mb-9">
            Quatre prestations qui se combinent. La plupart des clients
            commencent par la première et ajoutent la publicité une fois
            les vidéos en place.
          </p>
          <div className="grid grid-cols-1 gap-px sm:grid-cols-2 lg:grid-cols-4">
            {creativeOffers.map((offer) => (
              <div
                key={offer.n}
                className="p-6 shadow-[0_0_0_1px_rgba(22,40,58,0.12)]"
              >
                <div className="mb-3 font-mono text-[9.5px] tracking-[0.1em] text-or-texte">
                  {offer.n}
                </div>
                <div className="mb-2.5 font-display text-[17px] font-semibold">
                  {offer.t}
                </div>
                <p className="mb-3.5 text-[13.5px] leading-relaxed text-[#4A5B6B]">
                  {offer.d}
                </p>
                <div className="whitespace-pre-line font-mono text-[9.5px] leading-loose tracking-[0.08em] text-[#586A7A]">
                  {offer.inc}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="methode" className="border-t border-white/10">
        <div className="mx-auto max-w-[1280px] px-5 py-12 sm:px-6 md:py-16 lg:px-10 lg:py-18">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
            <div>
              <SectionLabel>MÉTHODE</SectionLabel>
              <h2 className="mb-5.5 font-display text-[clamp(24px,3.4vw,40px)] font-bold leading-[1.06] tracking-[-0.025em]">
                DEUX ACCROCHES, UNE SEULE GAGNANTE.
              </h2>
              <p className="mb-6.5 max-w-[500px] text-[clamp(15px,1.8vw,18px)] leading-relaxed text-white/72">
                Chaque campagne part avec deux versions de la même vidéo.
                Au bout de quelques jours, la publicité qui convertit le
                mieux reçoit le reste du budget. Nous ne devinons pas, nous
                mesurons.
              </p>
              <div className="grid gap-px">
                {creativeMethodSteps.map((step, i) => (
                  <div
                    key={step}
                    className="flex items-baseline gap-4 p-4 shadow-[0_0_0_1px_rgba(242,241,236,0.12)]"
                  >
                    <span className="min-w-[18px] font-mono text-[10px] text-or">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-[14.5px] leading-snug text-white/85">
                      {step}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <Image
              src="/images/photo-01-mariam-portrait.png"
              alt="Commerçante consultant les résultats de sa campagne"
              width={560}
              height={700}
              className="block aspect-4/5 w-full object-cover shadow-[0_0_0_1px_rgba(242,241,236,0.18)]"
              style={{ objectPosition: "center 20%" }}
            />
          </div>
        </div>
      </section>

      <section id="cta" className="border-t border-white/10 bg-navy">
        <div className="mx-auto max-w-[1280px] px-5 py-12 sm:px-6 md:py-16 lg:px-10 lg:py-18">
          <h2 className="mb-5 max-w-[720px] text-balance font-display text-[clamp(26px,4.2vw,50px)] font-bold leading-[1.04] tracking-[-0.03em]">
            MONTREZ-NOUS UN PRODUIT QUI SE VEND MAL.
          </h2>
          <p className="mb-7.5 max-w-[560px] text-[clamp(15px,1.9vw,19px)] leading-relaxed text-white/72">
            Une photo suffit pour que nous vous disions ce que nous en
            ferions, et sur quelle plateforme le diffuser.
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <Button href="/contact">CRÉER MA CAMPAGNE</Button>
            <TextLink href="/produits/whatsapp-ia">VOIR WHATSAPP IA →</TextLink>
          </div>
        </div>
      </section>
    </>
  );
}
