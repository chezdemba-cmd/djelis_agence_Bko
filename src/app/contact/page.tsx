import type { Metadata } from "next";
import { nextSteps } from "@/data/contact";
import { site, whatsappLink } from "@/data/site";
import { SectionLabel } from "@/components/ui/section-label";
import { ContactForm } from "@/components/contact/contact-form";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Dites-nous ce qui vous fait perdre du temps ou de l'argent. DJELI'S vous répond sous 48 heures ouvrées.",
};

export default function ContactPage() {
  return (
    <>
      <section className="mx-auto max-w-[1280px] px-5 pt-10 pb-7 sm:px-6 md:pt-14 lg:px-10 lg:pt-17">
        <SectionLabel>DIAGNOSTIC — SANS ENGAGEMENT</SectionLabel>
        <div className="grid items-end gap-7 lg:grid-cols-2 lg:gap-13">
          <h1 className="text-balance font-display text-[clamp(34px,4.8vw,58px)] font-bold leading-[0.98] tracking-[-0.035em]">
            QUEL PROBLÈME VOULEZ-VOUS RÉSOUDRE ?
          </h1>
          <p className="text-pretty text-[clamp(16px,1.9vw,19px)] leading-[1.6] text-white/75">
            Nous ne demandons pas quel service vous voulez acheter.
            Dites-nous ce qui vous fait perdre du temps ou de l&apos;argent,
            nous vous dirons ce qui est utile chez vous et dans quel ordre.
          </p>
        </div>
      </section>

      <section id="form" className="border-t border-white/10">
        <div className="mx-auto max-w-[1280px] px-5 py-9 sm:px-6 md:py-12 lg:px-10 lg:py-15">
          <div className="grid items-start gap-9 lg:grid-cols-2 lg:gap-13">
            <ContactForm />

            <div className="grid gap-4">
              <div className="p-5.5 shadow-[0_0_0_1px_rgba(242,241,236,0.14)] sm:p-7">
                <div className="mb-4 font-mono text-[10px] tracking-[0.1em] text-or">
                  JOINDRE DJELI&apos;S DIRECTEMENT
                </div>
                <div className="font-mono text-[13px] leading-[2.1] tracking-[0.04em] text-white/88">
                  {site.phone}
                  <br />
                  {site.email.toUpperCase()}
                  <br />
                  {site.domain.toUpperCase()}
                </div>
                <p className="mt-3.5 text-[14.5px] leading-relaxed text-white/68">
                  Bamako, Mali. L&apos;adresse exacte sera publiée une fois
                  validée.
                </p>
              </div>

              <a
                href={whatsappLink("Bonjour DJELI'S, j'ai une question.")}
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-whatsapp/8 p-5.5 shadow-[0_0_0_1px_#25D366] transition-colors duration-150 hover:bg-whatsapp/16 sm:p-7"
              >
                <div className="mb-3 font-mono text-[10px] tracking-[0.1em] text-whatsapp-hover">
                  LE PLUS RAPIDE
                </div>
                <div className="mb-2 font-display text-[18px] font-semibold">
                  Écrire sur WhatsApp
                </div>
                <p className="text-[14.5px] leading-relaxed text-white/75">
                  Une photo, une question, une capture d&apos;écran. Nous
                  répondons pendant les heures ouvrées.
                </p>
              </a>

              <div className="p-5.5 shadow-[0_0_0_1px_rgba(242,241,236,0.14)] sm:p-7">
                <div className="mb-4 font-mono text-[10px] tracking-[0.1em] text-white/62">
                  PARTENAIRES ET INSTITUTIONS
                </div>
                <p className="mb-3.5 text-[14.5px] leading-relaxed text-white/80">
                  Appel d&apos;offres, programme de digitalisation,
                  partenariat technologique : une demande institutionnelle ne
                  passe pas par le même circuit.
                </p>
                <a
                  href={`mailto:${site.email}`}
                  className="border-b border-white/40 pb-0.75 font-display text-[13.5px] font-semibold tracking-[0.03em] text-[#F2F1EC] transition-colors duration-150 hover:border-or hover:text-or"
                >
                  CONTACT PARTENAIRES →
                </a>
              </div>

              <div className="p-5.5 shadow-[0_0_0_1px_rgba(242,241,236,0.14)] sm:p-7">
                <div className="mb-4 font-mono text-[10px] tracking-[0.1em] text-white/62">
                  CE QUI SE PASSE ENSUITE
                </div>
                <div className="grid gap-2.75">
                  {nextSteps.map((stepText, i) => (
                    <div key={stepText} className="flex gap-3">
                      <span className="min-w-4.5 font-mono text-[10px] text-or">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="text-[14.5px] leading-snug text-white/82">
                        {stepText}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
