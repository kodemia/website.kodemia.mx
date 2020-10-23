
import React from 'react'
//my component
import Cursor from './TextCursor'

export interface Props {
  text: string
}

export default function H1 ({ text }: Props) {
  

  return (
    <h1 className ='h1'>
      <Cursor h1 text= {text} white/>
    </h1>
  )
};
