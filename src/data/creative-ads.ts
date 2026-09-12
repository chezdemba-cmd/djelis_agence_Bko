export const creativeOffers = [
  {
    n: "01",
    t: "AI Video Studio",
    d: "Vidéos verticales produites à partir de vos photos de produits.",
    inc: "SCRIPT · VOIX · MONTAGE\nSOUS-TITRES · DEUX VERSIONS",
  },
  {
    n: "02",
    t: "Social Ads",
    d: "Diffusion et suivi sur Facebook, Instagram et TikTok.",
    inc: "CIBLAGE · BUDGET\nARBITRAGE · RAPPORT MENSUEL",
  },
  {
    n: "03",
    t: "Contenu et community management",
    d: "Publication régulière et réponses aux commentaires.",
    inc: "CALENDRIER · VISUELS\nMODÉRATION · VEILLE",
  },
  {
    n: "04",
    t: "Branding",
    d: "Logo, couleurs et gabarits pour que tout soit cohérent.",
    inc: "IDENTITÉ · GABARITS\nCHARTE COURTE",
  },
];

export const creativeMethodSteps = [
  "Nous choisissons ensemble le produit à pousser",
  "Nous produisons deux versions du contenu",
  "Nous diffusons sur Facebook, Instagram et TikTok",
  "Nous concentrons le budget sur ce qui marche",
  "Les conversations arrivent sur votre WhatsApp",
];

export type GalleryItem =
  | { kind: "video"; src: string; t: string; tag: string }
  | { kind: "placeholder"; t: string; tag: string };

export const creativeGallery: GalleryItem[] = [
  { kind: "video", src: "/videos/creative-video-01.mp4", t: "Fresh & Propre", tag: "PRODUIT · VERTICAL" },
  { kind: "video", src: "/videos/creative-ad-01.mp4", t: "Publicité ciblée", tag: "SOCIAL ADS · VERSION A" },
  { kind: "placeholder", t: "Publicité ciblée", tag: "SOCIAL ADS · VERSION B — EN ATTENTE DU PROJET RÉEL" },
  { kind: "placeholder", t: "Djeli'S Business", tag: "DÉMONSTRATION PRODUIT — EN ATTENTE DU PROJET RÉEL" },
];
