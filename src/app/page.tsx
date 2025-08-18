// File: attribixweb/attribixweb/src/app/page.tsx
import React from 'react';
import Image from 'next/image';

export default function HomePage() {
  return (
    <>
      <div className="intro-gradient">
        <header className="hero">
          {/* —— Navigation —— */}
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

          {/* —— Hero content —— */}
          <div className="hero-content">
            <h1>Smarter Attribution. Bigger Impact.</h1>
            <button className="cta">Connect your project</button>
          </div>

          {/* —— Chart overlay —— */}
          <div className="hero-chart">
            {/* Insert your chart SVG here, e.g.: */}
            {/* <Image src="/assets/icons/chart.svg" width={800} height={400} /> */}
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
            <h3>Accurate Tracking</h3>
            <p>Track your ads with precision and confidence.</p>
          </div>
          <div className="feature">
            <Image
              src="/assets/icons/icon-privacy.svg"
              alt="Privacy-Compliant"
              width={48}
              height={48}
            />
            <h3>Privacy-Compliant</h3>
            <p>Ensure your data aligns with global privacy standards.</p>
          </div>
          <div className="feature">
            <Image
              src="/assets/icons/icon-insights.svg"
              alt="Data-Driven Insights"
              width={48}
              height={48}
            />
            <h3>Data-Driven Insights</h3>
            <p>Make informed decisions based on accurate analytics.</p>
          </div>
          <div className="feature">
            <Image
              src="/assets/icons/icon-realtime.svg"
              alt="Real-Time Analytics"
              width={48}
              height={48}
            />
            <h3>Real-Time Analytics</h3>
            <p>Access live performance data for your campaigns.</p>
          </div>
        </section>
      </div>
      {/* …other page sections go here */}
    </>
  );
}