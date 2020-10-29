
import React from 'react'
// my component
import classNames from 'classnames'

export interface Props {
  text: string;
  white?: Boolean
}

export default function TextCursor ({
  text,
  white
}: Props) {
  const cursorClass = classNames({
    'white-cursor': white,
    'cyan-cursor': !white
  })
  const textClass = classNames({
    'cyan-text': !white,
    'white-text': white
  })

  const finalPosition = text.length - 1
  const newText = text.slice(0, finalPosition)
  const characterCursor = text[finalPosition]

  return (
    <>
      <span className={textClass}>{` ${newText}`}</span>
      <span className={cursorClass}>
        {characterCursor}
      </span>
    </>
  )
};
