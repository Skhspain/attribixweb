import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Does Removing Navigation Improve Landing Page Conversion Rate?",
  description: "It can, particularly when the page is built around one clear action.",
  alternates: { canonical: "https://www.attribix.app/resources/does-removing-navigation-improve-landing-page" },
  openGraph: {
    title: "Does Removing Navigation Improve Landing Page Conversion Rate?",
    description: "Look at:",
    url: "https://www.attribix.app/resources/does-removing-navigation-improve-landing-page",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Attribix" }],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
