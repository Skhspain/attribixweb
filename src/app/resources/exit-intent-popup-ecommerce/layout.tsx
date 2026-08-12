import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Should Ecommerce Stores Use Exit-Intent Popups?",
  description:
    "Exit-intent popups try to recover value from visitors who appear ready to leave. When they help, when they train customers to game a discount, and how to measure them properly.",
  alternates: { canonical: "https://www.attribix.app/resources/exit-intent-popup-ecommerce" },
  openGraph: {
    title: "Should Ecommerce Stores Use Exit-Intent Popups?",
    description: "An exit popup is worthwhile if it recovers more value than the friction and margin it creates.",
    url: "https://www.attribix.app/resources/exit-intent-popup-ecommerce",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Attribix" }],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
