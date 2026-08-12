import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How Much Does Page Speed Affect Shopify Sales?",
  description: "Page speed matters because every extra wait gives a visitor another chance to leave, especially on mobile and paid traffic.",
  alternates: { canonical: "https://www.attribix.app/resources/shopify-page-speed-conversion-rate" },
  openGraph: {
    title: "How Much Does Page Speed Affect Shopify Sales?",
    description: "Removing every review app, video and useful product feature can make the page technically faster and commercially worse.",
    url: "https://www.attribix.app/resources/shopify-page-speed-conversion-rate",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Attribix" }],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
