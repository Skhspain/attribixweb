import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How Often Should Your Marketing Agency Report to You?",
  description: "Most ecommerce businesses benefit from a combination of short, frequent visibility and deeper monthly analysis.",
  alternates: { canonical: "https://www.attribix.app/resources/how-often-should-your-marketing-agency-report-to-you" },
  openGraph: {
    title: "How Often Should Your Marketing Agency Report to You?",
    description: "Clients should not need to wait for the agency report to know their own performance.",
    url: "https://www.attribix.app/resources/how-often-should-your-marketing-agency-report-to-you",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Attribix" }],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
