
import React from 'react'
import H2 from '../../H2'
import H3 from '../../H3'
import ProgramModule from './ProgramModule'

export interface bootcamp {
  modules: Array<any>

}
export interface Props {
  subtitle: string
  cyanText: string
  whiteText: string
  bootcamp: bootcamp
}

export default function Program ({ subtitle, cyanText, whiteText, bootcamp }: Props) {
  return (
    <div className='columns is-multiline program is-flex is-flex-direction-column is-justify-content-center
    is-align-content-center'
    >
      <section className='column is-full-desktop section'>
        <H3 text={subtitle} />
        <H2
          cyanText={cyanText}
          whiteText={whiteText}
          isFirstCyan
        />
      </section>
      <section className='column is-full-desktop section'>
        <ProgramModule modules={bootcamp.modules} />
      </section>
    </div>
  )
}
