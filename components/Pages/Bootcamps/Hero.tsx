
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

export default function JavascriptLive ({ bootcamp }:Props) {
  return (
    <div className='hero-bootcamps'>
      <div className='columns hero-container'>
        <div className='column is-full'>
          <BgVideo />
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
