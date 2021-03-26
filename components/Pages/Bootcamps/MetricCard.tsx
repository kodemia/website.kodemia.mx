import React from 'react'

export interface Metric {
  description: string
  value: string
}

export default function MetricCard({ description, value }: Metric) {
  return (
    <section className='metric'>
      <div className='value'>
        {value}
      </div>
      <div className='description'>
        {description}
      </div>
    </section>
  )
}
