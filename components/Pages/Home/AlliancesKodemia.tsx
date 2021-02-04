
import React from 'react'
import classnames from 'classnames'
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
  isBlack?: boolean
}

export default function AllianceKodemia ({ allies = [], isBlack }: Props) {
  return (
    <section className='alliances-kodemia-wrapper'>
      <div className={classnames(
        'alliances-kodemia',
        {
          'is-black': isBlack
        }
      )}
      >
        <div className='alliances-kodemia-container section-container'>
          <H3 text='Alianzas Kodemia' />
          <div className='alliances-title'>
            <H2 cyanText='Ellos confían' whiteText='en nosotros' isFirstCyan />
          </div>
          <CarrouselAlliances allies={allies} hasContent={!isBlack} />
          <div className='slider-container'>
            {allies.map((ally, index) => {
              if (!ally.href) {
                return (
                  <div
                    className='slide'
                    key={`ally-${index}`}
                  >
                    <img
                      src={ally.image}
                      className='ally'
                      alt={ally.alt}
                    />
                  </div>)
              } else {
                return (
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
              }
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
