
import React, { useEffect } from 'react'
import { AppProps } from 'next/app'
import Head from 'next/head'
import TagManager from 'react-gtm-module'
import fbPixel from 'config/fb-pixel.json'

import 'node_modules/slick-carousel/slick/slick.css'
import 'node_modules/slick-carousel/slick/slick-theme.css'
import 'react-phone-input-2/lib/style.css'
import 'react-toastify/dist/ReactToastify.css'
import 'styles/index.scss'

function MyApp({ Component, pageProps }: AppProps) {
  const TagManagerArgs = {
    gtmId: 'GTM-M752N7Z'
  }

  useEffect(() => {
    TagManager.initialize(TagManagerArgs)
    async function pixel() {
      const advancedMatching = fbPixel
      const { default: ReactPixel } = await import('react-facebook-pixel')
      ReactPixel.init('502027597333867', advancedMatching, {
        autoConfig: true,
        debug: false
      })
      ReactPixel.pageView()
      ReactPixel.track('ViewContent')
    }
    pixel()
  }, [])

  return (
    <>
      <Head>
        <script async defer src='https://static.cdn.prismic.io/prismic.js?new=true&repo=kodemia' />
      </Head>
      <div className='page-container'>
        <Component {...pageProps} />
      </div>
    </>
  )
}

export default MyApp
