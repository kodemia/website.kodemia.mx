
import React from 'react'

import Button from 'components/Button'
import H1 from 'components/H1'
export interface Props {
  title: string
  content: string
  btnTitle: string
  link: string
}

export default function HeroCard ({ title, content, btnTitle, link }: Props) {
  return (
    <div className='hero-card'>
      <H1>{title}</H1>
      <p className='hero-content'>{content}</p>
      <Button
        isPrimary
        label={btnTitle}
        link={link}
      />
    </div>
  )
}
