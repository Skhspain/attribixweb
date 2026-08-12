import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Should You Exclude Poor-Performing Products From Performance Max?",
  description: "Sometimes.",
  alternates: { canonical: "https://www.attribix.app/resources/exclude-poor-performing-products-performance-max" },
  openGraph: {
    title: "Should You Exclude Poor-Performing Products From Performance Max?",
    description: "Removing weak products can concentrate spend on proven opportunities, but excessive pruning can make the campaign dependent on a tiny catalogue and prevent discovery.",
    url: "https://www.attribix.app/resources/exclude-poor-performing-products-performance-max",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Attribix" }],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
