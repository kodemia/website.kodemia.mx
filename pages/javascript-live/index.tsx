import React from 'react'
// My components
import Navbar from '../../components/Navbar'
import Hero from '../../components/Pages/Bootcamps/Hero'
// Data
import HeroData from '../../config/bootcapms/hero-data.json'

export default function JavascriptLive () {
  return (
    <>
      <Navbar />
      <Hero bootcamp={HeroData.javascript} />
    </>
  )
}
