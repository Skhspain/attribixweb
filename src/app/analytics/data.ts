// src/app/analytics/data.ts
export interface ActivityRow {
  date: string;
  user: string;
  activity: string;
}

export const recentActivity: ActivityRow[] = [
  { date: "Jan 1", user: "John Doe", activity: "Signed up" },
  { date: "Jan 2", user: "Jane Smith", activity: "Purchase" },
  { date: "Jan 3", user: "Jane Doe", activity: "Purchase" },
];

export const integrations = [
  "Meta Pixel Active",
  "Google Tracking Active",
  "GA4 Active",
];
