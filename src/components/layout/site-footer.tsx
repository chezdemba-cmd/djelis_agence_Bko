import { footerColumns } from "@/data/nav";
import { site } from "@/data/site";
import { Logo } from "@/components/ui/logo";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-navy">
      <div className="mx-auto max-w-[1280px] px-5 py-14 sm:px-6 md:py-16 lg:px-10">
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
          <div className="col-span-2 sm:col-span-1">
            <Logo showTagline={false} markSize={26} className="mb-3.5" />
            <div className="font-mono text-[10.5px] leading-[2] tracking-[0.06em] text-white/55">
              {site.location.toUpperCase()}
              <br />
              {site.phone}
              <br />
              {site.domain.toUpperCase()}
            </div>
          </div>
          {footerColumns.map((col) => (
            <div key={col.title}>
              <div className="mb-3.5 font-mono text-[10px] tracking-[0.1em] text-white/62">
                {col.title}
              </div>
              <div className="grid gap-2.5 text-sm">
                {col.links.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="text-white/78 transition-colors duration-150 hover:text-or"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-9 flex flex-wrap items-center justify-between gap-4 border-t border-white/14 pt-5 font-mono text-[10.5px] tracking-[0.08em] text-white/62">
          <span>{site.baseline}</span>
          <div className="flex flex-wrap items-center gap-4">
            <a href="/mentions-legales" className="hover:text-or">
              Mentions légales
            </a>
            <a href="/confidentialite" className="hover:text-or">
              Confidentialité
            </a>
            <span>
              © {new Date().getFullYear()} {site.name}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
