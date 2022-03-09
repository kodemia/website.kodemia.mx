
import React from 'react'
import classNames from 'classnames'

import H2 from 'components/H2'
import H5 from 'components/H5'

export interface Information {
  title: string
  text: string
}

export interface Props {
  bootcamp: {
    title: string
    subtitle: string
    description: string
    information: Array<Information>
  }
}

export default function HeroJsInfo ({ bootcamp }: Props): JSX.Element {
  return (
    <div className={classNames(
      // 'hero-card-bootcamps'
      ''
    )}>
      <div className={classNames(
        // 'columns is-flex-direction-column container-data'
        'flex flex-col'
      )}>
        <div className={classNames(
          // 'column is-full-mobile is-half-tablet is-one-third-desktop container-tittle',
          'max-w-[205px]',
          // 'lg:max-w-[275px]',
          'w-full md:w-1/2 lg:w-1/3',
          {
            // 'bootcamp-js': bootcamp.subtitle === 'Javascript'
            // 'max-w-[206px]': bootcamp.subtitle === 'Javascript'
          })}
        >
          <H5>
            {bootcamp.subtitle}
          </H5>
          <H2>
            {bootcamp.title}
          </H2>
        </div>
        <div className={classNames(
          // 'column is-one-third-desktop is-three-fifths-tablet container-description'
          'md:w-3/5 lg:w-1/3'
        )}>
          <p className={classNames(
            // 'description'
            'my-4 lg:my-9',
            'max-w-[540px] md:max-w-[336px]', // TODO: Comprobar comportamiento, está solo en mobile
            'text-brand-gray-light text-[15px] lg:text-base font-medium'
          )}>
            {bootcamp.description}
          </p>
        </div>
        <div className={classNames(
          // 'column container-information'
          'w-full'
        )}>
          {
            bootcamp.information.map((data, index) => (
              <div
                key={`hero-js-info-${index}`}
                className={classNames(
                  // 'wrapper-information'
                  'text-[13px]' // TODO: comprobar el tamaño que toma a partir de tablet
                )}
              >
                <h6 className={classNames(
                  // 'title-info'
                  'my-1',
                  'text-brand-complementary text-sm md:text-brand-h4 font-semibold'
                )}>
                  {data.title}
                </h6>
                <p className={classNames(
                  // 'text-info'
                  'my-1',
                  'text-brand-gray-light text-base'
                )}>
                  {data.text}
                </p>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}
