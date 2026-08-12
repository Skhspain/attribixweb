import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Meta Ads Hook Rate vs Sales: Which Matters More?",
  description: "Sales matter more if the business objective is sales.",
  alternates: { canonical: "https://www.attribix.app/resources/meta-ads-hook-rate-vs-sales-which-matters-more" },
  openGraph: {
    title: "Meta Ads Hook Rate vs Sales: Which Matters More?",
    description: "Changing an opening to improve hook rate can reduce message clarity or attract curiosity clicks.",
    url: "https://www.attribix.app/resources/meta-ads-hook-rate-vs-sales-which-matters-more",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Attribix" }],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
