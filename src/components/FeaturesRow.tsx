import React from 'react'
import FeatureCard from './FeatureCard'
import './FeaturesRow.css'

const FeaturesRow: React.FC = () => {
  return (
    <section className="features-row">
      <div className="features-row__content">
        <FeatureCard
          title="Flexible business financing"
          description="Access tailored credit lines to accelerate your company growth with competitive conditions and agile approvals."
          linkText="See conditions"
        />
        <FeatureCard
          title="Smart expense management tools"
          description="Automated dashboards to keep track of your treasury, schedule payments and monitor liquidity in real time."
          linkText="See conditions"
        />
        <FeatureCard
          title="Exclusive partner perks"
          description="Unlock discounts in partner ecosystems and enjoy preferential rates on services selected for NovaBank clients."
          linkText="See conditions"
        />
      </div>
    </section>
  )
}

export default FeaturesRow
