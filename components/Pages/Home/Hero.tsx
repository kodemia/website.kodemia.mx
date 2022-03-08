
import React from 'react'
import classNames from 'classnames'

import BgVideo from 'components/BgVideo'
import HeroCard from 'components/HeroCard'
import PageSection from 'components/PageSection'

export interface Props {
  video: string
}

export default function Hero ({ video }: Props): JSX.Element {
  return (
    <div className={classNames(
      'h-[80vh]',
      'relative'
    )}>
      <BgVideo video={video} />
      <PageSection
        sectionClassName={classNames(
          'absolute top-0',
          'bg-gradient-to-t from-brand-black via-brand-black/70 to-brand-black/90',
          'h-full',
          'w-full'
        )}
        contentClassName='pt-20 md:pt-24 lg:pt-28'
      >
        <HeroCard
          title='Transforma tu vida programando'
          content='Más que una escuela, somos el aliado que te acompaña para desarrollarte como programador, antes, durante y después de nuestros Bootcamps. '
          btnTitle='Conoce nuestros Bootcamps'
          link='/#bootcamps'
        />
        <img
          src='/icons/icon-scroll.svg'
          className={classNames(
            'absolute left-0 bottom-0',
            'animate-bounce',
            'hidden md:block',
            'mx-[50%] md:mb-20',
            'w-7'
          )}
        />
      </PageSection>
    </div>
  )
}
