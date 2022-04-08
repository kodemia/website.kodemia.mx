
import React, { useRef, useState, MutableRefObject } from 'react'
import classNames from 'classnames'

import Button from 'components/Button'
import H2 from 'components/H2'
import Text from 'components/Text'
import PageSection from 'components/PageSection'

interface Props {
  hero: {
    title: string
    description: string
    label: string
    link: string
  }
}

export default function Hero ({ hero }: Props): JSX.Element {
  const [showPlayIcon, setShowPlayIcon] = useState(true)
  const [hasUserClickedVideo, setHasUserClickedVideo] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null) as MutableRefObject<HTMLVideoElement>

  return (
    <PageSection
      sectionClassName='bg-brand-black'
      contentClassName={classNames(
        'grid',
        'grid-cols-1 lg:grid-cols-3',
        'grid-rows-[auto_1fr] lg:grid-rows-[auto_3fr]',
        'lg:gap-x-8 xl:gap-x-10',
        'mt-10'
      )}
    >
      <div className={classNames(
        'col-start-1',
        'row-start-1',
        'col-span-1',
        'max-w-[300px] lg:max-w-[350px]'
      )}>
        <H2>
          {hero.title}
        </H2>
      </div>
      <div className={classNames(
        'col-start-1',
        'row-start-3 lg:row-start-2',
        'col-span-1',
        'mt-7'
      )}>
        <Text>
          {hero.description}
        </Text>
      </div>
      <div className={classNames(
        'col-start-1',
        'row-start-4 lg:row-start-3',
        'col-span-1',
        'mt-9 lg:mt-4',
        'lg:mb-14 xl:mb-36'
      )}>
        <Button
          isPrimary
          label={hero.label}
          link={hero.link}
        />
      </div>
      <div className={classNames(
        'col-start-1 lg:col-start-2',
        'row-start-2 lg:row-start-1',
        'col-span-1 lg:col-span-2',
        'row-span-1 lg:row-span-3',
        'mt-10 lg:m-auto',
        'relative'
      )}>
        <video
          className={classNames(
            'rounded-small',
            'w-screen'
          )}
          ref={videoRef}
          autoPlay
          muted
          loop
          onPause={() => {
            setShowPlayIcon(true)
            videoRef.current.controls = false
          }}
          onEnded={() => {
            videoRef.current.controls = false
            setHasUserClickedVideo(false)
            setShowPlayIcon(true)
          }}
          onSeeked={() => {
            setShowPlayIcon(false)
            videoRef.current.controls = true
          }}
        >
          <source src='https://cdn.kodemia.mx/videos/video_empresas.mp4' />
        </video>
        <div
          className={classNames(
            'absolute',
            'bg-brand-black/70',
            'flex justify-center',
            'group',
            'h-full',
            'top-0',
            'w-full',
            {
              'hidden': !showPlayIcon
            }
          )}
          onClick={() => {
            setShowPlayIcon(false)
            videoRef.current.play()
            videoRef.current.controls = true
            videoRef.current.muted = false
            if (!hasUserClickedVideo) {
              setHasUserClickedVideo(true)
              videoRef.current.currentTime = 0
            }
          }}
        >
          <img
            src='/icons/icon-video.svg'
            alt=''
            className={classNames(
              'block',
              'group-hover:hidden',
              'w-12'
            )}
          />
          <img
            src='/icons/icon-video-blue.svg'
            alt=''
            className={classNames(
              'hidden',
              'group-hover:block',
              'w-12'
            )}
          />
        </div>
      </div>
    </PageSection>
  )
}
