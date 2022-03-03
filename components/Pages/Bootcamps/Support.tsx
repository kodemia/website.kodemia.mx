
import React from 'react'

import H3 from 'components/H3'
import H5 from 'components/H5'
import InfoBullet, { Props as InfoBulletProps } from 'components/InfoBullet'

export interface Props {
  support: {
    cyanTitle: string
    image: string
    cards: Array<InfoBulletProps>
    secondWhiteTitle: string
    subtitle: string
    whiteTitle: string
  }
}

export default function Support ({ support }: Props): JSX.Element {
  return (
    <section className='support'>
      <div className='support-container section-container'>
        <div className='head'>
          <H5>
            {support.subtitle}
          </H5>
          <H3
            whiteText={support.whiteTitle}
            cyanText={support.cyanTitle}
          />
          <H3 whiteText={support.secondWhiteTitle} />
        </div>
        <div className='img-cont'>
          <img
            className='image'
            src={support.image}
            alt='soporte-kodemia-beneficios'
          />
        </div>
        <div className='cards'>
          {
            support.cards.map((infoElement, index) => {
              return (
                <InfoBullet
                  key={`support-${index}`}
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
