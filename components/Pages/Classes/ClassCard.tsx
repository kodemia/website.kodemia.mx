
import React from 'react'
import dayjs from 'dayjs'
import classNames from 'classnames'
import router from 'next/router'

export interface Props {
  className: string
  klass: {
    date: string
    description: string
    generation: object
    thumbnail: string
    title: string
    vimeoId: string
    _id: string
  }
}

export default function ClassCard (props: Props) {
  const id = props.klass.vimeoId
  const isVimeo = !!props.klass.vimeoId
  const title = props.klass.title
  const date = dayjs(props.klass.date).format('DD/MM/YYYY')

  return (
    <div
      className={classNames(
        'relative group hover:cursor-pointer',
        props.className
      )}
      onClick={() => {
        // TODO: change clase page to use uri params instead of query (/clases/[id])
        router.push({
          pathname: '/clase',
          query: { id, title, isVimeo }
        })
      }}
    >
      <img
        src={props.klass.thumbnail}
        className='h-auto object-contain mx-auto'
      />
      <div className={classNames(
          'absolute h-auto w-full',
          'bg-brand-black-dark/50 group-hover:bg-brand-black-dark/20',
          'flex justify-center items-center',
          'top-0 left-0',
      )}>
        <img // image duplicated to save the proportions on the overlay
          src={props.klass.thumbnail}
          className=' h-auto object-contain invisible'
        />
        <figure className={classNames(
          'absolute',
          'h-14 w-14',
          'bg-[url(/icons/icon-video.svg)] group-hover:bg-[url(/icons/icon-video-blue.svg)]',
        )}/>
      </div>

      <div className='pt-3 text-center md:text-left'>
        <p className='text-brand-h5 pb-2 text-brand-complementary'>
          {props.klass.title}
        </p>
        <p className='text-brand-gray-light'>
          Fecha: {date}
        </p>
      </div>
    </div>
  )
}

export function ClassCardLoading ({ className }: { className?: string }): JSX.Element {
  return (
    <div className={classNames('animate-pulse', className)}>
      <figure className={`h-44 w-full bg-brand-black`} />
      <p className={`h-6 w-full mt-4 bg-brand-black`} />
      <p className={`h-4 w-1/2 mt-4 bg-brand-black`} />
    </div>
  )
}
