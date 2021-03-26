import React from 'react'
export interface Props {
  children: React.ReactNode
}

export default function H4 ({ children }: Props) {
  return (
    <h4 className='h4'>
      {children}
    </h4>
  )
}
