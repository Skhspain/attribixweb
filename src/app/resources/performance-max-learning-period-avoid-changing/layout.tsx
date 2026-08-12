import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Performance Max Learning Period: What Should You Avoid Changing?",
  description: "The fastest way to make a new automated campaign impossible to understand is to change several important inputs every few days.",
  alternates: { canonical: "https://www.attribix.app/resources/performance-max-learning-period-avoid-changing" },
  openGraph: {
    title: "Performance Max Learning Period: What Should You Avoid Changing?",
    description: "Record when major edits happen.",
    url: "https://www.attribix.app/resources/performance-max-learning-period-avoid-changing",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Attribix" }],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
