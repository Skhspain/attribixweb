import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Product Page vs Advertorial: Which Works Better for Meta Ads?",
  description: "A product page assumes the customer is ready to evaluate the product.",
  alternates: { canonical: "https://www.attribix.app/resources/product-page-vs-advertorial-which-works-better-for" },
  openGraph: {
    title: "Product Page vs Advertorial: Which Works Better for Meta Ads?",
    description: "Advertorials often reduce the number of people reaching the product page but can improve the quality of those who do.",
    url: "https://www.attribix.app/resources/product-page-vs-advertorial-which-works-better-for",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Attribix" }],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
