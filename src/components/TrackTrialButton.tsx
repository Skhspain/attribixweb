"use client";

import MagneticButton from "@/components/MagneticButton";

declare global {
  interface Window {
    fbq: (...args: unknown[]) => void;
  }
}

export default function TrackTrialButton({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  async function handleClick() {
    const eventId = crypto.randomUUID();

    if (typeof window.fbq === "function") {
      window.fbq("track", "Lead", {}, { eventID: eventId });
    }

    fetch("/api/fb-event", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ eventName: "Lead", eventId }),
    }).catch(() => {});
  }

  return (
    <MagneticButton href="/login" className={className} onClick={handleClick}>
      {children}
    </MagneticButton>
  );
}
