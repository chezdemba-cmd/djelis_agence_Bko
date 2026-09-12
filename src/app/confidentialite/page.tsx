import type { Metadata } from "next";
import { LegalPage, Placeholder } from "@/components/legal/legal-page";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Confidentialité",
};

export default function ConfidentialitePage() {
  return (
    <LegalPage title="Politique de confidentialité" lastUpdated="12 septembre 2026">
      <div>
        <h2>Responsable du traitement</h2>
        <p>
          DJELI&apos;S, <Placeholder>dénomination sociale à compléter</Placeholder>,
          est responsable du traitement des données décrites ci-dessous. Pour
          toute question, écrivez à {site.email}.
        </p>
      </div>

      <div>
        <h2>Données que nous collectons</h2>
        <p>Nous collectons des données uniquement lorsque vous nous les transmettez :</p>
        <ul>
          <li>
            Formulaire de contact : besoin sélectionné, message libre, nom,
            entreprise, téléphone ou WhatsApp, secteur d&apos;activité.
          </li>
          <li>
            Conversation WhatsApp : les messages échangés avec l&apos;assistant
            ou l&apos;équipe DJELI&apos;S.
          </li>
        </ul>
        <p>
          Ce site ne dépose pas de cookie publicitaire ni de traceur
          statistique tiers. Aucun outil d&apos;analyse d&apos;audience n&apos;est
          actif à ce jour.
        </p>
      </div>

      <div>
        <h2>Pourquoi nous les utilisons</h2>
        <ul>
          <li>Répondre à votre demande et vous orienter vers le bon interlocuteur.</li>
          <li>Assurer le suivi d&apos;un projet ou d&apos;une commande en cours.</li>
          <li>Vous recontacter si vous nous en donnez l&apos;autorisation.</li>
        </ul>
        <p>Nous ne vendons ni ne louons vos données à des tiers.</p>
      </div>

      <div>
        <h2>Durée de conservation</h2>
        <p>
          Les données transmises via le formulaire de contact sont conservées
          le temps nécessaire au traitement de votre demande, puis{" "}
          <Placeholder>durée précise à définir</Placeholder> après le dernier
          échange, sauf obligation légale de conservation plus longue.
        </p>
      </div>

      <div>
        <h2>Qui y a accès</h2>
        <p>
          Seules les personnes de l&apos;équipe DJELI&apos;S concernées par
          votre demande consultent vos informations. Nos prestataires
          techniques (hébergement, messagerie) peuvent y accéder dans le
          seul cadre de l&apos;exploitation du service.
        </p>
      </div>

      <div>
        <h2>Vos droits</h2>
        <p>
          Vous pouvez demander l&apos;accès, la rectification ou la
          suppression de vos données, ainsi que vous opposer à leur
          traitement, en écrivant à {site.email} ou sur WhatsApp au{" "}
          {site.phone}. Nous répondons sous 30 jours.
        </p>
      </div>

      <div>
        <h2>Sécurité</h2>
        <p>
          Nous prenons des mesures raisonnables pour protéger vos données
          contre l&apos;accès non autorisé, la perte ou la divulgation. Aucun
          système n&apos;étant infaillible, nous vous invitons à ne pas
          transmettre d&apos;informations sensibles (mots de passe, données
          bancaires) via le formulaire ou WhatsApp.
        </p>
      </div>

      <div>
        <h2>Modifications</h2>
        <p>
          Cette politique peut évoluer. La date de dernière mise à jour en
          haut de page reflète la version en vigueur.
        </p>
      </div>
    </LegalPage>
  );
}
