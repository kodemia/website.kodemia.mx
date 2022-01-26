
import React from 'react'
import classNames from 'classnames'

export interface Props {
  children: React.ReactNode
}

export default function Text ({ children }: Props):JSX.Element {
  return (
    <p className={classNames(
      'text-brand-gray-light',
      'text-brand-normal',
      'font-medium',
      'whitespace-pre-wrap',
    )}>
      {children}
    </p>
  )
}
