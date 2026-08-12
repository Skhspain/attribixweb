import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Should Meta Ads Send Traffic to a Product Page or Landing Page?",
  description: "Send Meta traffic to the page that continues the selling argument with the least friction.",
  alternates: { canonical: "https://www.attribix.app/resources/should-meta-ads-send-traffic-to-a-product-page-or" },
  openGraph: {
    title: "Should Meta Ads Send Traffic to a Product Page or Landing Page?",
    description: "Compare:",
    url: "https://www.attribix.app/resources/should-meta-ads-send-traffic-to-a-product-page-or",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Attribix" }],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
