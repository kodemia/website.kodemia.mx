
import React, { useState, useEffect, useRef } from 'react'
import classNames from 'classnames'

import ExperienceVideo from 'components/ExperienceVideo'
import PageSection from 'components/PageSection'
import H3 from 'components/H3'
import H5 from 'components/H5'
import Text from 'components/Text'

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

export default function KodemiaExperience ({ videos = [] }: Props) {
  const [activeVideoIndex, setActiveVideoIndex] = useState<number>()
  const [isActive, setIsActive] = useState(false)
  const gridRef = useRef(null)

  useEffect(() => {
    wrapGrid(gridRef.current,
      {
        easing: 'linear',
        stagger: 10,
        duration: 400
      })
  }, [])

  return (
      <PageSection sectionClassName='bg-brand-black'>
        <H5>
          La experiencia Kodemia
        </H5>
        <div className='sm:w-80'>
          <H3
            cyanText='Conoce la historia'
            whiteText='de nuestros graduados'
            isFirstCyan
          />
        </div>
        <div className='my-9'>
          <Text>
            Es más importante contar historias que números. Buscamos que los alumnos que salen de Kodemia transformen su vida.
          </Text>
        </div>
        <div
          ref={gridRef} className={classNames(
            'videos-container',
            {
              active: isActive,
              inactive: !isActive
            }
          )}
        >
          {videos.map((video, index) => (
            <div
              key={`experience-video-${index}`}
              className={classNames(
                'video',
                {
                  'is-active': index === activeVideoIndex,
                  'is-inactive': index !== activeVideoIndex
                }
              )}
            >
              <ExperienceVideo
                isActive={isActive}
                setIsActive={setIsActive}
                video={video}
                onClick={() => {
                  setActiveVideoIndex(index)
                  setIsActive(true)
                }}
                onEnded={() => {
                  setIsActive(false)
                }}
                isPlay={index === activeVideoIndex}
              />
            </div>
          ))}
        </div>

      </PageSection>
  )
}
