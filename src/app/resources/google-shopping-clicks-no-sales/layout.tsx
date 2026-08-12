import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Google Shopping Getting Clicks but No Sales",
  description:
    "Shopping ads show price and image before the click happens, which changes what usually causes clicks without purchases. Query relevance, feed quality, price and shipping, in the order that matters.",
  alternates: { canonical: "https://www.attribix.app/resources/google-shopping-clicks-no-sales" },
  openGraph: {
    title: "Google Shopping Getting Clicks but No Sales",
    description: "What to check when Shopping campaigns spend without converting.",
    url: "https://www.attribix.app/resources/google-shopping-clicks-no-sales",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Attribix" }],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
