import BootcampCard from '../components/BootcampCard'
import Footer from '../components/Footer'
import Head from 'next/head'
import InfoCard from '../components/InfoCard'
import Navbar from '../components/Navbar'
import WhyKodemia from '../components/WhyKodemia'

export default function Home () {
  return (
    <div>
      <Head>
        <title>Kodemia</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Navbar />
      <InfoCard
        icon='/icons/Icon-Objetivo.svg'
        title='Te acompañamos en el proceso'
        description='Todos los días, por módulos y por Bootcamp, llevarás proyectos prácticos reales'
      />
      <WhyKodemia />
      {/* <BootcampCard
        mode='Modo Lifetime'
        date='19 de Octubre'
        schedule='Lunes a viernes de 07:00 - 10:00 pm'
        feature='Acceso de por vida a Kodemia'
      /> */}
      <Footer />
    </div>
  )
}
