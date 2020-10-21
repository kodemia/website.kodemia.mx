import Head from 'next/head'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Hero from '../components/Pages/Home/Hero'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Kodemia</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Navbar />
      <Hero />

      <Footer />
    </div>
  )
}
