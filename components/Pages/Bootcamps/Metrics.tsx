import React from 'react'

import MetricCard from './MetricCard'

export interface Metric {
  description: string
  value: string
}

export interface Props {
  bootcamp: {
    metric: Array<Metric>
  }
}

export default function Metrics ({ bootcamp }: Props) {
  return (
    <div className='metrics'>
      <div className='metrics-container'>
        {bootcamp.metric.map((metric, index) => {
          return (
            <MetricCard
              value={metric.value}
              description={metric.description}
              key={`metric-${index}`}
            />
          )
        })}
      </div>
    </div>
  )
}
