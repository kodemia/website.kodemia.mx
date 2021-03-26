import React from 'react'

import H5 from 'components/H5'
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

export default function Support({ support }: Props) {
  return (
    <section className='support'>
      <div className='support-container section-container'>
        <div className='head'>
          <H5>
            {support.subtitle}
          </H5>
          <H3
            whiteText={support.whiteTitle}
            cyanText={support.cyanTitle}
          />
          <H3 whiteText={support.secondWhiteTitle} />
        </div>
        <div className='img-cont'>
          <img
            className='image'
            src={support.image}
            alt='soporte-kodemia-beneficios'
          />
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
