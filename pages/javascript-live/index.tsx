import React from 'react'

import Footer from '../../components/Footer'
import Metrics from '../../components/Pages/Bootcamps/Metrics'

import MetricsBootcamps from '../../config/bootcamps/metrics.json'

export default function JavascriptLive () {
  return (
    <>
      <Metrics metrics={MetricsBootcamps.javascript} />
      <Footer />
    </>
  )
}
