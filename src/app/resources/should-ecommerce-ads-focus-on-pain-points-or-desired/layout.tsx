import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Should Ecommerce Ads Focus on Pain Points or Desired Outcomes?",
  description: "Some products are bought to escape a problem.",
  alternates: { canonical: "https://www.attribix.app/resources/should-ecommerce-ads-focus-on-pain-points-or-desired" },
  openGraph: {
    title: "Should Ecommerce Ads Focus on Pain Points or Desired Outcomes?",
    description: "Reviews and interviews reveal whether customers talk more about escaping frustration or achieving a result.",
    url: "https://www.attribix.app/resources/should-ecommerce-ads-focus-on-pain-points-or-desired",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Attribix" }],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
