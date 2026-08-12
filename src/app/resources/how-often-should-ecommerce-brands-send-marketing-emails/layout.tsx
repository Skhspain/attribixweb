import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How Often Should Ecommerce Brands Send Marketing Emails?",
  description: "The correct email frequency is the highest cadence that continues to create incremental value without damaging list health and customer trust.",
  alternates: { canonical: "https://www.attribix.app/resources/how-often-should-ecommerce-brands-send-marketing-emails" },
  openGraph: {
    title: "How Often Should Ecommerce Brands Send Marketing Emails?",
    description: "“Three emails per week” is not a strategy.",
    url: "https://www.attribix.app/resources/how-often-should-ecommerce-brands-send-marketing-emails",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Attribix" }],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
