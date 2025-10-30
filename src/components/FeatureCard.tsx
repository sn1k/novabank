import React, { type ReactNode } from 'react'
import './FeatureCard.css'

type FeatureCardProps = {
  title: string
  description: string
 import React, { ReactNode } from 'react'
import './FeatureCard.css'

type FeatureCardProps = {
  title: string
  description: string
  linkText: string
  icon: ReactNode
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, linkText, icon }) => {
  return (
    <article className="feature-card">
      <div aria-hidden="true" className="feature-card__icon">
        {icon}
      </div>
      <div className="feature-card__body">
        <h3 className="feature-card__title">{title}</h3>
        <p className="feature-card__description">{description}</p>
      </div>
      <a className="feature-card__link" href="#">
        {linkText}
      </a>
    </article>
  )
}

export default FeatureCard

  )
}

export default FeatureCard
