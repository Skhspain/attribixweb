import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Increasing Meta Ads Budget: Is the 20% Rule Real?",
  description:
    "Why the 20% budget rule is a useful default rather than a fixed law, and what actually determines whether a Meta budget increase is safe for a Shopify store.",
  alternates: { canonical: "https://www.attribix.app/resources/meta-ads-20-percent-budget-rule" },
  openGraph: {
    title: "Increasing Meta Ads Budget: Is the 20% Rule Real?",
    description:
      "What the 20% rule gets right, when a smaller increase is still too aggressive, and when a much larger one is reasonable.",
    url: "https://www.attribix.app/resources/meta-ads-20-percent-budget-rule",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Attribix" }],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
