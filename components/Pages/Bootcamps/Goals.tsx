import React from 'react'

import H5 from '../../H5'
import H3 from '../../H3'
import InfoCard, { Props as InfoCardProps } from '../../InfoCard'

export interface Props {
  achievement: {
    cards: Array<InfoCardProps>
    cyanTitle: string
    subtitle: string
    whiteTitle: string
  }
}

export default function Goals({ achievement }: Props) {
  return (
    <section className='goals'>
      <div className='goals-container section-container'>
        <div className='head'>
          <H5>
            {achievement.subtitle}
          </H5>
          <H3
            whiteText={achievement.whiteTitle}
            cyanText={achievement.cyanTitle}
          />
        </div>
        <div className='goals-cards'>
          {
            achievement.cards.map((infoCard, index) => {
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
