import React from 'react'
import _ from 'lodash'

import H2 from 'components/H2'
import H3 from 'components/H3'
import InfoCard from 'components/InfoCard'

import CareerData from 'config/bootcamps/career-data.json'

export default function CareerCoach () {
  const [first, second] = _.chunk(CareerData.cards, 4)

  return (
    <section className='career-coach'>
      <div className='career-coach-container section-container'>
        <div className='head'>
          <H3 text='Desarrollo Profesional' />
          <H2 whiteText='Parte de lo que lograrás con el' cyanText='Career Coach' />
        </div>
        <div className='first'>
          <div className='img-cont' id='first-img'>
            <img className='image' src={CareerData.image1} alt='Desarrollo profesional' />
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
          <div className='img-cont' id='second-img'>
            <img className='image' src={CareerData.image2} alt='Career coach' />
          </div>
        </div>
      </div>
    </section>
  )
}
