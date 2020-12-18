import Head from 'next/head'
// My components
import AlliancesKodemia from '../components/Pages/Home/AlliancesKodemia'
import Footer from '../components/Footer'
import Hero from '../components/Pages/Home/Hero'
import KodemiaFinancing from '../components/Pages/Home/KodemiaFinancing'
import Navbar from '../components/Navbar'
import OurBootcamps from '../components/Pages/Home/OurBootcamps'
import OurMethod from '../components/Pages/Home/OurMethod'
import Testimonials from '../components/Pages/Home/Testimonials'
import TransformYourLife from '../components/Pages/Home/TransformYourLife'
import WhyKodemia from '../components/Pages/Home/WhyKodemia'
import WhatGoingAchieve from '../components/Pages/Home/WhatGoingAchieve'
// Data
import AlliesData from '../config/allies-data.json'
import KodemiaFinancingData from '../config/kodemia-financing-data.json'
import OurBootcampsCards from '../config/our-bootcamps-cards.json'
import OurMethodData from '../config/our-method-data.json'
import TestimonialData from '../config/testimonials-data.json'
import WhyKodemiaCards from '../config/why-kodemia-cards.json'
import WinnerImages from '../config/winner-images.json'

export default function Home () {
  return (
    <>
      <Head>
        <title>Kodemia</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Navbar />
      <Hero />
      <WhyKodemia infoCards={WhyKodemiaCards.cards} />
      <OurBootcamps bootcamps={OurBootcampsCards} />
      <WhatGoingAchieve winnerImages={WinnerImages} />
      <OurMethod ourMethod={OurMethodData} />
      <KodemiaFinancing info={KodemiaFinancingData} />
      <AlliancesKodemia allies={AlliesData} />
      <Testimonials testimonials={TestimonialData} />
      <TransformYourLife />

      <Footer />
    </>
  )
}
