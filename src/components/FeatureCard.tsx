import React from 'react'
import './FeatureCard.css'

type FeatureCardProps = {
  title: string
  description: string
  linkText: string
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, linkText }) => {
  return (
    <div className="feature-card">
      <div className="feature-card__icon" aria-hidden="true" />
      <h3 className="feature-card__title">{title}</h3>
      <p className="feature-card__description">{description}</p>
      <a className="feature-card__link" href="#">
        {linkText}
      </a>
    </div>
  )
}

export default FeatureCard
