import React from 'react'
export interface Props {
  text: string
}

export default function H4 ({ text }: Props) {
  return (
    <h4 className='h4'>{text}</h4>
  )
}
