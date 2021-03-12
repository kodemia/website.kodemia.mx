
import React from 'react'
// My components
import H2 from '../../H2'
import H3 from '../../H3'

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
      <div>
        <H2
          whiteText='Los Talleres'
          cyanText=''
          isFirstCyan
        />
      </div>
      {
        workshops.map((workshop, index) => (
          <article
            key={`workshop-${index}`}
            className='column is-full workshop'
          >
            <div className='columns is-multiline wrapper is-flex-dektop
            is-justify-content-center'
            >
              <div className='column is-4-desktop is-12-tablet  is-flex image'>
                <img
                  src={workshop.image}
                  alt={`workshop-${workshop.title}`}
                  className='image'
                />
              </div>
              <div className='column is-8-desktop is-12-tablet workshop-data'>
                <H3 text={workshop.week} />
                <h5 className='title'>
                  {workshop.title}
                </h5>
                <p className='description'>
                  {workshop.description}
                </p>
              </div>
            </div>
          </article>
        ))
      }
    </section>
  )
}
