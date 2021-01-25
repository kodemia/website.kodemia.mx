import React, { useState } from 'react'

import VideoPlayer from './VideoPlayer'
import ClassCard from './ClassCard'

export interface Classes {

    date: string
    description: string
    generation: object
    thumbnail: string
    title: string
    vimeoId: string
    _id: string
}

export interface Props {
  idVimeo: string
  isVimeo: boolean
  classes : Array<Classes>
}

export default function Klass ({ idVimeo, isVimeo, classes = [] }: Props) {
  const position = classes.findIndex(klass => klass.vimeoId === idVimeo)
  const showClasses = classes.filter(klass => klass.vimeoId !== idVimeo)

  const [activeClassIndex, setActiveClassIndex] = useState(0)

  const [changeVideo, setChangeVideo] = useState({})

  const next = () => {
    setActiveClassIndex(position)
    const nextIndex = (activeClassIndex + 1) > (classes.length - 1)
      ? 0
      : activeClassIndex + 1
    setActiveClassIndex(nextIndex)
    setChangeVideo(classes[activeClassIndex])
    console.log(changeVideo)
  }

  const previous = () => {
    setActiveClassIndex(position)
    const previousIndex = (activeClassIndex - 1) < 0
      ? classes.length - 1
      : activeClassIndex - 1
    setActiveClassIndex(previousIndex)
    setChangeVideo(classes[activeClassIndex])
    console.log(changeVideo)
  }

  return (
    <div className='klass'>
      <div className='columns'>
        <div className='column video-player'>
          <VideoPlayer id={idVimeo} isVimeo={isVimeo} />
          <div className='container-buttons'>
            <img
              className='back'
              src='/icons/icon-back.svg'
              alt='back'
              onClick={() => previous()}
              width={20}
            />

            <img
              className='forward'
              src='/icons/icon-forward.svg'
              alt='forward'
              onClick={() => next()}
              width={20}
            />
          </div>

        </div>
        <div className='column'>
          {
            showClasses.map((klass, index) =>
              <div key={`viewClass-${index}`}>
                <ClassCard klass={klass} />
              </div>)
          }
        </div>
      </div>
    </div>
  )
}
