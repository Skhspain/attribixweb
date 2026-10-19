import type { Metadata } from "next";
import { LOWEST_MONTHLY, PLANS, softwareApplicationJsonLd } from "@/lib/pricing";

const priceList = PLANS.map((p) => `${p.name} $${p.monthly}`).join(", ");

export const metadata: Metadata = {
  title: `Pricing: Plans from $${LOWEST_MONTHLY}/month | Attribix`,
  description: `Attribix pricing for Shopify stores: ${priceList} per month, with a free trial on every plan. All plans include server-side tracking and attribution.`,
  alternates: { canonical: "https://www.attribix.app/pricing" },
  openGraph: {
    title: "Pricing | Attribix",
    description: `Plans from $${LOWEST_MONTHLY}/month with a free trial. Billed through Shopify.`,
    url: "https://www.attribix.app/pricing",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Attribix" }],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationJsonLd()) }}
      />
      {children}
    </>
  );
}
