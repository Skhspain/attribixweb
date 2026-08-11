import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shopify Conversion Rate Suddenly Dropped: What to Check First",
  description:
    "A sudden drop in Shopify conversion rate usually has a specific trigger. How to work out whether it's traffic mix, a site change, stock, price, checkout, or tracking.",
  alternates: { canonical: "https://www.attribix.app/resources/shopify-conversion-rate-dropped" },
  openGraph: {
    title: "Shopify Conversion Rate Suddenly Dropped: What to Check First",
    description: "How to find what actually changed before you start guessing at fixes.",
    url: "https://www.attribix.app/resources/shopify-conversion-rate-dropped",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Attribix" }],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
