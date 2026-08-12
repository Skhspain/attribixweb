import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Email Popup Conversion Rate: What Should Shopify Stores Expect?",
  description:
    "A popup conversion rate is only useful when you understand what the visitor receives in exchange. Why traffic quality, timing and subscriber value matter more than the raw rate.",
  alternates: { canonical: "https://www.attribix.app/resources/ecommerce-popup-conversion-rate" },
  openGraph: {
    title: "Email Popup Conversion Rate: What Should Shopify Stores Expect?",
    description: "A smaller list of customers with buying intent can be worth more than a huge list built through aggressive incentives.",
    url: "https://www.attribix.app/resources/ecommerce-popup-conversion-rate",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Attribix" }],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
