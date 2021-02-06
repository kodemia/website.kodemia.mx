import React from 'react'

import H2 from 'components/H2'
import H3 from 'components/H3'
import InfoCard, { Props as InfoCardProps } from 'components/InfoCard'

export interface Props {
  infoCards: Array<InfoCardProps>
}

export default function TalentDevelopment ({ infoCards }: Props) {
  return (
    <section className='talent-development'>
      <div className='talent-container section-container'>
        <div className='head'>
          <H3 text='¿Por qué contratar un koder?' />
          <H2
            cyanText='Desarrollamos talento,'
            whiteText='no sólo para programadores'
            isFirstCyan
          />
        </div>
        <div className='talent-cards'>
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
