import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "What Should Be Included in a Google Ads Management Service?",
  description: "Google Ads management should cover the parts of the ecosystem that determine whether clicks become profitable customers.",
  alternates: { canonical: "https://www.attribix.app/resources/what-should-be-included-in-a-google-ads-management" },
  openGraph: {
    title: "What Should Be Included in a Google Ads Management Service?",
    description: "Not every campaign needs edits every day.",
    url: "https://www.attribix.app/resources/what-should-be-included-in-a-google-ads-management",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Attribix" }],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
