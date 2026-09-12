export type DashboardRow = { tag: string; t: string; v: string; highlight?: boolean };

export type DashboardQuestion = {
  q: string;
  a: string;
  highlightKpis: string[];
  detailTitle: string;
  rows: DashboardRow[];
};

export const dashboardKpiOrder = [
  { key: "CA AUJOURD'HUI", value: "1 300 000", sub: "FCFA" },
  { key: "COMMANDES", value: "19", sub: "AUJOURD'HUI" },
  { key: "CLIENTS SERVIS", value: "15", sub: "AUJOURD'HUI" },
  { key: "STOCK FAIBLE", value: "3", sub: "RÉFÉRENCES" },
  { key: "CRÉANCES", value: "390 000", sub: "5 CLIENTS" },
];

export const dashboardQuestions: DashboardQuestion[] = [
  {
    q: "« Combien avons-nous vendu aujourd'hui ? »",
    a: "1 300 000 FCFA aujourd'hui, sur 19 commandes. C'est votre meilleur jeudi du mois.",
    highlightKpis: ["CA AUJOURD'HUI", "COMMANDES"],
    detailTitle: "LES CINQ DERNIÈRES VENTES",
    rows: [
      { tag: "14:52", t: "Mariam · 2 × modèle noir · Bamako", v: "50 000", highlight: true },
      { tag: "13:20", t: "Vente comptoir · 1 × sac brun", v: "18 000" },
      { tag: "11:45", t: "Aïcha · 3 × foulard", v: "21 000" },
      { tag: "10:08", t: "Vente comptoir · 1 × modèle noir", v: "25 000" },
      { tag: "09:30", t: "Ousmane · commande groupée", v: "140 000" },
    ],
  },
  {
    q: "« Qui me doit de l'argent ? »",
    a: "Cinq clients doivent 390 000 FCFA. Deux dépassent trente jours, les relances sont prêtes.",
    highlightKpis: ["CRÉANCES", "CLIENTS SERVIS"],
    detailTitle: "CRÉANCES OUVERTES, DU PLUS ANCIEN AU PLUS RÉCENT",
    rows: [
      { tag: "48 JOURS", t: "Ousmane K. · commande groupée du 25 juillet", v: "140 000", highlight: true },
      { tag: "36 JOURS", t: "Boutique Fatou · réassort août", v: "95 000", highlight: true },
      { tag: "21 JOURS", t: "Aïcha T. · trois foulards", v: "21 000" },
      { tag: "12 JOURS", t: "Salif D. · deux sacs", v: "84 000" },
      { tag: "4 JOURS", t: "Mariam · commande WhatsApp", v: "50 000" },
    ],
  },
  {
    q: "« Quels produits commencent à manquer ? »",
    a: "Trois références passent sous le seuil. Le modèle noir part le plus vite : il tiendra deux jours.",
    highlightKpis: ["STOCK FAIBLE"],
    detailTitle: "SOUS LE SEUIL D'ALERTE",
    rows: [
      { tag: "2 JOURS", t: "Modèle noir · reste 4 pièces", v: "SEUIL 10", highlight: true },
      { tag: "5 JOURS", t: "Sac beige M · reste 2 pièces", v: "SEUIL 6", highlight: true },
      { tag: "9 JOURS", t: "Foulard imprimé · reste 7 pièces", v: "SEUIL 12" },
    ],
  },
  {
    q: "« Comment se passe le mois ? »",
    a: "24 300 000 FCFA depuis le 1er septembre, contre 21 100 000 FCFA sur la même période en août.",
    highlightKpis: ["CA AUJOURD'HUI", "COMMANDES", "CLIENTS SERVIS"],
    detailTitle: "COMPARAISON AVEC LE MOIS PRÉCÉDENT",
    rows: [
      { tag: "VENTES", t: "Chiffre d'affaires du mois en cours", v: "+15 %", highlight: true },
      { tag: "PANIER", t: "Montant moyen par commande", v: "+4 %" },
      { tag: "CLIENTS", t: "Clients ayant acheté deux fois ou plus", v: "38" },
      { tag: "CANAL", t: "Part des ventes venues de WhatsApp", v: "41 %", highlight: true },
    ],
  },
];

export const businessModules = [
  { n: "01", t: "Ventes", d: "Enregistrement au comptoir ou depuis WhatsApp, tickets, historique." },
  { n: "02", t: "Produits et stock", d: "Références, prix, seuils d'alerte, entrées et sorties." },
  { n: "03", t: "Clients et CRM", d: "Fiches, historique d'achat, clients réguliers, anniversaires de commande." },
  { n: "04", t: "Commandes", d: "De la demande à la livraison, avec l'état visible par tous les vendeurs." },
  { n: "05", t: "Paiements et créances", d: "Encaissements, restes à payer, relances par WhatsApp." },
  { n: "06", t: "Statistiques", d: "Journée, semaine, mois, comparaisons, canaux de vente." },
  { n: "07", t: "Assistant IA", d: "Les questions en français, et les alertes que vous n'avez pas pensé à demander." },
];

export const businessSetupSteps = [
  {
    n: "01",
    t: "Nous reprenons vos données",
    d: "Produits, prix, clients réguliers, créances en cours. Depuis un cahier, un Excel ou des photos.",
  },
  {
    n: "02",
    t: "Nous activons trois modules",
    d: "Ventes, produits, clients. Le reste attend que l'équipe soit à l'aise.",
  },
  {
    n: "03",
    t: "Nous formons sur votre comptoir",
    d: "Sur vos vrais produits, avec vos vendeurs, pendant vos heures d'ouverture.",
  },
  {
    n: "04",
    t: "Nous restons joignables",
    d: "Sur WhatsApp, pour les questions des premières semaines.",
  },
];

export const businessFaq = [
  {
    q: "Ça marche sans internet ?",
    a: "Les ventes s'enregistrent hors connexion et se synchronisent dès que le réseau revient. C'est une contrainte que nous avons prise au sérieux dès la conception.",
  },
  {
    q: "Mes vendeurs voient-ils tout ?",
    a: "Non. Vous décidez qui voit le chiffre d'affaires, les marges et les créances. Un vendeur peut n'avoir accès qu'aux ventes et au stock.",
  },
  {
    q: "Est-ce que je peux l'utiliser sur ordinateur ?",
    a: "Oui. Le téléphone est la version de référence, mais tout est accessible depuis un navigateur au bureau.",
  },
  {
    q: "Où sont mes données ?",
    a: "Elles vous appartiennent, sont sauvegardées quotidiennement, et exportables à tout moment. Nous précisons l'hébergement au moment du contrat.",
  },
  {
    q: "Le logiciel est-il terminé ?",
    a: "Il est en service chez des commerçants, et continue d'évoluer. Nous ne montrons ici que ce qui fonctionne aujourd'hui.",
  },
];
