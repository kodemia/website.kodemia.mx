
import React from 'react'
import _ from 'lodash'

import H3 from 'components/H3'
import H5 from 'components/H5'
import InfoBullet from 'components/InfoBullet'

import CareerData from 'config/bootcamps/career-data.json'

export default function CareerCoach (): JSX.Element {
  const [first, second] = _.chunk(CareerData.cards, 4)

  return (
    <section className='career-coach'>
      <div className='career-coach-container section-container'>
        <div className='head'>
          <H5>
            Desarrollo Profesional
          </H5>
          <H3
            whiteText='Parte de lo que lograrás con el'
            cyanText='Career Coach'
          />
        </div>
        <div className='first'>
          <div className='img-cont' id='first-img'>
            <img
              className='image'
              src={CareerData.image1}
              alt='Desarrollo profesional'
            />
          </div>
          <div className='cards'>
            {
              first.map((infoElement, index) => {
                return (
                  <InfoBullet
                    key={`first-${index}`}
                    icon={infoElement.icon}
                    title={infoElement.title}
                    text={infoElement.text}
                  />
                )
              })
            }
          </div>
        </div>
        <div className='second'>
          <div className='cards'>
            {
              second.map((infoElement, index) => {
                return (
                  <InfoBullet
                    key={`second-${index}`}
                    icon={infoElement.icon}
                    title={infoElement.title}
                    text={infoElement.text}
                  />
                )
              })
            }
          </div>
          <div className='img-cont' id='second-img'>
            <img
              className='image'
              src={CareerData.image2}
              alt='Career coach'
            />
          </div>
        </div>
      </div>
    </section>
  )
}
