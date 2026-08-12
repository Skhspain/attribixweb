import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Should Your Landing Page Show the Price Above the Fold?",
  description: "For normal ecommerce products, hiding the price usually adds unnecessary friction.",
  alternates: { canonical: "https://www.attribix.app/resources/should-your-landing-page-show-the-price-above-the-fold" },
  openGraph: {
    title: "Should Your Landing Page Show the Price Above the Fold?",
    description: "A page hiding price might produce longer time on site because visitors are hunting for the number.",
    url: "https://www.attribix.app/resources/should-your-landing-page-show-the-price-above-the-fold",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Attribix" }],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
