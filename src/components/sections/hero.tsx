import Image from "next/image";
import { Button, TextLink } from "@/components/ui/button";
import { ChainWidget } from "@/components/sections/chain-widget";

export function Hero() {
  return (
    <section className="mx-auto max-w-[1280px] px-5 py-12 sm:px-6 md:py-16 lg:px-10">
      <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-13">
        <div>
          <div className="mb-5 flex items-center gap-2.5">
            <span className="h-px w-6.5 flex-none bg-or" />
            <span className="font-mono text-[10.5px] tracking-[0.13em] text-or">
              ENTREPRISE TECHNOLOGIQUE — BAMAKO, MALI
            </span>
          </div>
          <h1 className="mb-6 text-balance font-display text-[clamp(34px,5.4vw,66px)] font-bold leading-[0.98] tracking-[-0.035em]">
            L&apos;IA ET LE DIGITAL AU SERVICE DE VOTRE BUSINESS.
          </h1>
          <p className="mb-8 max-w-[500px] text-pretty font-sans text-[clamp(16px,1.9vw,20px)] leading-[1.6] text-white/75">
            DJELI&apos;S combine intelligence artificielle, création, commerce,
            logiciels et technologies pour aider les entreprises à vendre
            davantage et travailler plus efficacement.
          </p>
          <div className="mb-9 flex flex-wrap items-center gap-3">
            <Button href="/contact">PARLER À DJELI&apos;S</Button>
            <TextLink href="#chaine">DÉCOUVRIR NOS SOLUTIONS →</TextLink>
          </div>
          <div className="grid grid-cols-[110px_1fr] items-center gap-4.5 border-t border-white/12 pt-6.5 sm:grid-cols-[128px_1fr]">
            <Image
              src="/images/photo-01-mariam-portrait.png"
              alt="Mariam, entrepreneure à Bamako, consultant son téléphone"
              width={128}
              height={160}
              className="block aspect-4/5 w-full object-cover shadow-[0_0_0_1px_rgba(242,241,236,0.18)]"
              style={{ objectPosition: "center 20%" }}
            />
            <div>
              <div className="mb-1.5 font-display text-base font-semibold">
                Mariam vend depuis sa boutique de Bamako.
              </div>
              <p className="text-sm leading-snug text-white/65">
                Une photo de produit, une campagne, une conversation, une
                commande, un tableau de bord. Suivez sa vente à travers la
                page.
              </p>
            </div>
          </div>
        </div>

        <ChainWidget />
      </div>
    </section>
  );
}
