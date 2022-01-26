
import React from 'react'
// My components
import H5 from 'components/H5'
import H2 from 'components/H2'
import H4 from 'components/H4'
import Text from 'components/Text'

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
        <H2>
          Los Talleres
        </H2>
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
                <Text>
                  {workshop.description}
                </Text>
              </div>
            </div>
          </article>
        ))
      }
    </section>
  )
}
