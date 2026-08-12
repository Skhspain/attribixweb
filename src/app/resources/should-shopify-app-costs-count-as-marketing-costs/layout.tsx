import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Should Shopify App Costs Count as Marketing Costs?",
  description: "Some Shopify apps directly support customer acquisition; others support operations, support or merchandising.",
  alternates: { canonical: "https://www.attribix.app/resources/should-shopify-app-costs-count-as-marketing-costs" },
  openGraph: {
    title: "Should Shopify App Costs Count as Marketing Costs?",
    description: "Ask whether the app saves labour, improves conversion, protects data or creates measurable value.",
    url: "https://www.attribix.app/resources/should-shopify-app-costs-count-as-marketing-costs",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Attribix" }],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
