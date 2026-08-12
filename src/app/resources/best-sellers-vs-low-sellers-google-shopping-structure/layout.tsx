import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best Sellers vs Low Sellers: How Should You Structure Google Shopping?",
  description: "Best sellers deserve attention because they have proven demand.",
  alternates: { canonical: "https://www.attribix.app/resources/best-sellers-vs-low-sellers-google-shopping-structure" },
  openGraph: {
    title: "Best Sellers vs Low Sellers: How Should You Structure Google Shopping?",
    description: "Best sellers, high-margin products and strategic categories can deserve different targets.",
    url: "https://www.attribix.app/resources/best-sellers-vs-low-sellers-google-shopping-structure",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Attribix" }],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
