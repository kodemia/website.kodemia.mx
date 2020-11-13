
import React from 'react'
// My components
import H2 from '../../H2'
import H3 from '../../H3'

export interface Allies {
  name: string
  image:string
}
export interface Props {
  allies: Array<Allies>
}

export default function AllianceKodemia ({ allies }:Props) {
  return (
    <section className='alliances-kodemia'>
      <div className='alliances-kodemia-container section-container'>
        <H3 text='Alianzas Kodemia' />
        <H2 cyanText='Ellos confían' whiteText='en nosotros' isFirstCyan />
        <div className='allies-container'>
          <div className='slider'>
         {
            allies.map((ally,index)=>{
              return(
              <img
              src={ally.image}
              key={`ally-${index}`}
              className ='ally-container'/>
              )
            })
          }
          </div>
        </div>
      </div>
    </section>
  )
}
