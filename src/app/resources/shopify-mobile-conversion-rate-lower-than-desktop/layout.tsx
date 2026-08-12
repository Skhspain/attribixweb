import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shopify Mobile Conversion Rate Lower Than Desktop: Is That Normal?",
  description: "It is common for mobile and desktop conversion rates to differ, but \"mobile is always lower\" is not a useful excuse for a poor mobile store.",
  alternates: { canonical: "https://www.attribix.app/resources/shopify-mobile-conversion-rate-lower-than-desktop" },
  openGraph: {
    title: "Shopify Mobile Conversion Rate Lower Than Desktop: Is That Normal?",
    description: "Does mobile fall behind at product view → cart, or only at checkout → purchase?",
    url: "https://www.attribix.app/resources/shopify-mobile-conversion-rate-lower-than-desktop",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Attribix" }],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
