import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How to Use Customer Reviews to Create Better Meta Ads",
  description: "Reviews are useful creative research because customers describe the product after experiencing it, often in language the brand would never write.",
  alternates: { canonical: "https://www.attribix.app/resources/how-to-use-customer-reviews-to-create-better-meta-ads" },
  openGraph: {
    title: "How to Use Customer Reviews to Create Better Meta Ads",
    description: "A parent review and a professional-user review can sell the same product for different reasons.",
    url: "https://www.attribix.app/resources/how-to-use-customer-reviews-to-create-better-meta-ads",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Attribix" }],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
