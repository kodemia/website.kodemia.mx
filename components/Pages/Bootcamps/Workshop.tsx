
import React from 'react'
import Image from 'next/image'
import H3 from '../../H3'

export interface WorkshopArr {
  image: string
  week: string
  title: string
  description: string
}

export interface Props {
  workshops : Array<WorkshopArr>
}

export default function Workshop ({ workshops }: Props) {
  return (
    <section className='columns is-multiline workshops'>
      {
        workshops.map((workshop, index) => (
          <article
            key={`workshop-${index}`} className='column is-full workshop'
          >
            <div className='columns is-multiline wrapper'>
              <div className='column is-4-desktop is-12-tablet  is-flex image'>
                <Image
                  src={workshop.image}
                  alt={`workshop-${workshop.title}`}
                  width={150}
                  height={150}
                />
              </div>
              <div className='column is-8-desktop is-12-tablet workshop-data'>
                <H3 text={workshop.week} />
                <h5 className='title'>{workshop.title}</h5>
                <p className='description'>{workshop.description}</p>

              </div>
            </div>
          </article>
        ))
      }
    </section>
  )
}
