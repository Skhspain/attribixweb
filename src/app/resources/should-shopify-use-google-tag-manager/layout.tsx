import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Should Shopify Stores Still Use Google Tag Manager?",
  description:
    "GTM is still useful, but it's no longer sensible to assume every Shopify store needs it simply because it's standard practice elsewhere. When it helps, and when it just adds complexity.",
  alternates: { canonical: "https://www.attribix.app/resources/should-shopify-use-google-tag-manager" },
  openGraph: {
    title: "Should Shopify Stores Still Use Google Tag Manager?",
    description: "Use GTM because it solves a defined implementation requirement, not because 'professional stores use GTM.'",
    url: "https://www.attribix.app/resources/should-shopify-use-google-tag-manager",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Attribix" }],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
