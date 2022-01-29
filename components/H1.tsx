
import React from 'react'
// my component
import Cursor from './TextCursor'

interface Props {
  children: string
}

export default function H1 ({ children }: Props) {
  return (
    <h1 className='h1'>
      <Cursor children={children} white />
    </h1>
  )
}
