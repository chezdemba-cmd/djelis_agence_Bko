export const chainSteps = [
  { label: "Contenu et vidéo IA", tag: "CREATIVE" },
  { label: "Publicité sociale", tag: "CREATIVE" },
  { label: "Conversation WhatsApp", tag: "AI" },
  { label: "Commande", tag: "COMMERCE" },
  { label: "Vente et livraison", tag: "COMMERCE" },
  { label: "Tableau de bord", tag: "BUSINESS" },
  { label: "Analyse IA", tag: "AI" },
];

export const chainJumpLinks = [
  { label: "ATTIRER", href: "#attirer" },
  { label: "CONVERSER", href: "#converser" },
  { label: "VENDRE", href: "#gerer" },
  { label: "GÉRER", href: "#gerer" },
  { label: "CONNECTER", href: "#connecter" },
  { label: "AUTOMATISER", href: "#grandir" },
  { label: "GRANDIR", href: "#grandir", emphasis: true },
];

export const painPoints = [
  { title: "WhatsApp", tag: "CONVERSATIONS PERDUES" },
  { title: "Réseaux sociaux", tag: "AUDIENCE NON EXPLOITÉE" },
  { title: "Cahier, Excel", tag: "CHIFFRES À RECALCULER" },
  { title: "Stock", tag: "RUPTURES VUES TARD" },
  { title: "Wi-Fi, postes", tag: "PRESTATAIRES DIFFÉRENTS" },
  { title: "Publicité", tag: "RÉSULTATS NON MESURÉS" },
];

export type PipelineStep = {
  title: string;
  body: string;
  slot: string;
  video?: string;
  photo?: string;
};

export const pipelineSteps: PipelineStep[] = [
  {
    title: "Photo produit",
    body: "Mariam photographie son modèle noir au téléphone.",
    slot: "PHOTO 03\nPRODUIT · FOND NEUTRE",
    photo: "/images/photo-03-produit.png",
  },
  {
    title: "Vidéo IA",
    body: "Montage vertical, sous-titres, deux accroches à comparer.",
    slot: "VIDÉO 01\nPRODUCTION DJELI'S",
    video: "/videos/creative-video-01.mp4",
  },
  {
    title: "Publicité sociale",
    body: "Diffusion Facebook, Instagram et TikTok sur Bamako.",
    slot: "CAPTURE 01\nPUBLICATION SPONSORISÉE",
    video: "/videos/creative-ad-01.mp4",
  },
  {
    title: "Message reçu",
    body: "« Bonjour, j'ai vu votre vidéo. Le produit est encore disponible ? »",
    slot: "CAPTURE 02\nCONVERSATION WHATSAPP",
  },
  {
    title: "Commande",
    body: "2 × modèle noir, 50 000 FCFA, livraison à Bamako.",
    slot: "CAPTURE 03\nCOMMANDE CONFIRMÉE",
  },
];

export const waMessages = [
  { from: "CLIENT", text: "Le modèle noir est disponible ?", fromDjelis: false },
  {
    from: "DJELI IA",
    text: "Oui. Il est disponible à 25 000 FCFA. Voulez-vous commander ?",
    fromDjelis: true,
  },
  { from: "CLIENT", text: "Oui, deux pièces. Livraison à Bamako.", fromDjelis: false },
  { from: "DJELI IA", text: "C'est noté. Je crée la commande.", fromDjelis: true },
];

export const kpisBefore = [
  { key: "CA AUJOURD'HUI", value: "1 250 000", delta: "" },
  { key: "COMMANDES", value: "18", delta: "" },
  { key: "CLIENTS SERVIS", value: "14", delta: "" },
  { key: "STOCK FAIBLE", value: "3", delta: "" },
  { key: "CRÉANCES", value: "340 000", delta: "" },
];

export const kpisAfter = [
  { key: "CA AUJOURD'HUI", value: "1 300 000", delta: "+50 000" },
  { key: "COMMANDES", value: "19", delta: "+1" },
  { key: "CLIENTS SERVIS", value: "15", delta: "+1" },
  { key: "STOCK FAIBLE", value: "3", delta: "" },
  { key: "CRÉANCES", value: "390 000", delta: "+50 000" },
];

export const businessAnswers = [
  "1 300 000 FCFA aujourd'hui, soit 19 commandes. C'est votre meilleur jeudi du mois.",
  "Cinq clients doivent 390 000 FCFA. Deux dépassent trente jours, les relances sont prêtes.",
];

export const businessQuestions = [
  "« Combien avons-nous vendu aujourd'hui ? »",
  "« Qui me doit de l'argent ? »",
];

export const techFeatures = [
  "INTERNET",
  "WI-FI PRO",
  "POSTES",
  "CLOUD",
  "SAUVEGARDE",
  "SÉCURITÉ",
  "LOGICIELS",
  "MAINTENANCE",
];

export const solutions = [
  {
    tag: "COMMERCE IA",
    title: "Vendre en ligne et en boutique",
    body: "Vidéo IA, publicité, WhatsApp IA, catalogue, commandes, stock.",
    href: "/solutions/commerce-ia",
  },
  {
    tag: "HÔTEL DIGITAL",
    title: "Remplir et servir",
    body: "Site, réservation, WhatsApp, Wi-Fi client, publicité, CRM.",
    href: "/solutions/hotel-digital",
  },
  {
    tag: "ÉCOLE CONNECTÉE",
    title: "Inscrire et suivre",
    body: "Inscriptions, scolarité, relances aux parents, réseau, sauvegarde.",
    href: "/solutions/ecole-connectee",
  },
  {
    tag: "PME CONNECTÉE",
    title: "Tout tenir ensemble",
    body: "Réseau, postes, logiciels, automatisation, cybersécurité, maintenance.",
    href: "/solutions/pme-connectee",
  },
  {
    tag: "OFFICE IA",
    title: "Gagner des heures",
    body: "Documents, courriers, comptes rendus, analyses, assistants métier.",
    href: "/solutions/office-ia",
  },
  {
    tag: "INSTITUTION",
    title: "Digitaliser une organisation",
    body: "Sites, applications, infrastructure, données, formation des équipes.",
    href: "/solutions/institution",
  },
];

export const storyTimeline = [
  { text: "Mariam photographie un produit dans sa boutique.", tag: "MARIAM" },
  { text: "DJELI'S transforme la photo en vidéo verticale.", tag: "CREATIVE" },
  { text: "La campagne est publiée sur TikTok et Facebook.", tag: "CREATIVE" },
  { text: "Un client découvre la publicité le soir.", tag: "CLIENT" },
  { text: "Il écrit sur le WhatsApp de la boutique.", tag: "CLIENT" },
  { text: "Djeli IA répond, donne le prix et la disponibilité.", tag: "AI" },
  { text: "La commande est créée sans ressaisie.", tag: "AI" },
  { text: "Djeli'S Business met à jour la vente et le stock.", tag: "BUSINESS" },
  { text: "La livraison à Bamako est organisée.", tag: "COMMERCE" },
  { text: "Mariam voit ses résultats du jour sur son téléphone.", tag: "BUSINESS" },
];
