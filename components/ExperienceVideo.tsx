
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

export default function ExperienceVideo({ video, isPlay, onClick, onEnded, setIsActive, isActive }: Props) {
  const [showPlayIcon, setShowPlayIcon] = useState(true)
  const [showCloseIcon, setShowCloseIcon] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null) as MutableRefObject<HTMLVideoElement>

  if (!isPlay && videoRef.current) {
    videoRef.current.pause()
  }

  return (
    <div>
      <div className='relative'>
        <div onClick={onClick} >
          <video
            controls={false}
            poster={video.poster}
            className={classNames(
              'rounded-small',
              'h-full w-full',
              'object-cover',
              'align-middle',
              {
                'md:h-48': !isActive
              }
            )}
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
          className={classNames(
            'absolute top-3 right-4',
            {
              'hidden': !showCloseIcon
            }
          )}
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
          className={classNames(
            'bg-brand-black/60 group',
            'absolute top-0',
            'w-full h-full',
            'flex justify-center items-center',
            {
              'hidden': !showPlayIcon
            }
          )}
          onClick={() => {
            onClick()
            setShowPlayIcon(false)
            setShowCloseIcon(true)
            videoRef.current.play()
            videoRef.current.controls = true
          }}
        >
          <figure className={classNames(
            'h-14 w-14',
            'bg-[url(/icons/icon-video.svg)] group-hover:bg-[url(/icons/icon-video-blue.svg)]',
          )} />
        </div>
      </div>
      <div className='my-3'>
        <H5 isWhite>
          {video.name}
        </H5>
      </div>
      <Text>
        {video.content}
      </Text>
    </div>
  )
}
