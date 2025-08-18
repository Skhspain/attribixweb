"use client";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line, Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const lineLabels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"];
const lineValues = [400, 600, 500, 700, 650, 800];

const barLabels = ["Facebook", "Google", "TikTok", "Email", "Direct"];
const barValues = [200, 250, 300, 350, 400];

// shared options for both charts
const baseOptions = {
  responsive: true,
  maintainAspectRatio: false,
  layout: { padding: { top: 12, bottom: 12, left: 12, right: 12 } },
  plugins: { legend: { display: false } },
  scales: {
    x: {
      grid: { display: false },
      border: { display: false },
      ticks: { color: "#9CA3AF", font: { size: 12 } },
    },
    y: {
      grid: { color: "#F3F4F6" },
      border: { display: false },
      ticks: { color: "#9CA3AF", font: { size: 12 }, stepSize: 100 },
    },
  },
};

export function OverviewChart() {
  return (
    <Line
      data={{
        labels: lineLabels,
        datasets: [
          {
            data: lineValues,
            borderColor: "#374151",
            borderWidth: 2,
            backgroundColor: "rgba(31,41,55,0.03)",
            tension: 0.4,
            pointRadius: 0,
            fill: true,
          },
        ],
      }}
      options={baseOptions}
    />
  );
}

export function SessionsChart() {
  return (
    <Bar
      data={{
        labels: barLabels,
        datasets: [
          {
            data: barValues,
            backgroundColor: "#374151",
            borderRadius: 4,
            maxBarThickness: 24,
          },
        ],
      }}
      options={baseOptions}
    />
  );
}
