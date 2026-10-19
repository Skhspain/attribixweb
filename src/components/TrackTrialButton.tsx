"use client";

import MagneticButton from "@/components/MagneticButton";
import { SHOPIFY_APP_URL } from "@/lib/pricing";
import { trackTrialClick } from "@/lib/track";

export default function TrackTrialButton({
  children,
  className,
  location = "track_trial_button",
}: {
  children: React.ReactNode;
  className?: string;
  location?: string;
}) {
  return (
    <MagneticButton href={SHOPIFY_APP_URL} className={className} onClick={() => trackTrialClick(location)}>
      {children}
    </MagneticButton>
  );
}
