import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How Refunds Affect Your True Advertising ROAS",
  description: "Ad platforms usually report conversion value when the purchase happens.",
  alternates: { canonical: "https://www.attribix.app/resources/how-refunds-affect-your-true-advertising-roas" },
  openGraph: {
    title: "How Refunds Affect Your True Advertising ROAS",
    description: "Overpromising ads can increase conversion and returns simultaneously.",
    url: "https://www.attribix.app/resources/how-refunds-affect-your-true-advertising-roas",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Attribix" }],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
