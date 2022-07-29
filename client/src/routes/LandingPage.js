import React from 'react'
import Navbar from '../components/layouts/navbar/navbar'
import Hero from '../components/layouts/hero/hero'
import Teams from '../components/layouts/design/design-for-teams'
import Works from '../components/layouts/works/how-it-works'
import Features from '../components/layouts/features/features'
import Footer from '../components/layouts/footer/footer'

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