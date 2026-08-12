import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Do Countdown Timers Actually Improve Ecommerce Conversion Rates?",
  description:
    "Countdown timers can increase urgency when there's a real deadline, and damage trust when they reset on every refresh. How to test the offer, not just the clock.",
  alternates: { canonical: "https://www.attribix.app/resources/countdown-timer-ecommerce-conversion-rate" },
  openGraph: {
    title: "Do Countdown Timers Actually Improve Ecommerce Conversion Rates?",
    description: "Use urgency to communicate real constraints, not manufacture anxiety.",
    url: "https://www.attribix.app/resources/countdown-timer-ecommerce-conversion-rate",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Attribix" }],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
