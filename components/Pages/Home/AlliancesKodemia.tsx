
import React from 'react'
// My components
import H2 from '../../H2'
import H3 from '../../H3'

export interface Allies {
  name: string
  image: string
  alt: string
}
export interface Props {
  allies: Array<Allies>
}

export default function AllianceKodemia ({ allies = [] }: Props) {
  return (
    <section className='alliances-kodemia'>
      <div className='alliances-kodemia-container section-container'>
        <H3 text='Alianzas Kodemia' />
        <H2 cyanText='Ellos confían' whiteText='en nosotros' isFirstCyan />
        <div className='allies-slider'>
          <div className='slider-container'>
            {
              allies.map((ally, index) => {
                return (
                  <div className='slide' key={`ally-${index}`}>
                    <img
                      src={ally.image}
                      className='ally'
                      alt={ally.alt}
                    />
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
    </section>
  )
}
