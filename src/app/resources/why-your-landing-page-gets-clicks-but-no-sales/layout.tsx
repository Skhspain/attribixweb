import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Why Your Landing Page Gets Clicks but No Sales",
  description: "If customers clicked the ad, the ad created enough interest to earn a visit.",
  alternates: { canonical: "https://www.attribix.app/resources/why-your-landing-page-gets-clicks-but-no-sales" },
  openGraph: {
    title: "Why Your Landing Page Gets Clicks but No Sales",
    description: "Most paid-social traffic is often mobile.",
    url: "https://www.attribix.app/resources/why-your-landing-page-gets-clicks-but-no-sales",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Attribix" }],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
