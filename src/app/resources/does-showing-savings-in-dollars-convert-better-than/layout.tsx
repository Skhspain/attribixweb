import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Does Showing Savings in Dollars Convert Better Than Percentages?",
  description: "Sometimes the dollar saving feels larger.",
  alternates: { canonical: "https://www.attribix.app/resources/does-showing-savings-in-dollars-convert-better-than" },
  openGraph: {
    title: "Does Showing Savings in Dollars Convert Better Than Percentages?",
    description: "As with any discount framing test, keep the actual offer constant.",
    url: "https://www.attribix.app/resources/does-showing-savings-in-dollars-convert-better-than",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Attribix" }],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
