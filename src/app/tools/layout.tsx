import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free Shopify Attribution Tools | Attribix",
  description: "Free calculators for ROAS, break-even ROAS and MER — for Shopify stores running Meta and Google Ads.",
  alternates: { canonical: "https://www.attribix.app/tools" },
  openGraph: {
    title: "Free Shopify Attribution Tools | Attribix",
    description: "Free ROAS and MER calculators for Shopify stores.",
    url: "https://www.attribix.app/tools",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Attribix" }],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
