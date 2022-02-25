import React from 'react'
import classNames from 'classnames'
import dayjs from 'dayjs'

// My components
import H4 from 'components/H4'
import Button from 'components/Button'

import { Job } from 'types/common'
import * as tracker from 'lib/tracker'



export interface Props {
  job: Job
  className?: string
}

export default function JobCard({ job, className }: Props) {
  return (
    <div className={classNames(
      className,
      'border border-solid rounded-xl',
      'border-gray-kd-light hover:border-cyan-kd',
      'flex flex-col',
      'p-4',
      'w-full'
    )}>
      <div>
        <H4>
          {job.name}
        </H4>
      </div>
      <div className={classNames(
        'flex flex-col justify-between',
        'my-4',
        'h-full'
      )}>
        <h5 className={classNames(
          'text-cyan-kd text-h5 font-medium'
        )}>
          Trabajo {job.location}
        </h5>
        <p className={classNames(
          'mb-5',
          'text-gray-kd-light font-medium'
        )}
        >
          {job.description}
        </p>
        <p className={classNames(
          'text-gray-kd-light text-h5 font-medium pb-4'
        )}
        >
          {job.schedule}
        </p>
        <p className={classNames(
          'text-gray-kd-light text-h5 font-medium'
        )}
        >
          {job.offer}
        </p>
      </div>
      <Button
        isPrimary
        label='Aplicar'
        href={job.link}
        onClick={() => tracker.onJobButtonClicked(job)}
      />
    </div>
  )
}
