import React from 'react'

import H2 from 'components/H2'
import H3 from 'components/H3'
import InfoCard, { Props as InfoCardProps } from 'components/InfoCard'

export interface Props {
  image: string
  infoCards: Array<InfoCardProps>
}

export default function FindIdealKoder ({ image, infoCards }: Props) {
  return (
    <section className='find-ideal-koder'>
      <div className='find-koder-container section-container'>
        <div className='subject'>
          <H3 text='¿Cómo encuentro al Koder perfecto para mi empresa?' />
          <H2 whiteText='Encuentra al' cyanText='programador ideal' />
        </div>
        <div className='img-cont'>
          <img className='image' src={image} alt='koder ideal' />
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
                  detail={infoCard.detail}
                />
              )
            })
          }
        </div>
      </div>
    </section>
  )
}
