
import React from 'react'
import classnames from 'classnames'
// my component
import TextCursor from './TextCursor'

export interface Props {
  whiteText: string,
  cyanText: string,
  isFirstCyan?: boolean
}

export default function H2 ({
  whiteText,
  cyanText,
  isFirstCyan = false
}: Props) {
  cyanText = cyanText.trim()
  whiteText = whiteText.trim()

  const text = isFirstCyan ? cyanText : whiteText
  const cursorText = isFirstCyan ? whiteText : cyanText

  return (
    <h2
      className={classnames({
        'h2-cyan': isFirstCyan,
        'h2-white': !isFirstCyan
      })}
    >
      {text}
      <TextCursor
        text={cursorText}
        white={isFirstCyan}
      />
    </h2>
  )
};
