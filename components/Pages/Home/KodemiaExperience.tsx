
import React, { useState } from 'react'
import classnames from 'classnames'
// My components
import H2 from '../../H2'
import H3 from '../../H3'
import ExperienceVideo from '../../ExperienceVideo'

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

  return (
    <section className='kodemia-experience'>
      <div className='kodemia-experience-container section-container'>
        <H3 text='La experiencia Kodemia' />
        <H2 cyanText='Conoce la historia' whiteText='de nuestros graduados' isFirstCyan />
        <p className='description'>Es más importante contar historias que números. Buscamos que los alumnos que salen de Kodemia transformen su vida.</p>
        <div className={classnames('videos-container', {
          active: isActive,
          inactive: !isActive
        })}
        >
          {videos.map((video, index) => (
            <div
              key={`experience-video-${index}`}
              className={classnames('video', `video-${index}`, {
                'is-active': index === activeVideoIndex,
                'is-inactive': index !== activeVideoIndex,
              })}
            >
              <ExperienceVideo
                video={video}
                onClick={() => {
                  setActiveVideoIndex(index)
                  setIsActive(true)
                }}
                onEnded={() => {
                  // TODO checar funcionalidad setActiveVideoIndex(-1)
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
