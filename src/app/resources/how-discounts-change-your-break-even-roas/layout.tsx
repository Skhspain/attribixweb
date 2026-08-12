import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How Discounts Change Your Break-Even ROAS",
  description: "Discounting reduces revenue while product and fulfilment costs often stay largely the same.",
  alternates: { canonical: "https://www.attribix.app/resources/how-discounts-change-your-break-even-roas" },
  openGraph: {
    title: "How Discounts Change Your Break-Even ROAS",
    description: "A discounted product plus free shipping plus affiliate commission can leave much less contribution than the headline promotion suggests.",
    url: "https://www.attribix.app/resources/how-discounts-change-your-break-even-roas",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Attribix" }],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
