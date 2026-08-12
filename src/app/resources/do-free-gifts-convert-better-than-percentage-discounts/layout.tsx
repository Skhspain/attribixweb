import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Do Free Gifts Convert Better Than Percentage Discounts?",
  description: "A free gift can create higher perceived value than an equivalent discount, especially when the gift feels relevant and desirable.",
  alternates: { canonical: "https://www.attribix.app/resources/do-free-gifts-convert-better-than-percentage-discounts" },
  openGraph: {
    title: "Do Free Gifts Convert Better Than Percentage Discounts?",
    description: "Conversion rate and AOV both matter.",
    url: "https://www.attribix.app/resources/do-free-gifts-convert-better-than-percentage-discounts",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Attribix" }],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
