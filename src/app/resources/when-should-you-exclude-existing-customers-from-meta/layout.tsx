import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "When Should You Exclude Existing Customers From Meta Ads?",
  description: "Exclude existing customers when you need a campaign to answer a new-customer acquisition question or when the advertised product is irrelevant after purchase.",
  alternates: { canonical: "https://www.attribix.app/resources/when-should-you-exclude-existing-customers-from-meta" },
  openGraph: {
    title: "When Should You Exclude Existing Customers From Meta Ads?",
    description: "Prospecting campaign?",
    url: "https://www.attribix.app/resources/when-should-you-exclude-existing-customers-from-meta",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Attribix" }],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
