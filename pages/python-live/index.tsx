import React from 'react'
// My components
import Footer from '../../components/Footer'
import Hero from '../../components/Pages/Bootcamps/Hero'
import Metrics from '../../components/Pages/Bootcamps/Metrics'
import Navbar from '../../components/Navbar'
import Testimonials from '../../components/Pages/Home/Testimonials'
import TransformYourLife from '../../components/Pages/Home/TransformYourLife'
import Program from '../../components/Pages/Bootcamps/Program'
// Data
import HeroData from '../../config/bootcamps/hero-data.json'
import MetricsBootcamps from '../../config/bootcamps/metrics.json'
import TestimonialData from '../../config/testimonials-data.json'
import ProgramData from '../../config/bootcamps/program-data.json'
export default function PythonLive () {
  return (
    <>
      <Navbar />
      <Hero bootcamp={HeroData.python} />
      <Metrics metrics={MetricsBootcamps.python} />
      <Program
        subtitle={ProgramData.subtitle}
        cyanText={ProgramData.cyanText}
        whiteText={ProgramData.whiteText}
        bootcamp={ProgramData.python}

      />
      <Testimonials testimonials={TestimonialData} />
      <TransformYourLife />
      <Footer />
    </>
  )
}
