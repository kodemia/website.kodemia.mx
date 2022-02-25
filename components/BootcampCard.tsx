
import React from 'react'
import classNames from 'classnames'

import Button from 'components/Button'
import Card from 'components/Card'
import H4 from 'components/H4'
import H5 from 'components/H5'

export interface Props {
  mode: string,
  date: string,
  schedule: string,
  feature: string,
  link: string
}

export default function BootcampCard ({
  mode,
  date,
  schedule,
  feature,
  link
}: Props):JSX.Element {
  return (
    <Card isBordered>
      <H4>
        {mode}
      </H4>
      <h5 className={classNames(
        'text-brand-primary text-brand-h5 font-medium'
      )}>
        {date}
      </h5>
      <div className={classNames(
        'my-6',
        'w-full lg:w-40'
      )}>
        <H5 isWhite>
          Horario
        </H5>
        <p className={classNames(
          'text-brand-gray-light text-base',
        )}>
          {schedule}
        </p>
        <p className={classNames(
          'text-brand-gray-light text-base',
          'mt-5 mb-6',
          'min-h-[48px]'
        )}>
          {feature}
        </p>
      </div>
      <Button
        isPrimary
        label='Conocer más'
        link={link}
      />
    </Card>
  )
}
