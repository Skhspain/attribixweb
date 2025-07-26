// File: src/app/ClientStyles.tsx
"use client";

export default function ClientStyles() {
  return (
    <style jsx global>{`
      /* ================ reset & base ================ */
      *,
      *::before,
      *::after {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
      }

      html,
      body,
      #__next {
        height: 100%;
        font-family: "Inter", sans-serif;
        color: #111;
      }

      body {
        display: flex;
        flex-direction: column;
        min-height: 100vh;
      }

      /* ================ footer ================ */
      footer {
        margin-top: auto;
        text-align: center;
        padding: 1rem;
        font-size: 0.875rem;
        color: #666;
      }

      /* ================ intro gradient ================ */
      .intro-gradient {
        min-height: calc(100vh + 300px);
        background: linear-gradient(
          135deg,
          #000416 0%,
          #180440 33%,
          #004077 66%,
          #09013a 100%
        );
      }

      /* ================ hero ================ */
      .hero {
        position: relative;
        min-height: 100vh;
        overflow: hidden;
      }
      .hero-content {
        position: relative;
        z-index: 10;
        max-width: 500px;
        padding: 20vh 1rem 0 5rem;
      }
      .hero-content h1 {
        font-size: 4rem;
        font-weight: 800;
        line-height: 1.1;
        color: white;
      }
      .cta {
        margin-top: 2rem;
        padding: 1rem 2rem;
        border-radius: 999px;
        background: #3b82f6;
        color: white;
        font-weight: 600;
        cursor: pointer;
        transition: background 0.3s;
      }
      .cta:hover {
        background: #2563eb;
      }

      /* ================ nav ================ */
      .nav {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 2rem 4rem;
        z-index: 10;
      }
      .logo-text {
        font-size: 1.75rem;
        font-weight: 800;
        line-height: 1;
        color: #fff;
      }
      .nav-links {
        display: flex;
        gap: 2rem;
        list-style: none;
      }
      .nav-links a {
        color: #fff;
        font-weight: 600;
        text-decoration: none;
        transition: color 0.2s;
      }
      .nav-links a:hover {
        color: #e11d48;
      }
      .login-button {
        padding: 0.5rem 1rem;
        background: #3b82f6;
        color: #fff;
        border-radius: 999px;
        font-weight: 600;
        transition: background 0.3s;
        text-decoration: none;
      }
      .login-button:hover {
        background: #2563eb;
      }

      /* ================ features ================ */
      .features {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        gap: 2rem;
        padding: 4rem 2rem;
        background: #fff;
        color: #1f2937;
      }
      .feature {
        background: #f9fafb;
        border-radius: 0.5rem;
        padding: 2rem;
        max-width: 220px;
        text-align: center;
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
      }
      .feature-icon {
        height: 3rem;
        width: 3rem;
        margin: 0 auto 1rem;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .feature h3 {
        margin-bottom: 0.5rem;
        font-size: 1.25rem;
        font-weight: 600;
      }
      .feature p {
        font-size: 0.9rem;
        line-height: 1.4;
      }
    `}</style>
  );
}
