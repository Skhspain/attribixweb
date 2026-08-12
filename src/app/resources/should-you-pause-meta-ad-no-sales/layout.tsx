import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Should You Pause a Meta Ad That Has No Sales?",
  description:
    "Zero sales doesn't mean a bad ad. It depends on spend relative to target CPA and what happened earlier in the funnel. How to make a pause decision for a reason.",
  alternates: { canonical: "https://www.attribix.app/resources/should-you-pause-meta-ad-no-sales" },
  openGraph: {
    title: "Should You Pause a Meta Ad That Has No Sales?",
    description:
      "Compare spend against target CPA and check clicks, product engagement and carts before pausing a Meta ad with no purchases.",
    url: "https://www.attribix.app/resources/should-you-pause-meta-ad-no-sales",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Attribix" }],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
