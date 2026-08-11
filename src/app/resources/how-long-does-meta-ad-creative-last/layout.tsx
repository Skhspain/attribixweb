import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How Long Does a Meta Ad Creative Usually Last?",
  description:
    "There's no average lifespan worth running your account by. Why exposure, not calendar days, determines when a Meta creative wears out, and how to prepare the replacement early.",
  alternates: { canonical: "https://www.attribix.app/resources/how-long-does-meta-ad-creative-last" },
  openGraph: {
    title: "How Long Does a Meta Ad Creative Usually Last?",
    description:
      "Audience size, spend and frequency determine creative lifespan more than calendar days. What to watch instead of counting the days since launch.",
    url: "https://www.attribix.app/resources/how-long-does-meta-ad-creative-last",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Attribix" }],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
