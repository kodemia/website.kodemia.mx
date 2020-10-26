
import React from 'react'

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
      <h1 className='lenguage'>{name} {lenguage}</h1>
      <p className='description'>{description}</p>
      <div className='duration-container'>
        <img src='/icons/Icon-Calendario.svg'
        alt='calendar-kodemia'
        className='calendar-icon' 
        />
        <h2 className='title'>Duración</h2>
        <p className='duration'>{duration}</p>  
      </div>
    </div>
  )
};
