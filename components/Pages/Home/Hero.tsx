
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
            src='https://vod-progressive.akamaized.net/exp=1608075290~acl=%2A%2F2132480147.mp4%2A~hmac=5dc20f840a5d3fa5b450093c1fdd637f82e29588ebfcc905e1d4118b585b1080/vimeo-prod-skyfire-std-us/01/491/19/477458459/2132480147.mp4?filename=KO_VLP_Home_Mobile_20.mp4'
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
