import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How to Check Whether Your Meta Pixel Is Working",
  description:
    "Don't decide a Pixel 'works' simply because Meta receives a PageView. How to test the full journey through to Purchase: value, currency, deduplication and order behaviour.",
  alternates: { canonical: "https://www.attribix.app/resources/how-to-check-meta-pixel-working-shopify" },
  openGraph: {
    title: "How to Check Whether Your Meta Pixel Is Working",
    description: "The event that matters most for ecommerce is usually Purchase, and it needs the correct value, currency and order behaviour.",
    url: "https://www.attribix.app/resources/how-to-check-meta-pixel-working-shopify",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Attribix" }],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
