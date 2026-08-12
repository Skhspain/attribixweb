import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How Much Should a Shopify Store Spend on Meta and Google Ads?",
  description:
    "No universal minimum. A framework built from AOV, margin, target CPA and revenue goals, with worked scenarios showing how the same goal implies different budgets.",
  alternates: { canonical: "https://www.attribix.app/resources/shopify-advertising-budget-how-much-to-spend" },
  openGraph: {
    title: "How Much Should a Shopify Store Spend on Meta and Google Ads?",
    description: "Building an ad budget from your own numbers, not an industry rule of thumb.",
    url: "https://www.attribix.app/resources/shopify-advertising-budget-how-much-to-spend",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Attribix" }],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
