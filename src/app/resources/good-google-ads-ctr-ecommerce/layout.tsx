import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "What Is a Good Google Ads CTR for Ecommerce?",
  description: "CTR tells you how often an impression becomes a click.",
  alternates: { canonical: "https://www.attribix.app/resources/good-google-ads-ctr-ecommerce" },
  openGraph: {
    title: "What Is a Good Google Ads CTR for Ecommerce?",
    description: "Two ads can illustrate the point: Ad A has 8% CTR, 1% purchase rate.",
    url: "https://www.attribix.app/resources/good-google-ads-ctr-ecommerce",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Attribix" }],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
