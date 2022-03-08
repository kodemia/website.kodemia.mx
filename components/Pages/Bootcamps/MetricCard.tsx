import React from 'react'
import classNames from 'classnames'

export interface Metric {
  description: string
  value: string
}

export default function MetricCard ({ description, value }: Metric): JSX.Element {
  return (
    <section className={classNames(
      'grid',
      'grid-cols-1',
      'grid-rows-[auto_90px]',
      'text-center'
    )}>
      <div className={classNames(
        'text-brand-primary text-[90px] font-semibold'
      )}>
        {value}
      </div>
      <div className={classNames(
        'max-w-xs',
        'px-5',
        'place-self-center',
        'text-brand-gray-light text-base font-medium first-letter:capitalize'
      )}>
        {description}
      </div>
    </section>
  )
}
