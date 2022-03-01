
import React from 'react'

import H3 from 'components/H3'
import H5 from 'components/H5'
import InfoElement, { Props as InfoElementProps } from 'components/InfoElement'

export interface Props {
  findTalent: {
    cards: Array<InfoElementProps>
    cyanTitle: string
    detail: string
    subtitle: string
    whiteTitle: string
  }
}

export default function HelpFindTalent ({ findTalent }: Props): JSX.Element {
  return (
    <section id='help-find-talent'>
      <div className='find-talent-container section-container'>
        <div className='head'>
          <H5>
            {findTalent.subtitle}
          </H5>
          <H3
            whiteText={findTalent.whiteTitle}
            cyanText={findTalent.cyanTitle}
          />
        </div>
        <p className='detail'>
          {findTalent.detail}
        </p>
        <div className='cards'>
          {
            findTalent.cards.map((infoElement, index) => {
              return (
                <InfoElement
                  key={`find-talent-${index}`}
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
