import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Meta Pixel Helper Shows Multiple Pixels: Is That a Problem?",
  description:
    "Multiple Pixels on a site aren't automatically wrong. The problem is when nobody knows why they're there. How to map ownership and decide what to consolidate.",
  alternates: { canonical: "https://www.attribix.app/resources/meta-pixel-helper-multiple-pixels" },
  openGraph: {
    title: "Meta Pixel Helper Shows Multiple Pixels: Is That a Problem?",
    description: "An old Pixel that still receives Purchase events can create confusing reports even if current campaigns optimize toward another one.",
    url: "https://www.attribix.app/resources/meta-pixel-helper-multiple-pixels",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Attribix" }],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
