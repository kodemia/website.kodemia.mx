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
import BgVideoSrc from 'config/bg-video-src.json'
import GoalsData from 'config/bootcamps/goals-python.json'
import HeroData from 'config/bootcamps/hero-data-python.json'
import InvestmentData from 'config/bootcamps/investment-python.json'
import MetricsBootcamps from 'config/bootcamps/metrics-python.json'
import ProgramData from 'config/bootcamps/program-python.json'
import SupportData from 'config/bootcamps/support-data-python.json'
import TestimonialData from 'config/testimonials-data.json'

export default function PythonLive () {
  return (
    <>
      <Seo
        title='Kodemia | Bootcamp Back End con Python'
      />
      <Navbar />
      <section id='python-live-page'>
        <Hero bootcamp={HeroData.python} video={BgVideoSrc.python} />
        <Metrics metrics={MetricsBootcamps.python} />
        <Goals achievement={GoalsData.python} />
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
        <Support support={SupportData.python} />
        <TransformYourLife />
      </section>
      <Footer />
    </>
  )
}
