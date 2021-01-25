
import { AppProps } from 'next/app'
import Head from 'next/head'

import '../styles/index.scss'
import 'react-phone-input-2/lib/style.css'
import 'react-toastify/dist/ReactToastify.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <script async defer src="https://static.cdn.prismic.io/prismic.js?new=true&repo=kodemia"></script>
      </Head>
      <div className='page-container'>
        <Component {...pageProps} />
      </div>
    </>
  )
}

export default MyApp
