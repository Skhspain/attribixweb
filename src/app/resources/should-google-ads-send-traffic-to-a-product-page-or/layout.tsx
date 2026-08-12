import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Should Google Ads Send Traffic to a Product Page or Collection Page?",
  description: "The search query should usually decide.",
  alternates: { canonical: "https://www.attribix.app/resources/should-google-ads-send-traffic-to-a-product-page-or" },
  openGraph: {
    title: "Should Google Ads Send Traffic to a Product Page or Collection Page?",
    description: "A collection page with 200 unrelated products and poor filters can perform worse than a focused landing page.",
    url: "https://www.attribix.app/resources/should-google-ads-send-traffic-to-a-product-page-or",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Attribix" }],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
