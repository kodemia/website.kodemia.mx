
import React from 'react'

export interface Props {
  image: string
  p: string
}

export default function ProgramCard ({ image, p }: Props) {
  return (
    <div>
      <img src={image} />
      <p>{p}</p>
    </div>
  )
}
