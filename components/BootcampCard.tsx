
import React from 'react'
import classNames from 'classnames'

import Button from 'components/Button'
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
    <div className={classNames(
      'border border-solid',
      'border-brand-gray-light hover:border-brand-primary',
      'rounded-small'
    )}>
      <div className={classNames(
        'mt-[25px]',
        'mx-5',
        'mb-[30px]'
      )}>
        <H4>
          {mode}
        </H4>
        <h5 className={classNames(
          'text-brand-primary',
          'text-brand-h5',
          'font-medium'
        )}>
          {date}
        </h5>
        <div className={classNames(
          'my-6',
          'mx-0',
          'max-w-full lg:max-w-[153px]' // TODO: comprobar comportamiento pq en CSS solo aplica en mobile
        )}>
          <H5 isWhite>
            Horario
          </H5>
          <p className={classNames(
            'text-brand-gray-light',
            'text-base',
            'm-0',
            'max-w-[150px]',
            'min-w-[150px]'
          )}>
            {schedule}
          </p>
          <p className={classNames(
            'text-brand-gray-light',
            'text-base',
            'mt-5',
            'mb-[25px]',
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
      </div>
    </div>
  )
}
