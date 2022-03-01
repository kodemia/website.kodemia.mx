// TODO: Separar componentes y separar archivo de configuración
import React from 'react'
import classNames from 'classnames'

import BootcampCard from 'components/BootcampCard'
import H5 from 'components/H5'
import LanguageInfo from 'components/LanguageInfo'
import PageSection from 'components/PageSection'

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

export default function OurBootcamps ({ bootcamps }: Props):JSX.Element {
  return (
    <PageSection
      contentClassName={classNames(
        'grid',
        'grid-cols-1 lg:grid-cols-3'
      )}
    >
      <div className={classNames(
        'col-start-1',
        'row-start-1',
        'col-span-1 lg:col-span-3'
      )}>
        <H5>
          Nuestros Bootcamps
        </H5>
      </div>
      <div className={classNames(
        'col-start-1',
        'row-start-2',
        'col-span-1 lg:col-span-3',
        'grid',
        'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
      )}>
        <div className={classNames(
          'col-start-1',
          'md:col-span-2 lg:col-span-1'
        )}>
          <LanguageInfo
            name={bootcamps.javascript.name}
            language={bootcamps.javascript.language}
            description={bootcamps.javascript.description}
            duration={bootcamps.javascript.duration}
          />
        </div>
        <article className={classNames(
          'md:col-start-1 lg:col-start-2',
          'md:col-span-2',
          'grid',
          'grid-cols-1 md:grid-cols-2',
          'sm:gap-x-9',
          'gap-y-7',
          'lg:ml-14'
        )}>
          {
            bootcamps.javascript.modalities.map((modality, index) => (
              <BootcampCard
                mode={modality.name}
                date={`${modality.schedule.day} ${modality.schedule.day ? 'de' : ''} ${modality.schedule.month}`}
                schedule={`${modality.schedule.days} de ${modality.schedule.hour}`}
                feature={modality.description}
                link={modality.link}
                key={`modality-${index}`}
              />
            ))
          }
        </article>
      </div>
      <div className={classNames(
        'col-start-1',
        'row-start-3',
        'col-span-1 lg:col-span-3',
        'grid',
        'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
        'mt-8'
      )}>
        <div className={classNames(
          'col-start-1',
          'md:col-span-2 lg:col-span-1'
        )}>
          <LanguageInfo
            name={bootcamps.mobile.name}
            language={bootcamps.mobile.language}
            description={bootcamps.mobile.description}
            duration={bootcamps.mobile.duration}
          />
        </div>
          <article className={classNames(
            'md:col-start-1 lg:col-start-2',
            'md:col-span-2',
            'grid',
            'grid-cols-1 md:grid-cols-2',
            'sm:gap-x-9',
            'gap-y-7',
            'lg:ml-14'
          )}>
            {
              bootcamps.mobile.modalities.map((modality, index) => (
                <BootcampCard
                  mode={modality.name}
                  date={`${modality.schedule.day} ${modality.schedule.day ? 'de' : ''} ${modality.schedule.month}`}
                  schedule={`${modality.schedule.days} de ${modality.schedule.hour}`}
                  feature={modality.description}
                  link={modality.link}
                  key={`modality-${index}`}
                />
              ))
            }
          </article>
      </div>
    </PageSection>
  )
}
