import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "What Is a Good Repeat Purchase Rate for Shopify?",
  description: "A good repeat purchase rate depends heavily on what you sell.",
  alternates: { canonical: "https://www.attribix.app/resources/what-is-a-good-repeat-purchase-rate-for-shopify" },
  openGraph: {
    title: "What Is a Good Repeat Purchase Rate for Shopify?",
    description: "Track customers acquired in January, February, March and so on.",
    url: "https://www.attribix.app/resources/what-is-a-good-repeat-purchase-rate-for-shopify",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Attribix" }],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
