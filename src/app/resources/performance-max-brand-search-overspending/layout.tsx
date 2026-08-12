import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Performance Max Is Overspending on Branded Searches: What to Do",
  description: "If PMax reports spectacular results because it captures people already searching your brand, the campaign can look more incremental than it really is.",
  alternates: { canonical: "https://www.attribix.app/resources/performance-max-brand-search-overspending" },
  openGraph: {
    title: "Performance Max Is Overspending on Branded Searches: What to Do",
    description: "If reported PMax ROAS drops but Shopify revenue remains stable, you may simply have cleaned up attribution.",
    url: "https://www.attribix.app/resources/performance-max-brand-search-overspending",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Attribix" }],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
