
import React from 'react'
import Image from 'next/image'
// My components
import H2 from '../../H2'

export interface Certification {
  title: string
  image: string
  description: string
}

export interface Props {
 certifications: Array<Certification >

}
export default function Certifications ({ certifications }: Props) {
  return (
    <section className='columns is-multiline certifications'>
      <div>
        <H2
          whiteText='Las Certificaciones'
          cyanText=''
          isFirstCyan
        />
      </div>
      {
        certifications.map((workshop, index) => (
          <article
            key={`certification-${index}`}
            className='column is-full certification'
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
              <div className='column is-8-desktop is-12-tablet certification-data is-flex is-flex-direction-column
            is-justify-content-center'
              >
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
