"use client";

import React from "react";

export default function NeonCardInline({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="p-6 bg-white/5 rounded-xl border border-white/10 backdrop-blur-sm hover:border-cyan-400/60 transition-all duration-300 group cursor-pointer">
      <h3 className="text-xl font-semibold text-white group-hover:text-cyan-300 transition-colors">
        {title}
      </h3>
      <p className="mt-2 text-sm text-gray-400">{description}</p>
    </div>
  );
}
