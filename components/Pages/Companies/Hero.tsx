
import React from 'react'
// My components
import H2 from '../../H2'
import Button from '../../Button'

export default function Hero () {
  return (
    <div className='columns hero-companies'>
      <div className='column hero-container section-container'>
        <div className='title'>
          <H2
            cyanText=''
            whiteText='Encuentra desarrolladores de alto calibre' isFirstCyan
          />
        </div>
        <p className='description'>
          Los egresados viven una experiencia de alto desempeño que los forma de manera profesional y personal para convertirse en líderes tecnológicos.
        </p>
        <div className='video-wrapper'>
          <div className='video-container'>
            <video controls className='video'>
              <source src='https://prismic-io.s3.amazonaws.com/kodemia/d58417e7-a700-4c67-a3e2-5a746d3df0b2_home-background.mp4' />
            </video>
          </div>
        </div>
        <div className='hero-btn'>
          <Button
            isPrimary
            label='Contactanos'
            link='/'
          />
        </div>
      </div>
    </div>
  )
}
