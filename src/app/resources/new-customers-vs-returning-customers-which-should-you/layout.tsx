import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "New Customers vs Returning Customers: Which Should You Optimize For?",
  description: "A healthy ecommerce business usually needs both.",
  alternates: { canonical: "https://www.attribix.app/resources/new-customers-vs-returning-customers-which-should-you" },
  openGraph: {
    title: "New Customers vs Returning Customers: Which Should You Optimize For?",
    description: "A mattress store naturally relies more on new-customer acquisition than a coffee subscription.",
    url: "https://www.attribix.app/resources/new-customers-vs-returning-customers-which-should-you",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Attribix" }],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
