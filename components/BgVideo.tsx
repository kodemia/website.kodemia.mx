import React from 'react'

export default function BgVideo () {
  return (
    <div className='bg-video'>
      <video
        className='video'
        autoPlay
        loop
        muted
      >
        <source
          src='https://prismic-io.s3.amazonaws.com/kodemia/d58417e7-a700-4c67-a3e2-5a746d3df0b2_home-background.mp4'
        />
      </video>
    </div>
  )
}
