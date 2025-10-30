import React from 'react'
import FeatureCard from './FeatureCard'
import './FeaturesRow.css'

const FeaturesRow: React.FC = () => {
  const financingIcon = (
    <svg aria-hidden="true" viewBox="0 0 32 32">
      <path d="M6 18.5 13.2 24l12.8-16" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )

  const automationIcon = (
    <svg aria-hidden="true" viewBox="0 0 32 32">
      <path
        d="M6.5 8.5h19v6h-19zM6.5 17.5h11v6h-11zM19.5 17.5h6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="23" cy="20.5" r="1.8" />
    </svg>
  )

  const perksIcon = (
    <svg aria-hidden="true" viewBox="0 0 32 32">
      <path
        d="M16 6.8 20.4 14l7.1 1-5.2 5.2 1.2 7-7.5-3.9-7.5 3.9 1.2-7-5.2-5.2 7.1-1z"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
    </svg>
  )

  return (
    <section className="features-row" id="features">
      <div className="features-row__content">
        <FeatureCard
          title="Flexible business financing"
          description="Access tailored credit lines to accelerate your company growth with competitive conditions."
          linkText="See conditions"
          icon={financingIcon}
        />
        <FeatureCard
          title="Smart expense management tools"
          description="Automated dashboards to schedule payments and monitor liquidity in real time."
          linkText="See conditions"
