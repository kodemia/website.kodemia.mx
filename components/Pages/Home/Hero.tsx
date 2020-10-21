
import React from 'react'
import HeroCard from '../../HeroCard'

export default function Hero () {
  return (
    <div className='hero'>
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
