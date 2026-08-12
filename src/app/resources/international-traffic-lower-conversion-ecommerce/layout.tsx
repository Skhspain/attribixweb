import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Why International Traffic Has a Lower Shopify Conversion Rate",
  description:
    "International traffic often converts lower because the customer journey contains more uncertainty: shipping, currency, duties, payment, trust, language and product fit.",
  alternates: { canonical: "https://www.attribix.app/resources/international-traffic-lower-conversion-ecommerce" },
  openGraph: {
    title: "Why International Traffic Has a Lower Shopify Conversion Rate",
    description: "The answer is not automatically \"localize everything.\" First identify where each country's funnel actually differs.",
    url: "https://www.attribix.app/resources/international-traffic-lower-conversion-ecommerce",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Attribix" }],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
