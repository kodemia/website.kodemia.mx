import React from 'react'

export interface Props {
  description: string
  value: string
}

// export interface Props {
//   bootcamp: {
//     metric: Array<Metric>
//   }
// }

export default function MetricCard ({ description, value }: Props) {
  return (
    <div className='metric'>
      <div className='value'>{value}</div>
      <div className='description'>{description}</div>
    </div>
  )
}
