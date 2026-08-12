import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ROAS vs Profit: Why High ROAS Doesn't Always Mean More Profit",
  description: "ROAS measures revenue returned for each unit of ad spend.",
  alternates: { canonical: "https://www.attribix.app/resources/roas-vs-profit-why-high-roas-doesn-t-always-mean-more" },
  openGraph: {
    title: "ROAS vs Profit: Why High ROAS Doesn't Always Mean More Profit",
    description: "Campaign ROAS helps with optimization.",
    url: "https://www.attribix.app/resources/roas-vs-profit-why-high-roas-doesn-t-always-mean-more",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Attribix" }],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
