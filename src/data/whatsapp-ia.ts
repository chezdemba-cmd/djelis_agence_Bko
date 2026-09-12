export type ScenarioMessage = { from: string; text: string; fromDjelis: boolean };

export type Scenario = {
  label: string;
  shop: string;
  msgs: ScenarioMessage[];
  resultLabel: string;
  result: string;
  dash: string;
  actions: string[];
};

export const scenarios: Scenario[] = [
  {
    label: "Une commande",
    shop: "Mariam Mode",
    msgs: [
      { from: "CLIENT", text: "Le modèle noir est disponible ?", fromDjelis: false },
      {
        from: "DJELI IA",
        text: "Oui. Il est disponible à 25 000 FCFA. Voulez-vous commander ?",
        fromDjelis: true,
      },
      { from: "CLIENT", text: "Oui, deux pièces. Livraison à Bamako.", fromDjelis: false },
      { from: "DJELI IA", text: "C'est noté. Je crée la commande.", fromDjelis: true },
    ],
    resultLabel: "COMMANDE CRÉÉE",
    result: "MARIAM · 2 × MODÈLE NOIR\n50 000 FCFA · BAMAKO\nPAIEMENT : À CONFIRMER",
    dash: "Commande n° 19 · 50 000 FCFA · stock du modèle noir réduit de 2",
    actions: [
      "Reconnaît le produit demandé dans le catalogue",
      "Vérifie la disponibilité réelle en stock",
      "Annonce le prix sans négocier",
      "Crée la commande et la transmet au logiciel",
    ],
  },
  {
    label: "Une rupture de stock",
    shop: "Mariam Mode",
    msgs: [
      { from: "CLIENT", text: "Vous avez le sac beige taille moyenne ?", fromDjelis: false },
      {
        from: "DJELI IA",
        text: "Il est en rupture pour l'instant. Le même modèle existe en brun, à 18 000 FCFA.",
        fromDjelis: true,
      },
      { from: "CLIENT", text: "Prévenez-moi quand le beige revient.", fromDjelis: false },
      {
        from: "DJELI IA",
        text: "C'est enregistré. Je vous écris dès qu'il est en boutique.",
        fromDjelis: true,
      },
    ],
    resultLabel: "DEMANDE ENREGISTRÉE",
    result: "CLIENT EN ATTENTE · SAC BEIGE M\nALERTE AU RÉAPPROVISIONNEMENT",
    dash: "Client ajouté à la liste d'attente · demande comptée dans la demande non servie",
    actions: [
      "Ne promet pas un produit absent",
      "Propose une alternative du même catalogue",
      "Enregistre le client en liste d'attente",
      "Signale la demande non servie au commerçant",
    ],
  },
  {
    label: "Un suivi de livraison",
    shop: "Mariam Mode",
    msgs: [
      { from: "CLIENT", text: "Bonjour, où est ma commande de mardi ?", fromDjelis: false },
      {
        from: "DJELI IA",
        text: "Elle est partie ce matin avec le livreur pour Badalabougou. Livraison prévue avant 17h.",
        fromDjelis: true,
      },
      { from: "CLIENT", text: "Merci. Je paie à la livraison ?", fromDjelis: false },
      { from: "DJELI IA", text: "Oui, 50 000 FCFA à la remise du colis.", fromDjelis: true },
    ],
    resultLabel: "AUCUNE ACTION REQUISE",
    result: "QUESTION TRAITÉE SANS INTERVENTION\nCOMMERÇANT NON DÉRANGÉ",
    dash: "Aucune modification · la conversation est jointe à la commande n° 17",
    actions: [
      "Retrouve la commande du client par son numéro",
      "Donne l'état réel de la livraison",
      "Rappelle le montant et le mode de paiement",
      "Évite un appel téléphonique au commerçant",
    ],
  },
  {
    label: "Une question hors périmètre",
    shop: "Mariam Mode",
    msgs: [
      {
        from: "CLIENT",
        text: "Le tissu a déteint au lavage. Je veux un remboursement.",
        fromDjelis: false,
      },
      {
        from: "DJELI IA",
        text: "Je comprends. Je transmets à Mariam, elle vous répond directement.",
        fromDjelis: true,
      },
      { from: "MARIAM", text: "Bonjour, je regarde votre commande tout de suite.", fromDjelis: false },
    ],
    resultLabel: "CONVERSATION TRANSFÉRÉE",
    result: "MOTIF : RÉCLAMATION\nRÉSUMÉ ENVOYÉ À MARIAM",
    dash: "Réclamation ouverte sur la commande n° 12 · en attente de réponse commerçant",
    actions: [
      "Détecte une réclamation, pas une vente",
      "Ne propose ni remise ni remboursement",
      "Transfère avec un résumé de l'échange",
      "Ouvre un suivi côté logiciel",
    ],
  },
];

export const scopeDoes = [
  "Répondre aux questions de prix et de disponibilité",
  "Envoyer une photo ou une fiche produit du catalogue",
  "Créer une commande et la transmettre au logiciel",
  "Noter une adresse de livraison et un mode de paiement",
  "Relancer un client qui n'a pas confirmé",
  "Répondre la nuit et le week-end",
];

export const scopeDoesNot = [
  "Négocier un prix ou accorder une remise",
  "Traiter une réclamation ou un litige",
  "Répondre sur un produit absent du catalogue",
  "Encaisser un paiement à votre place",
  "Toute question qu'il ne comprend pas",
];

export const setupSteps = [
  {
    n: "01",
    t: "Un numéro WhatsApp professionnel",
    d: "Le vôtre, ou un nouveau numéro dédié à la boutique.",
  },
  {
    n: "02",
    t: "Votre catalogue",
    d: "Produits, prix, photos. Une liste sur papier ou dans un cahier suffit pour démarrer.",
  },
  {
    n: "03",
    t: "Vos règles commerciales",
    d: "Zones et frais de livraison, moyens de paiement acceptés, horaires.",
  },
  {
    n: "04",
    t: "Une personne qui reprend la main",
    d: "Vous ou un vendeur, pour les conversations transférées.",
  },
];

export const whatsappFaq = [
  {
    q: "Est-ce que mes clients savent qu'ils parlent à une IA ?",
    a: "Oui. L'assistant se présente comme l'assistant de la boutique dès le premier message. Nous ne faisons pas passer une IA pour une personne.",
  },
  {
    q: "Et si l'assistant répond mal ?",
    a: "Vous voyez toutes les conversations et pouvez reprendre la main à tout moment. Les cas mal traités nous servent à corriger ses règles, semaine après semaine.",
  },
  {
    q: "Est-ce que je perds mon numéro WhatsApp actuel ?",
    a: "Non. L'assistant travaille sur votre numéro existant, ou sur un numéro dédié si vous préférez séparer le professionnel du personnel.",
  },
  {
    q: "Ça fonctionne sans Djeli'S Business ?",
    a: "Oui, mais les commandes restent dans la conversation. Avec Djeli'S Business, elles alimentent votre stock, vos clients et vos chiffres sans ressaisie.",
  },
  {
    q: "En combien de temps est-ce en service ?",
    a: "Cela dépend de l'état de votre catalogue. Nous le disons après avoir vu vos produits et vos dernières conversations, pas avant.",
  },
];
