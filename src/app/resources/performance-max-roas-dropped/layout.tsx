import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Performance Max ROAS Suddenly Dropped: How to Diagnose It",
  description:
    "A Shopify-focused order of checks for a sudden Performance Max ROAS drop: tracking changes, reporting lag, feed changes, competition, recent bid or budget edits, stock-outs, and brand mix shifts.",
  alternates: { canonical: "https://www.attribix.app/resources/performance-max-roas-dropped" },
  openGraph: {
    title: "Performance Max ROAS Suddenly Dropped: How to Diagnose It",
    description:
      "Why PMax ROAS drops overnight, and the order to rule out tracking, reporting delay, feed issues, competition, recent changes, stock-outs and brand mix.",
    url: "https://www.attribix.app/resources/performance-max-roas-dropped",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Attribix" }],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
