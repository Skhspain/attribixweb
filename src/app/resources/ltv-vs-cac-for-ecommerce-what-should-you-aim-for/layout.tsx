import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "LTV vs CAC for Ecommerce: What Should You Aim For?",
  description: "LTV:CAC compares the value a customer generates over time with the cost to acquire that customer.",
  alternates: { canonical: "https://www.attribix.app/resources/ltv-vs-cac-for-ecommerce-what-should-you-aim-for" },
  openGraph: {
    title: "LTV vs CAC for Ecommerce: What Should You Aim For?",
    description: "Two businesses can both have strong LTV:CAC.",
    url: "https://www.attribix.app/resources/ltv-vs-cac-for-ecommerce-what-should-you-aim-for",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Attribix" }],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
