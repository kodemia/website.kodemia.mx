
import React from 'react'
// my component
import HeroCard from '../../HeroCard'
import BgVideo from '../../BgVideo'

export default function Hero () {
  return (
    <div className='hero'>
<<<<<<< HEAD
      <BgVideo />
=======
      <div className='bg-video'>
        <video
          className='video'
          autoPlay
          loop
          muted
        >
          <source
            src='https://prismic-io.s3.amazonaws.com/kodemia/d58417e7-a700-4c67-a3e2-5a746d3df0b2_home-background.mp4'
          />
        </video>
      </div>
>>>>>>> master
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
