"use client";

import React from "react";
import Sidebar from "@/components/Sidebar";

export default function AnalyticsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // full-page light gray background, default dark text
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <div className="flex flex-1 gap-6 p-6">
        <Sidebar />

        {/* main panel */}
        <div className="flex-1 bg-white border border-gray-200 rounded-2xl shadow-sm p-8 overflow-auto">
          {children}
        </div>
      </div>
    </div>
  );
}
