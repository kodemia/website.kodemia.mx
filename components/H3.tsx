
import React from 'react'
import classnames from 'classnames'
// my component
import Cursor from './TextCursor'

export interface Props {
  whiteText?: string
  cyanText?: string
  isFirstCyan?: boolean
  children?: React.ReactNode
}

export default function H3 ({
  whiteText = '',
  cyanText = '',
  isFirstCyan = false,
  children
}: Props) {
  cyanText = cyanText.trim()
  whiteText = whiteText.trim()

  const text = isFirstCyan ? cyanText : whiteText
  const cursorText = isFirstCyan ? whiteText : cyanText

  return (
    <h3 className={classnames({
      'h3-cyan': isFirstCyan,
      'h3-white': !isFirstCyan
    })}
    >
      {children || text}
      {
        !children &&
          <Cursor
            children={cursorText}
            white={isFirstCyan}
          />
      }
    </h3>
  )
};
