import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "What Makes a Good Meta Ad for Ecommerce?",
  description:
    "A good Meta ad isn't the one people applaud. It's the one that attracts attention your business can profitably convert. How to build the message before the format.",
  alternates: { canonical: "https://www.attribix.app/resources/what-makes-good-meta-ad-ecommerce" },
  openGraph: {
    title: "What Makes a Good Meta Ad for Ecommerce?",
    description:
      "Many ecommerce ads are built backwards, starting with a format trend instead of what the customer needs to hear. A clearer way to judge and build Meta creative.",
    url: "https://www.attribix.app/resources/what-makes-good-meta-ad-ecommerce",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Attribix" }],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
