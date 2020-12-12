
import React from 'react'
import Button from './Button'

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
        <h2 className='mode'>{mode}</h2>
        <h3 className='date'>{date}</h3>
        <div className='schedule'>
          <h2 className='schedule-title'>Horario</h2>
          <p className='schedule-content'>{schedule}</p>
        </div>
        <p className='feature'>{feature}</p>
        <Button isPrimary label='Conocer más' link={link}/>
      </div>
    </div>
  )
};
