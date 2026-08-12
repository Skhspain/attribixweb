import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Meta Ad Creative Testing: What Should You Test First?",
  description:
    "The first creative tests should answer big commercial questions, not microscopic design preferences. A testing hierarchy that starts with the selling idea, then execution.",
  alternates: { canonical: "https://www.attribix.app/resources/meta-ad-creative-testing-what-to-test-first" },
  openGraph: {
    title: "Meta Ad Creative Testing: What Should You Test First?",
    description: "Test the selling idea before the execution: a hierarchy that produces real learning instead of a pile of assets.",
    url: "https://www.attribix.app/resources/meta-ad-creative-testing-what-to-test-first",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Attribix" }],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
