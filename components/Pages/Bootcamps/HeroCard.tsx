
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

export default function HeroCard ({ bootcamp }: Props) {
  return (
    <div className='hero-card-bootcamps'>
      <div className='columns is-flex-direction-column container-data'>
        <div className={classNames(
          'column is-full-mobile is-half-tablet is-one-third-desktop container-tittle',
          {
            'bootcamp-js': bootcamp.subtitle === 'Javascript'
          })}
        >
          <H5>
            {bootcamp.subtitle}
          </H5>
          <H2>
            {bootcamp.title}
          </H2>
        </div>
        <div className='column is-one-third-desktop is-three-fifths-tablet container-description'>
          <p className='description'>
            {bootcamp.description}
          </p>
        </div>
        <div className='column container-information'>
          {
            bootcamp.information.map((data, index) => (
              <div
                key={`js-h-${index}`}
                className='wrapper-information'
              >
                <h6 className='title-info'>
                  {data.title}
                </h6>
                <p className='text-info'>
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
