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
          // src='https://prismic-io.s3.amazonaws.com/kodemia/d58417e7-a700-4c67-a3e2-5a746d3df0b2_home-background.mp4'
          src={video}
        />
      </video>
    </div>
  )
}
