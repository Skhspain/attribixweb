import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Profit ROAS vs Revenue ROAS: Which Should You Use?",
  description: "Revenue ROAS is easy to calculate and useful for campaign optimization.",
  alternates: { canonical: "https://www.attribix.app/resources/profit-roas-vs-revenue-roas-which-should-you-use" },
  openGraph: {
    title: "Profit ROAS vs Revenue ROAS: Which Should You Use?",
    description: "Profit optimization is only as good as COGS, refunds and variable-cost data.",
    url: "https://www.attribix.app/resources/profit-roas-vs-revenue-roas-which-should-you-use",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Attribix" }],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
