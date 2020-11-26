import React from 'react'

// My components
import H2 from '../../H2'
import H3 from '../../H3'
import CarrouselAlliances from '../../CarrouselAlliances'
export interface Ally {
  name: string;
  image: string;
  alt: string;
  href: string;
}
export interface Props {
  allies: Array<Ally>;
}

export default function AllianceKodemia ({ allies = [] }: Props) {
  return (
    <section className='alliances-kodemia'>
      <div className='alliances-kodemia-container section-container'>
        <H3 text='Alianzas Kodemia' />
        <H2 cyanText='Ellos confían' whiteText='en nosotros' isFirstCyan />
        <CarrouselAlliances allies={allies} />
        <div className='slider-container'>
          {allies.map((ally, index) => {
            return ally.href === '' ? (
              <div
                className='slide'
                key={`ally-${index}`}
              >
                <img
                  src={ally.image}
                  className='ally'
                  alt={ally.alt}
                />
              </div>
            ) : (
              <div
                className='slide'
                key={`ally-${index}`}
              >
                <a
                  href={ally.href}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <img
                    src={ally.image}
                    className='ally'
                    alt={ally.alt}
                  />
                </a>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
