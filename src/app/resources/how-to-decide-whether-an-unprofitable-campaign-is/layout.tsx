import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How to Decide Whether an Unprofitable Campaign Is Worth Keeping",
  description: "An unprofitable campaign can be worth keeping if it creates future customer value, assists other profitable sales or is still inside a deliberate test.",
  alternates: { canonical: "https://www.attribix.app/resources/how-to-decide-whether-an-unprofitable-campaign-is" },
  openGraph: {
    title: "How to Decide Whether an Unprofitable Campaign Is Worth Keeping",
    description: "If future LTV justifies the campaign, show the cohort data.",
    url: "https://www.attribix.app/resources/how-to-decide-whether-an-unprofitable-campaign-is",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Attribix" }],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
