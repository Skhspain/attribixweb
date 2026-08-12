import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "What Is a Transaction ID and Why Does Google Ads Need It?",
  description:
    "A transaction ID is a unique identifier for the purchase. Its most important role is helping systems recognize that the same order shouldn't be counted repeatedly.",
  alternates: { canonical: "https://www.attribix.app/resources/google-ads-transaction-id-ecommerce" },
  openGraph: {
    title: "What Is a Transaction ID and Why Does Google Ads Need It?",
    description: "A small implementation detail with a large impact on data quality.",
    url: "https://www.attribix.app/resources/google-ads-transaction-id-ecommerce",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Attribix" }],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
