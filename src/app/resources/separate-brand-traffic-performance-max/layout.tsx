import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Should You Separate Brand Traffic From Performance Max?",
  description: "Brand traffic can make Performance Max look more efficient than its true acquisition impact.",
  alternates: { canonical: "https://www.attribix.app/resources/separate-brand-traffic-performance-max" },
  openGraph: {
    title: "Should You Separate Brand Traffic From Performance Max?",
    description: "If excluding brand causes PMax ROAS to drop but total Shopify revenue remains healthy, you may simply be seeing a more realistic acquisition view.",
    url: "https://www.attribix.app/resources/separate-brand-traffic-performance-max",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Attribix" }],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
