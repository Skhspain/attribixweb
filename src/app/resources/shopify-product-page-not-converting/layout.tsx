import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shopify Product Page Not Converting: What to Check",
  description: "A product page can fail even when the ad is doing its job.",
  alternates: { canonical: "https://www.attribix.app/resources/shopify-product-page-not-converting" },
  openGraph: {
    title: "Shopify Product Page Not Converting: What to Check",
    description: "Buttons hidden below huge images, awkward variant selectors and popup overlap can destroy mobile conversion while the desktop page looks fine.",
    url: "https://www.attribix.app/resources/shopify-product-page-not-converting",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Attribix" }],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
