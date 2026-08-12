import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Why Meta Ads Work One Week and Fail the Next",
  description:
    "Meta Ads performance is rarely a straight line. Why week-to-week swings often reflect normal variance, and how to tell that apart from a real decline.",
  alternates: { canonical: "https://www.attribix.app/resources/why-meta-ads-work-one-week-fail-next" },
  openGraph: {
    title: "Why Meta Ads Work One Week and Fail the Next",
    description:
      "Purchase volume, auction dynamics and rolling windows: why weekly Meta Ads swings usually aren't the emergency they look like.",
    url: "https://www.attribix.app/resources/why-meta-ads-work-one-week-fail-next",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Attribix" }],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
