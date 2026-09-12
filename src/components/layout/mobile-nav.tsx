"use client";

import { useEffect, useState } from "react";
import { primaryNav } from "@/data/nav";
import { site, whatsappLink } from "@/data/site";
import { Button } from "@/components/ui/button";

export function MobileNav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <div className="flex md:hidden">
      <button
        type="button"
        aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className="flex h-12 w-12 flex-none flex-col items-center justify-center gap-1.5"
      >
        <span
          className={`h-px w-6 bg-[#F2F1EC] transition-transform duration-200 ${open ? "translate-y-[3.5px] rotate-45" : ""}`}
        />
        <span
          className={`h-px w-6 bg-[#F2F1EC] transition-opacity duration-200 ${open ? "opacity-0" : ""}`}
        />
        <span
          className={`h-px w-6 bg-[#F2F1EC] transition-transform duration-200 ${open ? "-translate-y-[3.5px] -rotate-45" : ""}`}
        />
      </button>

      {open ? (
        <div className="fixed inset-0 top-15 z-30 flex flex-col bg-nuit">
          <nav className="flex flex-1 flex-col gap-1 px-6 py-8">
            {primaryNav.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setOpen(false)}
                className="border-b border-white/10 py-4 font-display text-2xl font-semibold"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <div className="flex gap-3 border-t border-white/10 p-4">
            <Button
              href={whatsappLink("Bonjour DJELI'S, j'ai une question.")}
              variant="whatsapp"
              className="flex-1"
            >
              WhatsApp
            </Button>
            <Button href={site.phoneHref} variant="secondary" className="flex-1">
              Appeler
            </Button>
          </div>
        </div>
      ) : null}
    </div>
  );
}
