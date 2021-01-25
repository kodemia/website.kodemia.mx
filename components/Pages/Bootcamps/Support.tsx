import React from 'react'

import H2 from '../../H2'
import H3 from '../../H3'
import InfoCard, { Props as InfoCardProps } from '../../InfoCard'

export interface Props {
  image: string
  infoCards: Array<InfoCardProps>
}

export default function Support ({ infoCards, image }: Props) {
  return (
    <section className='support'>
      <div className='support-container section-container'>
        <div className='head'>
          <H3 text='Soporte Kodemia (De por vida)' />
          <H2 whiteText='Otros' cyanText='Beneficios' />
          <H2 whiteText='más...' />
        </div>
        <div className='img-cont'>
          <img className='image' src={image} alt='' />
        </div>
        <div className='cards'>
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
