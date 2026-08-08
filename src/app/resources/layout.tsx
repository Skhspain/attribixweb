import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shopify Attribution & Tracking Resources | Attribix",
  description:
    "Guides on Shopify attribution, server-side tracking, Meta CAPI and Google Ads conversion tracking — written for people who actually run the ads.",
  alternates: { canonical: "https://www.attribix.app/resources" },
  openGraph: {
    title: "Shopify Attribution & Tracking Resources | Attribix",
    description: "Guides on Shopify attribution, server-side tracking, Meta CAPI and Google Ads conversion tracking.",
    url: "https://www.attribix.app/resources",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Attribix" }],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
