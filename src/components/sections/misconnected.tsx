import Image from "next/image";
import { painPoints } from "@/data/homepage";
import { LogoMark } from "@/components/ui/logo";

export function Misconnected() {
  return (
    <section className="mx-auto max-w-[1280px] px-5 py-16 sm:px-6 md:py-20 lg:px-10 lg:py-24">
      <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
        <div>
          <h2 className="mb-5 text-balance font-display text-[clamp(24px,3.4vw,40px)] font-bold leading-[1.06] tracking-[-0.025em]">
            VOTRE ENTREPRISE UTILISE DÉJÀ LE DIGITAL. MAIS EST-CE QUE TOUT
            TRAVAILLE ENSEMBLE ?
          </h2>
          <p className="mb-7 max-w-[520px] font-sans text-[clamp(16px,1.9vw,20px)] leading-[1.6] text-white/70">
            Les outils existent déjà. Ils ne se parlent pas. Chaque
            information est ressaisie, chaque client rappelé, chaque chiffre
            recalculé.
          </p>
          <div className="mb-6 grid grid-cols-2 gap-px sm:grid-cols-3">
            {painPoints.map((point) => (
              <div key={point.title} className="p-4 shadow-[0_0_0_1px_rgba(242,241,236,0.12)]">
                <div className="mb-1 font-display text-[14.5px] font-semibold">
                  {point.title}
                </div>
                <div className="font-mono text-[9.5px] tracking-[0.06em] text-white/64">
                  {point.tag}
                </div>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap items-center gap-4.5 bg-navy p-6 shadow-[0_0_0_1px_rgba(245,166,35,0.35)]">
            <LogoMark size={48} />
            <p className="flex-1 min-w-[220px] text-pretty font-display text-lg font-medium leading-snug lg:text-xl">
              Un seul partenaire pour digitaliser, connecter, automatiser et
              développer votre entreprise.
            </p>
          </div>
        </div>
        <Image
          src="/images/photo-02-pme-bureau.png"
          alt="Entrepreneur dans son bureau de PME à Bamako"
          width={640}
          height={853}
          className="block aspect-3/4 w-full object-cover shadow-[0_0_0_1px_rgba(242,241,236,0.18)]"
        />
      </div>
    </section>
  );
}
