import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Consent Mode on Shopify: Why Google Ads Conversions May Change",
  description:
    "What Google Consent Mode actually does on a Shopify store, why conversions can drop after a cookie banner change, and how modeled conversions differ from measured ones.",
  alternates: { canonical: "https://www.attribix.app/resources/google-consent-mode-shopify" },
  openGraph: {
    title: "Consent Mode on Shopify: Why Google Ads Conversions May Change",
    description:
      "\"We changed the cookie banner and conversions dropped\": what Consent Mode reads, what happens when consent is denied, and common implementation mistakes on Shopify.",
    url: "https://www.attribix.app/resources/google-consent-mode-shopify",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Attribix" }],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
