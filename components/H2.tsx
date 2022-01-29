import React from 'react'
import classNames from 'classnames'
// my component
import Cursor from 'components/TextCursor'

export interface Props {
  children: string
  isCyan?: Boolean
}

export default function H2 ({ children, isCyan = false }: Props):JSX.Element {
  return (
    <h2 className={classNames(
      'text-brand-h2-sm md:text-brand-h2',
      'font-semibold',
      'pr-0 md:pr-3',
      {
        'text-brand-primary': isCyan,
        'text-brand-complementary': !isCyan
      }
    )}>
      <Cursor children={children} white={!isCyan} />
    </h2>
  )
};
