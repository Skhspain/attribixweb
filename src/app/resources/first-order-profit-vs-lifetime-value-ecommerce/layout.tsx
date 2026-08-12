import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "First-Order Profit vs Lifetime Value: Which Should Drive Ad Spend?",
  description:
    "First-order profit protects cash. Lifetime value can justify growth. The right balance depends on how predictable your repeat customer behaviour actually is.",
  alternates: { canonical: "https://www.attribix.app/resources/first-order-profit-vs-lifetime-value-ecommerce" },
  openGraph: {
    title: "First-Order Profit vs Lifetime Value: Which Should Drive Ad Spend?",
    description: "The danger is imaginary LTV. Use cohort evidence before expanding spend on future customer value.",
    url: "https://www.attribix.app/resources/first-order-profit-vs-lifetime-value-ecommerce",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Attribix" }],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
