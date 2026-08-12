import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Does a Money-Back Guarantee Improve Shopify Conversion Rate?",
  description: "A money-back guarantee can reduce the perceived risk of trying an unfamiliar product.",
  alternates: { canonical: "https://www.attribix.app/resources/does-a-money-back-guarantee-improve-shopify-conversion" },
  openGraph: {
    title: "Does a Money-Back Guarantee Improve Shopify Conversion Rate?",
    description: "A guarantee that becomes difficult once the customer requests it will damage reviews and repeat purchase far more than the initial conversion lift is worth.",
    url: "https://www.attribix.app/resources/does-a-money-back-guarantee-improve-shopify-conversion",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Attribix" }],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
