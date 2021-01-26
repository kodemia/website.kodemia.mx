
import React from 'react'
import Vimeo from '@u-wave/react-vimeo'

export interface Props {
  id: string
  isVimeo: boolean
}

export default function VideoPlayer ({ id, isVimeo }:Props) {
  return (
    <>
      {isVimeo && <Vimeo video={id} responsive />}
    </>
  )
}
