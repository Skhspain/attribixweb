"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: integrate real auth
    console.log({ email, password });
  };

  return (
    <div className="login-page">
      <form className="login-form" onSubmit={handleSubmit}>
        {/* —— Heading with inline logo —— */}
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