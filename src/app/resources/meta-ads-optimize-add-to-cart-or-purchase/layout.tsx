import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Should You Optimize Meta Ads for Add to Cart or Purchase?",
  description:
    "More add-to-cart volume looks like more data, but it isn't the same signal as a purchase. When Add to Cart optimization actually helps, and when it just trains Meta toward the wrong outcome.",
  alternates: { canonical: "https://www.attribix.app/resources/meta-ads-optimize-add-to-cart-or-purchase" },
  openGraph: {
    title: "Should You Optimize Meta Ads for Add to Cart or Purchase?",
    description:
      "Meta finds people likely to perform whichever event you choose. People who add to cart aren't necessarily the same people who complete orders.",
    url: "https://www.attribix.app/resources/meta-ads-optimize-add-to-cart-or-purchase",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Attribix" }],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
