
import React from 'react'
// My components
import H2 from '../../H2'
import H4 from '../../H4'
import DescriptionParagraph from '../../DescriptionParagraph'

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
        <H2 text='Las Certificaciones' />
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
                  <H4 text={workshop.title} />
                </div>
                <div className='description'>
                  <DescriptionParagraph children={workshop.description} />
                </div>
              </div>
            </div>
          </article>
        ))
      }
    </section>
  )
}
