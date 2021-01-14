
import React from 'react'
// My components
import H1 from '../../H1'
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
        <div className='column  is-one-third-mobile is-half-tablet is-one-third-desktop container-tittle'>
          <H3 text='Javascript' />
          <H1 text='Bootcamp Full Stack JavaScript' />
        </div>
        <div className='column is-one-third-desktop is-three-fifths-tablet container-description'>
          <p className='description'>
            {bootcamp.description}
          </p>
        </div>
        <div className='column is-one-third is-half-mobile container-information'>
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
