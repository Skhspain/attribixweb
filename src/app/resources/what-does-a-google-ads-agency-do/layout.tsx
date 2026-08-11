import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "What Does a Google Ads Agency Actually Do?",
  description:
    "Beyond keyword lists and bid changes — account audits, Search/Shopping/PMax strategy, feed and Merchant Center oversight, conversion tracking, and reporting. What the work actually involves.",
  alternates: { canonical: "https://www.attribix.app/resources/what-does-a-google-ads-agency-do" },
  openGraph: {
    title: "What Does a Google Ads Agency Actually Do?",
    description: "The actual scope of managing a Google Ads account, month to month.",
    url: "https://www.attribix.app/resources/what-does-a-google-ads-agency-do",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Attribix" }],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
