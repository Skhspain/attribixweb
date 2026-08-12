import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Buy One Get One vs Percentage Discount for Ecommerce",
  description: "Buy One Get One promotions encourage unit volume.",
  alternates: { canonical: "https://www.attribix.app/resources/buy-one-get-one-vs-percentage-discount-for-ecommerce" },
  openGraph: {
    title: "Buy One Get One vs Percentage Discount for Ecommerce",
    description: "If customers buy six months of supply during a promotion, near-term repeat purchase can decline.",
    url: "https://www.attribix.app/resources/buy-one-get-one-vs-percentage-discount-for-ecommerce",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Attribix" }],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
