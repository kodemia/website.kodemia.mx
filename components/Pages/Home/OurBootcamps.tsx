// TODO: Separar componentes y separar archivo de configuración
import React from 'react'
import classNames from 'classnames'
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
    // python: Language
  }
}

export default function OurBootcamps ({ bootcamps }: Props) {
  return (
    <section
      id='bootcamps'
      className={classNames(
        'mob:m-0 laptop:mx-20'
      )}
    >
      <div className={classNames(
        'mob:m-auto tablet:m-0 laptop:m-auto',
        'mob:max-w-full laptop:max-w-content',
        'mob:min-w-full laptop:min-w-content',
        'mob:pt-20 mob:px-11 mob:pb-16',
        'tablet:pt-24 tablet:px-20',
        'laptop:pt-24 laptop:px-0 laptop:pb-24',
        'tablet:w-full'
      )}
      >
        <H5>
          Nuestros Bootcamps
        </H5>
        <div className={classNames(
          'mob:grid',
          'mob:grid-cols-1 laptop:grid-cols-3',
          'laptop:gap-x-14'
        )}
        >
          <LanguageCard
            name={bootcamps.javascript.name}
            language={bootcamps.javascript.language}
            description={bootcamps.javascript.description}
            duration={bootcamps.javascript.duration}
          />
          <article className={classNames(
            'laptop:col-span-2',
            'mob:flex',
            'mob:flex-col tablet:flex-row',
            'mob:justify-evenly',
            'mob:pl-0'
          )}
          >
            {
              bootcamps.javascript.modalities.map((modality, index) => (
                <div
                  className={classNames(
                    'mob:my-5 laptop:mx-0',
                    'mob:w-full tablet:w-1/2',
                    'mob:first:mr-0 tablet:first:mr-6 laptop:first:mr-7',
                  )}
                  key={index}
                >
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
        {/* <div className='bootcamp'>
          <LanguageCard
            name={bootcamps.python.name}
            language={bootcamps.python.language}
            description={bootcamps.python.description}
            duration={bootcamps.python.duration}
          />
          <article className='modalities-container'>
            {
              bootcamps.python.modalities.map((modality, index) => (
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
        </div> */}
      </div>
    </section>
  )
}
