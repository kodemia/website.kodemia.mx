
import React from 'react'
// My components
import H5 from '../../H5'
import H3 from '../../H3'
import ProgramModule from './ProgramModule'
import Workshops from './Workshops'
import Certifications from './Certifications'
import DataManipulation from './DataManipulation'

export interface Props {
  subtitle: string
  cyanText: string
  whiteText: string
  modules: Array<any>
  workshops: Array<any>
  certifications: Array<any>
  dataManipulation?: Array<any>
}

export default function Program ({ cyanText, subtitle, whiteText, modules, workshops, certifications, dataManipulation }: Props) {
  return (
    <div id='the-program'>
      <div className='columns is-multiline is-flex program  bg-image'>
        <section className='column is-full-desktop section'>
          <div className='container'>
            <H5 text={subtitle} />
            <H3
              cyanText={cyanText}
              whiteText={whiteText}
              isFirstCyan
            />
          </div>
        </section>
      </div>
      <div className='columns is-multiline is-flex program '>
        <section className='column is-full-desktop section'>
          <ProgramModule modules={modules} />
        </section>
      </div>
      {
        dataManipulation &&
          <div className='columns is-multiline program is-flex'>
            <section className='column is-full-desktop section'>
              <DataManipulation dataManipulation={dataManipulation} />
            </section>
          </div>
      }
      <div className='columns is-multiline program is-flex'>
        <section className='column is-full-desktop section'>
          <Workshops workshops={workshops} />
        </section>
      </div>
      <div className='columns is-multiline program is-flex'>
        <section className='column is-full-desktop section'>
          <Certifications certifications={certifications} />
        </section>
      </div>
    </div>
  )
}
