import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Why Shopify Mobile Traffic Doesn't Convert",
  description: "When mobile traffic does not convert, start by separating traffic quality from mobile experience.",
  alternates: { canonical: "https://www.attribix.app/resources/shopify-mobile-traffic-not-converting" },
  openGraph: {
    title: "Why Shopify Mobile Traffic Doesn't Convert",
    description: "If Shopify orders are occurring but an ad platform reports few mobile conversions, measurement can make the channel look worse than it is.",
    url: "https://www.attribix.app/resources/shopify-mobile-traffic-not-converting",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Attribix" }],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
