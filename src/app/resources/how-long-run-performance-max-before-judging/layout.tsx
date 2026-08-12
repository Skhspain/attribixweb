import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How Long Should a New Performance Max Campaign Run Before You Judge It?",
  description: "A new PMax campaign needs enough time and conversions to show a pattern, but there is no responsible answer such as \"always wait six weeks.\"",
  alternates: { canonical: "https://www.attribix.app/resources/how-long-run-performance-max-before-judging" },
  openGraph: {
    title: "How Long Should a New Performance Max Campaign Run Before You Judge It?",
    description: "Look at Shopify sales, Google conversion value, product performance and new-customer contribution.",
    url: "https://www.attribix.app/resources/how-long-run-performance-max-before-judging",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Attribix" }],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
