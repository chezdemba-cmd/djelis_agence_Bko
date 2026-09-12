import { whatsappLink } from "@/data/site";

export function WhatsAppFloatingButton() {
  return (
    <a
      href={whatsappLink("Bonjour DJELI'S, j'ai une question.")}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Écrire sur WhatsApp"
      className="group fixed right-4 bottom-4 z-50 sm:right-7 sm:bottom-7"
    >
      <span className="absolute inset-0 animate-ping rounded-full bg-whatsapp opacity-60" />
      <span className="relative flex h-15 w-15 items-center justify-center rounded-full bg-whatsapp shadow-[0_4px_18px_rgba(0,0,0,0.45)] transition-colors duration-150 group-hover:bg-whatsapp-hover">
        <svg
          viewBox="0 0 32 32"
          className="h-8 w-8"
          fill="#06331A"
          aria-hidden="true"
        >
          <path d="M16.01 3C9.38 3 4 8.37 4 15c0 2.34.68 4.52 1.86 6.36L4 29l7.84-1.8A11.95 11.95 0 0 0 16.01 27C22.64 27 28 21.63 28 15S22.64 3 16.01 3Zm0 21.8a9.7 9.7 0 0 1-4.95-1.36l-.35-.21-4.65 1.07 1.04-4.53-.23-.37A9.72 9.72 0 0 1 5.3 15c0-5.9 4.81-10.7 10.71-10.7 5.9 0 10.7 4.8 10.7 10.7 0 5.9-4.8 10.8-10.7 10.8Zm5.86-8.03c-.32-.16-1.9-.94-2.2-1.04-.29-.11-.51-.16-.72.16-.21.32-.83 1.04-1.02 1.25-.19.21-.37.24-.69.08-.32-.16-1.35-.5-2.57-1.6-.95-.85-1.59-1.9-1.78-2.22-.19-.32-.02-.49.14-.65.14-.14.32-.37.48-.56.16-.19.21-.32.32-.53.11-.21.05-.4-.03-.56-.08-.16-.72-1.74-.99-2.38-.26-.62-.53-.54-.72-.55h-.61c-.21 0-.56.08-.85.4-.29.32-1.12 1.1-1.12 2.67 0 1.57 1.15 3.09 1.31 3.3.16.21 2.26 3.45 5.47 4.84.76.33 1.36.53 1.82.67.77.24 1.46.21 2.02.13.62-.09 1.9-.78 2.17-1.53.27-.75.27-1.4.19-1.53-.08-.13-.29-.21-.61-.37Z" />
        </svg>
      </span>
    </a>
  );
}
