import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Carousel Ads vs Single Image Ads: Which Should You Use?",
  description:
    "Carousel ads help when the customer benefits from seeing several things. A single image helps when one clear message deserves all the attention. How to decide.",
  alternates: { canonical: "https://www.attribix.app/resources/carousel-ads-vs-single-image-ads" },
  openGraph: {
    title: "Carousel Ads vs Single Image Ads: Which Should You Use?",
    description:
      "Don't use a carousel because the ad manager offers the format. Use it when multiple frames genuinely make the selling argument stronger.",
    url: "https://www.attribix.app/resources/carousel-ads-vs-single-image-ads",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Attribix" }],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
