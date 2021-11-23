
import React from 'react'
import classNames from 'classnames'

import BgVideo from '../../BgVideo'
import HeroCard from '../../HeroCard'

export interface Props {
  video: string
}

export default function Hero ({ video }: Props) {
  return (
    <section className={classNames(
      'relative'
    )}
    >
      <BgVideo video={video} />
      <div className={classNames(
        'absolute',
        'bg-gradient-to-t from-black-kd to-black-kd-transparent',
        'h-screen',
        'mob:pt-36 mob:px-45px mob:pb-5',
        'tablet:pt-44 tablet:px-20 tablet:pb-0',
        'laptop:pt-48 laptop:px-12 laptop:pb-0',
        'top-0',
        'mob:w-full'
      )}
      >
        <div className={classNames(
          'mob:my-0 mob:mx-auto',
          'mob:max-w-full laptop:max-w-content',
          'mob:min-w-full laptop:min-w-content'
        )}
        >
          <HeroCard
            title='Transforma tu vida programando'
            content='Más que una escuela, somos el aliado que te acompaña para desarrollarte como programador, antes, durante y después de nuestros Bootcamps. '
            btnTitle='Conoce nuestros Bootcamps'
            link='/#bootcamps'
          />
        </div>
        <img
          src='/icons/icon-scroll.svg'
          className={classNames(
            'absolute',
            'animate-arrow',
            'mob:hidden tablet:flex',
            'left-0',
            'bottom-0',
            'laptop:mt-0 laptop:mx-auto laptop:mb-28',
            'mob:w-8'
          )}
        />
      </div>
    </section>
  )
}
