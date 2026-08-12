import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "New Customer ROAS vs Total ROAS: Which Matters More?",
  description: "Total ROAS tells you how efficiently ad spend is associated with all reported revenue.",
  alternates: { canonical: "https://www.attribix.app/resources/new-customer-roas-vs-total-roas-which-matters-more" },
  openGraph: {
    title: "New Customer ROAS vs Total ROAS: Which Matters More?",
    description: "Track:",
    url: "https://www.attribix.app/resources/new-customer-roas-vs-total-roas-which-matters-more",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Attribix" }],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
