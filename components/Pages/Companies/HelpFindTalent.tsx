import React from 'react'
import H2 from 'components/H2'
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
    <section className='help-find-talent'>
      <div className='find-talent-container section-container'>
        <div className='head'>
          <H3 text={findTalent.subtitle} />
          <H2 whiteText={findTalent.whiteTitle} cyanText={findTalent.cyanTitle} />
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
