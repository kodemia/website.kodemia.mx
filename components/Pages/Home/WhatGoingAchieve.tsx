import React, { useEffect } from 'react'
import Slider from 'react-slick'

import Button from '../../Button'
import H2 from '../../H2'
import H3 from '../../H3'

export interface Image {
  image: string
}

export interface Props {
  winnerImages: Array<Image>
}

export default function WhatGoingAchieve ({ winnerImages }: Props) {
  useEffect(() => {
    const dots = document.getElementsByClassName('custom-dot')
    if (dots && dots[0]) {
      dots[0].style = ''
    }
  }, [])

  const settings = {
    arrows: false,
    centerMode: true,
    dots: true,
    dotsClass: 'custom-dot',
    fade: true,
    infinite: true,
    slidesToScroll: 1,
    slidesToShow: 1,
    speed: 500,
    customPaging: function (i) {
      return (
        <div className='div-slider'>
          <div className='bar'>&nbsp;</div>
          {i === 0 && <p>Wireframe</p>}
          {i === 1 && <p>Desarrollo Web</p>}
          {i === 2 && <p>Aplicación</p>}
        </div>
      )
    }
  }

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
        <div className='slider'>
          <Slider {...settings}>
            {
              winnerImages.map((image, index) => {
                console.log('image', image)
                return (
                  <div
                    className='image'
                    key={`image-${index}`}
                  >
                    <img src={image.image} alt='winner images' />
                  </div>
                )
              })
            }
          </Slider>
        </div>
      </div>
    </section>
  )
}
