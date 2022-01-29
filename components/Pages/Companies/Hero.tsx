
import React, { useRef, useState, MutableRefObject } from 'react'
import classNames from 'classnames'
import HTMLVideoElement from 'typescript'

import Button from 'components/Button'
import H2 from 'components/H2'
import Text from 'components/Text'

interface Props {
  hero: {
    title: string
    description: string
    label: string,
    link: string
  }
}

export default function Hero ({ hero }: Props) {
  const [showPlayIcon, setShowPlayIcon] = useState(true)
  const [hasUserClickedVideo, setHasUserClickedVideo] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null) as MutableRefObject<HTMLVideoElement>
  return (
    <div className='columns hero-companies'>
      <div className='column hero-container section-container'>
        <div className='subject'>
          <H2>
            {hero.title}
          </H2>
        </div>
        <div className='description'>
          <Text>
            {hero.description}
          </Text>
        </div>
        <div className='hero-btn'>
          <Button
            isPrimary
            label={hero.label}
            link={hero.link}
          />
        </div>
        <div className='video-wrapper'>
          <div className='video-container'>
            <video
              className='video'
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
              <source
                src='https://cdn.kodemia.mx/videos/video_empresas.mp4'
              />
            </video>
          </div>
          <div
            className={classNames('icon-container', {
              'is-hidden': !showPlayIcon
            })}
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
              className='icon-play'
            />
            <img
              src='/icons/icon-video-blue.svg'
              alt=''
              className='icon-play-blue'
            />
          </div>
        </div>
      </div>
    </div>
  )
}
