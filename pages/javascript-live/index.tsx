import React from 'react'
// My components
import Navbar from '../../components/Navbar'
import Hero from '../../components/Pages/Bootcamps/Hero'
import Testimonials from '../../components/Pages/Home/Testimonials'
import TransformYourLife from '../../components/Pages/Home/TransformYourLife'
// Data
import HeroData from '../../config/bootcapms/hero-data.json'
import TestimonialData from '../../config/testimonials-data.json'

export default function JavascriptLive () {
  return (
    <>
      <Navbar />
      <Hero bootcamp={HeroData.javascript} />
      <Testimonials testimonials={TestimonialData} />
      <TransformYourLife />
    </>
  )
}
