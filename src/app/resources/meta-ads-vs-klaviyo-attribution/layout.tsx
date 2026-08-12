import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Meta Ads vs Klaviyo Attribution: Who Gets Credit for the Sale?",
  description:
    "Meta and Klaviyo can both legitimately claim the same Shopify sale because each evaluates its own interactions. How to use each platform without double-counting revenue.",
  alternates: { canonical: "https://www.attribix.app/resources/meta-ads-vs-klaviyo-attribution" },
  openGraph: {
    title: "Meta Ads vs Klaviyo Attribution: Who Gets Credit for the Sale?",
    description: "The platforms aren't dividing a single pie between themselves. Each runs its own attribution model.",
    url: "https://www.attribix.app/resources/meta-ads-vs-klaviyo-attribution",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Attribix" }],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
