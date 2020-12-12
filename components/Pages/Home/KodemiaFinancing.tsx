
import React from 'react'
// My component
import Button from '../../Button'
import H2 from '../../H2'
import H3 from '../../H3'

export interface Data {
    title: string
    keywords: string
    section: string
    text: string
}
export interface Props {
  info: Data
}

export default function KodemiaFinancing ({ info }:Props) {
  return (
    <section className='kodemia-financing'>
      <div className='kodemia-financing-container  section-container'>
        <H3 text={info.section} />
        <div className='title-container'>
          <H2 whiteText={info.title} cyanText={info.keywords} />
        </div>
        <p className='text'>{info.text}</p>
      </div>
    </section>
  )
}
