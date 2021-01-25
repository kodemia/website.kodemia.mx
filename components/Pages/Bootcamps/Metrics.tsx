import React from 'react'

import MetricCard from './MetricCard'

export interface Metric {
  description: string
  value: string
}

export interface Props {
  metrics: Array<Metric>
}

export default function Metrics ({ metrics }: Props) {
  return (
    <section className='metrics'>
      <div className='metrics-container'>
        {metrics.map((metric, index) => {
          return (
            <MetricCard
              value={metric.value}
              description={metric.description}
              key={`metric-${index}`}
            />
          )
        })}
      </div>
    </section>
  )
}
