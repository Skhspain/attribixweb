import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Should You Show Competitor Price Comparisons on Product Pages?",
  description: "Competitor comparisons can help when customers are actively evaluating alternatives.",
  alternates: { canonical: "https://www.attribix.app/resources/should-you-show-competitor-price-comparisons-on" },
  openGraph: {
    title: "Should You Show Competitor Price Comparisons on Product Pages?",
    description: "For SEO and paid search, dedicated “Brand A vs Brand B” pages can answer deeper comparison intent without crowding every product page.",
    url: "https://www.attribix.app/resources/should-you-show-competitor-price-comparisons-on",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Attribix" }],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
