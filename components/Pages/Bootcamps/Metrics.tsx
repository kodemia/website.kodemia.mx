import React from 'react'
import classNames from 'classnames'

import MetricCard from 'components/Pages/Bootcamps/MetricCard'
import PageSection from 'components/PageSection'

export interface Metric {
  description: string
  value: string
}

export interface Props {
  metrics: Array<Metric>
}

export default function Metrics ({ metrics }: Props): JSX.Element {
  return (
    <PageSection sectionClassName='bg-brand-black'>
      <div className={classNames(
        'grid',
        'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
        'w-full'
        )}>
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
    </PageSection>
  )
}
