import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How to Match Your Ad Message to Your Landing Page",
  description:
    "A visitor should never have to figure out whether the page they landed on is connected to the ad they clicked. How to match claim, offer and visual across the two.",
  alternates: { canonical: "https://www.attribix.app/resources/ad-landing-page-message-match-ecommerce" },
  openGraph: {
    title: "How to Match Your Ad Message to Your Landing Page",
    description: "Ad earns attention. Landing page provides proof. Product experience closes the sale.",
    url: "https://www.attribix.app/resources/ad-landing-page-message-match-ecommerce",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Attribix" }],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
