import Head from 'next/head'
// My components
import Footer from '../components/Footer'
import Hero from '../components/Pages/Home/Hero'
import Navbar from '../components/Navbar'
import OurBootcamps from '../components/Pages/Home/OurBootcamps'
import KodemiaFinancing from '../components/Pages/Home/KodemiaFinancing'
import WhyKodemia from '../components/Pages/Home/WhyKodemia'
import OurMethod from '../components/Pages/Home/OurMethod'
import TransformYourLife from '../components/Pages/Home/TransformYourLife'
import Testimonials from '../components/Pages/Home/Testimonials'
import AlliancesKodemia from '../components/Pages/Home/AlliancesKodemia'
// Data
import OurBootcampsCards from '../config/our-bootcamps-cards.json'
import WhyKodemiaCards from '../config/why-kodemia-cards.json'
import OurMethodData from '../config/our-method-data.json'
import KodemiaFinancingData from '../config/kodemia-financing-data.json'
import TestimonialData from '../config/testimonials-data.json'
import AlliesData from '../config/allies-data.json'

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
      <OurMethod ourMethod={OurMethodData} />
      <KodemiaFinancing info={KodemiaFinancingData} />
      <AlliancesKodemia allies={AlliesData} />
      <Testimonials testimonials={TestimonialData} />
      <TransformYourLife />

      <Footer />
    </>
  )
}
