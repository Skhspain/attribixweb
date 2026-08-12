import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How to Calculate CAC for a Shopify Store",
  description: "A practical CAC calculation answers: how much did we spend to acquire each new customer?",
  alternates: { canonical: "https://www.attribix.app/resources/how-to-calculate-cac-for-a-shopify-store" },
  openGraph: {
    title: "How to Calculate CAC for a Shopify Store",
    description: "CAC is not good or bad in isolation.",
    url: "https://www.attribix.app/resources/how-to-calculate-cac-for-a-shopify-store",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Attribix" }],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
