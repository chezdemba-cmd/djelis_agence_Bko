import Image from "next/image";
import { techFeatures } from "@/data/homepage";
import { SectionLabel } from "@/components/ui/section-label";
import { TextLink } from "@/components/ui/button";

export function ConnecterTech() {
  return (
    <section id="connecter" className="border-t border-white/10">
      <div className="mx-auto max-w-[1280px] px-5 py-14 sm:px-6 md:py-20 lg:px-10 lg:py-24">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <Image
            src="/images/photo-tech-clean.png"
            alt="Technicien DJELI'S en intervention sur une baie réseau"
            width={640}
            height={480}
            className="block aspect-4/3 w-full object-cover shadow-[0_0_0_1px_rgba(242,241,236,0.18)]"
          />
          <div>
            <SectionLabel>ÉTAPE 5 — CONNECTER · DJELI&apos;S TECH</SectionLabel>
            <h2 className="mb-5 text-balance font-display text-[clamp(26px,3.8vw,44px)] font-bold leading-[1.06] tracking-[-0.025em]">
              UN SEUL PARTENAIRE POUR VOTRE ENTREPRISE NUMÉRIQUE.
            </h2>
            <p className="mb-6.5 max-w-[500px] text-[clamp(15px,1.8vw,18px)] leading-relaxed text-white/72">
              Le réseau, les postes, la sauvegarde et la sécurité tenus par la
              même équipe que vos logiciels. Un interlocuteur, un contrat, une
              maintenance.
            </p>
            <div className="mb-6.5 grid grid-cols-2 gap-px sm:grid-cols-4">
              {techFeatures.map((feature) => (
                <div
                  key={feature}
                  className="p-3.5 font-mono text-[10.5px] tracking-[0.06em] text-white/75 shadow-[0_0_0_1px_rgba(242,241,236,0.12)]"
                >
                  {feature}
                </div>
              ))}
            </div>
            <TextLink href="/solutions/pme-connectee">
              VOIR PME CONNECTÉE →
            </TextLink>
          </div>
        </div>
      </div>
    </section>
  );
}
