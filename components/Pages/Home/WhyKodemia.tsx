import React from 'react'

import H2 from '../../H2'
import InfoCard, { Props as InfoCardProps } from '../../InfoCard'

export interface Props {
  infoCards: Array<InfoCardProps>
}

export default function WhyKodemia ({ infoCards }: Props) {
  return (
    <section className='why-kodemia'>
      <div className='why-kodemia-container section-container'>
        <div className='subject'>
          <h3 className='title'>¿Por qué Kodemia?</h3>
          <H2 whiteText='Vivimos para ' cyanText='formar programadores' />
        </div>
        <img className='image' src='/images/why-kodemia.png' alt='koder y mentor sonriendo' />

        <div className='why-kodemia-cards'>
          {
            infoCards.map((infoCard, index) => {
              return (
                <InfoCard
                  key={`card-${index}`}
                  icon={infoCard.icon}
                  title={infoCard.title}
                  text={infoCard.text}
                />
              )
            })
          }
        </div>
      </div>
    </section>
  )
}
