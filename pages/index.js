import Head from 'next/head'
import { Navbar } from '../components/Navbar'
import { Button } from '../components/Button'

export default function Home () {
  return (
    <div>
      <Head>
        <title>Kodemia</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Navbar />
    </div>
  )
}
