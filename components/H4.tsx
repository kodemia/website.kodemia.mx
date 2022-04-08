import React from 'react'
import classNames from 'classnames'
export interface Props {
  children: React.ReactNode
}

export default function H4 ({ children }: Props):JSX.Element {
  return (
    <h4 className={classNames(
      'text-brand-complementary',
      'text-brand-h4',
      'font-semibold',
      'whitespace-pre-wrap',
      'break-words'
    )}>
      {children}
    </h4>
  )
}
