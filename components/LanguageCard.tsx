
import React from 'react'
import H2 from './H2'

export interface Props {
  name: string,
  language: string,
  description: string,
  duration: string,
}

export default function LanguageCard ({
  name,
  language,
  description,
  duration
}: Props) {
  return (
    <div className='language-card'>
      <div className='principal-title'>
        <H2 whiteText={name} cyanText={language} />
      </div>
      <p className='description'>{description}</p>
      <div className='duration-container'>
        <img
          src='/icons/icon-calendario.svg'
          className='calendar-icon'
        />
        <h2 className='title'>Duración</h2>
        <p className='duration'>{duration}</p>
      </div>
    </div>
  )
};
