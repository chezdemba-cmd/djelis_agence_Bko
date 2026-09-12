import { whatsappLink } from "@/data/site";

export function WhatsAppFloatingButton() {
  return (
    <a
      href={whatsappLink("Bonjour DJELI'S, j'ai une question.")}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Écrire sur WhatsApp"
      className="fixed right-4 bottom-4 z-50 flex h-13 w-13 items-center justify-center rounded-full bg-whatsapp font-mono text-[9.5px] font-medium tracking-[0.06em] text-[#06331A] shadow-[0_2px_12px_rgba(0,0,0,0.35)] transition-colors duration-150 hover:bg-whatsapp-hover sm:right-7 sm:bottom-7"
    >
      WA
    </a>
  );
}
