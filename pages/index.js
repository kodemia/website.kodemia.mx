import Head from 'next/head'
import InfoCard from '../components/InfoCard'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Kodemia</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <h1>Home</h1>
      <div className='card'>
        <InfoCard icon='/Icon-Objetivo.svg' title='Te acompañamos en el proceso' description='Todos los días, por módulos y por Bootcamp, llevarás proyectos prácticos reales' />
      </div>
    </div>
  )
}
