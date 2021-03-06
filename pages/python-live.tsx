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
        <Hero bootcamp={HeroData} video='https://prismic-io.s3.amazonaws.com/kodemia/91cf67a3-e0d4-4158-93ee-eded5bd49514_Video+fondo+Python.mp4' />
        <Metrics metrics={MetricsBootcamps} />
        <Goals achievement={GoalsData} />
        <Program
          subtitle={ProgramData.subtitle}
          cyanText={ProgramData.cyanText}
          whiteText={ProgramData.whiteText}
          bootcamp={ProgramData.python}
        />
        <CareerCoach />
        <Testimonials testimonials={TestimonialData} />
        <Investment investment={InvestmentData} />
        <Scholarship />
        <Support support={SupportData} />
        <TransformYourLife />
      </section>
      <Footer />
    </>
  )
}
