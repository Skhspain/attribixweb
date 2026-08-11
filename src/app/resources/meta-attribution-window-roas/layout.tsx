import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Why Changing Your Meta Attribution Window Changes Your ROAS",
  description:
    "Meta's attribution window setting decides how far back a purchase can be credited to an ad. Widen it and reported ROAS rises without the campaign performing any differently. How the settings work and how to read them.",
  alternates: { canonical: "https://www.attribix.app/resources/meta-attribution-window-roas" },
  openGraph: {
    title: "Why Changing Your Meta Attribution Window Changes Your ROAS",
    description:
      "The same campaign can report two different ROAS figures under two attribution window settings. What the window options mean and how to compare campaigns fairly.",
    url: "https://www.attribix.app/resources/meta-attribution-window-roas",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Attribix" }],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
