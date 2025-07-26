// src/app/settings.ts
import {
  IconArrowUpRight,
  IconCheck,
  IconChartPie,
  IconDeviceAnalytics,
} from "@tabler/icons-react";

export interface Feature {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  desc: string;
}

export const FEATURES: Feature[] = [
  {
    icon: IconArrowUpRight,
    title: "Accurate Tracking",
    desc: "Track every touchpoint so you know what works.",
  },
  {
    icon: IconCheck,
    title: "Privacy-Compliant",
    desc: "Ensure your data remains safe and GDPR-/CCPA-friendly.",
  },
  {
    icon: IconChartPie,
    title: "Data-Driven Insights",
    desc: "Surface actionable metrics to drive decisions.",
  },
  {
    icon: IconDeviceAnalytics,
    title: "Real-Time Analytics",
    desc: "Access live campaign performance at a glance.",
  },
];
