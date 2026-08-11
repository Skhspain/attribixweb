import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Is Meta Retargeting Taking Credit for Too Many Sales?",
  description:
    "High retargeting ROAS often reflects warm shoppers who were already likely to buy, not incremental revenue. How to spot over-attribution and set a sensible budget split.",
  alternates: { canonical: "https://www.attribix.app/resources/meta-retargeting-taking-credit-for-sales" },
  openGraph: {
    title: "Is Meta Retargeting Taking Credit for Too Many Sales?",
    description:
      "Retargeting usually reports the best ROAS in the account. That doesn't mean it deserves the next dollar of budget. Signs of over-attribution and how to test for it.",
    url: "https://www.attribix.app/resources/meta-retargeting-taking-credit-for-sales",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Attribix" }],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
