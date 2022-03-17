
/** global HTMLVideoElement */

import React, { useState, useRef, MutableRefObject } from 'react'
import classNames from 'classnames'
import HTMLVideoElement from 'typescript'

import H5 from 'components/H5'
import Text from 'components/Text'

export interface Video {
  url: string
  name: string
  content: string
  poster: string
}

export interface Props {
  video: Video
  isPlay: boolean
  isActive: boolean
  setIsActive: (isActive: boolean) => void
  onClick: () => void
  onEnded: () => void
}

export default function ExperienceVideo ({ video, isPlay, onClick, onEnded, setIsActive, isActive }: Props) {
  const [showPlayIcon, setShowPlayIcon] = useState(true)
  const [showCloseIcon, setShowCloseIcon] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null) as MutableRefObject<HTMLVideoElement>

  if (!isPlay && videoRef.current) {
    videoRef.current.pause()
  }

  return (
    <div className='relative'>
      <div
        className='video'
        onClick={onClick}
      >
        <video
          controls={false}
          poster={video.poster}
          className={classNames('rounded-small','h-full w-full','object-cover',
          {
            'is-not-play': !isActive
          })}
          ref={videoRef}
          onPause={() => {
            setShowPlayIcon(true)
            setShowCloseIcon(false)
            videoRef.current.controls = false
          }}
          onEnded={() => {
            setShowPlayIcon(true)
            setShowCloseIcon(false)
            videoRef.current.controls = false
            onEnded()
            videoRef.current.load()
          }}
          onSeeked={() => {
            setShowPlayIcon(false)
            setShowCloseIcon(true)
            videoRef.current.controls = true
          }}
        >
          <source src={video.url} type='video/mp4' />
        </video>
      </div>
      <div
        className={classNames('icon-close', {
          'is-hidden': !showCloseIcon
        })}
        onClick={() => {
          setIsActive(false)
          videoRef.current.pause()
        }}
      >
        <img
          src='/icons/btn-close-video.svg'
          alt='close-video'
        />
      </div>
      <div
        className={classNames('icon-container', {
          'is-hidden': !showPlayIcon
        })}
        onClick={() => {
          onClick()
          setShowPlayIcon(false)
          setShowCloseIcon(true)
          videoRef.current.play()
          videoRef.current.controls = true
        }}
      >
        <img
          src='/icons/icon-video.svg' alt=''
          className='icon-play'
        />
        <img
          src='/icons/icon-video-blue.svg' alt=''
          className='icon-play-blue'
        />
      </div>

      <div className='data-container'>
        <H5 isWhite>
          {video.name}
        </H5>
        <div className='content'>
          <Text>
            {video.content}
          </Text>
        </div>
      </div>
    </div>
  )
}
