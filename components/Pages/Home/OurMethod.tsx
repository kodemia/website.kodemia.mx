
import React from 'react'

import H3 from 'components/H3'
import H5 from 'components/H5'
import InfoCard from 'components/InfoCard'
import Text from 'components/Text'

export interface Card {
  icon: string
  text: string
  title: string
}

export interface Info {
  title: string
  keywords: string
  text: string
  cards: Array<Card>
}

export interface Props {
  ourMethod: Info
}

export default function OurMethod ({ ourMethod: { title, keywords, text, cards } }: Props) {
  return (
    <section className='our-method '>
      <div className='our-method-container section-container'>
        <H5>
          Nuestro Método
        </H5>
        <div className='title-contain'>
          <H3
            whiteText={title}
            cyanText={keywords}
          />
        </div>
        <div className='our-method-text'>
          <Text>
            {text}
          </Text>
        </div>
        <div className='our-method-cards'>
          {cards.map((infoCard, index) => {
            return (
              <InfoCard
                key={`om-card-${index}`}
                icon={infoCard.icon}
                title={infoCard.title}
                text={infoCard.text}
              />
            )
          })}
        </div>
      </div>
    </section>
  )
}
