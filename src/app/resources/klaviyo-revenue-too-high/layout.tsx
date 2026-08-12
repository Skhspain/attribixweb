import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Klaviyo Revenue Looks Too High: Is Email Taking Too Much Credit?",
  description:
    "Klaviyo attributed revenue can look larger than reality because attribution isn't causation. How to check attribution settings and compare against Shopify.",
  alternates: { canonical: "https://www.attribix.app/resources/klaviyo-revenue-too-high" },
  openGraph: {
    title: "Klaviyo Revenue Looks Too High: Is Email Taking Too Much Credit?",
    description: "Klaviyo, Meta and Google can all legitimately claim the same sale. Here's how to interpret the number correctly.",
    url: "https://www.attribix.app/resources/klaviyo-revenue-too-high",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Attribix" }],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
