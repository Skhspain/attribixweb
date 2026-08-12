import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How to Calculate Profit per Order From Paid Ads",
  description: "Profit per paid order starts with the order value and subtracts the costs that order creates.",
  alternates: { canonical: "https://www.attribix.app/resources/how-to-calculate-profit-per-order-from-paid-ads" },
  openGraph: {
    title: "How to Calculate Profit per Order From Paid Ads",
    description: "If 10% of similar orders refund, incorporate an expected allowance or use net cohort profit later.",
    url: "https://www.attribix.app/resources/how-to-calculate-profit-per-order-from-paid-ads",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Attribix" }],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
