
import React from 'react'
// my component
import HeroCard from '../../HeroCard'

export default function Hero () {
  return (
    <div className='hero'>
      <div className='bg-video'>
        <video
          className='video'
          autoPlay
          loop
          muted
        >
          <source
            src='videos/Hero_Home.mp4'
            type='video/mp4'
          />
        </video>
      </div>
      <div className='cover'>
        <HeroCard
          title='Transforma tu vida programando' content='Más que una escuela, somos el aliado que te acompaña para desarrollarte como programador, antes, durante y después de nuestros Bootcamps. '
        />
        <img
          src='/icons/Button-Telegram.svg' className='arrow-icon'
        />
      </div>
    </div>
  )
};
