import React from 'react'
import './FeatureCard.css'

type FeatureCardProps = {
  title: string
  description: string
  linkText: string
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, linkText }) => {
  return (
    <article className="feature-card">
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
