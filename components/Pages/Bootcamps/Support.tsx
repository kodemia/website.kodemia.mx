import React from 'react'

import H2 from 'components/H2'
import H3 from 'components/H3'
import InfoCard, { Props as InfoCardProps } from 'components/InfoCard'

export interface Props {
  support: {
    cyanTitle: string
    image: string
    cards: Array<InfoCardProps>
    secondWhiteTitle: string
    subtitle: string
    whiteTitle: string
  }
}

export default function Support ({ support }: Props) {
  return (
    <section className='support'>
      <div className='support-container section-container'>
        <div className='head'>
          <H3 text={support.subtitle} />
          <H2 whiteText={support.whiteTitle} cyanText={support.cyanTitle} />
          <H2 whiteText={support.secondWhiteTitle} />
        </div>
        <div className='img-cont'>
          <img className='image' src={support.image} alt='' />
        </div>
        <div className='cards'>
          {
            support.cards.map((infoCard, index) => {
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
