import React from 'react'
// my component
import TextCursor from './TextCursor'

export interface Props {
  text: string
}

export default function H2({ text }: Props) {
  return (
    <h2 className='h2'>
      <TextCursor text={text} white />
    </h2>
  )
};
