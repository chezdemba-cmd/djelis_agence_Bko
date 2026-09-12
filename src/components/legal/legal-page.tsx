import type { ReactNode } from "react";
import { site } from "@/data/site";

export function LegalPage({
  title,
  lastUpdated,
  children,
}: {
  title: string;
  lastUpdated: string;
  children: ReactNode;
}) {
  return (
    <section className="mx-auto max-w-[820px] px-5 py-14 sm:px-6 md:py-20 lg:px-10">
      <h1 className="mb-3 text-balance font-display text-[clamp(28px,4vw,44px)] font-bold leading-[1.04] tracking-[-0.03em]">
        {title}
      </h1>
      <p className="mb-10 font-mono text-[10.5px] tracking-[0.08em] text-white/55">
        DERNIÈRE MISE À JOUR : {lastUpdated.toUpperCase()}
      </p>

      <div className="mb-10 bg-[rgba(212,132,26,0.08)] px-5 py-4 text-sm leading-relaxed text-white/75 shadow-[0_0_0_1px_rgba(212,132,26,0.35)]">
        Ce document couvre les informations que DJELI&apos;S contrôle
        directement. Les champs marqués{" "}
        <span className="text-or-texte">[à compléter]</span> dépendent de
        l&apos;immatriculation légale de l&apos;entreprise et doivent être
        renseignés — idéalement après relecture par un conseil juridique —
        avant que cette page ne serve de référence contractuelle.
      </div>

      <div className="grid gap-9 text-[15px] leading-relaxed text-white/80 [&_h2]:mb-3 [&_h2]:font-display [&_h2]:text-lg [&_h2]:font-semibold [&_h2]:text-[#F2F1EC] [&_p]:mb-3 [&_ul]:mb-3 [&_ul]:list-disc [&_ul]:pl-5 [&_li]:mb-1.5">
        {children}
      </div>

      <div className="mt-12 border-t border-white/12 pt-6 font-mono text-[10.5px] leading-[1.9] tracking-[0.06em] text-white/55">
        {site.name.toUpperCase()} — {site.location.toUpperCase()}
        <br />
        {site.phone} · {site.email}
      </div>
    </section>
  );
}

export function Placeholder({ children }: { children: ReactNode }) {
  return <span className="text-or-texte">[{children}]</span>;
}
