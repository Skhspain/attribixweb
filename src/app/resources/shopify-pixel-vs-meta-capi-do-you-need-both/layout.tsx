import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shopify Pixel vs Meta CAPI: Do You Need Both?",
  description: "For most robust Meta tracking setups, browser Pixel and server-side CAPI are complementary rather than mutually exclusive.",
  alternates: { canonical: "https://www.attribix.app/resources/shopify-pixel-vs-meta-capi-do-you-need-both" },
  openGraph: {
    title: "Shopify Pixel vs Meta CAPI: Do You Need Both?",
    description: "A technically elegant setup is worthless if Meta receives the wrong value, currency or duplicate purchase events.",
    url: "https://www.attribix.app/resources/shopify-pixel-vs-meta-capi-do-you-need-both",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Attribix" }],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
