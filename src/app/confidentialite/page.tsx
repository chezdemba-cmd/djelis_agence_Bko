import type { Metadata } from "next";
import { LegalComingSoon } from "@/components/legal/coming-soon";

export const metadata: Metadata = {
  title: "Confidentialité",
};

export default function ConfidentialitePage() {
  return <LegalComingSoon title="Confidentialité" />;
}
