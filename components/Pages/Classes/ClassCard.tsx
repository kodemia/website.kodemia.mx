
import React from 'react'
import Link from 'next/link'
import dayjs from 'dayjs'
import Vimeo from '@u-wave/react-vimeo'
export interface Props {
  klass: {
    date: string
    description: string
    generation: object
    thumbnail: string
    title: string
    vimeoId: string
    _id: string
    playbackId?: string
  }
}

export default function ClassCard ({ klass }: Props) {
  const id = klass.playbackId || klass.vimeoId
  const isVimeo = !!klass.vimeoId
  const title = klass.title
  const date = dayjs(klass.date).format('DD/MM/YYYY')

  return (
    <div className='class-card'>
      <div className='poster-container'>
        <img src={klass.thumbnail} className='poster' />
      </div>
      <Link href={{ pathname: '/clase', query: { id, title, isVimeo } }}>
        <div
          className='icon-container'
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
      </Link>
      <div className='data-container is-flex is-flex-direction-column is-justify-content-center'>
        <h6 className='class-title'>{klass.title}</h6>
        <p className='class-date'>Fecha: {date}</p>
      </div>

    </div>
  )
}
