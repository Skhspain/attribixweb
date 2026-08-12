import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Break-Even CPA Explained for Shopify Stores",
  description: "Break-even CPA is the maximum acquisition cost an order can absorb before the contribution profit you are measuring reaches zero.",
  alternates: { canonical: "https://www.attribix.app/resources/break-even-cpa-explained-for-shopify-stores" },
  openGraph: {
    title: "Break-Even CPA Explained for Shopify Stores",
    description: "Returning customer orders can make blended CPA look better.",
    url: "https://www.attribix.app/resources/break-even-cpa-explained-for-shopify-stores",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Attribix" }],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
