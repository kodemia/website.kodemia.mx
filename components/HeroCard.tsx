
import React from 'react'
import classNames from 'classnames'

import Button from 'components/Button'
import H1 from 'components/H1'
export interface Props {
  title: string
  content: string
  btnTitle: string
  link: string
}

export default function HeroCard ({
  title,
  content,
  btnTitle,
  link
}: Props): JSX.Element {
  return (
    <div className={classNames(
      // 'hero-card'
      'min-w-[338px]',
      'w-1/3'
    )}>
      <H1>{title}</H1>
      <p className={classNames(
        // 'hero-content'
        'text-brand-complementary',
        'text-base', // TODO: Asegurarse que 16px con line-height: 1.5
        'font-medium',
        'my-10',
        'mx-0'
      )}>
        {content}
      </p>
      <Button
        isPrimary
        label={btnTitle}
        link={link}
      />
    </div>
  )
}
