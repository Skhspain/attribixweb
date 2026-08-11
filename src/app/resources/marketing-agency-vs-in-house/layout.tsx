import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Marketing Agency vs In-House: Which Is Better for Meta and Google Ads?",
  description:
    "A dimension-by-dimension comparison of agency vs in-house Meta and Google Ads management — cost, specialist knowledge, tracking, speed and continuity — plus when each one genuinely wins.",
  alternates: { canonical: "https://www.attribix.app/resources/marketing-agency-vs-in-house" },
  openGraph: {
    title: "Marketing Agency vs In-House: Which Is Better for Meta and Google Ads?",
    description:
      "Cost structure, specialist knowledge, tracking competence, speed and continuity, compared honestly — with a framework instead of a verdict.",
    url: "https://www.attribix.app/resources/marketing-agency-vs-in-house",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Attribix" }],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
