import React from 'react'

export interface Metric {
  description: string
  value: string
}

export interface Props {
  bootcamp: {
    metric: Array<Metric>
  }
}

export default function MetricCard ({ bootcamp }: Props) {
  return (
    <div className='metric-card'>
      <div className='value'>{bootcamp.metric}</div>
      <div className='description'>{bootcamp.metric}</div>
    </div>
  )
}
