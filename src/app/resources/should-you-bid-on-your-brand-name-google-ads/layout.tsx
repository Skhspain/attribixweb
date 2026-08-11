import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Should Shopify Stores Bid on Their Own Brand Name?",
  description:
    "Branded search can protect your top result and control messaging, but it usually converts well because customers already intended to visit. How to test whether it's incremental.",
  alternates: { canonical: "https://www.attribix.app/resources/should-you-bid-on-your-brand-name-google-ads" },
  openGraph: {
    title: "Should Shopify Stores Bid on Their Own Brand Name?",
    description: "Why branded search ROAS can look fantastic without creating much new demand.",
    url: "https://www.attribix.app/resources/should-you-bid-on-your-brand-name-google-ads",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Attribix" }],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
