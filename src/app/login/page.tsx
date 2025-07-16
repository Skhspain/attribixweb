"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ email, password });
  };

  return (
    <div className="login-page">
      {/* — Mosaic-chunked animated line behind the form — */}
      <svg
        className="animated-line"
        viewBox="0 0 800 200"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="mosaicGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%"   stopColor="#00FFD1" />
            <stop offset="50%"  stopColor="#0040A7" />
            <stop offset="100%" stopColor="#D260FF" />
          </linearGradient>
        </defs>

        {/*
          Draw 80 little squares along a zigzag path.
          The JS below computes each square’s x/y, then animates its opacity.
        */}
        {[...Array(80)].map((_, i) => {
          const t = i / 79;
          // x moves linearly from 0→800
          const x = t * 800;
          // y wobbles in a tapered sine wave
          const amplitude = (1 - Math.abs(2 * t - 1)) * 70;
          const y =
            150 +
            Math.sin(t * Math.PI * 3 + 1.2) * // 3 wiggles across
            amplitude;

          return (
            <rect
              key={i}
              x={x - 4}
              y={y - 4}
              width={8}
              height={8}
              fill="url(#mosaicGrad)"
              style={{
                opacity: 0,
                animation: `draw-mosaic 4s ease-out forwards`,
                animationDelay: `${i * 0.04}s`,
              }}
            />
          );
        })}
      </svg>

      {/* — Login form card — */}
      <form className="login-form" onSubmit={handleSubmit}>
        <h2 className="login-header">
          Log In to{" "}
          <Image
            src="/assets/icons/logo.svg"
            alt="Attribix logo"
            width={24}
            height={24}
            className="logo"
          />{" "}
          Attribix
        </h2>

        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit" className="cta">
          Log In
        </button>

        <p className="signup-prompt">
          Don’t have an account?{" "}
          <Link href="/signup" className="signup-link">
            Sign up
          </Link>
        </p>
      </form>
    </div>
  );
}
