import type { Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";
import Script from "next/script";
import "./globals.css";
import FacebookPixel from "@/components/FacebookPixel";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.attribix.app"),
  title: "Attribix — Smarter Attribution for Shopify",
  description: "Attribix gives Shopify stores iOS-proof attribution, true ROAS across Meta & Google, email, reviews, social scheduling and SEO — in one dashboard.",
  verification: { google: "78Mov8JY9-aDSccHncqb6tmzMRQVVqGYqsJF9gGWD0k" },
  openGraph: {
    type: "website",
    siteName: "Attribix",
    title: "Attribix — Smarter Attribution for Shopify",
    description: "iOS-proof attribution, true ROAS, email, reviews, SEO — one dashboard for Shopify stores.",
    url: "https://www.attribix.app",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Attribix dashboard" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Attribix — Smarter Attribution for Shopify",
    description: "iOS-proof attribution, true ROAS, email, reviews, SEO — one dashboard for Shopify stores.",
    images: ["/og-image.png"],
  },
  alternates: { canonical: "https://www.attribix.app" },
};

const ORG_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Attribix",
  url: "https://www.attribix.app",
  logo: "https://www.attribix.app/assets/logo.svg",
  sameAs: [],
};

const WEBSITE_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Attribix",
  url: "https://www.attribix.app",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <body className="bg-[#0f172a] text-white antialiased">
          <Script
            id="org-jsonld"
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(ORG_JSON_LD) }}
          />
          <Script
            id="website-jsonld"
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(WEBSITE_JSON_LD) }}
          />
          <Script src="https://www.googletagmanager.com/gtag/js?id=G-19LWBH2P53" strategy="afterInteractive" />
          <Script id="gtag-init" strategy="afterInteractive">{`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-19LWBH2P53');
          `}</Script>
          <FacebookPixel />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
