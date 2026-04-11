import type { Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";
import Script from "next/script";
import "./globals.css";
import FacebookPixel from "@/components/FacebookPixel";

export const metadata: Metadata = {
  title: "Attribix",
  description: "Smarter Attribution. Bigger Impact.",
  verification: {
    google: "78Mov8JY9-aDSccHncqb6tmzMRQVVqGYqsJF9gGWD0k",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <body className="bg-[#0f172a] text-white antialiased">
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
