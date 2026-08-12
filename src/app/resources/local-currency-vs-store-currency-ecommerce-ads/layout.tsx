import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Local Currency vs Store Currency: What Should You Use in Ads?",
  description:
    "Customers prefer prices in a familiar local currency. Your ad account can still operate in another currency: what matters is keeping price and tracking consistent.",
  alternates: { canonical: "https://www.attribix.app/resources/local-currency-vs-store-currency-ecommerce-ads" },
  openGraph: {
    title: "Local Currency vs Store Currency: What Should You Use in Ads?",
    description: "The important part is keeping the customer-facing price and tracking values consistent.",
    url: "https://www.attribix.app/resources/local-currency-vs-store-currency-ecommerce-ads",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Attribix" }],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
