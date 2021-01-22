
import React from 'react'
// My components
import H2 from '../../H2'
import H3 from '../../H3'
import ProgramModule from './ProgramModule'
import Workshops from './Workshops'
import Certifications from './Certifications'
import DataManipulation from './DataManipulation'

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
      <div className='columns is-multiline is-flex program  bg-image'>
        <section className='column is-full-desktop section'>
          <div className='container'>
            <H3 text={subtitle} />
            <H2
              cyanText={cyanText}
              whiteText={whiteText}
              isFirstCyan
            />
          </div>
        </section>
      </div>
      <div className='columns is-multiline is-flex program '>
        <section className='column is-full-desktop section'>
          <ProgramModule modules={bootcamp.modules} />
        </section>
      </div>
      {
        bootcamp.dataManipulation &&
          <div className='columns is-multiline program is-flex'>
            <section className='column is-full-desktop section'>
              <DataManipulation dataManipulation={bootcamp.dataManipulation} />
            </section>
          </div>
      }
      <div className='columns is-multiline program is-flex'>
        <section className='column is-full-desktop section'>
          <Workshops workshops={bootcamp.workshops} />
        </section>
      </div>
      <div className='columns is-multiline program is-flex'>
        <section className='column is-full-desktop section'>
          <Certifications certifications={bootcamp.certifications} />
        </section>
      </div>
    </div>
  )
}
