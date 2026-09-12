import type { Metadata } from "next";
import { Archivo, IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { WhatsAppFloatingButton } from "@/components/layout/whatsapp-floating-button";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const plexSans = IBM_Plex_Sans({
  variable: "--font-plex-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

const siteUrl = "https://djelis.tech";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "DJELI'S — IA, digital et technologies à Bamako",
    template: "%s — DJELI'S",
  },
  description:
    "DJELI'S combine intelligence artificielle, création, commerce, logiciels et technologies pour aider les entreprises du Mali à vendre davantage et travailler plus efficacement.",
  keywords: [
    "intelligence artificielle Mali",
    "agence IA Bamako",
    "transformation digitale Mali",
    "agence digitale Bamako",
    "automatisation entreprise Mali",
    "logiciel de gestion PME",
    "création site internet Mali",
  ],
  openGraph: {
    type: "website",
    locale: "fr_ML",
    url: siteUrl,
    siteName: "DJELI'S",
    title: "DJELI'S — IA, digital et technologies à Bamako",
    description:
      "L'IA et le digital au service de votre business. Une entreprise technologique basée à Bamako, Mali.",
  },
  twitter: {
    card: "summary_large_image",
    title: "DJELI'S — IA, digital et technologies à Bamako",
    description:
      "L'IA et le digital au service de votre business. Une entreprise technologique basée à Bamako, Mali.",
  },
  alternates: {
    canonical: siteUrl,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="fr"
      className={`${archivo.variable} ${plexSans.variable} ${plexMono.variable} h-full`}
    >
      <body className="min-h-full flex flex-col bg-nuit text-[#F2F1EC]">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
        <WhatsAppFloatingButton />
      </body>
    </html>
  );
}
