import React from 'react'
import H5 from 'components/H5'
import H3 from 'components/H3'
import InfoCard, { Props as InfoCardProps } from 'components/InfoCard'

export interface Props {
  findTalent: {
    cards: Array<InfoCardProps>
    cyanTitle: string
    detail: string
    subtitle: string
    whiteTitle: string
  }
}

export default function HelpFindTalent ({ findTalent }: Props) {
  return (
    <section id='help-find-talent'>
      <div className='find-talent-container section-container'>
        <div className='head'>
          <H5 text={findTalent.subtitle} />
          <H3 whiteText={findTalent.whiteTitle} cyanText={findTalent.cyanTitle} />
        </div>
        <p className='detail'>
          {findTalent.detail}
        </p>
        <div className='cards'>
          {
            findTalent.cards.map((infoCard, index) => {
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
