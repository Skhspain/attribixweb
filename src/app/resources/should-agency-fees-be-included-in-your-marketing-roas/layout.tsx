import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Should Agency Fees Be Included in Your Marketing ROAS?",
  description: "Platform ROAS should normally remain a simple campaign metric: attributed revenue divided by media spend.",
  alternates: { canonical: "https://www.attribix.app/resources/should-agency-fees-be-included-in-your-marketing-roas" },
  openGraph: {
    title: "Should Agency Fees Be Included in Your Marketing ROAS?",
    description: "A store spending $20,000 on ads plus $3,000 management is spending $23,000 to support acquisition, not $20,000.",
    url: "https://www.attribix.app/resources/should-agency-fees-be-included-in-your-marketing-roas",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Attribix" }],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
