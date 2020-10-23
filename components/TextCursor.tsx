
import React from 'react'
import classNames  from 'classnames'

export interface Props {
  h1?: Boolean;
  text: string;
  white?: Boolean
}

export default function TextCursor ({
  h1,
  h2,
  text,
  white
}: Props) {
  const cursorClass = classNames ({
    'cursor-h1': h1,
    'white-cursor': white,
    'cyan-cursor' : !white
  })
  const textClass = classNames ({
    'text-h1':h1,
    'cyan-text-h2': !h1 && !white,
    'white-text-h1': !h1 && white
  })
  const finalPosition = text.length - 1
  const newTitle = text.slice(0, finalPosition)
  const characterCursor = text[finalPosition]
  return (
    <>
      <span className = {textClass}>{newTitle}</span>
      <span className= {cursorClass}>
        {characterCursor}
      </span>
    </>
  )
};
