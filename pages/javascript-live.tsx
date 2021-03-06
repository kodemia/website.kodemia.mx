import React from 'react'
// My components
import CareerCoach from 'components/Pages/Bootcamps/CareerCoach'
import Footer from 'components/Footer'
import Goals from 'components/Pages/Bootcamps/Goals'
import Hero from 'components/Pages/Bootcamps/Hero'
import Investment from 'components/Pages/Bootcamps/Investment'
import Metrics from 'components/Pages/Bootcamps/Metrics'
import Navbar from 'components/Navbar'
import Program from 'components/Pages/Bootcamps/Program'
import Scholarship from 'components/Pages/Bootcamps/Scholarship'
import Support from 'components/Pages/Bootcamps/Support'
import Testimonials from 'components/Pages/Home/Testimonials'
import TransformYourLife from 'components/Pages/Home/TransformYourLife'
import Seo from 'components/SEO'

// Data
import GoalsData from 'config/bootcamps/goals-javascript.json'
import HeroData from 'config/bootcamps/hero-data-javascript.json'
import InvestmentData from 'config/bootcamps/investment-javascript.json'
import MetricsBootcamps from 'config/bootcamps/metrics-javascript.json'
import ProgramData from 'config/bootcamps/program-javascript.json'
import SupportData from 'config/bootcamps/support-data-javascript.json'
import TestimonialData from 'config/testimonials-data.json'

export default function JavascriptLive () {
  return (
    <>
      <Seo
        title='Kodemia | Bootcamp FullStack con Javascript'
      />
      <Navbar />
      <section id='javascript-live-page'>
        <Hero bootcamp={HeroData} video='https://prismic-io.s3.amazonaws.com/kodemia/97b6755e-8623-4010-90e8-67a2c8830ccc_Video+fondo+JS.mp4' />
        <Metrics metrics={MetricsBootcamps} />
        <Goals achievement={GoalsData} />
        <Program
          subtitle={ProgramData.subtitle}
          cyanText={ProgramData.cyanText}
          whiteText={ProgramData.whiteText}
          bootcamp={ProgramData.javascript}
        />
        <CareerCoach />
        <Testimonials testimonials={TestimonialData} isGray />
        <Investment investment={InvestmentData} />
        <Scholarship />
        <Support support={SupportData} />
        <TransformYourLife />
      </section>
      <Footer />
    </>
  )
}
