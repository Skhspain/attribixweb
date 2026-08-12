import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How to Check Whether Google Ads Conversion Tracking Is Working",
  description:
    "A Google Ads conversion action can say 'active' and still record the wrong thing. How to confirm the entire purchase event, not just whether a tag exists.",
  alternates: { canonical: "https://www.attribix.app/resources/check-google-ads-conversion-tracking-working-shopify" },
  openGraph: {
    title: "How to Check Whether Google Ads Conversion Tracking Is Working",
    description: "Testing should confirm the entire purchase event: conversion ID, transaction ID, value, currency and timing.",
    url: "https://www.attribix.app/resources/check-google-ads-conversion-tracking-working-shopify",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Attribix" }],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
