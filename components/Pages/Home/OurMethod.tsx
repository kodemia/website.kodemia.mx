import React from 'react'
// My component
import H5 from '../../H5'
import H3 from '../../H3'
import InfoCard from '../../InfoCard'
import DescriptionParagraph from 'components/DescriptionParagraph'

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
        <H5 text='Nuestro Método' />
        <div className='title-contain'>
          <H3 whiteText={title} cyanText={keywords} />
        </div>
        <div className='our-method-text'>
          <DescriptionParagraph>
            {text}
          </DescriptionParagraph>
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
