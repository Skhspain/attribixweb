import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Attribution Model Explorer for Shopify | Attribix",
  description: "See how one Shopify order is credited to Meta and Google under last-click, first-click, linear and time-decay attribution. Free interactive example.",
  alternates: { canonical: "https://www.attribix.app/tools/attribution-models" },
  openGraph: {
    title: "Attribution Model Explorer | Attribix",
    description: "See how one Shopify order is credited under four attribution models.",
    url: "https://www.attribix.app/tools/attribution-models",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Attribix" }],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
