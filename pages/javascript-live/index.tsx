import React from 'react'
// My components
import CareerCoach from '../../components/Pages/Bootcamps/CareerCoach'
import Footer from '../../components/Footer'
import Goals from '../../components/Pages/Bootcamps/Goals'
import Hero from '../../components/Pages/Bootcamps/Hero'
import Metrics from '../../components/Pages/Bootcamps/Metrics'
import Navbar from '../../components/Navbar'
import Testimonials from '../../components/Pages/Home/Testimonials'
import TransformYourLife from '../../components/Pages/Home/TransformYourLife'
import Program from '../../components/Pages/Bootcamps/Program'
import Investment from '../../components/Pages/Bootcamps/Investment'
import Scholarship from '../../components/Pages/Bootcamps/Scholarship'
// Data
import CareerData from '../../config/bootcamps/career-data.json'
import GoalsData from '../../config/bootcamps/goals.json'
import HeroData from '../../config/bootcamps/hero-data.json'
import MetricsBootcamps from '../../config/bootcamps/metrics.json'
import TestimonialData from '../../config/testimonials-data.json'
import ProgramData from '../../config/bootcamps/program.json'
import InvestmentData from '../../config/bootcamps/investment.json'

export default function JavascriptLive () {
  return (
    <>
      <Navbar />
      <section id='javascript-live-page'>
        <Hero bootcamp={HeroData.javascript} />
        <Metrics metrics={MetricsBootcamps.javascript} />
        <Goals infoCards={GoalsData.cards} />
        <Program
          subtitle={ProgramData.subtitle}
          cyanText={ProgramData.cyanText}
          whiteText={ProgramData.whiteText}
          bootcamp={ProgramData.javascript}
        />
        <CareerCoach infoCards={CareerData.cards} />
        <Testimonials testimonials={TestimonialData} isGray />
        <Investment investment={InvestmentData.javascript} />
        <Scholarship />
        <TransformYourLife />
      </section>

      <Footer />
    </>
  )
}
