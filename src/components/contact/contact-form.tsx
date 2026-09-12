"use client";

import { useState, useTransition } from "react";
import { contactNeeds, contactSectors } from "@/data/contact";
import { submitContactForm } from "@/app/actions/contact";
import { cn } from "@/lib/utils";

type Step = 1 | 2 | 3;

const inputClasses =
  "w-full rounded-[2px] border border-white/20 bg-navy px-3.5 py-3.75 text-[15px] text-[#F2F1EC] focus:border-or focus:outline-none";

const labelClasses =
  "mb-2.25 block font-mono text-[10px] tracking-[0.1em] text-white/62";

export function ContactForm() {
  const [step, setStep] = useState<Step>(1);
  const [picked, setPicked] = useState<number[]>([]);
  const [detail, setDetail] = useState("");
  const [nom, setNom] = useState("");
  const [entreprise, setEntreprise] = useState("");
  const [telephone, setTelephone] = useState("");
  const [secteur, setSecteur] = useState(contactSectors[0]);
  const [honeypot, setHoneypot] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();

  const togglePicked = (i: number) => {
    setPicked((current) =>
      current.includes(i) ? current.filter((x) => x !== i) : [...current, i],
    );
  };

  const recap = picked.length
    ? `Votre besoin : ${picked.map((i) => contactNeeds[i].toLowerCase()).join(", ")}.`
    : "Vous n'avez rien sélectionné — ce n'est pas bloquant, nous vous appellerons pour en parler.";

  const reset = () => {
    setStep(1);
    setPicked([]);
    setDetail("");
    setNom("");
    setEntreprise("");
    setTelephone("");
    setSecteur(contactSectors[0]);
    setError(null);
  };

  const submit = () => {
    setError(null);
    startTransition(async () => {
      const result = await submitContactForm({
        needs: picked,
        detail,
        nom,
        entreprise,
        telephone,
        secteur,
        honeypot,
      });
      if (result.ok) {
        setStep(3);
      } else {
        setError(result.error);
      }
    });
  };

  return (
    <div>
      <div className="mb-5.5 flex flex-wrap items-center gap-2.5">
        <span
          className={cn(
            "font-mono text-[10px] tracking-[0.1em]",
            step === 1 ? "text-or" : "text-white/62",
          )}
        >
          ÉCRAN 1 — VOTRE BESOIN
        </span>
        <span className="relative h-px min-w-[30px] flex-1 bg-white/14">
          <span
            className="absolute inset-y-0 left-0 bg-or transition-[width] duration-500"
            style={{ width: step === 1 ? "0%" : "100%" }}
          />
        </span>
        <span
          className={cn(
            "font-mono text-[10px] tracking-[0.1em]",
            step >= 2 ? "text-or" : "text-white/62",
          )}
        >
          ÉCRAN 2 — VOUS
        </span>
      </div>

      {step === 1 ? (
        <div>
          <p className="mb-4.5 font-display text-[clamp(17px,2.1vw,22px)] font-medium leading-[1.35]">
            Choisissez ce qui vous concerne. Plusieurs réponses possibles.
          </p>
          <div className="mb-5.5 flex flex-wrap gap-2">
            {contactNeeds.map((need, i) => {
              const on = picked.includes(i);
              return (
                <button
                  key={need}
                  type="button"
                  onClick={() => togglePicked(i)}
                  className={cn(
                    "min-h-12 rounded-[2px] border px-4.25 py-3.5 text-left text-[14.5px] transition-colors duration-150",
                    on
                      ? "border-or bg-or text-nuit"
                      : "border-white/24 bg-transparent text-white/88 hover:border-or/60",
                  )}
                >
                  {need}
                </button>
              );
            })}
          </div>
          <label htmlFor="detail" className={labelClasses}>
            EN VOS MOTS, SI VOUS VOULEZ
          </label>
          <textarea
            id="detail"
            rows={3}
            value={detail}
            onChange={(e) => setDetail(e.target.value)}
            placeholder="Ex. je perds des commandes le soir parce que personne ne répond sur WhatsApp."
            className={cn(inputClasses, "resize-y leading-relaxed")}
          />
          <button
            type="button"
            onClick={() => setStep(2)}
            className="mt-5 min-h-12 rounded-[2px] bg-or px-6.5 font-display text-sm font-semibold tracking-[0.03em] text-nuit transition-colors duration-150 hover:bg-or-hover"
          >
            CONTINUER →
          </button>
        </div>
      ) : null}

      {step === 2 ? (
        <div>
          <p className="mb-2 font-display text-[clamp(17px,2.1vw,22px)] font-medium leading-[1.35]">
            Comment vous joindre ?
          </p>
          <p className="mb-5.5 text-[14.5px] leading-relaxed text-white/68">
            {recap}
          </p>
          <div className="mb-5 grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="nom" className={labelClasses}>
                NOM
              </label>
              <input
                id="nom"
                type="text"
                value={nom}
                onChange={(e) => setNom(e.target.value)}
                placeholder="Votre nom"
                className={inputClasses}
              />
            </div>
            <div>
              <label htmlFor="ent" className={labelClasses}>
                ENTREPRISE OU ORGANISATION
              </label>
              <input
                id="ent"
                type="text"
                value={entreprise}
                onChange={(e) => setEntreprise(e.target.value)}
                placeholder="Nom de la structure"
                className={inputClasses}
              />
            </div>
            <div>
              <label htmlFor="tel" className={labelClasses}>
                TÉLÉPHONE OU WHATSAPP
              </label>
              <input
                id="tel"
                type="tel"
                value={telephone}
                onChange={(e) => setTelephone(e.target.value)}
                placeholder="+223 …"
                className={inputClasses}
              />
            </div>
            <div>
              <label htmlFor="sect" className={labelClasses}>
                SECTEUR
              </label>
              <select
                id="sect"
                value={secteur}
                onChange={(e) => setSecteur(e.target.value)}
                className={inputClasses}
              >
                {contactSectors.map((sector) => (
                  <option key={sector}>{sector}</option>
                ))}
              </select>
            </div>
          </div>

          {/* honeypot — hidden from real users, catches simple bots */}
          <input
            type="text"
            name="company_website"
            value={honeypot}
            onChange={(e) => setHoneypot(e.target.value)}
            tabIndex={-1}
            autoComplete="off"
            className="sr-only"
            aria-hidden="true"
          />

          {error ? (
            <p className="mb-4 text-[13.5px] leading-relaxed text-[#F5A0A0]">
              {error}
            </p>
          ) : null}

          <div className="flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={submit}
              disabled={isPending}
              className="min-h-12 rounded-[2px] bg-or px-6.5 font-display text-sm font-semibold tracking-[0.03em] text-nuit transition-colors duration-150 hover:bg-or-hover disabled:cursor-not-allowed disabled:opacity-60"
            >
              {isPending ? "ENVOI EN COURS…" : "ENVOYER MA DEMANDE"}
            </button>
            <button
              type="button"
              onClick={() => setStep(1)}
              disabled={isPending}
              className="min-h-12 border-b border-white/40 px-1.5 font-display text-sm font-semibold tracking-[0.03em] text-[#F2F1EC] transition-colors duration-150 hover:border-or hover:text-or disabled:cursor-not-allowed disabled:opacity-60"
            >
              ← REVENIR
            </button>
          </div>
        </div>
      ) : null}

      {step === 3 ? (
        <div className="bg-[rgba(63,169,107,0.1)] p-6.5 shadow-[0_0_0_1px_#3FA96B] sm:p-8.5">
          <div className="mb-3.5 font-mono text-[10px] tracking-[0.1em] text-[#7FD3A3]">
            DEMANDE ENVOYÉE
          </div>
          <p className="mb-3.5 font-display text-[clamp(18px,2.2vw,24px)] font-semibold leading-[1.3]">
            Nous vous répondons sous 48 heures ouvrées.
          </p>
          <p className="mb-5 text-[15px] leading-relaxed text-white/80">
            Votre demande est orientée vers l&apos;expert concerné. Si
            c&apos;est urgent, écrivez-nous directement sur WhatsApp —
            c&apos;est le plus rapide.
          </p>
          <button
            type="button"
            onClick={reset}
            className="min-h-12 rounded-[2px] border border-white/26 px-4 font-mono text-[11px] tracking-[0.08em] text-white/85 transition-colors duration-150 hover:border-or hover:text-or"
          >
            RECOMMENCER
          </button>
        </div>
      ) : null}
    </div>
  );
}
