import React from 'react'
import Header from '../components/Header'
import HeroSection from '../components/HeroSection'
import FeaturesRow from '../components/FeaturesRow'
import SecureSavings from '../components/SecureSavings'
import Footer from '../components/Footer'
import './Home.css'

const Home: React.FC = () => {
  return (
    <div className="home">
      <Header />
      <main className="home__main">
        <HeroSection />
        <FeaturesRow />
        <SecureSavings />
      </main>
      <Footer />
    </div>
  )
}

export default Home
