import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Is a Meta Ads Agency Worth It?",
  description: "A Meta Ads agency is worth it when the value of better decisions, execution and freed-up internal time exceeds the fee.",
  alternates: { canonical: "https://www.attribix.app/resources/is-a-meta-ads-agency-worth-it" },
  openGraph: {
    title: "Is a Meta Ads Agency Worth It?",
    description: "Ask who manages the account, how creative is handled, how tracking is verified, who owns the ad account and how success is measured beyond platform ROAS.",
    url: "https://www.attribix.app/resources/is-a-meta-ads-agency-worth-it",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Attribix" }],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
