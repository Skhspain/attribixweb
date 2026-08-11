import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "MER Calculator | Attribix",
  description: "Free calculator for marketing efficiency ratio (MER) — total revenue divided by total marketing spend, no attribution model involved.",
  alternates: { canonical: "https://www.attribix.app/tools/mer-calculator" },
  openGraph: {
    title: "MER Calculator | Attribix",
    description: "Calculate marketing efficiency ratio for your Shopify store.",
    url: "https://www.attribix.app/tools/mer-calculator",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Attribix" }],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
