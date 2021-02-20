
import React, { useRef, useState, MutableRefObject } from 'react'
import classnames from 'classnames'
import HTMLVideoElement from 'typescript'
// My components
import H2 from 'components/H2'
import Button from 'components/Button'

export default function Hero () {
  const [showPlayIcon, setShowPlayIcon] = useState(true)
  const videoRef = useRef<HTMLVideoElement>(null) as MutableRefObject<HTMLVideoElement>
  return (
    <div className='columns hero-companies'>
      <div className='column hero-container section-container'>
        <div className='title'>
          <H2
            cyanText=''
            whiteText='Encuentra desarrolladores de alto calibre'
            isFirstCyan
          />
        </div>
        <p className='description'>
          Los egresados viven una experiencia de alto desempeño que los forma de manera profesional y personal para convertirse en líderes tecnológicos.
        </p>
        <div className='video-wrapper'>
          <div className='video-container'>
            <video
              className='video'
              ref={videoRef}
              onPause={() => {
                setShowPlayIcon(true)
                videoRef.current.controls = false
              }}
              onEnded={() => {
                setShowPlayIcon(true)
                videoRef.current.controls = false
                videoRef.current.load()
              }}
              onSeeked={() => {
                setShowPlayIcon(false)
                videoRef.current.controls = true
              }}
            >
              <source
                src='https://prismic-io.s3.amazonaws.com/kodemia/d58417e7-a700-4c67-a3e2-5a746d3df0b2_home-background.mp4'
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
        <div className='hero-btn'>
          <Button
            isPrimary
            label='Contáctanos'
            link='/empresas/registro'
          />
        </div>
      </div>
    </div>
  )
}
