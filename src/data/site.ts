export const site = {
  name: "DJELI'S",
  tagline: "IA • DIGITAL • TECHNOLOGIES",
  domain: "djelis.tech",
  url: "https://djelis.tech",
  phone: "+223 79 70 70 68",
  phoneHref: "tel:+22379707068",
  email: "djelisprod@gmail.com",
  whatsappNumber: "22379707068",
  location: "Bamako, Mali",
  baseline: "DIGITALISER. AUTOMATISER. VENDRE. GRANDIR.",
};

export function whatsappLink(message: string) {
  return `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
