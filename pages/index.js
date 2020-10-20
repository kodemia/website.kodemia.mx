import Head from 'next/head'
import InfoCard from '../components/InfoCard'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Kodemia</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <InfoCard icon='/icons/Icon-Objetivo.svg' title='Te acompañamos en el proceso' description='Todos los días, por módulos y por Bootcamp, llevarás proyectos prácticos reales' />
      <Navbar />
      <Footer />
    </div>
  )
}
