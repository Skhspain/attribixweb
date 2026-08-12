import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How Import Duties Affect International Shopify Conversion Rates",
  description:
    "Import duties hurt conversion most when customers discover them after they thought they knew the final price. How to make landed cost clear before checkout.",
  alternates: { canonical: "https://www.attribix.app/resources/import-duties-ecommerce-conversion-rate" },
  openGraph: {
    title: "How Import Duties Affect International Shopify Conversion Rates",
    description: "Customers convert better when they understand what the order will actually cost.",
    url: "https://www.attribix.app/resources/import-duties-ecommerce-conversion-rate",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Attribix" }],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
