
import React from 'react'
// my component
import HeroCard from '../../HeroCard'
import BgVideo from '../../BgVideo'

// import BgVideoSrc from 'config/bootcamps/bg-video-src.json'

export interface Props {
  video: string
}

export default function Hero ({ video}: Props) {
  return (
    <div className='hero'>
      {/* <BgVideo src='https://prismic-io.s3.amazonaws.com/kodemia/d58417e7-a700-4c67-a3e2-5a746d3df0b2_home-background.mp4' /> */}
      <BgVideo video={video} />
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
