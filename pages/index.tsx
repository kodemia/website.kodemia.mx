import Head from 'next/head'

import Footer from '../components/Footer'
import Hero from '../components/Pages/Home/Hero'
import Navbar from '../components/Navbar'
import OurBootcamps from '../components/Pages/Home/OurBootcamps'
import KodemiaFinancing from '../components/Pages/Home/KodemiaFinancing'
import WhyKodemia from '../components/Pages/Home/WhyKodemia'
// Data
import OurBootcampsCards from '../config/our-bootcamps-cards.json'
import WhyKodemiaCards from '../config/why-kodemia-cards.json'
import KodemiaFinancingData from '../config/kodemia-financing-data.json'

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
      <KodemiaFinancing info={KodemiaFinancingData} />
      <Footer />
    </>
  )
}
