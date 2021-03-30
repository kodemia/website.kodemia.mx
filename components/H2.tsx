import React from 'react'
import classnames from 'classnames'
// my component
import TextCursor from './TextCursor'

export interface Props {
  children: string
  isCyan?: Boolean
}

export default function H2 ({ children, isCyan = false }: Props) {
  return (
    <h2 className={classnames({
      'h2-is-white': !isCyan,
      'h2-is-cyan': isCyan
    })}
    >
      <TextCursor text={children} white={!isCyan} />
    </h2>
  )
};
