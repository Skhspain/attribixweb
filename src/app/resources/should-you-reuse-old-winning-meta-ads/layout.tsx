import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Should You Reuse Old Winning Meta Ads?",
  description:
    "Old winners are worth retesting, but not guaranteed to win again. Why they can work a second time, why they might fail, and how to treat your creative history as a research library.",
  alternates: { canonical: "https://www.attribix.app/resources/should-you-reuse-old-winning-meta-ads" },
  openGraph: {
    title: "Should You Reuse Old Winning Meta Ads?",
    description:
      "Customers forget and audiences refresh. Why old Meta winners are worth retesting, when they fail, and how to remake the idea instead of just relaunching the file.",
    url: "https://www.attribix.app/resources/should-you-reuse-old-winning-meta-ads",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Attribix" }],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
