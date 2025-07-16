// src/app/page.tsx
import React from 'react';
import Image from 'next/image';

export default function HomePage() {
  return (
    <div className="intro-gradient text-white">
      {/* —— Header / Hero section —— */}
      <header className="hero">
        <nav className="nav">
          <div className="logo-wrapper">
            <Image
              src="/assets/icons/logo.svg"
              alt="Attribix logo"
              width={64}
              height={32}
              className="logo"
            />
            <span className="logo-text">Attribix</span>
          </div>
          <div className="nav-actions">
            <ul className="nav-links">
              <li><a href="#">Features</a></li>
              <li><a href="#">Pricing</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
            <a href="/login" className="login-button">Log In</a>
          </div>
        </nav>

        <div className="hero-content">
          <h1 className="text-6xl font-bold text-white">
            Smarter  
            <br />
            Attribution.  
            <br />
            Bigger  
            <br />
            Impact.
          </h1>
          <button className="cta text-white">Connect your project</button>
        </div>

        <div className="hero-chart">
          {/* optional chart goes here */}
        </div>
      </header>

      {/* —— Features row —— */}
      <section className="features">
        <div className="feature">
          <Image
            src="/assets/icons/icon-accurate.svg"
            alt="Accurate Tracking"
            width={48}
            height={48}
          />
          <h3 className="text-white">Accurate Tracking</h3>
          <p className="text-white/80">Track your ads with precision and confidence.</p>
        </div>
        <div className="feature">
          <Image
            src="/assets/icons/icon-privacy.svg"
            alt="Privacy-Compliant"
            width={48}
            height={48}
          />
          <h3 className="text-white">Privacy-Compliant</h3>
          <p className="text-white/80">Ensure your data aligns with global privacy standards.</p>
        </div>
        <div className="feature">
          <Image
            src="/assets/icons/icon-insights.svg"
            alt="Data-Driven Insights"
            width={48}
            height={48}
          />
          <h3 className="text-white">Data-Driven Insights</h3>
          <p className="text-white/80">Make informed decisions based on accurate analytics.</p>
        </div>
        <div className="feature">
          <Image
            src="/assets/icons/icon-realtime.svg"
            alt="Real-Time Analytics"
            width={48}
            height={48}
          />
          <h3 className="text-white">Real-Time Analytics</h3>
          <p className="text-white/80">Access live performance data for your campaigns.</p>
        </div>
      </section>
    </div>
  );
}