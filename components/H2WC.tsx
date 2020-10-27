
import React from 'react'
// my component
import TextCursor from './TextCursor'

export interface Props {
  cyanText: string,
  whiteText: string
}

export default function H2WC ({
  cyanText,
  whiteText
}: Props) {
  cyanText = cyanText.trim()
  whiteText = whiteText.trim()

  return (
    <h2 className='h2-cyan'>
      {cyanText}
      <TextCursor text={whiteText} white />
    </h2>
  )
};
