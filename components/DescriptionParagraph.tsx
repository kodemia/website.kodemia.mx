
import React from 'react'

interface Props {
  children: React.ReactNode
}

export default function DescriptionParagraph({ children }: Props) {
  return (
    <p className='description-paragraph'>
      {children}
    </p>
  )
}
