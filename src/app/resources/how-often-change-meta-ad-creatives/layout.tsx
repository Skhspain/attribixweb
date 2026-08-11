import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How Often Should You Change Meta Ad Creatives?",
  description:
    "Creative refresh schedules based on the calendar miss real fatigue signals. What to watch instead, and why killing winners on a timer wastes profit.",
  alternates: { canonical: "https://www.attribix.app/resources/how-often-change-meta-ad-creatives" },
  openGraph: {
    title: "How Often Should You Change Meta Ad Creatives?",
    description:
      "Frequency, CTR and CPA trends tell you when a creative needs replacing — a fixed weekly or monthly refresh calendar doesn't.",
    url: "https://www.attribix.app/resources/how-often-change-meta-ad-creatives",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Attribix" }],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
