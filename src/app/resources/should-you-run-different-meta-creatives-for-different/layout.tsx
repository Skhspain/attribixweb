import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Should You Run Different Meta Creatives for Different Countries?",
  description: "If customer motivations, language or offers differ, country-specific creatives can improve performance.",
  alternates: { canonical: "https://www.attribix.app/resources/should-you-run-different-meta-creatives-for-different" },
  openGraph: {
    title: "Should You Run Different Meta Creatives for Different Countries?",
    description: "Localization does not require reinventing the entire campaign.",
    url: "https://www.attribix.app/resources/should-you-run-different-meta-creatives-for-different",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Attribix" }],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
