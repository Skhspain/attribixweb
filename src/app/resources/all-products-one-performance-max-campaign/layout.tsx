import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Should You Put All Products in One Performance Max Campaign?",
  description: "Putting every product into one PMax campaign is simple.",
  alternates: { canonical: "https://www.attribix.app/resources/all-products-one-performance-max-campaign" },
  openGraph: {
    title: "Should You Put All Products in One Performance Max Campaign?",
    description: "Before splitting anything, check where spend and conversions are already going.",
    url: "https://www.attribix.app/resources/all-products-one-performance-max-campaign",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Attribix" }],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
