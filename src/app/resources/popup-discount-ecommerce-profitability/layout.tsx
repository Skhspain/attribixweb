import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Does a 10% Popup Discount Actually Increase Profit?",
  description:
    "A 10% popup can increase email signups and first purchases, or give away 10% to customers who would have bought at full price. Why incremental profit is the right metric.",
  alternates: { canonical: "https://www.attribix.app/resources/popup-discount-ecommerce-profitability" },
  openGraph: {
    title: "Does a 10% Popup Discount Actually Increase Profit?",
    description: "The best signup incentive is the one that increases total customer value after its real cost.",
    url: "https://www.attribix.app/resources/popup-discount-ecommerce-profitability",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Attribix" }],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
