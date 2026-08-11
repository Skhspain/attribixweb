import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book an Attribix Demo | Shopify Attribution & Tracking",
  description: "Book a free Attribix demo and see how Shopify attribution, server-side tracking and Meta and Google Ads reporting work together.",
  alternates: { canonical: "https://www.attribix.app/book-demo" },
  openGraph: { title: "Book an Attribix Demo | Shopify Attribution & Tracking", description: "See how Shopify attribution, server-side tracking and Meta and Google Ads reporting work together.", url: "https://www.attribix.app/book-demo" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
