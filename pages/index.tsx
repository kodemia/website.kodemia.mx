import Head from 'next/head'

import Footer from '../components/Footer'
import Hero from '../components/Pages/Home/Hero'
import Navbar from '../components/Navbar'
import OurBootcamps from '../components/Pages/Home/OurBootcamps'
import WhyKodemia from '../components/Pages/Home/WhyKodemia'
// Data
import OurBootcampsCards from '../config/our-bootcamps-cards.json'
import WhyKodemiaCards from '../config/why-kodemia-cards.json'

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
      <Footer />
    </>
  )
}
