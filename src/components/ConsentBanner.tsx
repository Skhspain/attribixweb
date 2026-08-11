"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { getStoredConsent, setStoredConsent } from "@/lib/consent";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

function updateGoogleConsent(analytics: boolean, marketing: boolean) {
  window.gtag?.("consent", "update", {
    analytics_storage: analytics ? "granted" : "denied",
    ad_storage: marketing ? "granted" : "denied",
    ad_user_data: marketing ? "granted" : "denied",
    ad_personalization: marketing ? "granted" : "denied",
  });
}

export default function ConsentBanner() {
  const [visible, setVisible] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [analytics, setAnalytics] = useState(true);
  const [marketing, setMarketing] = useState(true);

  useEffect(() => {
    if (!getStoredConsent()) setVisible(true);
    const reopen = () => {
      const existing = getStoredConsent();
      if (existing) {
        setAnalytics(existing.analytics);
        setMarketing(existing.marketing);
      }
      setVisible(true);
    };
    window.addEventListener("attribix-consent-reopen", reopen);
    return () => window.removeEventListener("attribix-consent-reopen", reopen);
  }, []);

  function acceptAll() {
    updateGoogleConsent(true, true);
    setStoredConsent({ analytics: true, marketing: true });
    setVisible(false);
  }

  function rejectAll() {
    updateGoogleConsent(false, false);
    setStoredConsent({ analytics: false, marketing: false });
    setVisible(false);
  }

  function saveChoices() {
    updateGoogleConsent(analytics, marketing);
    setStoredConsent({ analytics, marketing });
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-[100] px-4 pb-4 sm:px-6 sm:pb-6">
      <div className="mx-auto max-w-xl rounded-2xl border border-white/10 bg-[#0b1220]/95 backdrop-blur-md p-5 shadow-2xl">
        <p className="text-sm text-white/70 leading-relaxed">
          We use cookies for analytics and ad measurement. You can accept
          all, reject non-essential cookies, or choose what to allow.{" "}
          <Link href="/privacy" className="underline underline-offset-2 hover:text-white">
            Privacy policy
          </Link>
          .
        </p>

        {expanded && (
          <div className="mt-4 space-y-3 border-t border-white/10 pt-4">
            <label className="flex items-start gap-3 text-sm text-white/70">
              <input
                type="checkbox"
                checked={analytics}
                onChange={(e) => setAnalytics(e.target.checked)}
                className="mt-0.5 h-4 w-4 rounded border-white/20 bg-transparent accent-cyan-500"
              />
              <span>
                <span className="font-medium text-white/90">Analytics</span> — helps us understand
                which pages get used (Google Analytics).
              </span>
            </label>
            <label className="flex items-start gap-3 text-sm text-white/70">
              <input
                type="checkbox"
                checked={marketing}
                onChange={(e) => setMarketing(e.target.checked)}
                className="mt-0.5 h-4 w-4 rounded border-white/20 bg-transparent accent-cyan-500"
              />
              <span>
                <span className="font-medium text-white/90">Marketing</span> — lets Meta measure
                ad performance (Meta Pixel).
              </span>
            </label>
          </div>
        )}

        <div className="mt-4 flex flex-wrap items-center gap-2.5">
          <button
            type="button"
            onClick={acceptAll}
            className="rounded-lg bg-white px-4 py-2 text-sm font-semibold text-gray-900 hover:bg-slate-100 transition"
          >
            Accept all
          </button>
          <button
            type="button"
            onClick={rejectAll}
            className="rounded-lg border border-white/15 px-4 py-2 text-sm font-semibold text-white/80 hover:bg-white/5 transition"
          >
            Reject non-essential
          </button>
          {expanded ? (
            <button
              type="button"
              onClick={saveChoices}
              className="rounded-lg border border-white/15 px-4 py-2 text-sm font-semibold text-white/80 hover:bg-white/5 transition"
            >
              Save choices
            </button>
          ) : (
            <button
              type="button"
              onClick={() => setExpanded(true)}
              className="text-sm text-white/40 hover:text-white/70 transition underline underline-offset-2"
            >
              Choose what to allow
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
