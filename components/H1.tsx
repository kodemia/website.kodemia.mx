
import React from 'react'
// my component
import TextCursor from './TextCursor'

interface Props {
  children: string
}

export default function H1 ({ children }: Props) {
  return (
    <h1 className='h1'>
      <TextCursor text={children} white />
    </h1>
  )
};
