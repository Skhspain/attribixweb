import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shopify App Installation Changed Conversion Tracking: What Happened?",
  description: "Marketing and analytics apps often install their own pixels, server events or customer-event integrations.",
  alternates: { canonical: "https://www.attribix.app/resources/shopify-app-installation-changed-conversion-tracking" },
  openGraph: {
    title: "Shopify App Installation Changed Conversion Tracking: What Happened?",
    description: "Document every app or script that sends marketing events.",
    url: "https://www.attribix.app/resources/shopify-app-installation-changed-conversion-tracking",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Attribix" }],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
