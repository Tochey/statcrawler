import React from 'react'
import Navbar from '../layouts/navbar/navbar'
import Hero from '../layouts/hero/hero'
import Teams from '../layouts/design/design-for-teams'
import Works from '../layouts/works/how-it-works'
import Features from '../layouts/features/features'
import Footer from '../layouts/footer/footer'

const LandingPage = () => {
  return (
    <div className='App'>  
    <Navbar/>
    <Hero/>
    <Teams/>
    <Works/>
    <Features/>
    <Footer/>
    </div>
  )
}

export default LandingPage