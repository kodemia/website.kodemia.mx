
import React, { useState } from 'react'
import classNames from 'classnames'
import _ from 'lodash'

import H3 from 'components/H3'
import H5 from 'components/H5'
import Text from 'components/Text'
import PageSection from 'components/PageSection'

interface Image {
  image: string
}

interface Props {
  winnerImages: Array<Image>
}

export default function WhatGoingAchieve({ winnerImages }: Props) {
  const [activeImageIndex, setActiveImageIndex] = useState(0)

  return (
    <PageSection contentClassName={classNames(
      'grid grid-cols-1 lg:grid-cols-3',
      'gap-10'
    )}>
      <div className={classNames(
        'col-span-1',
        'flex flex-col',
        'gap-4',
        'w-full'
      )}>
        <H5>¿Qué vas a lograr?</H5>
        <H3 whiteText='Tus desarrollos hablarán' cyanText='por sí solos' />
        <Text>
          {`Nuestro Bootcamp te llevará desde cero hasta desarrollador Full Stack.${'\n'}Crearás una aplicación web completa empleando UX/UI, SCRUM, Front End y Back End con Javascript o Python, todo desplegado en la nube`}
        </Text>
      </div>
      <div className={classNames(
        'col-span-1 lg:col-span-2',
        'flex flex-col',
        'gap-7'
      )}>
        <div className={classNames(
          'relative',
          'w-full'
        )}>{
            //This image establish the container size 
            (() => {
              const img = _.first(winnerImages)
              return (
                <img
                  src={img?.image}
                  alt='winner image placeholder'
                  className='invisible'
                />
              )
            })()
          }
          {
            winnerImages.map((step, index) => {
              const isActive = activeImageIndex === index
              return (
                <img
                  key={`step-${index}`}
                  src={step.image}
                  alt='winner images'
                  className={classNames(
                    'absolute top-0',
                    'inline-block',
                    'transition-opacity duration-500',
                    { 'opacity-100': isActive },
                    { 'opacity-0': !isActive },
                  )} />
              )
            })
          }
        </div>
        <div className={classNames(
          'grid grid-cols-3',
          'text-center'
        )}>
          {
            winnerImages.map((_, index) => {
              const steps = ['Wireframe', 'Desarrollo', 'Aplicación']
              const isFirst = index === 0
              const isLast = index === (winnerImages.length - 1)
              const isActive = activeImageIndex === index
              return (
                <div
                  className={classNames('cursor-pointer h-full')}
                  key={`step-slider-${index}`}
                  onClick={() => setActiveImageIndex(index)}
                >
                  <div
                    className={classNames(
                      'bg-white/10',
                      'h-2.5',
                      { 'rounded-l-xl': isFirst },
                      { 'rounded-r-xl': isLast }
                    )}>
                    <div
                      className={classNames(
                        'rounded-xl',
                        'h-2.5',
                        { 'bg-brand-primary': isActive }
                      )}>
                      &nbsp;
                    </div>
                  </div>
                  <h5
                    className={classNames(
                      'pt-4',
                      'text-xs md:text-base lg:text-xl',
                      'font-medium break-all'
                    )}>
                    {steps[index]}
                  </h5>
                </div>
              )
            })
          }
        </div>
      </div>
    </PageSection>
  )
}
