
import React from 'react'
// My components
import H5 from '../../H5'
import H2 from '../../H2'
import H4 from '../../H4'
import DescriptionParagraph from 'components/DescriptionParagraph'

export interface WorkshopArr {
  image: string
  week: string
  title: string
  description: string
}

export interface Props {
  workshops: Array<WorkshopArr>
}

export default function workshops ({ workshops }: Props) {
  return (
    <section className='columns is-multiline workshops'>
      <div className='mb-6'>
        <H2 text='Los Talleres' />
      </div>
      {
        workshops.map((workshop, index) => (
          <article
            key={`workshop-${index}`}
            className='column is-full workshop '
          >
            <div className='columns is-multiline wrapper is-flex-desktop is-justify-content-center'>
              <div className='column is-4-desktop is-12-tablet  is-flex image'>
                <img
                  src={workshop.image}
                  alt={`workshop-${workshop.title}`}
                  className='image'
                />
              </div>
              <div className='column is-8-desktop is-12-tablet workshop-data'>
                <H5>
                  {workshop.week}
                </H5>
                <H4>
                  {workshop.title}
                </H4>
                <DescriptionParagraph>
                  {workshop.description}
                </DescriptionParagraph>
              </div>
            </div>
          </article>
        ))
      }
    </section>
  )
}
