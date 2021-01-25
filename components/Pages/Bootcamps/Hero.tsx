
import React from 'react'
// My components

import HeroCard from './HeroCard'
import BgVideo from '../../BgVideo'

export interface Information {
  title: string
  text: string
}

export interface Props{
  bootcamp:{
    title: string
    subtitle: string
    description: string
    information: Array<Information>
  }
}

export default function JavascriptLive ({ bootcamp, src }:Props) {
  return (
    <div className='hero-bootcamps'>
      <div className='columns hero-container'>
        <div className='column is-full'>
          <BgVideo src='/images/bootcamps/Video-fondo-JS.mp4' />
          <div className='columns is-justify-content-center cover'>
            <div className='column  container-card'>
              <HeroCard bootcamp={bootcamp} />
              <img
                src='/icons/icon-scroll.svg'
                className='arrow-icon'
              />
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}
