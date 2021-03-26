import React from 'react'
import classnames from 'classnames'
export interface Props {
  children: React.ReactNode
  isWhite?: boolean
}

export default function H5({ children, isWhite }: Props) {
  return (
    <h5 className={classnames(
      {
        'h5-gray': !isWhite,
        'h5-white': isWhite
      })
    }
    >
      {children}
    </h5>
  )
}
