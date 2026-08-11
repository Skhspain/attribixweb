import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ROAS Calculator | Attribix",
  description: "Free calculator for return on ad spend (ROAS) and break-even ROAS based on your store's gross margin.",
  alternates: { canonical: "https://www.attribix.app/tools/roas-calculator" },
  openGraph: {
    title: "ROAS Calculator | Attribix",
    description: "Calculate ROAS and break-even ROAS for your Shopify store.",
    url: "https://www.attribix.app/tools/roas-calculator",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Attribix" }],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
