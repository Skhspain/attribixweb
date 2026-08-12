import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Enhanced Conversions for Shopify Explained",
  description:
    "How Google's Enhanced Conversions use hashed first-party customer data to recover conversions cookies miss, and why it isn't a substitute for accurate baseline tracking.",
  alternates: { canonical: "https://www.attribix.app/resources/enhanced-conversions-shopify" },
  openGraph: {
    title: "Enhanced Conversions for Shopify Explained",
    description: "What Enhanced Conversions do, what they don't fix, and how they relate to server-side tracking.",
    url: "https://www.attribix.app/resources/enhanced-conversions-shopify",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Attribix" }],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
