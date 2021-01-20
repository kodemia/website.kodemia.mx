import React from 'react'
// My components
import Navbar from '../../components/Navbar'
import Hero from '../../components/Pages/Bootcamps/Hero'
import Testimonials from '../../components/Pages/Home/Testimonials'
import TransformYourLife from '../../components/Pages/Home/TransformYourLife'
import Program from '../../components/Pages/Bootcamps/Program'
// Data
import HeroData from '../../config/bootcapms/hero-data.json'
import TestimonialData from '../../config/testimonials-data.json'
import ProgramData from '../../config/bootcapms/program-data.json'

export default function JavascriptLive () {
  return (
    <>
      <Navbar />
      <Hero bootcamp={HeroData.javascript} />
      <Program
        subtitle={ProgramData.subtitle}
        cyanText={ProgramData.cyanText}
        whiteText={ProgramData.whiteText}
        bootcamp={ProgramData.javascript}

      />
      <Testimonials testimonials={TestimonialData} />
      <TransformYourLife />
    </>
  )
}
