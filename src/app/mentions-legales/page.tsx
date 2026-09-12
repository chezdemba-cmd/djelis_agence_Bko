import type { Metadata } from "next";
import { LegalPage, Placeholder } from "@/components/legal/legal-page";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Mentions légales",
};

export default function MentionsLegalesPage() {
  return (
    <LegalPage title="Mentions légales" lastUpdated="12 septembre 2026">
      <div>
        <h2>Éditeur du site</h2>
        <p>
          Le site {site.domain} est édité par DJELI&apos;S, entreprise
          technologique basée à {site.location}.
        </p>
        <ul>
          <li>Dénomination sociale : <Placeholder>à compléter</Placeholder></li>
          <li>Forme juridique : <Placeholder>à compléter</Placeholder></li>
          <li>
            Numéro d&apos;immatriculation (RCCM) :{" "}
            <Placeholder>à compléter</Placeholder>
          </li>
          <li>Siège social : <Placeholder>à compléter</Placeholder></li>
          <li>Téléphone : {site.phone}</li>
          <li>Email : {site.email}</li>
        </ul>
      </div>

      <div>
        <h2>Directeur de la publication</h2>
        <p>
          <Placeholder>Nom du responsable de la publication à compléter</Placeholder>.
        </p>
      </div>

      <div>
        <h2>Hébergement</h2>
        <p>
          Ce site est hébergé par Vercel Inc., 340 S Lemon Ave #4133, Walnut,
          CA 91789, États-Unis.
        </p>
      </div>

      <div>
        <h2>Propriété intellectuelle</h2>
        <p>
          L&apos;ensemble des contenus présents sur ce site (textes, logo,
          identité visuelle, structure) est la propriété de DJELI&apos;S,
          sauf mention contraire. Toute reproduction ou représentation, totale
          ou partielle, sans autorisation préalable est interdite.
        </p>
        <p>
          Les photographies et vidéos illustrant des scénarios clients sont
          identifiées comme telles lorsqu&apos;elles ne proviennent pas d&apos;un
          projet réel.
        </p>
      </div>

      <div>
        <h2>Liens hypertextes</h2>
        <p>
          Ce site peut contenir des liens vers WhatsApp et d&apos;autres
          services tiers. DJELI&apos;S n&apos;est pas responsable du contenu
          ou des pratiques de confidentialité de ces services externes.
        </p>
      </div>

      <div>
        <h2>Données personnelles</h2>
        <p>
          Le traitement des données transmises via le formulaire de contact
          est décrit dans notre{" "}
          <a href="/confidentialite" className="underline hover:text-or">
            politique de confidentialité
          </a>
          .
        </p>
      </div>

      <div>
        <h2>Droit applicable</h2>
        <p>
          Les présentes mentions légales sont soumises au droit malien. Tout
          litige relatif à leur interprétation ou à leur exécution relève de
          la compétence des juridictions de Bamako, Mali, sauf disposition
          impérative contraire.
        </p>
      </div>
    </LegalPage>
  );
}
