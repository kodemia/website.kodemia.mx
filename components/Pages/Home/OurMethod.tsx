
import React from 'react'

import H3 from 'components/H3'
import H5 from 'components/H5'
import InfoElement from 'components/InfoElement'
import Text from 'components/Text'

export interface InfoElement {
  icon: string
  text: string
  title: string
}

export interface Info {
  title: string
  keywords: string
  text: string
  cards: Array<InfoElement>
}

export interface Props {
  ourMethod: Info
}

export default function OurMethod ({ ourMethod: { title, keywords, text, cards } }: Props): JSX.Element {
  return (
    <section className='our-method'>
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
          {cards.map((infoElement, index) => {
            return (
              <InfoElement
                key={`our-method-${index}`}
                icon={infoElement.icon}
                title={infoElement.title}
                text={infoElement.text}
              />
            )
          })}
        </div>
      </div>
    </section>
  )
}
