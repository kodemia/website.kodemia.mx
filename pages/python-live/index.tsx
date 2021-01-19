import React from 'react'

import Footer from '../../components/Footer'
import Metrics from '../../components/Pages/Bootcamps/Metrics'

import MetricsBootcamps from '../../config/bootcamps/metrics.json'

export default function PythonLive () {
  return (
    <>
      <Metrics metrics={MetricsBootcamps.python} />
      <Footer />
    </>
  )
}
