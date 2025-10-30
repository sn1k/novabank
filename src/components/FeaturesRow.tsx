import React from 'react'
import featureOneIcon from '../assets/feature-1.svg'
import featureTwoIcon from '../assets/feature-2.svg'
import featureThreeIcon from '../assets/feature-3.svg'
import FeatureCard from './FeatureCard'
import './FeaturesRow.css'

const FeaturesRow: React.FC = () => {
  return (
    <section className="features-row" id="features">
      <div className="features-row__content">
        <FeatureCard
          title="Flexible business financing"
          description="Access tailored credit lines to accelerate your company growth with competitive conditions."
          linkText="See conditions"
          icon={featureOneIcon}
          iconAlt="Illustration representing flexible business financing"
        />
        <FeatureCard
          title="Smart expense management tools"
          description="Automated dashboards to schedule payments and monitor liquidity in real time."
          linkText="See conditions"
          icon={featureTwoIcon}
          iconAlt="Illustration representing smart expense management"
        />
        <FeatureCard
          title="Exclusive partner perks"
          description="Unlock discounts across our partner network with preferential rates for NovaBank clients."
          linkText="See conditions"
          icon={featureThreeIcon}
          iconAlt="Illustration representing partner perks"
        />
      </div>
    </section>
  )
}

export default FeaturesRow
