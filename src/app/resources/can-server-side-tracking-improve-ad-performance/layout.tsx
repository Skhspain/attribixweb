import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Can Server-Side Tracking Improve Ad Performance?",
  description:
    "Server-side tracking can improve the quality and resilience of conversion signals sent to advertising platforms. It does not guarantee lower CPA or higher revenue.",
  alternates: { canonical: "https://www.attribix.app/resources/can-server-side-tracking-improve-ad-performance" },
  openGraph: {
    title: "Can Server-Side Tracking Improve Ad Performance?",
    description: "Better reporting may be the first visible change, and that's not the same thing as more sales.",
    url: "https://www.attribix.app/resources/can-server-side-tracking-improve-ad-performance",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Attribix" }],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
