import React from 'react'

import H2 from 'components/H2'
import H3 from 'components/H3'
import InfoCard, { Props as InfoCardProps } from 'components/InfoCard'
// import BootcampCard from 'components/BootcampCard'

export interface Props {
  children?: string
  image: string
  infoCards: Array<InfoCardProps>
}

export default function FindKoder ({ children, image, infoCards }: Props) {
  return (
    <section className='find-koder'>
      <div className='find-koder-container section-container'>
        <H3 text='¿Cómo encuentro al Koder perfecto para mi empresa?' />
        <H2 whiteText='Encuentra al' cyanText='programador ideal' />
        <img src={image} alt='koder ideal' />
        <div className='cards-container'>
          {
            infoCards.map((infoCard, index) => {
              return (
                <InfoCard
                  key={`card-${index}`}
                  icon={infoCard.icon}
                  title={infoCard.title}
                  text={infoCard.text}
                >
                {children}
                </InfoCard>
              )
            })
          }
        </div>
      </div>
    </section>
  )
}
