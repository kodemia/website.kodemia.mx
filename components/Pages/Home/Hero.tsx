
import React from 'react'
// my components
import HeroCard from '../../HeroCard'
import BgVideo from '../../BgVideo'

export interface Props {
  video: string
}

export default function Hero ({ video }: Props) {
  return (
    <section className='hero'>
      <BgVideo video={video} />
      <div className='cover'>
        <div className='container'>
          <HeroCard
            title='Transforma tu vida programando'
            content='Más que una escuela, somos el aliado que te acompaña para desarrollarte como programador, antes, durante y después de nuestros Bootcamps. '
            btnTitle='Conoce nuestros Bootcamps'
            link='/#bootcamps'
          />
        </div>
        <img
          src='/icons/icon-scroll.svg'
          className='arrow-icon'
        />
      </div>
    </section>
  )
}
