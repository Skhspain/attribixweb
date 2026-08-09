// src/lib/consent.ts
// Shared consent state: read/write the visitor's cookie preference and
// broadcast changes so components (FacebookPixel, the consent banner)
// can react without a page reload.

export const CONSENT_STORAGE_KEY = "attribix_consent";
export const CONSENT_EVENT = "attribix-consent-changed";

export type ConsentState = {
  analytics: boolean;
  marketing: boolean;
  decidedAt: string;
};

export function getStoredConsent(): ConsentState | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.localStorage.getItem(CONSENT_STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    if (typeof parsed?.analytics === "boolean" && typeof parsed?.marketing === "boolean") {
      return parsed;
    }
    return null;
  } catch {
    return null;
  }
}

export function setStoredConsent(state: Omit<ConsentState, "decidedAt">) {
  if (typeof window === "undefined") return;
  const full: ConsentState = { ...state, decidedAt: new Date().toISOString() };
  try {
    window.localStorage.setItem(CONSENT_STORAGE_KEY, JSON.stringify(full));
  } catch {
    // ignore storage failures (private browsing etc.)
  }
  window.dispatchEvent(new CustomEvent<ConsentState>(CONSENT_EVENT, { detail: full }));
}

/** Re-open the preferences banner (used by the Footer "Cookie preferences" link). */
export function reopenConsentBanner() {
  if (typeof window === "undefined") return;
  window.dispatchEvent(new Event("attribix-consent-reopen"));
}
