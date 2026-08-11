import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Google Merchant Center Products Disapproved: What It Means for Sales",
  description:
    "Disapproved products don't show at all, which silently shrinks your catalog and looks like a campaign problem. Common disapproval causes and how to find the reason in Merchant Center.",
  alternates: { canonical: "https://www.attribix.app/resources/google-merchant-center-product-disapproved" },
  openGraph: {
    title: "Google Merchant Center Products Disapproved: What It Means for Sales",
    description: "Why disapprovals happen, and how to tell how much of your catalog is actually eligible to run.",
    url: "https://www.attribix.app/resources/google-merchant-center-product-disapproved",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Attribix" }],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
