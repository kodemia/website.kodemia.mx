
import React from 'react'
import classNames from 'classnames'
// my component
import Cursor from 'components/TextCursor'

interface Props {
  children: string
}

export default function H1 ({ children }: Props):JSX.Element {
  return (
    <h1 className={classNames(
      'text-brand-h1-sm md:text-brand-h1',
      'font-semibold',
      'pr-0 md:pr-3'
    )}>
      <Cursor children={children} white />
    </h1>
  )
}
