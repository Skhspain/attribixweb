import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Product Features vs Customer Benefits: What Should Ads Focus On?",
  description: "Features explain what the product has.",
  alternates: { canonical: "https://www.attribix.app/resources/product-features-vs-customer-benefits-what-should-ads" },
  openGraph: {
    title: "Product Features vs Customer Benefits: What Should Ads Focus On?",
    description: "Showing a jacket staying dry in heavy rain demonstrates the waterproof feature and the customer benefit at the same time.",
    url: "https://www.attribix.app/resources/product-features-vs-customer-benefits-what-should-ads",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Attribix" }],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
