import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How to Choose a Google Ads Agency for Ecommerce",
  description:
    "What separates a Google Ads agency that actually understands ecommerce from a generalist PPC shop — Search vs Shopping/PMax skill, feed and tracking competence, and the questions worth asking before you sign.",
  alternates: { canonical: "https://www.attribix.app/resources/how-to-choose-a-google-ads-agency" },
  openGraph: {
    title: "How to Choose a Google Ads Agency for Ecommerce",
    description:
      "Search vs Shopping/PMax expertise, Merchant Center competence, tracking literacy, account ownership and the red flags to watch for before hiring.",
    url: "https://www.attribix.app/resources/how-to-choose-a-google-ads-agency",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Attribix" }],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
