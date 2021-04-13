
import React from 'react'
// My component
import H5 from '../../H5'
import H3 from '../../H3'
import Button from '../../Button'

export interface Data {
  title: string
  keywords: string
  section: string
  text: string
}
export interface Props {
  info: Data
}

export default function KodemiaFinancing ({ info }: Props) {
  return (
    <section className='kodemia-financing'>
      <div className='kodemia-financing-container  section-container'>
        <H5>
          {info.section}
        </H5>
        <div className='title-container'>
          <H3
            whiteText={info.title}
            cyanText={info.keywords}
          />
        </div>
        <p className='text'>{info.text}</p>
        <div className='btn-container'>
          <Button
            label='Conoce más'
            isPrimary
            link='/aplicar'
          />
        </div>
      </div>
    </section>
  )
}
