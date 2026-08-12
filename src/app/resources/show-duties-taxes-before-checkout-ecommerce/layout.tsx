import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Should You Show Duties and Taxes Before Checkout?",
  description:
    "Yes, as early and accurately as practical. Customers do not enjoy discovering mandatory costs after they have already decided to buy.",
  alternates: { canonical: "https://www.attribix.app/resources/show-duties-taxes-before-checkout-ecommerce" },
  openGraph: {
    title: "Should You Show Duties and Taxes Before Checkout?",
    description: "A $100 product can become a $145 purchase after shipping and import charges. That is a different offer.",
    url: "https://www.attribix.app/resources/show-duties-taxes-before-checkout-ecommerce",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Attribix" }],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
