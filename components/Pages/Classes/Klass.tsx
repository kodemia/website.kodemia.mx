import React from 'react'
import queryString from 'query-string'

import VideoPlayer from './VideoPlayer'

export default function Klass () {
  let { id, title, isVimeo = false } =
  queryString.parse(window.location.search) || {}
  isVimeo = isVimeo === 'true'

  return (
    <div className='class-bg'>
      <div className='class'>
        <h1>{title}</h1>
        <div className='video-player'>
          <VideoPlayer id={id} isVimeo={isVimeo} />
        </div>
      </div>
    </div>
  )
}
