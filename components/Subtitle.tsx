
import React from 'react'
import classNames from 'classnames'

export interface Props {
  children: React.ReactNode
  isWhite?: Boolean
}

export default function Subtitle ({ children, isWhite }: Props):JSX.Element {
  return (
    <h5 className={classNames(
      'text-brand-h5',
      'whitespace-pre-wrap',
      'break-words',
      {
        'text-brand-complementary font-medium': isWhite,
        'text-brand-gray-light font-medium my-4': !isWhite
      }
    )}>
      {children}
    </h5>
  )
}