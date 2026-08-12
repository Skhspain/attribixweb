import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Landing Page vs Product Page for Ecommerce Ads",
  description: "A product page is built to sell the product in the context of the store.",
  alternates: { canonical: "https://www.attribix.app/resources/landing-page-vs-product-page-for-ecommerce-ads" },
  openGraph: {
    title: "Landing Page vs Product Page for Ecommerce Ads",
    description: "A standard page may try to serve every customer and explain none of the campaign-specific motivation particularly well.",
    url: "https://www.attribix.app/resources/landing-page-vs-product-page-for-ecommerce-ads",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Attribix" }],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
