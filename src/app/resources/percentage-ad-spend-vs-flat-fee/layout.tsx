import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Percentage of Ad Spend vs Fixed Fee: How Should a Marketing Agency Charge?",
  description:
    "The incentive-alignment case for percentage-of-spend pricing, its risk of pushing budget up regardless of returns, and why fixed fees have the opposite trade-off.",
  alternates: { canonical: "https://www.attribix.app/resources/percentage-ad-spend-vs-flat-fee" },
  openGraph: {
    title: "Percentage of Ad Spend vs Fixed Fee: How Should a Marketing Agency Charge?",
    description:
      "What each pricing model actually incentivizes, where each one breaks down, and why complexity, not spend alone, is the fairer thing to price against.",
    url: "https://www.attribix.app/resources/percentage-ad-spend-vs-flat-fee",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Attribix" }],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
