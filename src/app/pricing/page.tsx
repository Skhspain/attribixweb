"use client"
import React, { useState } from 'react'
import Image from 'next/image'

// PricingPage renders with site-wide header/nav styling
const tiers = [
  {
    name: 'Starter',
    priceMonthly: 29,
    priceAnnual: 290,
    features: ['Feature A', 'Feature B', 'Feature C'],
    popular: false,
  },
  {
    name: 'Pro',
    priceMonthly: 59,
    priceAnnual: 590,
    features: ['Everything in Starter', 'Feature D', 'Feature E'],
    popular: true,
  },
  {
    name: 'Enterprise',
    priceMonthly: 99,
    priceAnnual: 990,
    features: ['Everything in Pro', 'Custom integrations', 'Dedicated support'],
    popular: false,
  },
]

export default function PricingPage() {
  const [billing, setBilling] = useState<'monthly' | 'annual'>('monthly')

  return (
    <div className="intro-gradient min-h-screen flex flex-col">
      {/* Site header/navigation */}
      <nav className="nav">
        <div className="logo-wrapper">
          <Image src="/assets/icons/logo.svg" alt="Attribix logo" width={64} height={32} className="logo" />
          <span className="logo-text">Attribix</span>
        </div>
        <div className="nav-actions">
          <ul className="nav-links">
            <li><a href="/">Home</a></li>
            <li><a href="/pricing">Pricing</a></li>
            <li><a href="/blog">Blog</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
          <a href="/login" className="login-button">Log In</a>
        </div>
      </nav>
      {/* Pricing content */}
      <main className="flex-grow flex items-start justify-center py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl w-full">
          <h1 className="text-4xl font-extrabold text-center text-white mb-8">Pricing</h1>
          {/* Billing toggle */}
          <div className="flex justify-center mb-12">
            <button
              onClick={() => setBilling('monthly')}
              className={`px-4 py-2 font-medium rounded-l-md ${billing === 'monthly' ? 'bg-indigo-600 text-white' : 'bg-gray-700 text-gray-300'}`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBilling('annual')}
              className={`px-4 py-2 font-medium rounded-r-md ${billing === 'annual' ? 'bg-indigo-600 text-white' : 'bg-gray-700 text-gray-300'}`}
            >
              Annual
            </button>
          </div>
          {/* Tier cards */}
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {tiers.map((tier) => (
              <div
                key={tier.name}
                className={`flex flex-col rounded-lg border p-6 bg-[#09013a] shadow-lg ${
                  tier.popular ? 'border-indigo-500' : 'border-transparent'
                }`}
              >
                {tier.popular && (
                  <span className="self-end bg-indigo-600 px-3 py-1 text-xs font-semibold uppercase text-white rounded-full mb-4">
                    Most Popular
                  </span>
                )}
                <h2 className="text-xl font-semibold text-white text-center">{tier.name}</h2>
                <p className="mt-4 text-3xl font-extrabold text-white text-center">
                  ${billing === 'monthly' ? tier.priceMonthly : tier.priceAnnual}
                  <span className="text-base font-medium text-gray-400">/{billing}</span>
                </p>
                <ul className="mt-6 mb-6 space-y-3 text-gray-200">
                  {tier.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      <svg className="h-5 w-5 text-green-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 00-1.414 0L8 12.586 4.707 9.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l8-8a1 1 0 000-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="ml-3">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className="mt-auto w-full rounded-full bg-indigo-600 py-2 text-sm font-semibold text-white hover:bg-indigo-500">
                  Choose Plan
                </button>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}
