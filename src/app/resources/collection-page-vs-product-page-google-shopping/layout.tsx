import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Collection Page vs Product Page for Google Shopping Traffic",
  description:
    "Why Google Shopping clicks should almost always land on the matching product page, when a collection page makes sense instead, and why Merchant Center consistency matters.",
  alternates: { canonical: "https://www.attribix.app/resources/collection-page-vs-product-page-google-shopping" },
  openGraph: {
    title: "Collection Page vs Product Page for Google Shopping Traffic",
    description: "A Shopping click sets a specific expectation. Here is when to confirm it with a product page and when a collection page is the better destination.",
    url: "https://www.attribix.app/resources/collection-page-vs-product-page-google-shopping",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Attribix" }],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
