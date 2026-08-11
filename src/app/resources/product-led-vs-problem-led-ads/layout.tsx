import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Should Ecommerce Ads Lead With the Product or the Problem?",
  description:
    "When a Meta ad should open on the product itself and when it needs a problem first, based on how visually desirable the product is.",
  alternates: { canonical: "https://www.attribix.app/resources/product-led-vs-problem-led-ads" },
  openGraph: {
    title: "Should Ecommerce Ads Lead With the Product or the Problem?",
    description:
      "There's no universal rule to lead with pain or show the product first. How awareness level and product type decide which opening wins.",
    url: "https://www.attribix.app/resources/product-led-vs-problem-led-ads",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Attribix" }],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
