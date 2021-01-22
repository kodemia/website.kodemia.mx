
import React from 'react'
import H2 from '../../H2'
import H3 from '../../H3'
import ProgramModule from './ProgramModule'
import Workshop from './Workshop'
import TextCursor from '../../TextCursor'

export interface bootcamp {
  modules: Array<any>
  workshops: Array<any>
  certifications: Array<any>
  dataManipulation?: Array<any>
}
export interface Props {
  subtitle: string
  cyanText: string
  whiteText: string
  bootcamp: bootcamp
}

export default function Program ({ subtitle, cyanText, whiteText, bootcamp }: Props) {
  console.log(bootcamp.dataManipulation)
  return (
    <div className='the-program'>
      <div className='columns is-multiline is-flex is-flex-direction-column is-justify-content-center
      is-align-content-center program '
      >
        <section className='column is-full-desktop section'>
          <H3 text={subtitle} />
          <H2
            cyanText={cyanText}
            whiteText={whiteText}
            isFirstCyan
          />
        </section>
      </div>
      <div className='columns is-multiline is-flex is-flex-direction-column is-justify-content-center
      is-align-content-center program '
      >
        <section className='column is-full-desktop section'>
          <h4><TextCursor text='Temas' white /></h4>
          <ProgramModule modules={bootcamp.modules} />
        </section>
      </div>
      {bootcamp.dataManipulation &&
        <div className='columns is-multiline program is-flex is-flex-direction-column is-justify-content-center is-align-content-center'>
          <section className='column is-full-desktop section'>
            <h4><TextCursor text='Temas' white /></h4>
            <h1>hi</h1>
          </section>
        </div>}
      <div className='columns is-multiline program is-flex is-flex-direction-column is-justify-content-center is-align-content-center'>
        <section className='column is-full-desktop section'>
          <h4><TextCursor text='Talleres' white /></h4>
          <Workshop workshops={bootcamp.workshops} />
        </section>
      </div>

    </div>
  )
}
