"use client";

import { useEffect } from "react";
import { useParams } from "next/navigation";

const SHOPIFY_APP_URL = "https://apps.shopify.com/attribix-app";

export default function ChannelRedirectPage() {
  const params = useParams();
  const channel = Array.isArray(params.channel) ? params.channel[0] : params.channel ?? "unknown";
  const target = `${SHOPIFY_APP_URL}?ref=${encodeURIComponent(channel)}`;

  useEffect(() => {
    if (typeof window !== "undefined" && typeof (window as any).gtag === "function") {
      (window as any).gtag("event", "shopify_cta_click", { event_category: "acquisition", channel });
    }

    const eventId = crypto.randomUUID();
    if (typeof window !== "undefined" && typeof (window as any).fbq === "function") {
      (window as any).fbq("track", "Lead", {}, { eventID: eventId });
    }
    fetch("/api/fb-event", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ eventName: "Lead", eventId, customData: { channel } }),
    }).catch(() => {});

    window.location.replace(target);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [channel]);

  return (
    <div className="min-h-screen bg-[#030712] flex items-center justify-center px-4">
      <div className="text-center">
        <p className="text-white/50 text-sm mb-3">Taking you to the Shopify App Store…</p>
        <a href={target} className="text-cyan-400 hover:text-cyan-300 underline underline-offset-4 text-sm">
          Click here if you're not redirected
        </a>
      </div>
    </div>
  );
}
