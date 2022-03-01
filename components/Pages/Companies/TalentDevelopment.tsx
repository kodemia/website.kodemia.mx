
import React from 'react'

import H3 from 'components/H3'
import H5 from 'components/H5'
import InfoElement, { Props as InfoElementProps } from 'components/InfoElement'

export interface Props {
  talent: {
    cyanTitle: string
    cards: Array<InfoElementProps>
    subtitle: string
    whiteTitle: string
  }
}

export default function TalentDevelopment ({ talent }: Props):JSX.Element {
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
            talent.cards.map((infoElement, index) => {
              return (
                <InfoElement
                  key={`talent-development-${index}`}
                  icon={infoElement.icon}
                  title={infoElement.title}
                  text={infoElement.text}
                />
              )
            })
          }
        </div>
      </div>
    </section>
  )
}
