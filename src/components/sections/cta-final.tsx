import { Button, TextLink } from "@/components/ui/button";

export function CtaFinal() {
  return (
    <section className="border-t border-white/10 bg-navy">
      <div className="mx-auto max-w-[1280px] px-5 py-14 sm:px-6 md:py-20 lg:px-10 lg:py-24">
        <h2 className="mb-5.5 max-w-[760px] text-balance font-display text-[clamp(28px,4.6vw,54px)] font-bold leading-[1.04] tracking-[-0.03em]">
          ET SI ON DIGITALISAIT VOTRE ENTREPRISE ?
        </h2>
        <p className="mb-8 max-w-[560px] text-[clamp(15px,1.9vw,19px)] leading-relaxed text-white/72">
          Un échange de trente minutes suffit à savoir ce qui est utile chez
          vous, et dans quel ordre le faire.
        </p>
        <div className="flex flex-wrap items-center gap-3">
          <Button href="/contact">PARLER À DJELI&apos;S</Button>
          <TextLink href="/contact">DEMANDER UN DIAGNOSTIC →</TextLink>
        </div>
      </div>
    </section>
  );
}
