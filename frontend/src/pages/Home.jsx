import React from 'react'
import PropertyListings from '../components/PropertyListings'
import PerfectMatch from '../components/PerfectMatch'
import Testimonials from '../components/Testimonials'
import LatestListing from '../components/LatestListing'
import NewFeatures from '../components/NewFeatures'
import FeatureSection from '../components/FeatureSection'
import HeroBannerFour from '../components/HeroBannerFour'
import CategorySection from '../components/CategorySection'
import FeatureSectionNine from '../components/FeatureSectionNine'


const Home = () => {
  return (
    <>
        {/* <Hero /> */}
        <HeroBannerFour />
        <PropertyListings />
        <FeatureSectionNine />
        <CategorySection />
        <FeatureSection />

        <NewFeatures />
       

        {/* <LatestListing /> */}

        <PerfectMatch />
      
       <Testimonials />
    </>
  )
}

export default Home