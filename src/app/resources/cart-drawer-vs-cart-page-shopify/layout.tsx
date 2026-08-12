import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shopify Cart Drawer vs Cart Page: Which Converts Better?",
  description:
    "A cart drawer keeps the shopper browsing. A full cart page gives more room for shipping messaging, bundles and upsells. How to decide which converts better for your Shopify store.",
  alternates: { canonical: "https://www.attribix.app/resources/cart-drawer-vs-cart-page-shopify" },
  openGraph: {
    title: "Shopify Cart Drawer vs Cart Page: Which Converts Better?",
    description: "The best cart is the one that confirms the purchase, resolves remaining questions and makes checkout obvious.",
    url: "https://www.attribix.app/resources/cart-drawer-vs-cart-page-shopify",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Attribix" }],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
