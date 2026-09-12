import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import { solutions } from "@/data/homepage";
import { SectionLabel } from "@/components/ui/section-label";
import { Button } from "@/components/ui/button";

const BUILT_SLUGS = new Set(["pme-connectee", "institution"]);

function slugFromHref(href: string) {
  return href.split("/").pop() ?? "";
}

function getSolution(slug: string) {
  return solutions.find((s) => slugFromHref(s.href) === slug);
}

export function generateStaticParams() {
  return solutions
    .map((s) => slugFromHref(s.href))
    .filter((slug) => !BUILT_SLUGS.has(slug))
    .map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const solution = getSolution(slug);
  if (!solution) return {};
  return {
    title: solution.title,
    description: solution.body,
  };
}

export default async function SolutionPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  if (BUILT_SLUGS.has(slug)) notFound();
  const solution = getSolution(slug);
  if (!solution) notFound();

  return (
    <>
      <section className="mx-auto max-w-[1280px] px-5 pt-10 pb-8 sm:px-6 md:pt-14 md:pb-10 lg:px-10 lg:pt-17 lg:pb-12">
        <SectionLabel>{solution.tag}</SectionLabel>
        <div className="grid items-end gap-8 lg:grid-cols-2 lg:gap-13">
          <h1 className="text-balance font-display text-[clamp(34px,4.8vw,60px)] font-bold leading-[0.98] tracking-[-0.035em]">
            {solution.title.toUpperCase()}
          </h1>
          <div>
            <p className="mb-6.5 text-pretty text-[clamp(16px,1.9vw,19px)] leading-[1.6] text-white/75">
              {solution.body}
            </p>
            <Button href="/contact">DEMANDER UN DIAGNOSTIC</Button>
          </div>
        </div>
      </section>

      {slug === "hotel-digital" ? (
        <section className="border-t border-white/10">
          <div className="mx-auto max-w-[1280px] px-5 py-12 sm:px-6 md:py-16 lg:px-10 lg:py-18">
            <Image
              src="/images/photo-08-hotel.png"
              alt="Réception d'un hôtel"
              width={1240}
              height={620}
              className="block aspect-[2/1] w-full object-cover shadow-[0_0_0_1px_rgba(242,241,236,0.18)]"
            />
          </div>
        </section>
      ) : null}

      <section className="border-t border-white/10 bg-navy">
        <div className="mx-auto max-w-[1280px] px-5 py-12 sm:px-6 md:py-16 lg:px-10 lg:py-18">
          <h2 className="mb-5 max-w-[720px] text-balance font-display text-[clamp(26px,4.2vw,50px)] font-bold leading-[1.04] tracking-[-0.03em]">
            PARLONS DE VOTRE PROJET.
          </h2>
          <p className="mb-7.5 max-w-[560px] text-[clamp(15px,1.9vw,19px)] leading-relaxed text-white/72">
            Cette solution est en cours de détail. Décrivez-nous votre
            activité, nous revenons vers vous avec un périmètre écrit et un
            prix.
          </p>
          <Button href="/contact">PARLER À DJELI&apos;S</Button>
        </div>
      </section>
    </>
  );
}
