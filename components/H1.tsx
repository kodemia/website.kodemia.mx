
import React from 'react'
//my component
import Cursor from './Cursor'

export interface Props {
  title: string
}

export default function H1 ({ title }: Props) {
  const finalPosition = title.length - 1
  const newTitle = title.slice(0, finalPosition)
  const character = title[finalPosition]

  return (
    <h1 className ='h1'>
      {newTitle}
      <Cursor character ={character}/>
    </h1>
  )
};
