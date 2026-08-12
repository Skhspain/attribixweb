import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Product Feed Titles: How Much Do They Matter for Google Shopping?",
  description: "Product titles are one of the clearest signals Google has for understanding what you sell.",
  alternates: { canonical: "https://www.attribix.app/resources/google-shopping-product-feed-titles" },
  openGraph: {
    title: "Product Feed Titles: How Much Do They Matter for Google Shopping?",
    description: "Search term insights, onsite search and SEO queries can reveal how customers describe products.",
    url: "https://www.attribix.app/resources/google-shopping-product-feed-titles",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Attribix" }],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
