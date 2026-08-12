import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How Long Can Ecommerce Brands Afford to Wait for Customer Payback?",
  description:
    "A profitable customer can still create a cash-flow problem if it takes too long to recover the money spent acquiring them. There is no universal acceptable period.",
  alternates: { canonical: "https://www.attribix.app/resources/ecommerce-cac-payback-period" },
  openGraph: {
    title: "How Long Can Ecommerce Brands Afford to Wait for Customer Payback?",
    description: "Payback is about timing, not just theoretical customer value, and growth itself consumes cash.",
    url: "https://www.attribix.app/resources/ecommerce-cac-payback-period",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Attribix" }],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
