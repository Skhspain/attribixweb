import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shopify Attribution & Tracking Features | Attribix",
  description: "See which Facebook, Instagram and Google ads bring you customers, and make sure your Shopify sales are counted correctly. Ad dashboard, ROAS, sales attribution, Meta CAPI and server-side tracking explained simply.",
  alternates: { canonical: "https://www.attribix.app/features" },
  openGraph: { title: "Shopify Attribution & Tracking Features | Attribix", description: "Attribution, server-side tracking, Meta CAPI, Google Ads tracking and ROAS reporting for Shopify stores.", url: "https://www.attribix.app/features", images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Attribix" }] },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
