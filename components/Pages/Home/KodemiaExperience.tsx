
import React, { useState, useEffect, useRef } from 'react'
import classnames from 'classnames'
// My components
import H2 from '../../H2'
import H3 from '../../H3'
import ExperienceVideo from '../../ExperienceVideo'
let wrapGrid: (arg0: any, arg1: object) => void
if (typeof window !== 'undefined') {
  wrapGrid = require('animate-css-grid').wrapGrid
}

export interface Video {
  url: string
  name: string
  content: string
  poster: string
}

export interface Props {
  videos: Array<Video>
}

export default function KodemiaExperience ({ videos = [] }:Props) {
  const [activeVideoIndex, setActiveVideoIndex] = useState<number>()
  const [isActive, setIsActive] = useState(false)
  const gridRef = useRef(null)

  useEffect(() => {
    wrapGrid(gridRef.current, { easing: 'linear', stagger: 10, duration: 400 })
  }, [])

  return (
    <section className='kodemia-experience'>
      <div className='kodemia-experience-container section-container'>
        <H3 text='La experiencia Kodemia' />
        <H2 cyanText='Conoce la historia' whiteText='de nuestros graduados' isFirstCyan />
        <p className='description'>Es más importante contar historias que números. Buscamos que los alumnos que salen de Kodemia transformen su vida.</p>
        <div
          ref={gridRef} className={classnames('videos-container', {
            active: isActive,
            inactive: !isActive
          })}
        >
          {videos.map((video, index) => (
            <div
              key={`experience-video-${index}`}
              className={classnames('video', {
                'is-active': index === activeVideoIndex,
                'is-inactive': index !== activeVideoIndex
              })}
            >
              <ExperienceVideo
                video={video}
                onClick={() => {
                  setActiveVideoIndex(index)
                  setIsActive(true)
                }}
                onEnded={() => {
                  setIsActive(false)
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
