"use client";

import { reopenConsentBanner } from "@/lib/consent";

export default function CookiePreferencesButton() {
  return (
    <button
      type="button"
      onClick={reopenConsentBanner}
      className="text-white/40 hover:text-white/70 transition-colors"
    >
      Cookie preferences
    </button>
  );
}
