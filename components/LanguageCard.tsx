
import React from 'react'
import H3 from './H3'
import H5 from './H5'

export interface Props {
  name: string,
  language: string,
  description: string,
  duration: string,
}

export default function LanguageCard({ name, language, description, duration }: Props) {
  return (
    <div className='language-card'>
      <div className='principal-title'>
        <H3
          whiteText={name}
          cyanText={language}
        />
      </div>
      <p className='description'>{description}</p>
      <div className='duration-container'>
        <img
          src='/icons/icon-calendario.svg'
          className='calendar-icon'
        />
        <H5 isWhite >
          Duración
        </H5>
        <p className='duration'>{duration}</p>
      </div>
    </div>
  )
};
