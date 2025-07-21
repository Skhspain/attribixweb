// src/app/page.tsx
import Image from 'next/image'

export default function HomePage() {
  return (
    <div className="intro-gradient text-white">
      <header className="hero">
        <nav className="nav">
          <div className="logo-wrapper flex items-center gap-2">
            <Image src="/favicon.ico" alt="Attribix logo" width={32} height={32} />
            <span className="text-2xl font-bold">Attribix</span>
          </div>
          <div className="nav-actions flex items-center gap-8">
            <ul className="nav-links flex gap-6 list-none">
              <li><a href="#" className="">Features</a></li>
              <li><a href="#" className="">Pricing</a></li>
              <li><a href="#" className="">Blog</a></li>
              <li><a href="#" className="">Contact</a></li>
            </ul>
            <a href="/login" className="login-button px-4 py-2 bg-blue-600 rounded-full hover:bg-blue-700">
              Log In
            </a>
          </div>
        </nav>

        <div className="hero-content max-w-xl p-16">
          <h1 className="text-6xl font-extrabold leading-tight">
            Smarter<br/>Attribution.<br/>Bigger Impact.
          </h1>
          <button className="cta mt-8 px-6 py-3 bg-blue-500 rounded-full font-semibold hover:bg-blue-600">
            Connect your project
          </button>
        </div>
      </header>

      <section className="features bg-gray-50 py-16 flex justify-around">
        {/* Four feature cards… */}
      </section>
    </div>
  )
}
