import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "When Is It Okay to Lose Money on the First Shopify Order?",
  description:
    "Losing money on the first order can be rational when future contribution is predictable enough to recover the loss. It becomes dangerous when LTV is used without evidence.",
  alternates: { canonical: "https://www.attribix.app/resources/lose-money-first-order-ecommerce" },
  openGraph: {
    title: "When Is It Okay to Lose Money on the First Shopify Order?",
    description: "First-order losses should be an intentional investment with measured payback, not an accidental outcome of chasing growth.",
    url: "https://www.attribix.app/resources/lose-money-first-order-ecommerce",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Attribix" }],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
