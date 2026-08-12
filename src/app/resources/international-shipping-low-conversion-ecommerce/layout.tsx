import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "International Shipping Is Killing Your Conversion Rate: How to Diagnose It",
  description:
    "International traffic can look promising until customers see delivery cost, delivery time or duties. A funnel-stage way to check whether shipping is the real reason.",
  alternates: { canonical: "https://www.attribix.app/resources/international-shipping-low-conversion-ecommerce" },
  openGraph: {
    title: "International Shipping Is Killing Your Conversion Rate: How to Diagnose It",
    description: "If the funnel collapses late, shipping is one of the first areas to inspect.",
    url: "https://www.attribix.app/resources/international-shipping-low-conversion-ecommerce",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Attribix" }],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
