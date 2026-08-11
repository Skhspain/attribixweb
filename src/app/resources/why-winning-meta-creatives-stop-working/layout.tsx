import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Why Winning Meta Ad Creatives Stop Working",
  description:
    "Fatigue is only one explanation. Why a winning Meta creative can decline — repetition, a shifting market, a weakening website, or a tracking change — and how to tell them apart.",
  alternates: { canonical: "https://www.attribix.app/resources/why-winning-meta-creatives-stop-working" },
  openGraph: {
    title: "Why Winning Meta Ad Creatives Stop Working",
    description:
      "Repetition, market shifts, a weakening website, or a tracking change can all make a winning creative look like it's failing. How to tell which one you have.",
    url: "https://www.attribix.app/resources/why-winning-meta-creatives-stop-working",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Attribix" }],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
