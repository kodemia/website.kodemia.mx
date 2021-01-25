
import { AppProps } from 'next/app'
import Head from 'next/head'

import 'node_modules/slick-carousel/slick/slick.css'
import 'node_modules/slick-carousel/slick/slick-theme.css'
import 'react-phone-input-2/lib/style.css'
import 'react-toastify/dist/ReactToastify.css'
import 'styles/index.scss'
import Seo from 'components/SEO'

function MyApp ({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <script async defer src='https://static.cdn.prismic.io/prismic.js?new=true&repo=kodemia' />
      </Head>
      <Seo />
      <div className='page-container'>
        <Component {...pageProps} />
      </div>
    </>
  )
}

export default MyApp
