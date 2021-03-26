import React from 'react'
// my components
import H5 from '../../H5'
import H3 from '../../H3'
import InfoCard, { Props as InfoCardProps } from '../../InfoCard'

export interface Props {
  cards: Array<InfoCardProps>
  cyanTitle: string
  image: string
  subtitle: string
  whiteTitle: string
}

export default function WhyKodemia ({ cards, cyanTitle, image, subtitle, whiteTitle }: Props) {
  return (
    <section className='why-kodemia'>
      <div className='why-kodemia-container section-container'>
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
