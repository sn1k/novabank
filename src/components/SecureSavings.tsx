import React from 'react'
import './SecureSavings.css'

const SecureSavings: React.FC = () => {
  return (
    <section className="secure-savings">
      <div className="secure-savings__inner">
        <div className="secure-savings__content">
          <h2 className="secure-savings__title">A secure option for your savings</h2>
          <p className="secure-savings__description">With the backing and solvency of Nova Bank.</p>
          <button className="secure-savings__cta" type="button">
            Create a business account
          </button>
        </div>
        <div className="secure-savings__logo" aria-hidden="true">
          NovaBank
        </div>
      </div>
    </section>
  )
}

export default SecureSavings
