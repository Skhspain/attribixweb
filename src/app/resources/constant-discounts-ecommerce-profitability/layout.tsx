import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Are Constant Discounts Destroying Your Ecommerce Profitability?",
  description:
    "Discounting can make ROAS look healthier while margin quietly erodes. How to spot promotion dependency, calculate the break-even lift, and use discounts intentionally.",
  alternates: { canonical: "https://www.attribix.app/resources/constant-discounts-ecommerce-profitability" },
  openGraph: {
    title: "Are Constant Discounts Destroying Your Ecommerce Profitability?",
    description: "A lower price can improve conversion and ROAS, but every discounted order contributes less money before advertising and overhead.",
    url: "https://www.attribix.app/resources/constant-discounts-ecommerce-profitability",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Attribix" }],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
