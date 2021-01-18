import React from 'react'

import Metrics from '../../components/Pages/Bootcamps/Metrics'

import MetricsBootcamps from '../../config/bootcamps/metrics.json'

export default function JavascriptLive () {
  return (
    <Metrics bootcamp={MetricsBootcamps.javascript} />
  )
}
