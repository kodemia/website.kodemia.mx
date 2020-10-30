
import React from 'react'
// My components
import BootcampCard from '../../BootcampCard'
import LanguageCard from '../../LanguageCard'

export interface Modality {
  name: string
  description: string
  link: string
  schedule: {
    day: string
    month: string
    year: string
    hour: string
    days: string
  }
}
export interface Language {
  name: string
  language: string
  description: string
  duration: string
  modalities: Array<Modality>
}
export interface Props {
  bootcamps: {
    javascript: Language
    python: Language
  }
}

export default function OurBootcamps ({ bootcamps }:Props) {
  return (
    <div className='our-bootcamps section-container'>
      <h3 className='title'>Nuestros Bootcamps</h3>
      <div className='bootcamp'>
        <LanguageCard
          name={bootcamps.javascript.name}
          language={bootcamps.javascript.language}
          description={bootcamps.javascript.description}
          duration={bootcamps.javascript.duration}
        />
        <div className='modalities-container'>
          {
            bootcamps.javascript.modalities.map((modality, index) => (
              <div className='modality' key={index}>
                <BootcampCard
                  mode={modality.name}
                  date={`${modality.schedule.day} de ${modality.schedule.month}`}
                  schedule={`${modality.schedule.days} de ${modality.schedule.hour}`}
                  feature={modality.description}
                />
              </div>
            ))
          }
        </div>
      </div>
      <div className='bootcamp'>
        <LanguageCard
          name={bootcamps.python.name}
          language={bootcamps.python.language}
          description={bootcamps.python.description}
          duration={bootcamps.python.duration}
        />
        <div className='modalities-container'>
          {
            bootcamps.python.modalities.map((modality, index) => (
              <div className='modality' key={index}>
                <BootcampCard
                  mode={modality.name}
                  date={`${modality.schedule.day} de ${modality.schedule.month}`}
                  schedule={`${modality.schedule.days} de ${modality.schedule.hour}`}
                  feature={modality.description}
                />
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}
