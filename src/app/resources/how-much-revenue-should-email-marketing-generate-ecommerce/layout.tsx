import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How Much Revenue Should Email Marketing Generate for a Shopify Store?",
  description:
    "There is no universal healthy percentage of revenue email 'should' generate. How to judge program health with Shopify as the revenue anchor instead of a benchmark.",
  alternates: { canonical: "https://www.attribix.app/resources/how-much-revenue-should-email-marketing-generate-ecommerce" },
  openGraph: {
    title: "How Much Revenue Should Email Marketing Generate for a Shopify Store?",
    description: "Email revenue share depends on your customer base and attribution windows, not a universal benchmark percentage.",
    url: "https://www.attribix.app/resources/how-much-revenue-should-email-marketing-generate-ecommerce",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Attribix" }],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
