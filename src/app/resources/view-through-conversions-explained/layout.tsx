import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "View-Through Conversions: Should You Count Them?",
  description:
    "A view-through conversion credits an ad the customer saw but never clicked. The honest case for and against counting them across Meta and Google, and a framework for deciding with your own numbers.",
  alternates: { canonical: "https://www.attribix.app/resources/view-through-conversions-explained" },
  openGraph: {
    title: "View-Through Conversions: Should You Count Them?",
    description:
      "Impressions are cheap and abundant, so view-through credit can look like proof an ad worked when it isn't. Neither counting nor ignoring it is automatically correct. Here's how to decide.",
    url: "https://www.attribix.app/resources/view-through-conversions-explained",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Attribix" }],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
