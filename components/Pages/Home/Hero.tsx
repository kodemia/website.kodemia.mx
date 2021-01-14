
import React from 'react'
// my component
import HeroCard from '../../HeroCard'
import BgVideo from '../../BgVideo'

export default function Hero () {
  return (
    <div className='hero'>
      <BgVideo />
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
