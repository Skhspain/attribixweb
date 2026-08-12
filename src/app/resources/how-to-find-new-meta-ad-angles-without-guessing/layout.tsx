import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How to Find New Meta Ad Angles Without Guessing",
  description: "The best ad angles usually already exist in customer language.",
  alternates: { canonical: "https://www.attribix.app/resources/how-to-find-new-meta-ad-angles-without-guessing" },
  openGraph: {
    title: "How to Find New Meta Ad Angles Without Guessing",
    description: "Instead of “Let's make another UGC video,” say:",
    url: "https://www.attribix.app/resources/how-to-find-new-meta-ad-angles-without-guessing",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Attribix" }],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
