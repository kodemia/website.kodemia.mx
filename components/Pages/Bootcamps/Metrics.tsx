import React from 'react'

import MetricCard from './MetricCard'

export interface Props {
  description: string
  value: string
}

// export interface Props {
//   bootcamp: {
//     metric: Array<Metric>
//   }
// }

export default function Metrics ({ description, value }: Props) {
  return (
    <div className='metrics'>
      <div className='metrics-container'>
        {/* {metrics.map((metric, index) => {
          return (
            <MetricCard
              value={value}
              description={description}
              key={`metric-${index}`}
            />
          )
        })} */}
      </div>
    </div>
  )
}
