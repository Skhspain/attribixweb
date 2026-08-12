import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Why Last-Click Attribution Undervalues Meta Ads",
  description: "Meta often introduces customers before they are ready to buy.",
  alternates: { canonical: "https://www.attribix.app/resources/why-last-click-attribution-undervalues-meta-ads" },
  openGraph: {
    title: "Why Last-Click Attribution Undervalues Meta Ads",
    description: "Use:",
    url: "https://www.attribix.app/resources/why-last-click-attribution-undervalues-meta-ads",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Attribix" }],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
