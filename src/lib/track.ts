// Shared CTA tracking. Event names are kept identical to the ones already
// configured in GA4 / Meta (trial_click, demo_click, Lead) so existing
// conversions keep working; `cta_location` tells placements apart.
//
// gtag respects Consent Mode (set in the root layout). The Meta Lead event
// (Pixel and server-side CAPI) is only sent once the visitor has granted
// marketing consent, matching how FacebookPixel loads. It carries no form
// data, only an event ID used for Pixel/CAPI dedup.

import { getStoredConsent } from "./consent";

type Params = Record<string, unknown>;

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    fbq?: (...args: unknown[]) => void;
  }
}

export function gtagEvent(name: string, params?: Params) {
  if (typeof window !== "undefined") window.gtag?.("event", name, params);
}

export function sendMetaLead(customData?: Params) {
  if (!getStoredConsent()?.marketing) return;
  const eventId =
    typeof crypto !== "undefined" && "randomUUID" in crypto
      ? crypto.randomUUID()
      : `${Date.now()}-${Math.random().toString(36).slice(2)}`;
  if (typeof window !== "undefined") window.fbq?.("track", "Lead", {}, { eventID: eventId });
  fetch("/api/fb-event", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ eventName: "Lead", eventId, ...(customData ? { customData } : {}) }),
    keepalive: true,
  }).catch(() => {});
}

export function trackTrialClick(location: string) {
  gtagEvent("trial_click", { event_category: "cta", cta_location: location });
  sendMetaLead();
}

export function trackDemoClick(location: string) {
  gtagEvent("demo_click", { event_category: "cta", cta_location: location });
}

export function trackConsultationClick(location: string) {
  gtagEvent("consultation_click", { event_category: "cta", cta_location: location });
}
