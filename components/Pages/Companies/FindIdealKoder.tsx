
import React from 'react'

import H3 from 'components/H3'
import H5 from 'components/H5'
import InfoElement, { Props as InfoElementProps } from 'components/InfoElement'

export interface Props {
  idealKoder: {
    cards: Array<InfoElementProps>
    cyanTitle: string
    image: string
    subtitle: string
    whiteTitle: string
  }
}

export default function FindIdealKoder ({ idealKoder }: Props): JSX.Element {
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
          <img
            className='image'
            src={idealKoder.image}
            alt='koder ideal'
          />
        </div>
        <div className='cards'>
          {
            idealKoder.cards.map((infoElement, index) => {
              return (
                <InfoElement
                  key={`ideal-koder-${index}`}
                  icon={infoElement.icon}
                  title={infoElement.title}
                  text={infoElement.text}
                  detail={infoElement.detail}
                />
              )
            })
          }
        </div>
      </div>
    </section>
  )
}
