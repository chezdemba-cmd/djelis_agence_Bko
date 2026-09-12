import type { Metadata } from "next";
import { LegalComingSoon } from "@/components/legal/coming-soon";

export const metadata: Metadata = {
  title: "Mentions légales",
};

export default function MentionsLegalesPage() {
  return <LegalComingSoon title="Mentions légales" />;
}
