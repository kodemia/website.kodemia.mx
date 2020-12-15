
import React, { useState, useRef } from 'react'
import classnames from 'classnames'

export interface Props {
  video: {
    url: string
    name: string
    content: string
    poster: string
  }
  onClick: () => void
  onEnded: () => void
}

export default function ExperienceVideo ({ video, onClick, onEnded }: Props) {
  const [showPlayIcon, setShowPlayIcon] = useState(true)
  const videoRef = useRef(null) || null
  return (
    <div className='experience-video'>
      <div
        className='video'
        onClick={onClick}
      >
        <video
          controls={false}
          poster={video.poster}
          className='poster'
          ref={videoRef}
          onPause={() => {
            setShowPlayIcon(true)
            videoRef.current.controls = false
          }}
          onEnded={() => {
            setShowPlayIcon(true)
            videoRef.current.controls = false
            onEnded()
          }}
          onSeeked={() => {
            setShowPlayIcon(false)
            videoRef.current.controls = true
          }}
        >
          <source src={video.url} type='video/mp4' />
        </video>
      </div>

      <div
        className={classnames('icon-container', {
          'is-hidden': !showPlayIcon
        })}
        onClick={() => {
          onClick()
          setShowPlayIcon(false)
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
        <h4 className='name'>{video.name}</h4>
        <p className='content'>{video.content}</p>
      </div>
    </div>
  )
}
