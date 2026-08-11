import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How Much Does an Ecommerce Marketing Agency Cost?",
  description:
    "The pricing models ecommerce marketing agencies actually use — retainer, percentage of spend, hourly, hybrid and setup fees — and what pushes the cost up or down.",
  alternates: { canonical: "https://www.attribix.app/resources/ecommerce-marketing-agency-cost" },
  openGraph: {
    title: "How Much Does an Ecommerce Marketing Agency Cost?",
    description:
      "Retainer, percentage of spend, hourly, hybrid and setup fees explained, plus the factors that actually move the price.",
    url: "https://www.attribix.app/resources/ecommerce-marketing-agency-cost",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Attribix" }],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
