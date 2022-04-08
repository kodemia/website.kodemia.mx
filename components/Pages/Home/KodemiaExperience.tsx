
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

export default function KodemiaExperience({ videos = [] }: Props) {
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
      <div className='my-9 lg:w-7/12'>
        <Text>
          Es más importante contar historias que números. Buscamos que los alumnos que salen de Kodemia transformen su vida.
        </Text>
      </div>
      <div
        ref={gridRef} className={classNames('grid gap-y-5 gap-x-12 lg:gap-y-0',
          {
            'md:grid-rows-[repeat(2,auto)] md:grid-cols-2 lg:grid-cols-4 lg:grid-rows-2': isActive,
            'md:grid-cols-2 md:grid-rows-2 lg:grid-cols-3 lg:grid-rows-1': !isActive
          }
        )}
      >
        {videos.map((video, index) => (
          <div
            key={`experience-video-${index}`}
            className={classNames(
              {
                ' md:col-start-1 md:col-end-3 md:row-start-1  lg:col-end-4 lg:row-end-3': (index === activeVideoIndex && isActive)
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
