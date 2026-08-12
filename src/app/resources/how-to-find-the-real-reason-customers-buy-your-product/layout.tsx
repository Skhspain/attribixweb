import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How to Find the Real Reason Customers Buy Your Product",
  description: "The reason a company thinks customers buy is not always the reason customers give.",
  alternates: { canonical: "https://www.attribix.app/resources/how-to-find-the-real-reason-customers-buy-your-product" },
  openGraph: {
    title: "How to Find the Real Reason Customers Buy Your Product",
    description: "What problem are Google users trying to solve before reaching the store?",
    url: "https://www.attribix.app/resources/how-to-find-the-real-reason-customers-buy-your-product",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Attribix" }],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
