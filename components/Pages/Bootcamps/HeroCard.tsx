
import React from 'react'
import classNames from 'classnames'
// My components
import H2 from '../../H2'
import H3 from '../../H3'

export interface Information {
  title: string
  text: string
}

export interface Props{
  bootcamp:{
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
        <div className={
          classNames('column is-full-mobile is-half-tablet is-one-third-desktop container-tittle',
            {
              'bootcamp-js': bootcamp.subtitle === 'Javascript'
            })
        }
        >
          <H3 text={bootcamp.subtitle} />
          <H2 whiteText={bootcamp.title} cyanText='' isFirstCyan />
        </div>
        <div className='column is-one-third-desktop is-three-fifths-tablet container-description'>
          <p className='description'>
            {bootcamp.description}
          </p>
        </div>
        <div className='column container-information'>
          {
            bootcamp.information.map((data, index) => (
              <div key={`js-h-${index}`} className='wrapper-information'>
                <h3 className='title-info'>{data.title}</h3>
                <p className='text-info'>{data.text}</p>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}
