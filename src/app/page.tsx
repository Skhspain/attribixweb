// src/app/page.tsx
"use client";

import React from "react";          // still safe to import
import { FEATURES } from "./settings";

export default function Page() {
  return (
    <>
      {/* NAVBAR */}
      <header className="absolute inset-x-0 top-0 flex items-center justify-between p-6 z-20">
        <a href="#" className="text-white text-2xl font-bold">
          Attribix
        </a>
        <ul className="flex gap-8 text-white">
          {["Features","Pricing","Blog","Contact"].map((l) => (
            <li key={l}>
              <a
                href={`#${l.toLowerCase()}`}
                className="transition-colors hover:text-purple-400"
              >
                {l}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="/login"
          className="ml-6 px-4 py-2 bg-blue-600 rounded-full font-semibold text-white transition-colors hover:bg-blue-500"
        >
          Log In
        </a>
      </header>

      {/* HERO */}
      <section
        className="min-h-[80vh] flex flex-col justify-center px-6 text-white"
        style={{ background: "linear-gradient(90deg,#0c0226,#013a6b)" }}
      >
        <h1 className="text-5xl font-extrabold leading-tight mb-4">
          attribix.com<br/>
          Smarter Attribution.<br/>
          Bigger Impact.
        </h1>
        <p className="text-lg opacity-80 mb-8">
          Please entrust proof of your analytics.
        </p>
        <a
          id="connect"
          href="#connect"
          className="inline-block px-8 py-3 bg-gradient-to-r from-blue-500 to-teal-400 rounded-full font-semibold transition-opacity hover:opacity-90"
        >
          Connect your project
        </a>
      </section>

      {/* FEATURES GRID */}
      <section className="-mt-16 bg-white rounded-t-3xl shadow-lg p-8 grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {FEATURES.map(({ icon, title, desc }, i) => (
          <div
            key={i}
            className="bg-gray-50 rounded-2xl p-6 flex flex-col items-center text-center"
          >
            <img
              src={`/assets/icons/${icon}`}
              alt={title}
              className="w-12 h-12 mb-4"
            />
            <h3 className="font-bold text-lg mb-2 text-gray-900">{title}</h3>
            <p className="text-gray-600 text-sm">{desc}</p>
          </div>
        ))}
      </section>
    </>
  );
}
