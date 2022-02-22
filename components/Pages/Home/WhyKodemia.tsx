
import React from 'react'

import H3 from 'components/H3'
import H5 from 'components/H5'
import InfoCard, { Props as InfoCardProps } from 'components/InfoCard'

export interface Props {
  cards: Array<InfoCardProps>
  cyanTitle: string
  image: string
  subtitle: string
  whiteTitle: string
}

export default function WhyKodemia ({ cards, cyanTitle, image, subtitle, whiteTitle }: Props) {
  return (
    <section className='why-kodemia supercontainer'>
      <div className='why-kodemia-container hijocontainer'>
        <div className='subject'>
          <H5>
            {subtitle}
          </H5>
          <H3 whiteText={whiteTitle} cyanText={cyanTitle} />
        </div>
        <img className='image' src={image} alt='escuela-de-programación-koder-y-mentor-sonriendo' />

        <div className='why-kodemia-cards'>
          {
            cards.map((infoCard, index) => {
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
