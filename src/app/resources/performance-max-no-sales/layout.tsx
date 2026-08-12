import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Performance Max Spending Money but Getting No Sales",
  description:
    "A Shopify-focused diagnostic order for a PMax campaign with spend and no purchases: starting with whether Google can see your conversions at all, then feed, landing pages, price, budget and audience signals.",
  alternates: { canonical: "https://www.attribix.app/resources/performance-max-no-sales" },
  openGraph: {
    title: "Performance Max Spending Money but Getting No Sales",
    description:
      "Why a PMax campaign with no sales usually isn't a demand problem, and the order to check tracking, feed health, landing pages, price and budget in.",
    url: "https://www.attribix.app/resources/performance-max-no-sales",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Attribix" }],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
