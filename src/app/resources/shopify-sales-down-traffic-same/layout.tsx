import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shopify Sales Dropped but Traffic Is the Same: What Does That Tell You?",
  description:
    "Stable sessions with falling revenue points the problem at the store or offer, not media reach. How to read this specific metric combination correctly.",
  alternates: { canonical: "https://www.attribix.app/resources/shopify-sales-down-traffic-same" },
  openGraph: {
    title: "Shopify Sales Dropped but Traffic Is the Same: What Does That Tell You?",
    description: "What stable traffic with falling sales does and doesn't rule out.",
    url: "https://www.attribix.app/resources/shopify-sales-down-traffic-same",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Attribix" }],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
