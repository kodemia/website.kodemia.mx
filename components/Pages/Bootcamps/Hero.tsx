
import React from 'react'
import classNames from 'classnames'

import BgVideo from 'components/BgVideo'
import HeroJsInfo from 'components/Pages/Bootcamps/HeroJsInfo'
import PageSection from 'components/PageSection'

export interface Information {
  title: string
  text: string
}

export interface Props{
  bootcamp:{
    title: string
    subtitle: string
    description: string
    information: Array<Information>
  }
  video: string
}

export default function JavascriptLive ({ bootcamp, video }: Props): JSX.Element {
  return (
    <div className='h-screen relative'>
      <BgVideo video={video} />
      <PageSection
        sectionClassName={classNames(
          'absolute top-0',
          'bg-gradient-to-t from-brand-black via-brand-black/60 to-brand-black/40',
          'h-full',
          'overflow-hidden', // TODO: This is a desired behavior?
          'w-full'
        )}
        contentClassName='pt-20 md:pt-24 lg:pt-28'
      >
        <HeroJsInfo bootcamp={bootcamp} />
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
