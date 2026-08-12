import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How to Measure Email Profitability Instead of Just Revenue",
  description: "Attributed email revenue is easy to celebrate.",
  alternates: { canonical: "https://www.attribix.app/resources/how-to-measure-email-profitability-instead-of-just" },
  openGraph: {
    title: "How to Measure Email Profitability Instead of Just Revenue",
    description: "Where possible, compare holdouts or different send strategies.",
    url: "https://www.attribix.app/resources/how-to-measure-email-profitability-instead-of-just",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Attribix" }],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
