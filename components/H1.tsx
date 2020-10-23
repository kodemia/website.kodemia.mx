
import React from 'react'
// my component
import TextCursor from './TextCursor'

export interface Props {
  text: string
}

export default function H1 ({ text }: Props) {
  return (
    <h1 className='h1'>
      <TextCursor text={text} white />
    </h1>
  )
};
