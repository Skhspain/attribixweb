import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Revenue vs Margin: Which Products Should You Scale With Ads?",
  description:
    "Revenue tells you which products sell a lot. Margin tells you how much room those sales create for advertising and the business. What to check before scaling spend into a SKU.",
  alternates: { canonical: "https://www.attribix.app/resources/scale-high-revenue-or-high-margin-products-ecommerce" },
  openGraph: {
    title: "Revenue vs Margin: Which Products Should You Scale With Ads?",
    description: "Scale the products that create the best combination of demand, conversion and contribution, not the largest revenue number in isolation.",
    url: "https://www.attribix.app/resources/scale-high-revenue-or-high-margin-products-ecommerce",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Attribix" }],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
