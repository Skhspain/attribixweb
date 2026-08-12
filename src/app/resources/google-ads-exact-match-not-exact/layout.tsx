import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Google Ads Exact Match Isn't Really Exact: What Ecommerce Advertisers Should Know",
  description: "An exact-match keyword no longer means your ad can appear only when someone types precisely the same characters.",
  alternates: { canonical: "https://www.attribix.app/resources/google-ads-exact-match-not-exact" },
  openGraph: {
    title: "Google Ads Exact Match Isn't Really Exact: What Ecommerce Advertisers Should Know",
    description: "A close variant that converts profitably is not a problem simply because it is not identical to the keyword.",
    url: "https://www.attribix.app/resources/google-ads-exact-match-not-exact",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Attribix" }],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
