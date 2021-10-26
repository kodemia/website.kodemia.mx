
import React, { useEffect } from 'react'
import { AppProps } from 'next/app'
import * as builder from 'lib/builder'
import { useRouter } from 'next/router'

import * as tracker from 'lib/tracker'

import 'node_modules/slick-carousel/slick/slick.css'
import 'node_modules/slick-carousel/slick/slick-theme.css'
import 'react-phone-input-2/lib/style.css'
import 'react-toastify/dist/ReactToastify.css'
import 'styles/index.scss'

builder.init()

function MyApp ({ Component, pageProps }: AppProps) {
  const router = useRouter()

  useEffect(() => {
    tracker.onPageView()

    router.events.on('routeChangeComplete', tracker.onPageView)

    return () => router.events.off('routeChangeComplete', tracker.onPageView)
  }, [])

  return (
    <Component {...pageProps} />
  )
}

export default MyApp
