import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How to Calculate Your Maximum Profitable CPC for Google Ads",
  description:
    "Your maximum CPC depends on two numbers: how much you can afford to pay for a customer and how often clicks become customers. The formula, and why conversion rate isn't fixed.",
  alternates: { canonical: "https://www.attribix.app/resources/maximum-profitable-cpc-ecommerce" },
  openGraph: {
    title: "How to Calculate Your Maximum Profitable CPC for Google Ads",
    description: "Maximum CPC = allowable CPA × conversion rate. One account-wide CPC ceiling is rarely useful across brand, non-brand and Shopping.",
    url: "https://www.attribix.app/resources/maximum-profitable-cpc-ecommerce",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Attribix" }],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
