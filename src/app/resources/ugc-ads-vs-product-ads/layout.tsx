import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "UGC Ads vs Product Ads: Which Converts Better?",
  description:
    "UGC and polished product ads communicate different kinds of proof, not opposing philosophies. When each format wins, and how to test the message separately from the execution.",
  alternates: { canonical: "https://www.attribix.app/resources/ugc-ads-vs-product-ads" },
  openGraph: {
    title: "UGC Ads vs Product Ads: Which Converts Better?",
    description:
      "Relatable UGC and clear product demonstration solve different problems. Why the winning ad in a test doesn't always tell you which format actually won.",
    url: "https://www.attribix.app/resources/ugc-ads-vs-product-ads",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Attribix" }],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
