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
          src='videos/hero-home-mobile.mp4'
          type='video/mp4'
        />
      </video>
    </div>
  )
}
