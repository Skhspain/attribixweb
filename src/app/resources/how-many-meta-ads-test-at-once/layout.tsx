import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How Many Meta Ads Should You Test at Once?",
  description:
    "There's no fixed number of Meta ads to test. How budget, conversion volume and what you're trying to learn should set your testing volume, not a round number.",
  alternates: { canonical: "https://www.attribix.app/resources/how-many-meta-ads-test-at-once" },
  openGraph: {
    title: "How Many Meta Ads Should You Test at Once?",
    description:
      "Why testing too many ads at once dilutes what you can learn, and how to size a creative test around your actual budget.",
    url: "https://www.attribix.app/resources/how-many-meta-ads-test-at-once",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Attribix" }],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
