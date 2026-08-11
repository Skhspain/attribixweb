import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "What Is a Good Hook for a Meta Ad?",
  description:
    "The hook categories that actually qualify buyers on Meta — problem, outcome, demonstration, proof and objection — and how to test them properly.",
  alternates: { canonical: "https://www.attribix.app/resources/good-hook-for-meta-ad" },
  openGraph: {
    title: "What Is a Good Hook for a Meta Ad?",
    description:
      "A good hook is the first piece of information that makes the right person think this might be for me. Five hook types and how to test them.",
    url: "https://www.attribix.app/resources/good-hook-for-meta-ad",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Attribix" }],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
