import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ecommerce Marketing, Advertising & Tracking Resources | Attribix",
  description:
    "Practical guides on Meta Ads, Google Ads, Shopify conversion problems, attribution, tracking and hiring marketing help — written by people who run the accounts, not generic explainers.",
  alternates: { canonical: "https://www.attribix.app/resources" },
  openGraph: {
    title: "Ecommerce Marketing, Advertising & Tracking Resources | Attribix",
    description: "Meta Ads, Google Ads, Shopify conversion problems, attribution, tracking and agency decisions.",
    url: "https://www.attribix.app/resources",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Attribix" }],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
