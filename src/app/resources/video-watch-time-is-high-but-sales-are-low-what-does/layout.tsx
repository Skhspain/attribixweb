import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Video Watch Time Is High but Sales Are Low: What Does That Tell You?",
  description: "High watch time proves people were willing to watch.",
  alternates: { canonical: "https://www.attribix.app/resources/video-watch-time-is-high-but-sales-are-low-what-does" },
  openGraph: {
    title: "Video Watch Time Is High but Sales Are Low: What Does That Tell You?",
    description: "Find the moments where retention drops.",
    url: "https://www.attribix.app/resources/video-watch-time-is-high-but-sales-are-low-what-does",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Attribix" }],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
