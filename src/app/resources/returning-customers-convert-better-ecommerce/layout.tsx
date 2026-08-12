import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Why Returning Customers Convert Better Than New Visitors",
  description:
    "Returning customers already solved several problems that slow a first purchase. Here's why that distorts channel ROAS, and how to segment new-customer and repeat-customer performance separately.",
  alternates: { canonical: "https://www.attribix.app/resources/returning-customers-convert-better-ecommerce" },
  openGraph: {
    title: "Why Returning Customers Convert Better Than New Visitors",
    description: "Do not use returning-customer efficiency as the benchmark you expect cold prospecting to match.",
    url: "https://www.attribix.app/resources/returning-customers-convert-better-ecommerce",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Attribix" }],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
