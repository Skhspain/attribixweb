import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "What Is a Good Landing Page Conversion Rate for Ecommerce?",
  description: "A good landing-page conversion rate is one that supports profitable acquisition at the cost and quality of the traffic being sent to it.",
  alternates: { canonical: "https://www.attribix.app/resources/what-is-a-good-landing-page-conversion-rate-for" },
  openGraph: {
    title: "What Is a Good Landing Page Conversion Rate for Ecommerce?",
    description: "Look at device, country, campaign, new/returning visitor and product.",
    url: "https://www.attribix.app/resources/what-is-a-good-landing-page-conversion-rate-for",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Attribix" }],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
