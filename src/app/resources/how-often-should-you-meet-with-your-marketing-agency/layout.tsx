import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How Often Should You Meet With Your Marketing Agency?",
  description: "Meeting more often does not automatically improve marketing.",
  alternates: { canonical: "https://www.attribix.app/resources/how-often-should-you-meet-with-your-marketing-agency" },
  openGraph: {
    title: "How Often Should You Meet With Your Marketing Agency?",
    description: "The best agency meetings include information the ad account cannot see: inventory, margin changes, product launches, sales-team feedback, customer complaints and cash-flow priorities.",
    url: "https://www.attribix.app/resources/how-often-should-you-meet-with-your-marketing-agency",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Attribix" }],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
