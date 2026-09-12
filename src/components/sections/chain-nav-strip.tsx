import { chainJumpLinks } from "@/data/homepage";
import { cn } from "@/lib/utils";

export function ChainNavStrip() {
  return (
    <section id="chaine" className="bg-craie text-navy">
      <div className="mx-auto max-w-[1280px] px-5 py-8 sm:px-6 md:py-10 lg:px-10">
        <div className="mb-4.5 font-mono text-[10.5px] tracking-[0.13em] text-or-texte">
          SEPT ÉTAPES — CLIQUEZ POUR ALLER À LA SECTION
        </div>
        <div className="flex flex-wrap gap-2">
          {chainJumpLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={cn(
                "inline-flex min-h-11 items-center px-4 font-display text-sm font-semibold tracking-[0.04em] transition-colors duration-150",
                link.emphasis
                  ? "bg-navy text-craie hover:bg-or-texte"
                  : "text-navy shadow-[0_0_0_1px_rgba(22,40,58,0.2)] hover:text-or-texte hover:shadow-[0_0_0_1px_#D4841A]",
              )}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
