import Head from 'next/head'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Hero from '../components/Pages/Home/Hero'
import OurBootcamps from '../components/Pages/Home/OurBootcamps'

export default function Home () {
  return (
    <>
      <Head>
        <title>Kodemia</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Navbar />
      <Hero />
      <OurBootcamps />
      <Footer />
    </>
  )
}
