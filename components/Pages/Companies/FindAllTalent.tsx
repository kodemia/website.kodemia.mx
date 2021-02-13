import React from 'react'
import H2 from 'components/H2'
import H3 from 'components/H3'
import InfoCard, { Props as InfoCardProps } from 'components/InfoCard'

export interface Props {
  detail: string
  infoCards: Array<InfoCardProps>
}

export default function FindAllTalent ({ detail, infoCards }: Props) {
  return (
    <section className='find-all-talent'>
      <div className='find-talent-container section-container'>
        <div className='head'>
          <H3 text='¿Con qué empresas trabajamos?' />
          <H2 whiteText='Ayudamos a encontrar talento ' cyanText='a todo nivel' />
        </div>
        <p className='detail'>
          {detail}
        </p>
        <div className='cards'>
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
