import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How Much Discount Is Too Much for Ecommerce?",
  description: "A discount becomes too large when the incremental sales and customer value it creates no longer compensate for the margin you give away.",
  alternates: { canonical: "https://www.attribix.app/resources/how-much-discount-is-too-much-for-ecommerce" },
  openGraph: {
    title: "How Much Discount Is Too Much for Ecommerce?",
    description: "Discount depth should come from margin and expected lift, not because a competitor ran 30% off.",
    url: "https://www.attribix.app/resources/how-much-discount-is-too-much-for-ecommerce",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Attribix" }],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
