
import React from 'react'
import H2CC from './H2CC'

export interface Props {
  name: string,
  lenguage: string,
  description: string,
  duration: string,
}

export default function LenguageCard ({
  name,
  lenguage,
  description,
  duration
}: Props) {
  return (
    <div className='lenguage-card'>
      <H2CC whiteText={name} cyanText={lenguage} />
      <p className='description'>{description}</p>
      <div className='duration-container'>
        <img
          src='/icons/Icon-Calendario.svg'
          className='calendar-icon'
        />
        <h2 className='title'>Duración</h2>
        <p className='duration'>{duration}</p>
      </div>
    </div>
  )
};
