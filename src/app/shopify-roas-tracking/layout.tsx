import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shopify ROAS Tracking | Attribix",
  description:
    "Why adding up Meta ROAS and Google ROAS overstates performance, how blended ROAS and MER differ, and how Attribix ties ad spend to actual Shopify revenue.",
  alternates: { canonical: "https://attribix.app/shopify-roas-tracking" },
  openGraph: {
    title: "Shopify ROAS Tracking | Attribix",
    description: "Blended ROAS, MER, and true ad spend vs. Shopify revenue tracking.",
    url: "https://attribix.app/shopify-roas-tracking",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
