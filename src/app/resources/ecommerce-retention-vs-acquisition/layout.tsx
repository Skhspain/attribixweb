import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Why Retention Can Matter More Than Improving Facebook Ads",
  description:
    "A business spending months trying to reduce Meta CPA from $45 to $42 may be ignoring a much larger opportunity: turning more first-time buyers into repeat customers.",
  alternates: { canonical: "https://www.attribix.app/resources/ecommerce-retention-vs-acquisition" },
  openGraph: {
    title: "Why Retention Can Matter More Than Improving Facebook Ads",
    description: "Better ads acquire customers. Better retention makes each acquired customer worth more.",
    url: "https://www.attribix.app/resources/ecommerce-retention-vs-acquisition",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Attribix" }],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
