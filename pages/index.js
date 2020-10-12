import Head from 'next/head'
import { Button } from '../components/Button'

export default function Home () {
  return (
    <div>
      <Head>
        <title>Kodemia</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <h1>Home</h1>
      <div>
        <Button label='kodemia' hasWhiteBg />
        <Button isPrimary label='kodemia' />
        <Button isPrimary={false} label='kodemia' />
      </div>
    </div>
  )
}
