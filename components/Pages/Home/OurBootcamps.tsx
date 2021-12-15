// TODO: Separar componentes y separar archivo de configuración
import React from 'react'
// My components
import H5 from '../../H5'
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
    mobile: Language
  }
}

export default function OurBootcamps({ bootcamps }: Props) {
  return (
    <section id='bootcamps' className='our-bootcamps section-container'>
      <div className='our-bootcamps-container '>
        <H5>
          Nuestros Bootcamps
        </H5>
        <div className='bootcamp'>
          <LanguageCard
            name={bootcamps.javascript.name}
            language={bootcamps.javascript.language}
            description={bootcamps.javascript.description}
            duration={bootcamps.javascript.duration}
          />
          <article className='modalities-container'>
            {
              bootcamps.javascript.modalities.map((modality, index) => (
                <div className='modality' key={index}>
                  <BootcampCard
                    mode={modality.name}
                    date={`${modality.schedule.day} ${modality.schedule.day ? 'de' : ''} ${modality.schedule.month}`}
                    schedule={`${modality.schedule.days} de ${modality.schedule.hour}`}
                    feature={modality.description}
                    link={modality.link}
                  />
                </div>
              ))
            }
          </article>
        </div>
        {bootcamps.mobile &&
          (<div className='bootcamp'>
            <LanguageCard
              name={bootcamps.mobile.name}
              language={bootcamps.mobile.language}
              description={bootcamps.mobile.description}
              duration={bootcamps.mobile.duration}
            />
            <article className='modalities-container'>
              {
                bootcamps.mobile.modalities.map((modality, index) => (
                  <div className='modality' key={index}>
                    <BootcampCard
                      mode={modality.name}
                      date={`${modality.schedule.day} ${modality.schedule.day ? 'de' : ''} ${modality.schedule.month}`}
                      schedule={`${modality.schedule.days} de ${modality.schedule.hour}`}
                      feature={modality.description}
                      link={modality.link}
                    />
                  </div>
                ))
              }
            </article>
          </div>)
        }
      </div>
    </section>
  )
}
