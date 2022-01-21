
import React from 'react'
import classNames from 'classnames'
// my component
import TextCursor from './TextCursor'

export interface Props {
  cyanText?: string
  whiteText?: string
  isFirstCyan?: Boolean
  children?: React.ReactNode
}

export default function H3 ({
  cyanText = '',
  whiteText = '',
  isFirstCyan = false,
  children
}: Props): JSX.Element {
  cyanText = cyanText.trim()
  whiteText = whiteText.trim()

  const text = isFirstCyan ? cyanText : whiteText
  const cursorText = isFirstCyan ? whiteText : cyanText

  return (
    <h3 className={classNames(
      'text-brand-h3',
      'font-semibold',
      {
        'text-brand-primary': isFirstCyan,
        'text-brand-complementary': !isFirstCyan
      }
    )}>
      {children || text}
      {
        !children &&
          <TextCursor
            text={cursorText}
            white={isFirstCyan}
          />
      }
    </h3>
  )
};
