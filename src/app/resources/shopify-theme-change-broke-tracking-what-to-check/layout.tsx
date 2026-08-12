import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shopify Theme Change Broke Tracking: What to Check",
  description: "A theme change can remove scripts that were installed manually, alter page structure and expose tracking setups nobody realized depended on the old theme.",
  alternates: { canonical: "https://www.attribix.app/resources/shopify-theme-change-broke-tracking-what-to-check" },
  openGraph: {
    title: "Shopify Theme Change Broke Tracking: What to Check",
    description: "Use current Shopify-supported integration patterns and document any theme dependency that remains.",
    url: "https://www.attribix.app/resources/shopify-theme-change-broke-tracking-what-to-check",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Attribix" }],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
