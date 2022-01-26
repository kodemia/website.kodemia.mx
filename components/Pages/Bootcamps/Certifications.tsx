
import React from 'react'
// My components
import H2 from 'components/H2'
import H4 from 'components/H4'
import Text from 'components/Text'

export interface Certification {
  title: string
  image: string
  description: string
}

export interface Props {
  certifications: Array<Certification>
}

export default function Certifications ({ certifications }: Props) {
  return (
    <section className='columns is-multiline certifications'>
      <div className='mb-6'>
        <H2>
          Las Certificaciones
        </H2>
      </div>
      {
        certifications.map((workshop, index) => (
          <article
            key={`certification-${index}`}
            className='column is-full certification '
          >
            <div className='columns is-multiline wrapper is-flex-desktop is-align-items-center'>
              <div className='column is-4-desktop is-12-tablet  is-flex image'>
                <img
                  src={workshop.image}
                  alt={`workshop-${workshop.title}`}
                  className='image'
                />
              </div>
              <div className='column is-8-desktop is-12-tablet certification-data is-flex is-flex-direction-column
            is-justify-content-center'
              >

                <div className='title'>
                  <H4>
                    {workshop.title}
                  </H4>
                </div>
                <div className='description'>
                  <Text>
                    {workshop.description}
                  </Text>
                </div>
              </div>
            </div>
          </article>
        ))
      }
    </section>
  )
}
