import Head from 'next/head'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import OurBootcamps from '../components/OurBootcamps'

export default function Home () {
  return (
    <div>
      <Head>
        <title>Kodemia</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Navbar />
      <OurBootcamps />
      <Footer />
    </div>
  )
}
