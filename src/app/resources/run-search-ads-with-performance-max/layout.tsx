import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Should You Run Search Ads if Performance Max Is Already Running?",
  description: "Yes, Search can still have a clear role even when Performance Max is active.",
  alternates: { canonical: "https://www.attribix.app/resources/run-search-ads-with-performance-max" },
  openGraph: {
    title: "Should You Run Search Ads if Performance Max Is Already Running?",
    description: "If launching Search reduces PMax-attributed conversions while Shopify sales remain unchanged, some credit may simply have moved between campaigns.",
    url: "https://www.attribix.app/resources/run-search-ads-with-performance-max",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Attribix" }],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
