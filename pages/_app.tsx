
import React, { useEffect } from 'react'
import { AppProps } from 'next/app'
import { useRouter } from 'next/router'
// import TagManager from 'react-gtm-module' // TODO: QUITAR REACT-GTM-MODULE
import * as tracker from 'lib/tracker'

import 'node_modules/slick-carousel/slick/slick.css'
import 'node_modules/slick-carousel/slick/slick-theme.css'
import 'react-phone-input-2/lib/style.css'
import 'react-toastify/dist/ReactToastify.css'
import 'styles/index.scss'

function MyApp ({ Component, pageProps }: AppProps) {
  const router = useRouter()

  // const pixelId = process.env.PIXEL_ID || ''

  useEffect(() => {
    console.log('se montó')
    tracker.init()
      .catch(error => {
        console.error('Could not init tracker', error)
      })

    tracker.onPageView()

    router.events.on('routeChangeComplete', tracker.onPageView)

    return () => {
      console.log('se desmonto  ')
      router.events.off('routeChangeComplete', tracker.onPageView)
    }
  }, [])

  useEffect(() => {
    // async function pixel () {
    //   const { default: ReactPixel } = await import('react-facebook-pixel')
    //   ReactPixel.init(pixelId, undefined, {
    //     autoConfig: true,
    //     debug: false
    //   })
    //   ReactPixel.pageView()
    // }
    // pixel()
  })

  return (
    <>
      <div className='page-container'>
        <Component {...pageProps} />
      </div>
    </>
  )
}

export default MyApp
