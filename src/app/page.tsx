// src/app/page.tsx
import Image from "next/image"

export default function HomePage() {
  return (
    <div className="intro-gradient text-white">
      <header className="hero">
        <nav className="nav">
          <div className="logo-wrapper">
            <Image src="/assets/icons/logo.svg" alt="Attribix logo" width={64} height={32} className="logo"/>
            <span className="logo-text">Attribix</span>
          </div>
          <div className="nav-actions">
            <ul className="nav-links flex gap-8">
              <li><a href="#">Features</a></li>
              <li><a href="#">Pricing</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
            <a href="/login" className="login-button">Log In</a>
          </div>
        </nav>
        <div className="hero-content">
          <h1 className="text-6xl font-bold leading-snug">
            Smarter<br/>Attribution.<br/>Bigger Impact.
          </h1>
          <button className="cta mt-8">Connect your project</button>
        </div>
      </header>
      <section className="features bg-gray-100 p-16 flex justify-around">
        {/* feature cards… */}
      </section>
    </div>
  )
}