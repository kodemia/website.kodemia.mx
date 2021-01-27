
import React, { useState } from 'react'
import { useRouter } from 'next/router'
import dayjs from 'dayjs'
// My components
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
  const [activeClassIndex, setActiveClassIndex] = useState(0)

  const position = classes.findIndex(klass => klass.vimeoId === idVimeo)
  const showClasses = classes.filter(klass => klass.vimeoId !== idVimeo)
  const currentClass = classes.filter(klass => klass.vimeoId === idVimeo)

  const router = useRouter()

  const next = () => {
    setActiveClassIndex(position)
    const nextIndex = (activeClassIndex + 1) > (classes.length - 1)
      ? 0
      : activeClassIndex + 1
    setActiveClassIndex(nextIndex)
    const id = classes[activeClassIndex].vimeoId
    const title = classes[activeClassIndex].title
    router.push(
      {
        pathname: '/clase',
        query: { id, title, isVimeo }
      }
    )
  }

  const previous = () => {
    setActiveClassIndex(position)
    const previousIndex = (activeClassIndex - 1) < 0
      ? classes.length - 1
      : activeClassIndex - 1
    setActiveClassIndex(previousIndex)
    const id = classes[activeClassIndex].vimeoId
    const title = classes[activeClassIndex].title
    router.push(
      {
        pathname: '/clase',
        query: { id, title, isVimeo }
      }
    )
  }

  return (
    <div className='klass'>
      <div className='columns is-multiline klass-container'>
        <div className='column is-full-tablet  is-8-desktop video-player'>
          <VideoPlayer
            id={idVimeo}
            isVimeo={isVimeo}
          />
          <div className='video-data-btns'>
            {
              currentClass.map((klass, index) => (
                <div key={`title-date-${index}`} className='video-data'>
                  <h6 className='class-title'>
                    {klass.title}
                  </h6>
                  <p className='class-date'>
                    Fecha: {' '}
                    {dayjs(klass.date).format('DD/MM/YYYY')}
                  </p>
                </div>
              ))
            }
            <div className='container-btns'>
              <a
                className='btn-ikon'
                onClick={() => previous()}
              >
                <img
                  className='ikon'
                  src='/icons/icon-back.svg'
                  alt='back'
                  onClick={() => previous()}
                  width={30}
                />
                <p className='text'>Anterior</p>
              </a>
              <a
                className='btn-ikon'
                onClick={() => next()}
              >
                <p className='text'>Siguiente</p>
                <img
                  className='ikon'
                  src='/icons/icon-forward.svg'
                  alt='forward'
                  onClick={() => next()}
                  width={30}
                />
              </a>
            </div>
          </div>
        </div>
        <div className='column next-classes'>
          {
            showClasses.map((klass, index) =>
              <div key={`viewClass-${index}`} className='class-video'>
                <ClassCard klass={klass} />
              </div>)
          }
        </div>
      </div>
    </div>
  )
}
