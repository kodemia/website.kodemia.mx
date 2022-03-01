
import React from 'react'

import H3 from 'components/H3'
import H5 from 'components/H5'
import InfoElement, { Props as InfoElementProps } from 'components/InfoElement'

export interface Props {
  achievement: {
    cards: Array<InfoElementProps>
    cyanTitle: string
    subtitle: string
    whiteTitle: string
  }
}

export default function Goals ({ achievement }: Props): JSX.Element {
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
            achievement.cards.map((infoElement, index) => {
              return (
                <InfoElement
                  key={`achievement-${index}`}
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
