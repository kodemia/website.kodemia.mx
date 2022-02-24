
import React from 'react'
import classNames from 'classnames'

import Button from 'components/Button'
import Card from 'components/Card'
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
    <Card
      className={classNames(
        'flex flex-col justify-between',
        className
    )}
      isBordered
    >
        <H4>
          {name}
        </H4>
      <div className='mt-4'>
        <h5 className={classNames(
          'text-brand-primary text-brand-h5 font-medium'
        )}
        >
          {date}
        </h5>
        <p className={classNames(
          'text-brand-gray-light text-brand-h5 font-medium'
        )}
        >
          {schedule}
        </p>
        <p className={classNames(
          'mb-5',
          'text-brand-gray-light text-base font-medium'
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
    </Card>
  )
}
