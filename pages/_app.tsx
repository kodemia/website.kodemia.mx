
import React, { useEffect } from 'react'
import { AppProps } from 'next/app'
import * as builder from 'lib/builder'
import { useRouter } from 'next/router'
import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'
import timezone from 'dayjs/plugin/timezone'
import spanishLocale from 'dayjs/locale/es'

import * as tracker from 'lib/tracker'

import 'node_modules/slick-carousel/slick/slick.css'
import 'node_modules/slick-carousel/slick/slick-theme.css'
import 'react-phone-input-2/lib/style.css'
import 'react-toastify/dist/ReactToastify.css'
import 'styles/index.scss'

builder.init()

// dayjs config
dayjs.extend(utc) // load utc plugin
dayjs.extend(timezone) // load timezone plugin
dayjs.locale(spanishLocale) // set global locale

function MyApp ({ Component, pageProps }: AppProps) {
  const router = useRouter()

  // onPageView event set up
  useEffect(() => {
    tracker.onPageView()
    router.events.on('routeChangeComplete', tracker.onPageView)
    return () => router.events.off('routeChangeComplete', tracker.onPageView)
  }, [])

  return (
    <div className='bg-brand-black-dark'>
     <Component {...pageProps}/>
    </div>
  )
}

export default MyApp
