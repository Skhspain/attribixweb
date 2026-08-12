import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Google Shopping Has High ROAS but Low Volume: Should You Scale?",
  description: "A high ROAS at low spend is encouraging, but it does not prove the same efficiency exists at higher volume.",
  alternates: { canonical: "https://www.attribix.app/resources/google-shopping-high-roas-low-volume" },
  openGraph: {
    title: "Google Shopping Has High ROAS but Low Volume: Should You Scale?",
    description: "Ask what the additional spend produces, not whether the original ROAS remains unchanged.",
    url: "https://www.attribix.app/resources/google-shopping-high-roas-low-volume",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Attribix" }],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
