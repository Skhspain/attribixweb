import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Static Images vs Video Ads for Ecommerce",
  description:
    "Video gets more attention in marketing conversations, but static images still sell a lot of products. Which format to use depends on what needs to be communicated.",
  alternates: { canonical: "https://www.attribix.app/resources/static-images-vs-video-ads-ecommerce" },
  openGraph: {
    title: "Static Images vs Video Ads for Ecommerce",
    description:
      "A beautiful video will normally beat a generic product image, but that doesn't prove video is the reason. How to compare formats fairly and beyond thumb-stop metrics.",
    url: "https://www.attribix.app/resources/static-images-vs-video-ads-ecommerce",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Attribix" }],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
