import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Does Free Shipping Increase Customer Retention?",
  description:
    "Free shipping can contribute to retention because it makes repeat purchases easier to justify. But it is rarely the main reason a customer becomes loyal.",
  alternates: { canonical: "https://www.attribix.app/resources/free-shipping-customer-retention-ecommerce" },
  openGraph: {
    title: "Does Free Shipping Increase Customer Retention?",
    description: "Shipping policy can support retention, but the product must earn the second purchase first.",
    url: "https://www.attribix.app/resources/free-shipping-customer-retention-ecommerce",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Attribix" }],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
