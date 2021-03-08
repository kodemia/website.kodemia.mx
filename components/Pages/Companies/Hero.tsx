
import React, { useRef, useState, MutableRefObject } from 'react'
import classnames from 'classnames'
import HTMLVideoElement from 'typescript'
// My components
import H2 from 'components/H2'
import Button from 'components/Button'

export default function Hero () {
  const [showPlayIcon, setShowPlayIcon] = useState(true)
  const [hasUserClickedVideo, setHasUserClickedVideo] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null) as MutableRefObject<HTMLVideoElement>
  return (
    <div className='columns hero-companies'>
      <div className='column hero-container section-container'>
        <div className='subject'>
          <H2
            cyanText=''
            whiteText='Encuentra desarrolladores de alto calibre'
            isFirstCyan
          />
        </div>
        <p className='description'>
          Los egresados viven una experiencia de alto desempeño que los forma de manera profesional y personal para convertirse en líderes tecnológicos.
        </p>
        <div className='hero-btn'>
          <Button
            isPrimary
            label='Contáctanos'
            link='/empresas/registro'
          />
        </div>
        <div className='video-wrapper'>
          <div className='video-container'>
            <video
              className='video'
              ref={videoRef}
              autoPlay
              muted
              onPause={() => {
                setShowPlayIcon(true)
                videoRef.current.controls = false
              }}
              onEnded={() => {
                videoRef.current.muted = true
                videoRef.current.controls = false
                setShowPlayIcon(true)
                setHasUserClickedVideo(false)
                videoRef.current.play()
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
            className={classnames('icon-container', {
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
