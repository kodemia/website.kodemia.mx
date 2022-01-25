import React from 'react'
import classnames from 'classnames'
export interface Props {
  children: React.ReactNode
  isWhite?: boolean
}

export default function H5 ({ children, isWhite }: Props):JSX.Element {
  return (
    <h5 className={classnames(
      'text-brand-h5',
      'whitespace-pre-wrap',
      'break-words',
      {
        // 'h5-gray': !isWhite,
        // 'h5-white': isWhite
        'text-brand-complementary font-semibold': isWhite,
        'text-brand-gray-light font-medium my-4': !isWhite
      })}
    >
      {children}
    </h5>
  )
}
