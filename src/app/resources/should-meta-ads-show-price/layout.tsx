import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Should Your Meta Ad Show the Price?",
  description:
    "Why showing the price on a Meta ad can lower CTR and still improve results, and how to tell whether your ads should qualify customers earlier.",
  alternates: { canonical: "https://www.attribix.app/resources/should-meta-ads-show-price" },
  openGraph: {
    title: "Should Your Meta Ad Show the Price?",
    description:
      "Price qualifies the click before you pay for it. When to show it, when to build value first, and which metrics decide the answer.",
    url: "https://www.attribix.app/resources/should-meta-ads-show-price",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Attribix" }],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
