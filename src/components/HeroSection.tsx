import React from 'react'
import './HeroSection.css'

const HeroSection: React.FC = () => {
  return (
    <section className="hero">
      <div aria-hidden="true" className="hero__overlay" />
      <div className="hero__content">
        <h1 className="hero__title">Built for companies ready to grow</h1>
        <p className="hero__subtitle">
          Enjoy 2.27% TIN and 2.25% APR for 6 months with your new corporate savings account.
        </p>
        <div className="hero__actions">
          <button className="hero__cta" type="button">
            Create a business account
          </button>
          <a className="hero__secondary-action" href="#features">
            Explore features
          </a>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
