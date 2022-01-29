
import React from 'react'

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
}: Props) {
  return (
    <div className='bootcamp-type'>
      <div className='type-container'>
        <H4>
          {mode}
        </H4>
        <h5 className='date'>
          {date}
        </h5>
        <div className='schedule'>
          <H5 isWhite>
            Horario
          </H5>
          <p className='schedule-content'>
            {schedule}
          </p>
          <p className='feature'>
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
