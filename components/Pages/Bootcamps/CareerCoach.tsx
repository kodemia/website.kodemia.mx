import React from 'react'
import _ from 'lodash'

import H2 from '../../H2'
import H3 from '../../H3'
import CareerData from '../../../config/bootcamps/career-data.json'

import InfoCard, { Props as InfoCardProps } from '../../InfoCard'

export interface Props {
  infoCards: Array<InfoCardProps>
}

// export default function CareerCoach ({ infoCards }: Props) {
export default function CareerCoach () {
  const [first, second] = _.chunk(CareerData.cards, 4)

  return (
    <section className='career-coach'>
      <div className='career-coach-section section-container'>
        <div className='head'>
          <H3 text='Desarrollo Profesional' />
          <H2 whiteText='Parte de lo que lograrás con el' cyanText='Career Coach' />
        </div>
        <div className='first'>
          <div className='img-cont'>
            <img className='image' src={CareerData.image1} alt='' />
          </div>
          <div className='cards'>
            {
              first.map((infoCard, index) => {
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
        <div className='second'>
          <div className='cards'>
            {
              second.map((infoCard, index) => {
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
          <div className='img-cont'>
            <img className='image' src={CareerData.image2} alt='' />
          </div>
        </div>
      </div>
    </section>
  )
}
