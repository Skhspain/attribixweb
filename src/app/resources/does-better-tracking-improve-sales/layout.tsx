import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Why More Accurate Tracking Doesn't Automatically Create More Sales",
  description:
    "Better tracking can improve decisions. It cannot make a weak product, bad offer or poor website convert by itself. What accurate measurement can and can't do for Shopify sales.",
  alternates: { canonical: "https://www.attribix.app/resources/does-better-tracking-improve-sales" },
  openGraph: {
    title: "Why More Accurate Tracking Doesn't Automatically Create More Sales",
    description: "Sometimes 'performance improved' because reporting improved, not because Shopify sales actually changed.",
    url: "https://www.attribix.app/resources/does-better-tracking-improve-sales",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Attribix" }],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
