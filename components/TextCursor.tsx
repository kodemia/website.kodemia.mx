
import React from 'react'
import classNames from 'classnames'

export interface Props {
  children: string
  white?: Boolean,
}

export default function TextCursor ({
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
    'text-white': white,
    'text-brand-primary': !white
  })

  const finalPosition = children.length - 1
  const newText = children.slice(0, finalPosition)
  const characterCursor = children[finalPosition]

  return (
    <>
      {
        children &&
          <span className={textClass}>
            {` ${newText}`}
          </span>
      }
      <span className={cursorClass}>
        {!children && !children}
        {children && characterCursor}
      </span>
    </>
  )
}
