
import React from 'react'
import classNames from 'classnames'

export interface Props {
  children: React.ReactNode
  isWhite?: Boolean
}

export default function H6 ({ children, isWhite }: Props):JSX.Element {
  return (
    <h6 className={classNames(
      'text-brand-h6',
      'whitespace-pre-wrap',
      'break-words',
      {
        'text-brand-complementary font-semibold': isWhite,
        'text-brand-gray-light font-medium my-4': !isWhite
      }
    )}>
      {children}
    </h6>
  )
}
