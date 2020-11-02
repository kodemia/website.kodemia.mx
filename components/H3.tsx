
import React from 'react'

export interface Props {
  text: string
}

export default function H2 ({text}: Props) {
  return (
    <h3 className='h3'>{text}</h3>
  )
}
