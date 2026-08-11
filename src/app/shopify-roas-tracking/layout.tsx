import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shopify ROAS Tracking | Attribix",
  description:
    "Why adding up Meta ROAS and Google ROAS overstates performance, how blended ROAS and MER differ, and how Attribix ties ad spend to actual Shopify revenue.",
  alternates: { canonical: "https://www.attribix.app/shopify-roas-tracking" },
  openGraph: {
    title: "Shopify ROAS Tracking | Attribix",
    description: "Blended ROAS, MER, and true ad spend vs. Shopify revenue tracking.",
    url: "https://www.attribix.app/shopify-roas-tracking",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Attribix" }],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
