import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How to Know Whether You Have a Creative Problem or an Offer Problem",
  description: "Creative problems usually appear before or around the click.",
  alternates: { canonical: "https://www.attribix.app/resources/how-to-know-whether-you-have-a-creative-problem-or-an" },
  openGraph: {
    title: "How to Know Whether You Have a Creative Problem or an Offer Problem",
    description: "If Shopify sales happen but Meta reports none, neither the creative nor offer may be the issue.",
    url: "https://www.attribix.app/resources/how-to-know-whether-you-have-a-creative-problem-or-an",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Attribix" }],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
