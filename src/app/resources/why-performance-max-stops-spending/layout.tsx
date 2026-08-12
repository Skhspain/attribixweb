import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Why Performance Max Stops Spending",
  description: "When Performance Max suddenly spends less, do not start by increasing the budget.",
  alternates: { canonical: "https://www.attribix.app/resources/why-performance-max-stops-spending" },
  openGraph: {
    title: "Why Performance Max Stops Spending",
    description: "If you raise budgets, loosen targets, change assets and restructure products at the same time, you may restart spend without understanding what fixed it.",
    url: "https://www.attribix.app/resources/why-performance-max-stops-spending",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Attribix" }],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
