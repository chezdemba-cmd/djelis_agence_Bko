import Link from "next/link";
import { primaryNav } from "@/data/nav";
import { Logo } from "@/components/ui/logo";
import { Button } from "@/components/ui/button";
import { MobileNav } from "@/components/layout/mobile-nav";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-nuit/92 backdrop-blur-[10px]">
      <div className="mx-auto flex h-15 max-w-[1280px] items-center gap-4 px-5 sm:px-6 md:h-18 md:gap-8 lg:px-10">
        <Link href="/" aria-label="DJELI'S — accueil">
          <Logo />
        </Link>

        <nav className="hidden flex-1 flex-wrap items-center gap-5 text-sm text-[#F2F1EC]/82 md:flex lg:gap-6">
          {primaryNav.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="transition-colors duration-150 hover:text-or"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="ml-auto flex flex-none items-center gap-3 md:ml-0">
          <span className="hidden font-mono text-[11px] tracking-[0.06em] text-white/66 sm:inline">
            FR
          </span>
          <Button href="/contact" className="hidden sm:inline-flex">
            PARLER À DJELI&apos;S
          </Button>
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
