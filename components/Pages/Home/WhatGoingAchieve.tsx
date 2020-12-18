import React from 'react'

import Button from '../../Button'
import H2 from '../../H2'
import H3 from '../../H3'

export interface Image {
  src: string
}

export interface Props {
  winnerImages: Array<Image>
}

export default function WhatGoingAchieve ({ winnerImages }: Props) {
  return (
    <section className='what-going-achieve'>
      <div className='achieves-container section-container'>
        <div className='info'>
          <H3 text='¿Qué vas a lograr?' />
          <H2 whiteText='Tus desarrollos hablarán ' cyanText='por sí solos' />
          <p className='text'>
            Nuestro Bootcamp te llevará desde cero hasta desarrollador {' '}
            Full Stack. Crearás una aplicación web completa empleando {' '}
            UX/UI, SCRUM, Front End y Back End con Javascript o Python, {' '}
            todo desplegado en la nube.
          </p>
          <Button isPrimary label='Conoce la experiencia completa' />
        </div>
        <div className='images'>
          {
            winnerImages.map((image, index) => {
              return (
                <div
                  className='image'
                  key={`image-${index}`}
                >
                  <img src={image} alt='winner images' />
                </div>
              )
            })
          }
        </div>
      </div>
    </section>
  )
}
