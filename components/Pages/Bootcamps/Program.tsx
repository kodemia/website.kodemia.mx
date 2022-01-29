
import React from 'react'

import Certifications from 'components/Pages/Bootcamps/Certifications'
import DataManipulation from 'components/Pages/Bootcamps/DataManipulation'
import H3 from 'components/H3'
import H5 from 'components/H5'
import ProgramModule from 'components/Pages/Bootcamps/ProgramModule'
import Workshops from 'components/Pages/Bootcamps/Workshops'

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
            <H5>
              {subtitle}
            </H5>
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
      {dataManipulation &&
        <div className='columns is-multiline program is-flex'>
          <section className='column is-full-desktop section'>
            <DataManipulation dataManipulation={dataManipulation} />
          </section>
        </div>}
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
