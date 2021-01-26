import React from 'react'
// My components
import CareerCoach from '../../components/Pages/Bootcamps/CareerCoach'
import Footer from '../../components/Footer'
import Goals from '../../components/Pages/Bootcamps/Goals'
import Hero from '../../components/Pages/Bootcamps/Hero'
import Investment from '../../components/Pages/Bootcamps/Investment'
import Metrics from '../../components/Pages/Bootcamps/Metrics'
import Navbar from '../../components/Navbar'
import Program from '../../components/Pages/Bootcamps/Program'
import Scholarship from '../../components/Pages/Bootcamps/Scholarship'
import Support from 'components/Pages/Bootcamps/Support'
import Testimonials from '../../components/Pages/Home/Testimonials'
import TransformYourLife from '../../components/Pages/Home/TransformYourLife'
// Data
import BgVideoSrc from 'config/bg-video-src.json'
import GoalsData from '../../config/bootcamps/goals.json'
import HeroData from '../../config/bootcamps/hero-data.json'
import InvestmentData from '../../config/bootcamps/investment.json'
import MetricsBootcamps from '../../config/bootcamps/metrics.json'
import ProgramData from '../../config/bootcamps/program.json'
import SupportData from 'config/bootcamps/support-data.json'
import TestimonialData from '../../config/testimonials-data.json'

export default function PythonLive () {
  return (
    <>
      <Navbar />
      <section id='python-live-page'>
        <Hero bootcamp={HeroData.python} video={BgVideoSrc.python} />
        <Metrics metrics={MetricsBootcamps.python} />
        <Goals infoCards={GoalsData.cards} />
        <Program
          subtitle={ProgramData.subtitle}
          cyanText={ProgramData.cyanText}
          whiteText={ProgramData.whiteText}
          bootcamp={ProgramData.python}
        />
        <CareerCoach />
        <Testimonials testimonials={TestimonialData} />
        <Investment investment={InvestmentData.python} />
        <Scholarship />
        <Support image={SupportData.image} infoCards={SupportData.cards} />
        <TransformYourLife />
      </section>
      <Footer />
    </>
  )
}
