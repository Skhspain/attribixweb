// src/app/settings.ts

export interface Feature {
  /** Filename of the SVG in public/assets/icons */
  icon: string;
  title: string;
  desc: string;
}

export const FEATURES: Feature[] = [
  {
    icon: "icon-accurate.svg",
    title: "Accurate Tracking",
    desc: "Track every touchpoint so you know what works.",
  },
  {
    icon: "icon-privacy.svg",
    title: "Privacy-Compliant",
    desc: "Ensure your data remains safe and GDPR-/CCPA-friendly.",
  },
  {
    icon: "icon-insights.svg",
    title: "Data-Driven Insights",
    desc: "Surface actionable metrics to drive decisions.",
  },
  {
    icon: "icon-realtime.svg",
    title: "Real-Time Analytics",
    desc: "Access live campaign performance at a glance.",
  },
];
