import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Does Social Proof Actually Increase Ecommerce Conversion Rate?",
  description:
    "Social proof can reduce uncertainty when customers have reason to trust it, and backfire when it looks manufactured. Why specificity and placement matter more than volume.",
  alternates: { canonical: "https://www.attribix.app/resources/social-proof-ecommerce-conversion-rate" },
  openGraph: {
    title: "Does Social Proof Actually Increase Ecommerce Conversion Rate?",
    description: "Use proof to remove uncertainty, not as decoration.",
    url: "https://www.attribix.app/resources/social-proof-ecommerce-conversion-rate",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Attribix" }],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
