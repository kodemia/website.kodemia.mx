
import React from 'react'

export interface Props {
  video: {
    url: string
    name: string
    content: string
    poster: string
  }
}

export default function ExperienceVideo ({ video }: Props) {
  return (
    <div className='experience-video'>
      <div className='video'>
        <video controls poster={video.poster} className='poster'>
          <source src={video.url} type='video/mp4' />
        </video>
      </div>

      <img src='/icons/icon-video.svg' alt='' className='icon-play' />

      <div className='data-container'>
        <h4 className='name'>{video.name}</h4>
        <p className='content'>{video.content}</p>
      </div>
    </div>
  )
}
