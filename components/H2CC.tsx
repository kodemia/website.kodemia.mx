
import React from 'react'
// my component
import TextCursor from './TextCursor'

export interface Props {
  whiteText: string,
  cyanText: string
}

export default function H2CC ({
  whiteText,
  cyanText
}: Props) {
  cyanText = cyanText.trim()
  whiteText = whiteText.trim()

  return (
    <h2 className='h2-white'>
      {whiteText}
      <TextCursor text={cyanText} />
    </h2>
  )
};
