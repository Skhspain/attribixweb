import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shopify-Specific Expertise vs a General Marketing Agency",
  description:
    "What a Shopify-specific marketing agency actually knows that a generalist doesn't: feed structure, checkout constraints, Shopify's reporting quirks, and margin-aware decisions. And when a generalist is genuinely fine.",
  alternates: { canonical: "https://www.attribix.app/resources/shopify-marketing-agency-vs-general-agency" },
  openGraph: {
    title: "Shopify-Specific Expertise vs a General Marketing Agency",
    description:
      "Product feeds, checkout constraints, Shopify analytics quirks, and margin-aware decision-making: what actually separates Shopify-specific knowledge from generalist PPC skill.",
    url: "https://www.attribix.app/resources/shopify-marketing-agency-vs-general-agency",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Attribix" }],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
