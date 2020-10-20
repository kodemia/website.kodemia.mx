import Head from 'next/head'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import BootcampCard from '../components/BootcampCard'

export default function Home () {
  return (
    <div>
      <Head>
        <title>Kodemia</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Navbar />
      <BootcampCard
        mode='Modo Lifetime'
        date='19 de Octubre'
        schedule='Lunes a viernes de 07:00 - 10:00 pm'
        feature='Acceso de por vida a Kodemia'
      />
      <Footer />
    </div>
  )
}
