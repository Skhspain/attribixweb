import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How to Choose a Meta Ads Agency for Ecommerce",
  description:
    "A buyer's guide, not a listicle — ecommerce experience, account ownership, reporting transparency, tracking competence, creative process and the questions worth asking before you sign.",
  alternates: { canonical: "https://www.attribix.app/resources/how-to-choose-a-meta-ads-agency" },
  openGraph: {
    title: "How to Choose a Meta Ads Agency for Ecommerce",
    description: "What actually separates a good ecommerce Meta Ads agency from a generic one.",
    url: "https://www.attribix.app/resources/how-to-choose-a-meta-ads-agency",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Attribix" }],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
