import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "When Should You Split Products Into Multiple PMax Campaigns?",
  description: "Split PMax campaigns when separate control creates a business advantage.",
  alternates: { canonical: "https://www.attribix.app/resources/when-to-split-performance-max-campaigns" },
  openGraph: {
    title: "When Should You Split Products Into Multiple PMax Campaigns?",
    description: "Watch total Google performance, not only whether each new campaign gets a prettier ROAS.",
    url: "https://www.attribix.app/resources/when-to-split-performance-max-campaigns",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Attribix" }],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
