
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
    <div>
      <div>
        <H3 text={subtitle} />
        <H2 cyanText={cyanText} whiteText={whiteText} isFirstCyan />
      </div>
      <div>
        <ProgramModule modules={bootcamp.modules} />
      </div>

    </div>
  )
}
