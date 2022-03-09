
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

export default function HeroInfo ({ title, content, btnTitle, link }: Props): JSX.Element {
  return (
    <div className={classNames(
      'max-w-[300px] md:max-w-none',
      'lg:min-w-[340px]',
      'w-full sm:w-1/2 lg:w-1/4'
    )}>
      <H1>
        {title}
      </H1>
      <p className={classNames(
        'my-10',
        'text-brand-complementary text-base font-medium'
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
