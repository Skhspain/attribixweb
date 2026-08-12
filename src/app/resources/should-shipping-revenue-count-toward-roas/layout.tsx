import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Should Shipping Revenue Count Toward ROAS?",
  description: "Whether shipping charged to the customer belongs in ROAS depends on what you want the revenue figure to represent.",
  alternates: { canonical: "https://www.attribix.app/resources/should-shipping-revenue-count-toward-roas" },
  openGraph: {
    title: "Should Shipping Revenue Count Toward ROAS?",
    description: "Do not send shipping-inclusive values to one platform and shipping-exclusive values to another if you expect ROAS to be comparable.",
    url: "https://www.attribix.app/resources/should-shipping-revenue-count-toward-roas",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Attribix" }],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
