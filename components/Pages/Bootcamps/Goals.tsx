import React from 'react'

import H2 from '../../H2'
import H3 from '../../H3'
import InfoCard, { Props as InfoCardProps } from '../../InfoCard'

export interface Props {
  infoCards: Array<InfoCardProps>
}

export default function Goals ({ infoCards }: Props) {
  return (
    <section className='goals'>
      <div className='goals-container section-container'>
        <div className='head'>
          <H3 text='Objetivos del Bootcamp' />
          <H2 whiteText='¿Qué vas a lograr' cyanText='programando?' />
        </div>
        <div className='goals-cards'>
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
