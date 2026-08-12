import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How to Calculate Your Maximum Profitable CPA",
  description:
    "Your maximum profitable CPA is the acquisition cost at which the order still meets the profit requirement you have chosen, not the number at which the campaign looks good.",
  alternates: { canonical: "https://www.attribix.app/resources/maximum-profitable-cpa-ecommerce" },
  openGraph: {
    title: "How to Calculate Your Maximum Profitable CPA",
    description: "The maximum is an economic boundary. Your campaign target should normally leave enough safety for volatility and overhead.",
    url: "https://www.attribix.app/resources/maximum-profitable-cpa-ecommerce",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Attribix" }],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
