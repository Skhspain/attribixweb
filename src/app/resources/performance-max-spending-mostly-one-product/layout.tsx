import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Performance Max Spending Mostly on One Product: Is That a Problem?",
  description: "Not necessarily.",
  alternates: { canonical: "https://www.attribix.app/resources/performance-max-spending-mostly-one-product" },
  openGraph: {
    title: "Performance Max Spending Mostly on One Product: Is That a Problem?",
    description: "A campaign is not unfair to a product.",
    url: "https://www.attribix.app/resources/performance-max-spending-mostly-one-product",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Attribix" }],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
