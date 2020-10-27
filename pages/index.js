import BootcampCard from '../components/BootcampCard'
import Footer from '../components/Footer'
import Head from 'next/head'
import InfoCard from '../components/InfoCard'
import Navbar from '../components/Navbar'
import WhyKodemia from '../components/WhyKodemia'

const cards = [
  {
    text: 'Queremos ser parte de tu nuevo futuro como desarrollador desde el día uno, hasta después del Bootcamp',
    icon: '/icons/Icon-Proceso.svg',
    heading: 'Te acompañamos en el proceso'
  },
  {
    description: 'Nos adaptamos a lo que estás buscando, ya sea colocarte, emprender o crecer profesionalmente',
    icon: '/icons/Icon-Objetivo.svg',
    title: 'Tu objetivo es nuestro objetivo'
  },
  {
    description: 'Lo más importante para nosotros son las personas. Ayudarlas a conectar entre sí es parte de nuestro propósito, para que nunca dejen de crecer',
    icon: '/icons/Icon-Comunidad.svg',
    title: 'Creamos comunidad'
  },
  {
    description: 'Nuestros egresados tienen las herramientas para enfrentarse y triunfar en el mundo laboral ',
    icon: '/icons/Icon-Alto-calibre.svg',
    title: 'Programadores de alto calibre'
  }
]

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
      <WhyKodemia cards={cards} />
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
