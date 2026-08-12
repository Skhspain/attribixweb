import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Google Ads Search Campaign vs Performance Max for Ecommerce",
  description: "Search campaigns and Performance Max solve different parts of Google advertising.",
  alternates: { canonical: "https://www.attribix.app/resources/search-campaign-vs-performance-max-ecommerce" },
  openGraph: {
    title: "Google Ads Search Campaign vs Performance Max for Ecommerce",
    description: "Use Search where query intent, messaging and control matter.",
    url: "https://www.attribix.app/resources/search-campaign-vs-performance-max-ecommerce",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Attribix" }],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
