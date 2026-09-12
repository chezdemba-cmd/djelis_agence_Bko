import { Button, TextLink } from "@/components/ui/button";
import { site, whatsappLink } from "@/data/site";

export function LegalComingSoon({ title }: { title: string }) {
  return (
    <section className="mx-auto max-w-[720px] px-5 py-16 sm:px-6 md:py-24 lg:px-10">
      <div className="mb-5 inline-block border border-[rgba(212,132,26,0.5)] px-2 py-1.25 font-mono text-[10px] tracking-[0.1em] text-or-texte">
        EN COURS DE RÉDACTION
      </div>
      <h1 className="mb-5 text-balance font-display text-[clamp(28px,4vw,44px)] font-bold leading-[1.04] tracking-[-0.03em]">
        {title}
      </h1>
      <p className="mb-8 max-w-[520px] text-pretty text-[clamp(15px,1.8vw,18px)] leading-relaxed text-white/72">
        Cette page n&apos;est pas encore publiée. Pour toute question sur ce
        sujet en attendant, écrivez-nous directement — nous vous répondons
        sous 48 heures ouvrées.
      </p>
      <div className="flex flex-wrap items-center gap-3">
        <Button href={whatsappLink(`Bonjour DJELI'S, j'ai une question sur : ${title.toLowerCase()}.`)}>
          ÉCRIRE SUR WHATSAPP
        </Button>
        <TextLink href="/contact">NOUS CONTACTER →</TextLink>
      </div>
      <div className="mt-8 border-t border-white/12 pt-5 font-mono text-[10.5px] leading-[1.9] tracking-[0.06em] text-white/55">
        {site.name.toUpperCase()} — {site.location.toUpperCase()}
        <br />
        {site.email}
      </div>
    </section>
  );
}
