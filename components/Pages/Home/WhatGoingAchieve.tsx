
import React, { useState } from 'react'
import classnames from 'classnames'
import _ from 'lodash'

import H5 from '../../H5'
import H3 from '../../H3'
import DescriptionParagraph from 'components/DescriptionParagraph'

interface Image {
  image: string
}

interface Props {
  winnerImages: Array<Image>
}

export default function WhatGoingAchieve ({ winnerImages }: Props) {
  const [activeImageIndex, setActiveImageIndex] = useState(0)

  return (
    <section className='achivements-section'>
      <div className='columns is-multiline achivements-container section-container'>
        <div className='column is-one-third pl-0 is-full-touch achivements-text-column'>
          <div className='columns is-multiline'>
            <div className='column is-full pb-0'>
              <H5>
                ¿Qué vas a lograr?
              </H5>
            </div>
            <div className='column is-full pt-0'>
              <H3 whiteText='Tus desarrollos hablarán ' cyanText='por sí solos' />
            </div>
            <div className='column is-full'>
              <DescriptionParagraph>
                {`Nuestro Bootcamp te llevará desde cero hasta desarrollador Full Stack.${'\n'}Crearás una aplicación web completa empleando UX/UI, SCRUM, Front End y Back End con Javascript o Python, todo desplegado en la nube`}
              </DescriptionParagraph>
            </div>
          </div>

        </div>
        <div className='column is-two-thirds is-full-touch pr-0 slider-container-column'>
          <div className='columns'>
            <div className='column is-relative slider-column'>
              <div className='slide'>
                {
                  (() => {
                    const img = _.first(winnerImages)
                    return (
                      <img
                        src={img?.image}
                        alt='winner image placeholder'
                        className='is-invisible'
                      />
                    )
                  })()
                }
                {
                  winnerImages.map((step, index) => (
                    <img
                      key={`step-${index}`}
                      src={step.image}
                      alt='winner images'
                      className={classnames(
                        'slide-item',
                        { 'is-active': activeImageIndex === index }
                      )}
                    />
                  ))
                }
              </div>
            </div>
          </div>
          <div className='columns is-mobile bar-columns'>
            {
              winnerImages.map((step, index) => {
                const steps = ['Wireframe', 'Desarrollo', 'Aplicación']
                return (
                  <div
                    className='column bar-column'
                    key={`step-slider-${index}`}
                    onClick={() => setActiveImageIndex(index)}
                  >
                    <div className='columns is-multiline is-mobile bar'>
                      <div
                        className={classnames(
                          'column',
                          'is-full',
                          'bar-bar',
                          'p-0',
                          { first: index === 0 },
                          { last: index === (winnerImages.length - 1) }
                        )}
                      >
                        <div
                          className={classnames(
                            'indicator',
                            { 'has-background-info': activeImageIndex === index }
                          )}
                        >
                          &nbsp;
                        </div>

                      </div>
                      <div
                        className='column is-full has-text-centered has-text-weight-medium-on-desktop bar-text'
                      >
                        {steps[index]}
                      </div>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
    </section>
  )
}
