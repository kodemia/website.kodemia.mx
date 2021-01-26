import React from 'react'

export interface Props {
  video: string
}

export default function BgVideo ({ video }: Props) {
  return (
    <div className='bg-video'>
      <video
        className='video'
        autoPlay
        loop
        muted
      >
        <source
          src={video}
        />
      </video>
    </div>
  )
}
