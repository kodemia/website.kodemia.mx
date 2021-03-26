import React from 'react'

import H5 from 'components/H5'
import H3 from 'components/H3'
import InfoCard, { Props as InfoCardProps } from 'components/InfoCard'

export interface Props {
  idealKoder: {
    cards: Array<InfoCardProps>
    cyanTitle: string
    image: string
    subtitle: string
    whiteTitle: string
  }
}

export default function FindIdealKoder({ idealKoder }: Props) {
  return (
    <section className='find-ideal-koder'>
      <div className='find-koder-container section-container'>
        <div className='subject'>
          <H5>
            {idealKoder.subtitle}
          </H5>
          <div className='title'>
            <H3 whiteText={idealKoder.whiteTitle} cyanText={idealKoder.cyanTitle} />
          </div>
        </div>
        <div className='img-cont'>
          <img className='image'
            src={idealKoder.image}
            alt='koder ideal'
          />
        </div>
        <div className='cards'>
          {
            idealKoder.cards.map((infoCard, index) => {
              return (
                <InfoCard
                  key={`card-${index}`}
                  icon={infoCard.icon}
                  title={infoCard.title}
                  text={infoCard.text}
                  detail={infoCard.detail}
                />
              )
            })
          }
        </div>
      </div>
    </section>
  )
}
