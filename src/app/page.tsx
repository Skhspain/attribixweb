// src/app/page.tsx
"use client";

import React from "react";
import { FEATURES } from "./settings";

export default function Page() {
  return (
    <>
      {/* HERO + NAVBAR */}
      <section
        className="relative min-h-[80vh] flex flex-col justify-center px-6 text-white"
        style={{
          background:
            "linear-gradient(90deg, rgba(12,2,38,1) 0%, rgba(1,58,107,1) 100%)",
        }}
      >
        <header className="absolute inset-x-0 top-0 flex items-center justify-between p-6 z-20 bg-gradient-to-b from-black/50 to-transparent">
          <a href="#" className="text-2xl font-bold">
            Attribix
          </a>
          <ul className="flex gap-8">
            {["Features", "Pricing", "Blog", "Contact"].map((label) => (
              <li key={label}>
                <a
                  href={`#${label.toLowerCase()}`}
                  className="text-white hover:text-purple-400 transition-colors"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="/login"
            className="ml-6 px-4 py-2 bg-blue-600 rounded-full font-semibold text-white hover:bg-blue-500 transition-colors"
          >
            Log In
          </a>
        </header>

        <div className="mt-24 max-w-2xl">
          <h1 className="text-5xl font-extrabold leading-tight mb-4">
            attribix.com
            <br />
            Smarter Attribution.
            <br />
            Bigger Impact.
          </h1>
          <p className="text-lg opacity-80 mb-8">
            Please entrust proof of your analytics.
          </p>
          <a
            id="connect"
            href="#connect"
            className="inline-block px-8 py-3 bg-gradient-to-r from-blue-500 to-teal-400 rounded-full font-semibold hover:opacity-90 transition-opacity"
          >
            Connect your project
          </a>
        </div>
      </section>

      {/* FEATURES GRID */}
      <section className="-mt-16 bg-white rounded-t-3xl shadow-lg p-8 grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {FEATURES.map(({ icon: Icon, title, desc }, i) => (
          <div
            key={i}
            className="bg-gray-50 rounded-2xl p-6 flex flex-col items-center text-center"
          >
            <Icon className="w-12 h-12 mb-4 text-blue-500" />
            <h3 className="font-bold text-lg mb-2 text-gray-900">{title}</h3>
            <p className="text-gray-600 text-sm">{desc}</p>
          </div>
        ))}
      </section>
    </>
  );
}
