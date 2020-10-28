import Head from 'next/head'

import Footer from '../components/Footer'
import Hero from '../components/Pages/Home/Hero'
import Navbar from '../components/Navbar'
import OurBootcamps from '../components/Pages/Home/OurBootcamps'
import WhyKodemia from '../components/Pages/Home/WhyKodemia'

const cards = [
  {
    text: 'Queremos ser parte de tu nuevo futuro como desarrollador desde el día uno, hasta después del Bootcamp',
    icon: '/icons/Icon-Proceso.svg',
    title: 'Te acompañamos en el proceso'
  },
  {
    text: 'Nos adaptamos a lo que estás buscando, ya sea colocarte, emprender o crecer profesionalmente',
    icon: '/icons/Icon-Objetivo.svg',
    title: 'Tu objetivo es nuestro objetivo'
  },
  {
    text: 'Lo más importante para nosotros son las personas. Ayudarlas a conectar entre sí es parte de nuestro propósito, para que nunca dejen de crecer',
    icon: '/icons/Icon-Comunidad.svg',
    title: 'Creamos comunidad'
  },
  {
    text: 'Nuestros egresados tienen las herramientas para enfrentarse y triunfar en el mundo laboral ',
    icon: '/icons/Icon-Alto-calibre.svg',
    title: 'Programadores de alto calibre'
  }
]

export default function Home () {
  return (
    <>
      <Head>
        <title>Kodemia</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Navbar />
      <Hero />
      <WhyKodemia cards={cards} />
      <OurBootcamps />
      <Footer />
    </>
  )
}
