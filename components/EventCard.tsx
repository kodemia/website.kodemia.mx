
import React from 'react'
import classNames from 'classnames'

import Button from 'components/Button'
import H4 from 'components/H4'

export interface Props {
  name: string
  date: string
  schedule: string
  text: string
  btnLabel: string
  link: string
  className: string
}

export default function EventCard ({
  name,
  date,
  schedule,
  text,
  btnLabel,
  link,
  className
}: Props):JSX.Element {
  return (
    <div className={classNames(
      className,
      'border border-solid rounded-xl',
      'border-gray-kd-light hover:border-cyan-kd',
      'flex flex-col justify-between',
      'p-4',
      'w-full'
    )}>
      <div>
        <H4>
          {name}
        </H4>
      </div>
      <div className='mt-4'>
        <h5 className={classNames(
          'text-cyan-kd text-h5 font-medium'
        )}
        >
          {date}
        </h5>
        <p className={classNames(
          'text-gray-kd-light text-h5 font-medium'
        )}
        >
          {schedule}
        </p>
        <p className={classNames(
          'mb-5',
          'text-gray-kd-light font-medium'
        )}
        >
          {text}
        </p>
        <Button
          isPrimary
          label={btnLabel}
          href={link}
        />
      </div>
    </div>
  )
}