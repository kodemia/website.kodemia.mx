import Head from 'next/head'
import Footer from '../components/Footer'

export default function Home () {
  return (
    <div>
      <Head>
        <title>Kodemia</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <h1>Home</h1>
      <Footer />
    </div>
  )
}
