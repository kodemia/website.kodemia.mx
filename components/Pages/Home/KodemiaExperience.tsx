
import React from 'react'
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
  return (
    <section className='kodemia-experience'>
      <div className='kodemia-experience-container section-container'>
        <H3 text='La experiencia Kodemia' />
        <H2 cyanText='Conoce la historia' whiteText='de nuestros graduados' isFirstCyan />
        <p className='description'>Es más importante contar historias que números. Buscamos que los alumnos que salen de Kodemia transformen su vida.</p>
        <div className='videos-container'>
          {videos.map((video, index) => (
            <div key={`experience-video-${index}`} className='video'>
              <ExperienceVideo video={video} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
