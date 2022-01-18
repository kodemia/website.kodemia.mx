
import React from 'react'
import classNames from 'classnames'

export interface Props {
  text?: string
  white?: Boolean,
  children?: React.ReactNode
}

export default function TextCursor ({
  text = '',
  white,
  children
}: Props):JSX.Element {
  const cursorClass = classNames(
    'border-b-4 border-solid',
    {
      'animate-cursor text-white': white,
      'animate-cursor text-brand-primary': !white
    })
  const textClass = classNames({
    'text-brand-primary': !white,
    'text-white': white
  })

  const finalPosition = text.length - 1
  const newText = text.slice(0, finalPosition)
  const characterCursor = text[finalPosition]

  return (
    <>
      {
        !children &&
          <span className={textClass}>
            {` ${newText}`}
          </span>
      }
      <span className={cursorClass}>
        {children && children}
        {!children && characterCursor}
      </span>
    </>
  )
}
