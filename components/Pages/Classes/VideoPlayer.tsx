import React from 'react'

import Vimeo from '@u-wave/react-vimeo'

export default function VideoPlayer ({ id, isVimeo }) {
  return (
    <>
      {isVimeo && <Vimeo video={id} />}
    </>
  )
}
