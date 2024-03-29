import React from 'react'

import H5 from 'components/H5'
import H3 from 'components/H3'
import InfoCard, { Props as InfoCardProps } from 'components/InfoCard'

export interface Props {
  talent: {
    cyanTitle: string
    cards: Array<InfoCardProps>
    subtitle: string
    whiteTitle: string
  }
}

export default function TalentDevelopment ({ talent }: Props) {
  return (
    <section className='talent-development'>
      <div className='talent-container section-container'>
        <div className='head'>
          <H5>
            {talent.subtitle}
          </H5>
          <H3
            cyanText={talent.cyanTitle}
            whiteText={talent.whiteTitle}
            isFirstCyan
          />
        </div>
        <div className='talent-cards'>
          {
            talent.cards.map((infoCard, index) => {
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
