import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Google Ads vs Klaviyo Revenue: Why Both Can Claim the Same Customer",
  description:
    "A customer can click a Klaviyo email, then search the brand on Google and buy. Why Google Ads and Klaviyo can both attribute the same order, especially around branded Search.",
  alternates: { canonical: "https://www.attribix.app/resources/google-ads-vs-klaviyo-revenue-attribution" },
  openGraph: {
    title: "Google Ads vs Klaviyo Revenue: Why Both Can Claim the Same Customer",
    description: "Klaviyo sees message engagement. Google sees advertising interactions. Neither knows which one was indispensable.",
    url: "https://www.attribix.app/resources/google-ads-vs-klaviyo-revenue-attribution",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Attribix" }],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
