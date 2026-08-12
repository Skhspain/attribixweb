import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Why Google Ads Spend Increases Without More Sales",
  description: "More Google spend does not automatically create proportionally more demand.",
  alternates: { canonical: "https://www.attribix.app/resources/google-ads-spend-increases-no-more-sales" },
  openGraph: {
    title: "Why Google Ads Spend Increases Without More Sales",
    description: "For narrow products, there may simply not be enough commercially useful searches.",
    url: "https://www.attribix.app/resources/google-ads-spend-increases-no-more-sales",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Attribix" }],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
