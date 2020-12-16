
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
            src='https://player.vimeo.com/play/2124925016?s=476082828_1608089450_21c5b6b7dfc8adf211edca23833fdd1b&loc=external&context=Vimeo%5CController%5CClipController.main'
            type='video/mp4'
          />
        </video>
      </div>
      <div className='cover'>
        <div className='container'>
          <HeroCard
            title='Transforma tu vida programando'
            content='Más que una escuela, somos el aliado que te acompaña para desarrollarte como programador, antes, durante y después de nuestros Bootcamps. '
          />
        </div>
        <img
          src='/icons/icon-scroll.svg'
          className='arrow-icon'
        />
      </div>
    </div>
  )
};
