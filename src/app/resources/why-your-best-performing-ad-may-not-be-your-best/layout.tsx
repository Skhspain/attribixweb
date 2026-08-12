import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Why Your Best-Performing Ad May Not Be Your Best Creative",
  description: "The ad with the most purchases may be your best commercial asset.",
  alternates: { canonical: "https://www.attribix.app/resources/why-your-best-performing-ad-may-not-be-your-best" },
  openGraph: {
    title: "Why Your Best-Performing Ad May Not Be Your Best Creative",
    description: "Do not optimize toward creative “quality scores” disconnected from sales.",
    url: "https://www.attribix.app/resources/why-your-best-performing-ad-may-not-be-your-best",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Attribix" }],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
