import React from 'react'
import './FeatureCard.css'

type FeatureCardProps = {
  title: string
  description: string
  linkText: string
  icon: string
  iconAlt: string
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, linkText, icon, iconAlt }) => {
  return (
    <div className="feature-card">
      <img className="feature-card__icon" src={icon} alt={iconAlt} />
      <h3 className="feature-card__title">{title}</h3>
      <p className="feature-card__description">{description}</p>
      <a className="feature-card__link" href="#">
        {linkText}
      </a>
    </div>
  )
}

export default FeatureCard
