import Head from 'next/head'
import InfoCard from '../components/InfoCard'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import BootcampCard from '../components/BootcampCard'
import LenguageCard from '../components/LenguageCard'

export default function Home () {
  return (
    <div>
      <Head>
        <title>Kodemia</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <InfoCard
        icon='/icons/Icon-Objetivo.svg'
        title='Te acompañamos en el proceso'
        description='Todos los días, por módulos y por Bootcamp, llevarás proyectos prácticos reales'
      />
      <Navbar />
      <BootcampCard
        mode='Modo Lifetime'
        date='19 de Octubre'
        schedule='Lunes a viernes de 07:00 - 10:00 pm'
        feature='Acceso de por vida a Kodemia'
      />
      <LenguageCard
        name='Bootcamp FullStack con' 
        lenguage='Javascript' 
        description='Desarrollarás una web app completa con MERN orientado al Front End con React' 
        duration='19em'
      /> 
      <Footer />
    </div>
  )
}
