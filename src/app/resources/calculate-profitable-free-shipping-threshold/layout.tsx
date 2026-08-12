import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How to Calculate a Profitable Free Shipping Threshold",
  description:
    "A profitable free shipping threshold needs to generate enough additional contribution to cover the shipping cost you take on. A four-step model using AOV, margin and shipping cost.",
  alternates: { canonical: "https://www.attribix.app/resources/calculate-profitable-free-shipping-threshold" },
  openGraph: {
    title: "How to Calculate a Profitable Free Shipping Threshold",
    description: "The threshold is profitable when the combined AOV/conversion lift exceeds the additional shipping cost.",
    url: "https://www.attribix.app/resources/calculate-profitable-free-shipping-threshold",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Attribix" }],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
