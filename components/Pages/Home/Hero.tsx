
import React from 'react'
import classNames from 'classnames'

import BgVideo from 'components/BgVideo'
import HeroInfo from 'components/HeroInfo'
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
          'overflow-hidden',
          'w-full'
        )}
        contentClassName={classNames(
          'flex items-center'
        )}
      >
        <HeroInfo
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
            'mx-[50%] md:mb-14',
            'w-7'
          )}
        />
      </PageSection>
    </div>
  )
}
