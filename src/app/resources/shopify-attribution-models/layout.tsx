import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shopify Attribution Models Explained",
  description:
    "First-click, last-click, linear, position-based and data-driven attribution for Shopify stores: what each model rewards, what it hides, and why Meta and Google rarely agree on one.",
  alternates: { canonical: "https://www.attribix.app/resources/shopify-attribution-models" },
  openGraph: {
    title: "Shopify Attribution Models Explained",
    description: "What first-click, last-click, linear and data-driven attribution actually reward, and why no single model is \"correct.\"",
    url: "https://www.attribix.app/resources/shopify-attribution-models",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Attribix" }],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
