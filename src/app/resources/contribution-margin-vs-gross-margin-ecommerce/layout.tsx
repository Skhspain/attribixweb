import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contribution Margin vs Gross Margin for Ecommerce Advertising",
  description:
    "Gross margin usually subtracts cost of goods from revenue. Contribution margin goes further by subtracting the variable costs that rise when you make the sale. For advertising decisions, contribution is the more useful number.",
  alternates: { canonical: "https://www.attribix.app/resources/contribution-margin-vs-gross-margin-ecommerce" },
  openGraph: {
    title: "Contribution Margin vs Gross Margin for Ecommerce Advertising",
    description: "If only $35 remains before ads, paying $50 for the order is not first-order profitable regardless of the 55% gross margin headline.",
    url: "https://www.attribix.app/resources/contribution-margin-vs-gross-margin-ecommerce",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Attribix" }],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
