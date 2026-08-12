import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How to Calculate Break-Even ROAS for Ecommerce",
  description: "Break-even ROAS tells you the revenue-to-ad-spend ratio at which the order has no contribution left after the costs you choose to include.",
  alternates: { canonical: "https://www.attribix.app/resources/how-to-calculate-break-even-roas-for-ecommerce" },
  openGraph: {
    title: "How to Calculate Break-Even ROAS for Ecommerce",
    description: "If customers reliably reorder profitably, you may intentionally accept a lower first-order ROAS.",
    url: "https://www.attribix.app/resources/how-to-calculate-break-even-roas-for-ecommerce",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Attribix" }],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
