import React from 'react'
import classnames from 'classnames'
export interface Props {
  text: string
  isWhite?: boolean
}

export default function H5 ({ text, isWhite }: Props) {
  return (
    <h5 className={classnames({
      'h5-gray': !isWhite,
      'h5-white': isWhite
    })}
    >{text}
    </h5>
  )
}
