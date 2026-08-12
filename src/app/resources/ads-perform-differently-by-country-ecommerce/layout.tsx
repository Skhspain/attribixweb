import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Why Your Ads Perform Well in One Country and Poorly in Another",
  description:
    "The same product, creative and campaign can produce very different economics in two countries. Auction cost, shipping, payment and creative context explain most of the gap.",
  alternates: { canonical: "https://www.attribix.app/resources/ads-perform-differently-by-country-ecommerce" },
  openGraph: {
    title: "Why Your Ads Perform Well in One Country and Poorly in Another",
    description: "That does not necessarily mean the advertising algorithm is inconsistent. Here's what actually explains the gap.",
    url: "https://www.attribix.app/resources/ads-perform-differently-by-country-ecommerce",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Attribix" }],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
